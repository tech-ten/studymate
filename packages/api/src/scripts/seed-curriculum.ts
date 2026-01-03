/**
 * Seed Curriculum Data Script
 *
 * Run this to migrate static curriculum content into DynamoDB.
 *
 * Usage:
 *   npx ts-node src/scripts/seed-curriculum.ts [year] [--clean]
 *
 * Examples:
 *   npx ts-node src/scripts/seed-curriculum.ts           # Seed all years
 *   npx ts-node src/scripts/seed-curriculum.ts 5         # Seed Year 5 only
 *   npx ts-node src/scripts/seed-curriculum.ts 5 --clean # Clean and re-seed Year 5
 *   npx ts-node src/scripts/seed-curriculum.ts --clean   # Clean and re-seed all years
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, BatchWriteCommand, QueryCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: 'ap-southeast-2' });
const db = DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.TABLE_NAME || 'agentsform-main';

// ============ TYPES ============

interface QuestionKnowledge {
  questionTokens: string[];
  correctToken: string;
  incorrectTokens: (string | null)[];
}

interface KnowledgeToken {
  id: string;
  name: string;
  description: string;
  prerequisites?: string[];
}

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: number;
  topic?: string;
  knowledge?: QuestionKnowledge;
}

interface Section {
  id: string;
  code: string;
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
  knowledgeTokens?: KnowledgeToken[];
  examples: Array<{ problem: string; solution: string; explanation: string }>;
  questions: Question[];
}

interface Chapter {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

interface Strand {
  id: string;
  name: string;
  chapters: Chapter[];
}

interface YearCurriculum {
  yearLevel: number;
  subject: string;
  strands: Strand[];
}

// ============ CLEAN FUNCTIONS ============

async function deleteQuestionsForSection(sectionId: string): Promise<number> {
  let deletedCount = 0;

  // Query all questions for this section
  const result = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
      ':pk': `SECTION#${sectionId}`,
    },
  }));

  // Delete each question
  for (const item of result.Items || []) {
    await db.send(new DeleteCommand({
      TableName: TABLE_NAME,
      Key: {
        PK: item.PK,
        SK: item.SK,
      },
    }));
    deletedCount++;
  }

  return deletedCount;
}

async function cleanYear(yearLevel: number): Promise<void> {
  console.log(`\n🧹 Cleaning Year ${yearLevel} data...`);

  // Query all sections for this year
  const result = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
      ':pk': `CURRICULUM#YEAR${yearLevel}`,
    },
  }));

  let totalQuestions = 0;
  let totalSections = 0;

  for (const section of result.Items || []) {
    // Delete questions for this section
    const deleted = await deleteQuestionsForSection(section.id);
    totalQuestions += deleted;

    // Delete the section itself
    await db.send(new DeleteCommand({
      TableName: TABLE_NAME,
      Key: {
        PK: section.PK,
        SK: section.SK,
      },
    }));
    totalSections++;
  }

  console.log(`   Deleted ${totalSections} sections and ${totalQuestions} questions`);
}

// ============ SEED FUNCTIONS ============

async function seedSection(yearLevel: number, strandId: string, chapterId: string, section: Section) {
  const now = new Date().toISOString();

  // 1. Store section metadata
  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      PK: `CURRICULUM#YEAR${yearLevel}`,
      SK: `SECTION#${section.id}`,
      type: 'SECTION',
      id: section.id,
      code: section.code,
      strandId,
      chapterId,
      title: section.title,
      description: section.description,
      content: section.content,
      keyPoints: section.keyPoints,
      knowledgeTokens: section.knowledgeTokens || [],
      examples: section.examples,
      questionCount: section.questions.length,
      createdAt: now,
      updatedAt: now,
    },
  }));

  console.log(`  ✓ Section ${section.id}: ${section.title}`);

  // 2. Store questions in batches of 25
  const questions = section.questions.map(q => ({
    PutRequest: {
      Item: {
        PK: `SECTION#${section.id}`,
        SK: `QUESTION#${q.id}`,
        type: 'QUESTION',
        id: q.id,
        sectionId: section.id,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        difficulty: q.difficulty,
        topic: q.topic || null,
        // Include knowledge token data for misconception tracking
        knowledge: q.knowledge || null,
        isAiGenerated: false,
        totalAttempts: 0,
        correctAttempts: 0,
        avgTimeSeconds: 0,
        createdAt: now,
        updatedAt: now,
      },
    },
  }));

  // Batch write in chunks of 25
  for (let i = 0; i < questions.length; i += 25) {
    const batch = questions.slice(i, i + 25);
    await db.send(new BatchWriteCommand({
      RequestItems: {
        [TABLE_NAME]: batch,
      },
    }));
  }

  console.log(`    └─ ${section.questions.length} questions`);
}

async function seedCurriculum(curriculum: YearCurriculum) {
  console.log(`\n📚 Seeding Year ${curriculum.yearLevel} ${curriculum.subject}...\n`);

  let totalSections = 0;
  let totalQuestions = 0;

  for (const strand of curriculum.strands) {
    console.log(`📚 Strand: ${strand.name}`);

    for (const chapter of strand.chapters) {
      console.log(`  📖 Chapter: ${chapter.title}`);

      for (const section of chapter.sections) {
        await seedSection(curriculum.yearLevel, strand.id, chapter.id, section);
        totalSections++;
        totalQuestions += section.questions.length;
      }
    }
  }

  console.log(`\n✅ Year ${curriculum.yearLevel} complete: ${totalSections} sections, ${totalQuestions} questions`);
}

// Export for programmatic use
export { seedCurriculum, seedSection, cleanYear };

// ============ MAIN ============

async function main() {
  const args = process.argv.slice(2);
  const cleanMode = args.includes('--clean');
  const yearArg = args.find(a => /^\d+$/.test(a));
  const specificYear = yearArg ? parseInt(yearArg) : null;

  console.log(`
====================================
  Curriculum Seeding Script
====================================
Table: ${TABLE_NAME}
Mode: ${cleanMode ? 'Clean & Re-seed' : 'Seed/Update'}
Years: ${specificYear ? `Year ${specificYear} only` : 'All (3, 4, 5, 6)'}
  `);

  // Import all curriculum data
  const { year3Maths } = await import('../../../curriculum/src/maths/year3');
  const { year4Maths } = await import('../../../curriculum/src/maths/year4');
  const { year5Maths } = await import('../../../curriculum/src/maths/year5');
  const { year6Maths } = await import('../../../curriculum/src/maths/year6');

  const allYears: YearCurriculum[] = [
    year3Maths as YearCurriculum,
    year4Maths as YearCurriculum,
    year5Maths as YearCurriculum,
    year6Maths as YearCurriculum,
  ];

  const yearsToSeed = specificYear
    ? allYears.filter(y => y.yearLevel === specificYear)
    : allYears;

  if (yearsToSeed.length === 0) {
    console.error(`❌ Year ${specificYear} not found!`);
    process.exit(1);
  }

  // Clean if requested
  if (cleanMode) {
    for (const curriculum of yearsToSeed) {
      await cleanYear(curriculum.yearLevel);
    }
  }

  // Seed each year
  for (const curriculum of yearsToSeed) {
    await seedCurriculum(curriculum);
  }

  console.log(`
====================================
  ✅ All done!
====================================
  `);
}

main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});

/**
 * Seed Curriculum Data Script
 *
 * Run this to migrate static curriculum content into DynamoDB.
 * Usage: npx ts-node src/scripts/seed-curriculum.ts
 *
 * This script reads from the static year5-data.ts and populates:
 * - Curriculum sections (CURRICULUM#YEAR5, SECTION#VCMNA186)
 * - Questions (SECTION#VCMNA186, QUESTION#VCMNA186-001)
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, BatchWriteCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: 'ap-southeast-2' });
const db = DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.TABLE_NAME || 'agentsform-main';

// Import static data (you'll need to export it from year5-data.ts)
// For now, this is a sample structure - adapt to match your actual data

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: number;
  topic?: string;
}

interface Section {
  id: string;
  code: string;
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
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
  console.log(`\nSeeding Year ${curriculum.yearLevel} ${curriculum.subject}...\n`);

  for (const strand of curriculum.strands) {
    console.log(`📚 Strand: ${strand.name}`);

    for (const chapter of strand.chapters) {
      console.log(`  📖 Chapter: ${chapter.title}`);

      for (const section of chapter.sections) {
        await seedSection(curriculum.yearLevel, strand.id, chapter.id, section);
      }
    }
  }

  console.log(`\n✅ Seeding complete for Year ${curriculum.yearLevel}!`);
}

// Example usage - uncomment and modify when running
/*
import { year5Maths } from '../../apps/web/src/app/(student)/curriculum/year5-data';
seedCurriculum(year5Maths).catch(console.error);
*/

// Export for programmatic use
export { seedCurriculum, seedSection };

// Main execution
if (require.main === module) {
  console.log(`
====================================
  Curriculum Seeding Script
====================================

To seed the curriculum:

1. Export year5Maths from year5-data.ts
2. Import it here
3. Run: npx ts-node src/scripts/seed-curriculum.ts

The script will populate DynamoDB with:
- Section content (for each VCMNA/VCMMG/VCMSP code)
- Questions with metadata
- Analytics tracking fields (initially zero)

Tables used: ${TABLE_NAME}
  `);
}

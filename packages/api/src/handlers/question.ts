import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { GetCommand, UpdateCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, keys, getUserIdFromEvent, verifyChildOwnership } from '../lib/db';
import { success, badRequest, forbidden, notFound, serverError } from '../lib/response';
import Groq from 'groq-sdk';
import { v4 as uuid } from 'uuid';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

interface StudentProgress {
  level: number;
  consecutiveCorrect: number;
  consecutiveWrong: number;
  weakTopics: string[];
  topicLevels: Record<string, number>;
}

interface QuestionAttempt {
  id: string;
  childId: string;
  questionId: string;
  subject: string;
  difficulty: number;
  questionText: string;
  options: string[];
  correctAnswer: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timestamp: string;
  timeToAnswer: number;
  curriculumArea: string;
  curriculumSubtopic: string;
  yearLevel: number;
  xpEarned: number;
  aiGenerated: boolean;
}

// Australian Curriculum areas by subject
const CURRICULUM_AREAS: Record<string, Record<string, string[]>> = {
  maths: {
    'Year 1-2': ['Addition', 'Subtraction', 'Counting', 'Shapes', 'Measurement'],
    'Year 3-4': ['Multiplication', 'Division', 'Fractions', 'Time', 'Money'],
    'Year 5-6': ['Decimals', 'Percentages', 'Angles', 'Area and Perimeter', 'Data'],
    'Year 7-8': ['Algebra Basics', 'Ratios', 'Integers', 'Geometry', 'Statistics'],
    'Year 9-10': ['Linear Equations', 'Quadratics', 'Trigonometry', 'Probability', 'Functions'],
  },
  english: {
    'Year 1-2': ['Phonics', 'Sight Words', 'Simple Sentences', 'Rhyming', 'Vocabulary'],
    'Year 3-4': ['Grammar Basics', 'Punctuation', 'Reading Comprehension', 'Spelling', 'Paragraphs'],
    'Year 5-6': ['Complex Sentences', 'Vocabulary', 'Persuasive Writing', 'Figurative Language', 'Comprehension'],
    'Year 7-8': ['Literary Devices', 'Essay Structure', 'Critical Reading', 'Grammar Rules', 'Vocabulary'],
    'Year 9-10': ['Analysis', 'Advanced Grammar', 'Persuasive Techniques', 'Text Types', 'Critical Thinking'],
  },
};

function getYearRange(level: number): string {
  if (level <= 2) return 'Year 1-2';
  if (level <= 4) return 'Year 3-4';
  if (level <= 6) return 'Year 5-6';
  if (level <= 8) return 'Year 7-8';
  return 'Year 9-10';
}

function getRandomTopic(subject: string, level: number): string {
  const yearRange = getYearRange(level);
  const areas = CURRICULUM_AREAS[subject]?.[yearRange] || ['General'];
  return areas[Math.floor(Math.random() * areas.length)];
}

// Adaptive question selection algorithm
function selectQuestionLevel(progress: StudentProgress): { level: number; topic?: string } {
  const roll = Math.random();

  if (roll < 0.7) {
    return { level: progress.level };
  } else if (roll < 0.9 && progress.weakTopics.length > 0) {
    const weakTopic = progress.weakTopics[0];
    const topicLevel = progress.topicLevels[weakTopic] || progress.level;
    return { level: topicLevel, topic: weakTopic };
  } else {
    return { level: Math.min(progress.level + 1, 10) };
  }
}

// Update difficulty based on performance
function updateLevel(progress: StudentProgress, correct: boolean): StudentProgress {
  const updated = { ...progress };

  if (correct) {
    updated.consecutiveCorrect = (progress.consecutiveCorrect || 0) + 1;
    updated.consecutiveWrong = 0;

    if (updated.consecutiveCorrect >= 3) {
      updated.level = Math.min(progress.level + 1, 10);
      updated.consecutiveCorrect = 0;
    }
  } else {
    updated.consecutiveWrong = (progress.consecutiveWrong || 0) + 1;
    updated.consecutiveCorrect = 0;

    if (updated.consecutiveWrong >= 2) {
      updated.level = Math.max(progress.level - 1, 1);
      updated.consecutiveWrong = 0;
    }
  }

  return updated;
}

// Generate a new question using AI
async function generateQuestion(subject: string, level: number, topic: string): Promise<any> {
  const yearRange = getYearRange(level);

  const prompt = `Generate a ${subject} multiple choice question for Australian ${yearRange} students on "${topic}".

Return ONLY valid JSON (no markdown code blocks):
{"question":"The question","options":["A","B","C","D"],"correctAnswer":0,"explanation":"Why correct","topic":"${topic}"}

Requirements:
- Appropriate for ${yearRange} level
- correctAnswer is index 0-3
- Australian English spelling
- Educational and clear`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.1-70b-versatile',
      temperature: 0.9,
      max_tokens: 400,
    });

    const content = completion.choices[0]?.message?.content || '';
    const jsonMatch = content.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        id: `gen-${uuid()}`,
        question: parsed.question,
        options: parsed.options,
        correctAnswer: typeof parsed.correctAnswer === 'number' ? parsed.correctAnswer : 0,
        explanation: parsed.explanation,
        topic: topic,
        curriculumArea: topic,
        difficulty: level,
        aiGenerated: true,
      };
    }
  } catch (error) {
    console.error('AI question generation failed:', error);
  }

  return null;
}

// Get question - try AI first, fallback to static
async function getQuestion(subject: string, level: number, topic: string): Promise<any> {
  // 60% AI generated, 40% static (for reliability)
  if (Math.random() < 0.6 && process.env.GROQ_API_KEY) {
    const generated = await generateQuestion(subject, level, topic);
    if (generated) return generated;
  }

  return getFallbackQuestion(subject, level, topic);
}

// Static fallback questions
function getFallbackQuestion(subject: string, level: number, topic?: string): any {
  const questions = QUESTION_BANK[subject] || QUESTION_BANK.maths;

  let candidates = questions.filter(q => Math.abs(q.difficulty - level) <= 2);

  if (candidates.length === 0) {
    candidates = questions.sort((a, b) =>
      Math.abs(a.difficulty - level) - Math.abs(b.difficulty - level)
    ).slice(0, 5);
  }

  const q = candidates[Math.floor(Math.random() * candidates.length)];
  return { ...q, curriculumArea: q.topic, aiGenerated: false };
}

// Log question attempt with full context
async function logQuestionAttempt(attempt: QuestionAttempt): Promise<void> {
  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...keys.questionAttempt(attempt.childId, attempt.timestamp),
      ...attempt,
      type: 'QUESTION_ATTEMPT',
    },
  }));
}

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const userId = getUserIdFromEvent(event);
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    // GET /questions/next - Get next question for child
    if (method === 'GET' && path === '/questions/next') {
      const childId = event.queryStringParameters?.childId;
      const subject = event.queryStringParameters?.subject || 'maths';

      if (!childId) {
        return badRequest('childId is required');
      }

      if (!await verifyChildOwnership(userId, childId)) {
        return forbidden('Not authorized');
      }

      // Get child's progress
      const progressResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.progress(childId, subject),
      }));

      const progress: StudentProgress = progressResult.Item as StudentProgress || {
        level: 5,
        consecutiveCorrect: 0,
        consecutiveWrong: 0,
        weakTopics: [],
        topicLevels: {},
      };

      // Get child's year level
      const childResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.childProfile(childId),
      }));
      const yearLevel = childResult.Item?.yearLevel || progress.level;

      // Select level and topic
      const selection = selectQuestionLevel(progress);
      const topic = selection.topic || getRandomTopic(subject, selection.level);

      // Get question (AI or static)
      const question = await getQuestion(subject, selection.level, topic);

      return success({
        question: {
          id: question.id,
          question: question.question,
          options: question.options,
          topic: question.topic,
          difficulty: question.difficulty,
          curriculumArea: question.curriculumArea,
          // Include data needed for answer submission
          correctAnswer: question.correctAnswer,
          explanation: question.explanation,
        },
        currentLevel: progress.level,
        yearLevel,
      });
    }

    // POST /questions/{questionId}/answer - Submit answer
    if (method === 'POST' && path.includes('/answer')) {
      const questionId = event.pathParameters?.questionId;
      const body = JSON.parse(event.body || '{}');
      const { childId, subject, answer, timeTaken, questionData } = body;

      if (!childId || !questionId || answer === undefined) {
        return badRequest('childId, questionId, and answer are required');
      }

      if (!await verifyChildOwnership(userId, childId)) {
        return forbidden('Not authorized');
      }

      // Get child info
      const childResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.childProfile(childId),
      }));
      const yearLevel = childResult.Item?.yearLevel || 5;

      // Use passed question data (for generated questions) or lookup static
      let question = questionData;
      if (!question) {
        question = QUESTION_INDEX[questionId];
      }

      if (!question) {
        return notFound('Question not found - please include questionData for generated questions');
      }

      const correct = question.correctAnswer === answer;
      const now = new Date();
      const timestamp = now.toISOString();

      // Get and update progress
      const progressResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.progress(childId, subject || 'maths'),
      }));

      const currentProgress = progressResult.Item as StudentProgress || {
        level: 5,
        consecutiveCorrect: 0,
        consecutiveWrong: 0,
        weakTopics: [],
        topicLevels: {},
      };

      const updatedProgress = updateLevel(currentProgress, correct);

      // Calculate XP
      const xpEarned = correct ? 10 + ((question.difficulty || 5) * 2) : 2;

      // Update weak topics
      if (!correct && question.topic) {
        const weakTopics = [...(currentProgress.weakTopics || [])];
        if (!weakTopics.includes(question.topic)) {
          weakTopics.unshift(question.topic);
          updatedProgress.weakTopics = weakTopics.slice(0, 5);
        }
      } else if (correct && question.topic) {
        updatedProgress.weakTopics = (currentProgress.weakTopics || []).filter((t: string) => t !== question.topic);
      }

      // Log the complete question attempt
      const attempt: QuestionAttempt = {
        id: uuid(),
        childId,
        questionId,
        subject: subject || 'maths',
        difficulty: question.difficulty || 5,
        questionText: question.question,
        options: question.options,
        correctAnswer: question.correctAnswer,
        selectedAnswer: answer,
        isCorrect: correct,
        timestamp,
        timeToAnswer: timeTaken || 0,
        curriculumArea: question.curriculumArea || question.topic || 'General',
        curriculumSubtopic: question.topic || 'General',
        yearLevel,
        xpEarned,
        aiGenerated: question.aiGenerated || false,
      };

      await logQuestionAttempt(attempt);

      // Streak calculation
      const today = timestamp.split('T')[0];
      const lastActiveDate = (currentProgress as any).lastActive?.split('T')[0];
      const yesterday = new Date(now.getTime() - 86400000).toISOString().split('T')[0];

      let newStreak = (currentProgress as any).streak || 0;
      if (lastActiveDate !== today) {
        if (lastActiveDate === yesterday) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }
      }

      // Update progress in DynamoDB
      await db.send(new UpdateCommand({
        TableName: TABLE_NAME,
        Key: keys.progress(childId, subject || 'maths'),
        UpdateExpression: `SET
          #level = :level,
          consecutiveCorrect = :cc,
          consecutiveWrong = :cw,
          weakTopics = :weakTopics,
          xp = if_not_exists(xp, :zero) + :xp,
          questionsAnswered = if_not_exists(questionsAnswered, :zero) + :one,
          correctAnswers = if_not_exists(correctAnswers, :zero) + :correct,
          streak = :streak,
          lastActive = :now,
          benchmarkCompleted = if_not_exists(benchmarkCompleted, :false)
        `,
        ExpressionAttributeNames: {
          '#level': 'level',
        },
        ExpressionAttributeValues: {
          ':level': updatedProgress.level,
          ':cc': updatedProgress.consecutiveCorrect,
          ':cw': updatedProgress.consecutiveWrong,
          ':weakTopics': updatedProgress.weakTopics || [],
          ':xp': xpEarned,
          ':one': 1,
          ':zero': 0,
          ':correct': correct ? 1 : 0,
          ':streak': newStreak,
          ':now': timestamp,
          ':false': false,
        },
      }));

      return success({
        correct,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        xpEarned,
        newLevel: updatedProgress.level,
        levelChanged: updatedProgress.level !== currentProgress.level,
        attemptId: attempt.id,
      });
    }

    return badRequest('Invalid request');
  } catch (error) {
    console.error('Question handler error:', error);
    return serverError();
  }
}

// Static question bank as fallback
const QUESTION_BANK: Record<string, any[]> = {
  maths: [
    { id: 'maths-001', difficulty: 1, topic: 'Addition', question: 'What is 2 + 3?', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: '2 + 3 = 5. Count 2 fingers, then 3 more.' },
    { id: 'maths-002', difficulty: 1, topic: 'Addition', question: 'What is 4 + 2?', options: ['5', '6', '7', '8'], correctAnswer: 1, explanation: '4 + 2 = 6.' },
    { id: 'maths-003', difficulty: 2, topic: 'Subtraction', question: 'What is 7 - 3?', options: ['3', '4', '5', '6'], correctAnswer: 1, explanation: '7 - 3 = 4.' },
    { id: 'maths-004', difficulty: 2, topic: 'Addition', question: 'What is 8 + 5?', options: ['12', '13', '14', '15'], correctAnswer: 1, explanation: '8 + 5 = 13.' },
    { id: 'maths-005', difficulty: 3, topic: 'Multiplication', question: 'What is 3 × 4?', options: ['10', '11', '12', '14'], correctAnswer: 2, explanation: '3 × 4 = 12.' },
    { id: 'maths-006', difficulty: 3, topic: 'Multiplication', question: 'What is 5 × 3?', options: ['13', '14', '15', '16'], correctAnswer: 2, explanation: '5 × 3 = 15.' },
    { id: 'maths-007', difficulty: 4, topic: 'Division', question: 'What is 20 ÷ 4?', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: '20 ÷ 4 = 5.' },
    { id: 'maths-008', difficulty: 4, topic: 'Multiplication', question: 'What is 6 × 7?', options: ['40', '42', '44', '48'], correctAnswer: 1, explanation: '6 × 7 = 42.' },
    { id: 'maths-009', difficulty: 5, topic: 'Multiplication', question: 'What is 12 × 8?', options: ['86', '96', '106', '84'], correctAnswer: 1, explanation: '12 × 8 = 96.' },
    { id: 'maths-010', difficulty: 5, topic: 'Fractions', question: 'What is 1/2 + 1/4?', options: ['2/6', '3/4', '1/3', '2/4'], correctAnswer: 1, explanation: '1/2 = 2/4, so 2/4 + 1/4 = 3/4.' },
    { id: 'maths-011', difficulty: 6, topic: 'Percentages', question: 'What is 10% of 50?', options: ['4', '5', '6', '10'], correctAnswer: 1, explanation: '10% of 50 = 50 × 0.1 = 5.' },
    { id: 'maths-012', difficulty: 6, topic: 'Division', question: 'What is 144 ÷ 12?', options: ['10', '11', '12', '14'], correctAnswer: 2, explanation: '144 ÷ 12 = 12.' },
    { id: 'maths-013', difficulty: 7, topic: 'Algebra', question: 'Solve: x + 5 = 12', options: ['x = 5', 'x = 6', 'x = 7', 'x = 8'], correctAnswer: 2, explanation: 'x + 5 = 12 → x = 12 - 5 = 7.' },
    { id: 'maths-014', difficulty: 7, topic: 'Percentages', question: 'What is 25% of 80?', options: ['15', '20', '25', '30'], correctAnswer: 1, explanation: '25% of 80 = 80 × 0.25 = 20.' },
    { id: 'maths-015', difficulty: 8, topic: 'Algebra', question: 'Solve: 2x + 5 = 13', options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'], correctAnswer: 1, explanation: '2x + 5 = 13 → 2x = 8 → x = 4.' },
    { id: 'maths-016', difficulty: 8, topic: 'Geometry', question: 'What is 3² + 4²?', options: ['20', '24', '25', '49'], correctAnswer: 2, explanation: '3² + 4² = 9 + 16 = 25.' },
    { id: 'maths-017', difficulty: 9, topic: 'Algebra', question: 'Solve: 3x - 7 = 2x + 5', options: ['x = 10', 'x = 11', 'x = 12', 'x = 13'], correctAnswer: 2, explanation: '3x - 7 = 2x + 5 → x = 12.' },
    { id: 'maths-018', difficulty: 10, topic: 'Calculus', question: 'What is the derivative of x²?', options: ['x', '2x', 'x²', '2x²'], correctAnswer: 1, explanation: 'The derivative of x² is 2x.' },
  ],
  english: [
    { id: 'eng-001', difficulty: 1, topic: 'Phonics', question: 'Which word rhymes with "cat"?', options: ['dog', 'hat', 'cup', 'bed'], correctAnswer: 1, explanation: '"Hat" rhymes with "cat" - both end in "-at".' },
    { id: 'eng-002', difficulty: 1, topic: 'Phonics', question: 'Which letter comes after B?', options: ['A', 'C', 'D', 'E'], correctAnswer: 1, explanation: 'The alphabet: A, B, C...' },
    { id: 'eng-003', difficulty: 2, topic: 'Phonics', question: 'Which word starts with "sh"?', options: ['cat', 'ship', 'dog', 'ball'], correctAnswer: 1, explanation: '"Ship" starts with the "sh" sound.' },
    { id: 'eng-004', difficulty: 2, topic: 'Vocabulary', question: 'What is the opposite of "hot"?', options: ['warm', 'cold', 'wet', 'dry'], correctAnswer: 1, explanation: 'Cold is the opposite of hot.' },
    { id: 'eng-005', difficulty: 3, topic: 'Grammar', question: 'Which word is a noun?', options: ['run', 'happy', 'dog', 'quickly'], correctAnswer: 2, explanation: 'A noun names a person, place, or thing. "Dog" is a thing.' },
    { id: 'eng-006', difficulty: 3, topic: 'Grammar', question: 'Which is a complete sentence?', options: ['The big dog.', 'Running fast.', 'She runs.', 'Very happy.'], correctAnswer: 2, explanation: '"She runs" has a subject and verb.' },
    { id: 'eng-007', difficulty: 4, topic: 'Vocabulary', question: 'What is the plural of "child"?', options: ['childs', 'children', 'childes', 'childern'], correctAnswer: 1, explanation: '"Children" is the irregular plural of "child".' },
    { id: 'eng-008', difficulty: 4, topic: 'Grammar', question: 'Which word is a verb?', options: ['happy', 'quickly', 'jump', 'beautiful'], correctAnswer: 2, explanation: 'A verb is an action word. "Jump" is an action.' },
    { id: 'eng-009', difficulty: 5, topic: 'Spelling', question: 'Choose the correct spelling:', options: ['recieve', 'receive', 'receeve', 'receve'], correctAnswer: 1, explanation: '"Receive" - i before e except after c.' },
    { id: 'eng-010', difficulty: 5, topic: 'Grammar', question: 'Which word is an adjective?', options: ['quickly', 'beautiful', 'run', 'happiness'], correctAnswer: 1, explanation: 'Adjectives describe nouns. "Beautiful" describes things.' },
    { id: 'eng-011', difficulty: 6, topic: 'Grammar', question: 'Choose the correct form:', options: ['Their going home', 'There going home', "They're going home", 'Thier going home'], correctAnswer: 2, explanation: '"They\'re" is short for "they are".' },
    { id: 'eng-012', difficulty: 6, topic: 'Punctuation', question: 'Which needs an apostrophe?', options: ['The dogs bone', 'The dogs run', 'The dogs play', 'The dogs bark'], correctAnswer: 0, explanation: '"The dog\'s bone" shows possession.' },
    { id: 'eng-013', difficulty: 7, topic: 'Vocabulary', question: 'What is a synonym for "happy"?', options: ['sad', 'joyful', 'angry', 'tired'], correctAnswer: 1, explanation: '"Joyful" means the same as "happy".' },
    { id: 'eng-014', difficulty: 7, topic: 'Vocabulary', question: 'What is an antonym for "ancient"?', options: ['old', 'historic', 'modern', 'antique'], correctAnswer: 2, explanation: '"Modern" is the opposite of "ancient".' },
    { id: 'eng-015', difficulty: 8, topic: 'Literary Devices', question: '"The wind whispered secrets" uses:', options: ['Simile', 'Personification', 'Metaphor', 'Alliteration'], correctAnswer: 1, explanation: 'Personification gives human qualities to non-human things.' },
    { id: 'eng-016', difficulty: 8, topic: 'Literary Devices', question: '"Life is a journey" is an example of:', options: ['Simile', 'Personification', 'Metaphor', 'Hyperbole'], correctAnswer: 2, explanation: 'A metaphor compares without using "like" or "as".' },
    { id: 'eng-017', difficulty: 9, topic: 'Grammar', question: 'Which sentence uses passive voice?', options: ['She wrote the book', 'The book was written', 'She is writing', 'Write the book'], correctAnswer: 1, explanation: 'Passive voice: subject receives the action.' },
    { id: 'eng-018', difficulty: 10, topic: 'Grammar', question: 'Subjunctive mood:', options: ['If I was rich', 'If I were rich', 'If I am rich', 'If I be rich'], correctAnswer: 1, explanation: 'Subjunctive uses "were" for hypothetical situations.' },
  ],
};

// Build index for quick lookup by ID
const QUESTION_INDEX: Record<string, any> = {};
Object.values(QUESTION_BANK).flat().forEach(q => {
  QUESTION_INDEX[q.id] = q;
});

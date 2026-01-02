import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { PutCommand, GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, keys, getUserIdFromEvent, verifyChildOwnership } from '../lib/db';
import { success, created, badRequest, forbidden, notFound, serverError } from '../lib/response';
import { randomUUID } from 'crypto';

interface BenchmarkSession {
  sessionId: string;
  childId: string;
  subject: string;
  currentQuestion: number;
  totalQuestions: number;
  currentDifficulty: number;
  answers: { questionId: string; correct: boolean; difficulty: number }[];
  startedAt: string;
  completedAt?: string;
  finalLevel?: number;
}

const BENCHMARK_QUESTIONS = 5;
const STARTING_DIFFICULTY = 5; // Year 5 equivalent

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const userId = getUserIdFromEvent(event);
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    // POST /benchmark/start - Start a new benchmark test
    if (method === 'POST' && path === '/benchmark/start') {
      const body = JSON.parse(event.body || '{}');
      const { childId, subject } = body;

      if (!childId || !subject) {
        return badRequest('childId and subject are required');
      }

      if (!await verifyChildOwnership(userId, childId)) {
        return forbidden('Not authorized');
      }

      const sessionId = randomUUID();
      const now = new Date().toISOString();

      const session: BenchmarkSession = {
        sessionId,
        childId,
        subject,
        currentQuestion: 0,
        totalQuestions: BENCHMARK_QUESTIONS,
        currentDifficulty: STARTING_DIFFICULTY,
        answers: [],
        startedAt: now,
      };

      await db.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          ...keys.benchmark(sessionId),
          ...session,
          parentId: userId,
        },
      }));

      // Get first question (questionIndex = 0)
      const question = getBenchmarkQuestion(subject, STARTING_DIFFICULTY, 0);

      return created({
        benchmarkId: sessionId,
        totalQuestions: BENCHMARK_QUESTIONS,
        currentQuestion: 1,
        question,
      });
    }

    // GET /benchmark/{sessionId}/next - Get next benchmark question
    if (method === 'GET' && path.includes('/next')) {
      const sessionId = event.pathParameters?.sessionId;

      if (!sessionId) {
        return badRequest('sessionId is required');
      }

      const result = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.benchmark(sessionId),
      }));

      const session = result.Item as BenchmarkSession;
      if (!session) {
        return notFound('Benchmark session not found');
      }

      if (session.completedAt) {
        return success({
          completed: true,
          finalLevel: session.finalLevel,
        });
      }

      const question = getBenchmarkQuestion(session.subject, session.currentDifficulty, session.currentQuestion);

      return success({
        currentQuestion: session.currentQuestion + 1,
        totalQuestions: session.totalQuestions,
        question,
      });
    }

    // POST /benchmark/{sessionId}/answer - Submit benchmark answer
    if (method === 'POST' && path.includes('/answer')) {
      const sessionId = event.pathParameters?.sessionId;
      const body = JSON.parse(event.body || '{}');
      const { answer, questionId } = body;

      if (!sessionId || answer === undefined) {
        return badRequest('sessionId and answer are required');
      }

      const result = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.benchmark(sessionId),
      }));

      const session = result.Item as BenchmarkSession;
      if (!session) {
        return notFound('Benchmark session not found');
      }

      // Check answer using current question
      const question = getBenchmarkQuestion(session.subject, session.currentDifficulty, session.currentQuestion);
      const correct = question.correctAnswer === answer;

      // Update difficulty based on answer
      let newDifficulty = session.currentDifficulty;
      if (correct) {
        newDifficulty = Math.min(session.currentDifficulty + 1, 10);
      } else {
        newDifficulty = Math.max(session.currentDifficulty - 1, 1);
      }

      const newAnswers = [
        ...session.answers,
        { questionId: question.id, correct, difficulty: session.currentDifficulty },
      ];

      const newQuestionNumber = session.currentQuestion + 1;
      const isComplete = newQuestionNumber >= BENCHMARK_QUESTIONS;

      // Calculate final level if complete
      let finalLevel: number | undefined;
      if (isComplete) {
        // Average difficulty of correctly answered questions
        const correctAnswers = newAnswers.filter(a => a.correct);
        if (correctAnswers.length > 0) {
          finalLevel = Math.round(
            correctAnswers.reduce((sum, a) => sum + a.difficulty, 0) / correctAnswers.length
          );
        } else {
          finalLevel = 1;
        }
      }

      // Update session
      await db.send(new UpdateCommand({
        TableName: TABLE_NAME,
        Key: keys.benchmark(sessionId),
        UpdateExpression: `SET
          currentQuestion = :cq,
          currentDifficulty = :cd,
          answers = :answers
          ${isComplete ? ', completedAt = :now, finalLevel = :finalLevel' : ''}
        `,
        ExpressionAttributeValues: {
          ':cq': newQuestionNumber,
          ':cd': newDifficulty,
          ':answers': newAnswers,
          ...(isComplete && { ':now': new Date().toISOString(), ':finalLevel': finalLevel }),
        },
      }));

      // If complete, initialize/update child's progress record
      if (isComplete && finalLevel) {
        const now = new Date().toISOString();
        await db.send(new PutCommand({
          TableName: TABLE_NAME,
          Item: {
            ...keys.progress(session.childId, session.subject),
            subject: session.subject,
            level: finalLevel,
            xp: 0,
            streak: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            consecutiveCorrect: 0,
            consecutiveWrong: 0,
            weakTopics: [],
            topicLevels: {},
            benchmarkCompleted: true,
            benchmarkDate: now,
            lastActive: now,
            createdAt: now,
          },
        }));
      }

      // Get next question if not complete
      const nextQuestion = isComplete
        ? undefined
        : getBenchmarkQuestion(session.subject, newDifficulty, newQuestionNumber);

      return success({
        correct,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        currentQuestion: newQuestionNumber,
        totalQuestions: BENCHMARK_QUESTIONS,
        completed: isComplete,
        ...(isComplete && { finalLevel }),
        ...(!isComplete && { nextQuestion }),
      });
    }

    return badRequest('Invalid request');
  } catch (error) {
    console.error('Benchmark handler error:', error);
    return serverError();
  }
}

// Get benchmark question at specific difficulty with variation by question index
function getBenchmarkQuestion(subject: string, difficulty: number, questionIndex: number = 0): any {
  // Math questions pool - multiple questions per difficulty range
  const mathQuestions: any[] = [
    // Easy (1-3)
    { id: 'bm-m1a', question: 'What is 2 + 3?', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: '2 + 3 = 5', difficulty: 1 },
    { id: 'bm-m1b', question: 'What is 5 + 4?', options: ['7', '8', '9', '10'], correctAnswer: 2, explanation: '5 + 4 = 9', difficulty: 2 },
    { id: 'bm-m1c', question: 'What is 8 - 3?', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: '8 - 3 = 5', difficulty: 2 },
    { id: 'bm-m3a', question: 'What is 15 - 8?', options: ['5', '6', '7', '8'], correctAnswer: 2, explanation: '15 - 8 = 7', difficulty: 3 },
    { id: 'bm-m3b', question: 'What is 12 + 9?', options: ['19', '20', '21', '22'], correctAnswer: 2, explanation: '12 + 9 = 21', difficulty: 3 },
    // Medium (4-6)
    { id: 'bm-m4a', question: 'What is 6 × 4?', options: ['20', '22', '24', '26'], correctAnswer: 2, explanation: '6 × 4 = 24', difficulty: 4 },
    { id: 'bm-m5a', question: 'What is 7 × 6?', options: ['36', '42', '48', '49'], correctAnswer: 1, explanation: '7 × 6 = 42', difficulty: 5 },
    { id: 'bm-m5b', question: 'What is 56 ÷ 8?', options: ['6', '7', '8', '9'], correctAnswer: 1, explanation: '56 ÷ 8 = 7', difficulty: 5 },
    { id: 'bm-m6a', question: 'What is 9 × 8?', options: ['63', '72', '81', '64'], correctAnswer: 1, explanation: '9 × 8 = 72', difficulty: 6 },
    { id: 'bm-m6b', question: 'What is 144 ÷ 12?', options: ['10', '11', '12', '13'], correctAnswer: 2, explanation: '144 ÷ 12 = 12', difficulty: 6 },
    // Hard (7-9)
    { id: 'bm-m7a', question: 'What is 25% of 80?', options: ['15', '20', '25', '30'], correctAnswer: 1, explanation: '25% of 80 = 80 × 0.25 = 20', difficulty: 7 },
    { id: 'bm-m7b', question: 'Solve: x + 7 = 15', options: ['x = 6', 'x = 7', 'x = 8', 'x = 9'], correctAnswer: 2, explanation: 'x + 7 = 15 → x = 15 - 7 = 8', difficulty: 7 },
    { id: 'bm-m8a', question: 'Solve: 2x + 5 = 13', options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'], correctAnswer: 1, explanation: '2x + 5 = 13 → 2x = 8 → x = 4', difficulty: 8 },
    { id: 'bm-m8b', question: 'What is 3² + 4²?', options: ['20', '24', '25', '49'], correctAnswer: 2, explanation: '3² + 4² = 9 + 16 = 25', difficulty: 8 },
    // Expert (10+)
    { id: 'bm-m10a', question: 'What is the derivative of x²?', options: ['x', '2x', 'x²', '2x²'], correctAnswer: 1, explanation: 'The derivative of x² is 2x', difficulty: 10 },
    { id: 'bm-m10b', question: 'Simplify: √(144)', options: ['10', '11', '12', '14'], correctAnswer: 2, explanation: '√144 = 12 because 12 × 12 = 144', difficulty: 10 },
  ];

  const englishQuestions: any[] = [
    // Easy (1-3)
    { id: 'bm-e1a', question: 'Which letter comes after C?', options: ['B', 'D', 'E', 'A'], correctAnswer: 1, explanation: 'The alphabet order is A, B, C, D...', difficulty: 1 },
    { id: 'bm-e1b', question: 'What rhymes with "cat"?', options: ['dog', 'hat', 'car', 'cup'], correctAnswer: 1, explanation: '"Hat" rhymes with "cat" - they both end in "-at"', difficulty: 2 },
    { id: 'bm-e3a', question: 'Which word is a noun?', options: ['run', 'happy', 'dog', 'quickly'], correctAnswer: 2, explanation: 'A noun is a person, place, or thing. "Dog" is a thing.', difficulty: 3 },
    { id: 'bm-e3b', question: 'Which is a complete sentence?', options: ['The big dog.', 'Running fast.', 'She runs.', 'Very happy.'], correctAnswer: 2, explanation: '"She runs" has a subject (she) and verb (runs).', difficulty: 3 },
    // Medium (4-6)
    { id: 'bm-e4a', question: 'What is the plural of "child"?', options: ['childs', 'children', 'childes', 'childern'], correctAnswer: 1, explanation: 'The plural of "child" is "children" (irregular plural).', difficulty: 4 },
    { id: 'bm-e5a', question: 'Choose the correct spelling:', options: ['recieve', 'receive', 'receeve', 'receve'], correctAnswer: 1, explanation: 'The correct spelling is "receive" - i before e except after c.', difficulty: 5 },
    { id: 'bm-e5b', question: 'Which word is an adjective?', options: ['quickly', 'beautiful', 'run', 'happiness'], correctAnswer: 1, explanation: 'Adjectives describe nouns. "Beautiful" describes things.', difficulty: 5 },
    { id: 'bm-e6a', question: 'Choose the correct form:', options: ['Their going home', 'There going home', "They're going home", 'Thier going home'], correctAnswer: 2, explanation: '"They\'re" is short for "they are".', difficulty: 6 },
    // Hard (7-9)
    { id: 'bm-e7a', question: 'What is a synonym for "happy"?', options: ['sad', 'joyful', 'angry', 'tired'], correctAnswer: 1, explanation: 'A synonym has similar meaning. "Joyful" means happy.', difficulty: 7 },
    { id: 'bm-e7b', question: 'What is an antonym for "ancient"?', options: ['old', 'historic', 'modern', 'antique'], correctAnswer: 2, explanation: 'An antonym is opposite. "Modern" is opposite of "ancient".', difficulty: 7 },
    { id: 'bm-e8a', question: '"The wind whispered secrets" uses:', options: ['Simile', 'Personification', 'Metaphor', 'Alliteration'], correctAnswer: 1, explanation: 'Personification gives human qualities to non-human things.', difficulty: 8 },
    { id: 'bm-e8b', question: '"Life is a journey" is an example of:', options: ['Simile', 'Personification', 'Metaphor', 'Hyperbole'], correctAnswer: 2, explanation: 'A metaphor directly compares without using "like" or "as".', difficulty: 8 },
    // Expert (10+)
    { id: 'bm-e10a', question: 'Subjunctive mood:', options: ['If I was rich', 'If I were rich', 'If I am rich', 'If I be rich'], correctAnswer: 1, explanation: 'The subjunctive mood uses "were" for hypothetical situations.', difficulty: 10 },
    { id: 'bm-e10b', question: 'Which uses passive voice?', options: ['She wrote the book', 'The book was written', 'She is writing', 'Write the book'], correctAnswer: 1, explanation: 'Passive voice: subject receives the action ("was written").', difficulty: 10 },
  ];

  const questions = subject === 'english' ? englishQuestions : mathQuestions;

  // Filter questions by difficulty range (±2 levels)
  const relevantQuestions = questions.filter(q =>
    Math.abs(q.difficulty - difficulty) <= 2
  );

  // Pick a question based on questionIndex to avoid repeats
  const selectedQuestion = relevantQuestions[questionIndex % relevantQuestions.length] || questions[0];

  return selectedQuestion;
}

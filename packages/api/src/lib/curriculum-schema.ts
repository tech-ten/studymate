/**
 * Curriculum Database Schema Design
 *
 * This schema supports:
 * - Hierarchical curriculum content (Strand → Chapter → Section → Questions)
 * - Question analytics (difficulty, success rates, common wrong answers)
 * - Adaptive question selection based on child ability
 * - AI-generated question caching
 * - Content versioning for A/B testing
 */

// ============ KEY PATTERNS ============

export const curriculumKeys = {
  // Curriculum structure
  strand: (yearLevel: number, strandId: string) => ({
    PK: `CURRICULUM#YEAR${yearLevel}`,
    SK: `STRAND#${strandId}`,
  }),

  chapter: (yearLevel: number, strandId: string, chapterId: string) => ({
    PK: `CURRICULUM#YEAR${yearLevel}`,
    SK: `STRAND#${strandId}#CHAPTER#${chapterId}`,
  }),

  section: (yearLevel: number, sectionId: string) => ({
    PK: `CURRICULUM#YEAR${yearLevel}`,
    SK: `SECTION#${sectionId}`,
  }),

  // Questions - stored separately for efficient querying
  question: (sectionId: string, questionId: string) => ({
    PK: `SECTION#${sectionId}`,
    SK: `QUESTION#${questionId}`,
  }),

  // Question analytics (aggregated stats)
  questionStats: (questionId: string) => ({
    PK: `QSTATS#${questionId}`,
    SK: 'AGGREGATE',
  }),

  // AI-generated questions pool
  aiQuestion: (sectionId: string, difficulty: number, hash: string) => ({
    PK: `AIQUESTION#${sectionId}#D${difficulty}`,
    SK: `Q#${hash}`,
  }),

  // Child's mastery per section
  childMastery: (childId: string, sectionId: string) => ({
    PK: `CHILD#${childId}`,
    SK: `MASTERY#${sectionId}`,
  }),

  // Individual question attempts (for detailed analytics)
  questionAttempt: (childId: string, timestamp: string) => ({
    PK: `CHILD#${childId}`,
    SK: `QATTEMPT#${timestamp}`,
  }),
};

// ============ ITEM TYPES ============

export interface CurriculumStrand {
  PK: string;
  SK: string;
  type: 'STRAND';
  id: string;
  name: string;
  yearLevel: number;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface CurriculumChapter {
  PK: string;
  SK: string;
  type: 'CHAPTER';
  id: string;
  strandId: string;
  title: string;
  description: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface CurriculumSection {
  PK: string;
  SK: string;
  type: 'SECTION';
  id: string;               // e.g., 'VCMNA186'
  code: string;             // Victorian Curriculum code
  strandId: string;
  chapterId: string;
  title: string;
  description: string;
  content: string;          // Markdown teaching content
  keyPoints: string[];
  examples: Array<{
    problem: string;
    solution: string;
    explanation: string;
  }>;
  order: number;
  questionCount: number;    // Total static questions
  aiQuestionsEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CurriculumQuestion {
  PK: string;
  SK: string;
  type: 'QUESTION';
  id: string;               // e.g., 'VCMNA186-001'
  sectionId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 1 | 2 | 3;    // 1=easy, 2=medium, 3=hard
  topic?: string;
  isAiGenerated: boolean;
  // Analytics (updated periodically)
  totalAttempts: number;
  correctAttempts: number;
  avgTimeSeconds: number;
  commonWrongAnswers: number[];  // Indexes of commonly picked wrong answers
  createdAt: string;
  updatedAt: string;
}

export interface QuestionStats {
  PK: string;
  SK: string;
  type: 'QSTATS';
  questionId: string;
  totalAttempts: number;
  correctAttempts: number;
  successRate: number;
  avgTimeSeconds: number;
  // Distribution of answers [option0Count, option1Count, ...]
  answerDistribution: number[];
  // By difficulty level performance
  performanceByLevel: {
    [childLevel: string]: {
      attempts: number;
      correct: number;
    };
  };
  lastUpdated: string;
}

export interface ChildMastery {
  PK: string;
  SK: string;
  type: 'MASTERY';
  childId: string;
  sectionId: string;
  // Mastery metrics
  questionsAttempted: number;
  questionsCorrect: number;
  currentLevel: 1 | 2 | 3;    // Current difficulty level
  masteryScore: number;       // 0-100
  streakCorrect: number;      // Current streak of correct answers
  bestStreak: number;
  // Adaptive learning data
  lastDifficulty: number;
  shouldIncreaseDifficulty: boolean;
  shouldDecreaseDifficulty: boolean;
  // Weak areas
  weakTopics: string[];
  commonMistakes: string[];
  lastAttemptAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionAttemptRecord {
  PK: string;
  SK: string;
  type: 'QATTEMPT';
  childId: string;
  questionId: string;
  sectionId: string;
  // Attempt details
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  timeSpentSeconds: number;
  difficulty: number;
  // Context
  sessionType: 'quiz' | 'practice' | 'exam';
  aiExplanationRequested: boolean;
  createdAt: string;
}

// ============ ADAPTIVE QUESTION SELECTION ============

export interface AdaptiveQuestionRequest {
  childId: string;
  sectionId: string;
  excludeQuestionIds?: string[];  // Questions already answered in session
  preferredDifficulty?: number;
}

export interface AdaptiveQuestionResponse {
  question: CurriculumQuestion;
  selectedDifficulty: number;
  reason: 'mastery_based' | 'streak_adjustment' | 'random' | 'ai_generated';
}

/**
 * Adaptive difficulty algorithm:
 *
 * 1. Get child's mastery for section
 * 2. If mastery >= 80% and streak >= 3: increase difficulty
 * 3. If mastery <= 40% or streak of 2+ wrong: decrease difficulty
 * 4. Select question from appropriate difficulty pool
 * 5. If pool exhausted, generate AI question
 */

// ============ GSI PATTERNS ============

/**
 * GSI1: Query all sections by year level
 * GSI1PK: YEAR#5
 * GSI1SK: SECTION#VCMNA186
 *
 * GSI2: Query questions by difficulty
 * GSI2PK: SECTION#VCMNA186#D1 (difficulty 1)
 * GSI2SK: QUESTION#001
 *
 * GSI3: Query child's attempts by date
 * GSI3PK: CHILD#123
 * GSI3SK: DATE#2024-01-15
 */

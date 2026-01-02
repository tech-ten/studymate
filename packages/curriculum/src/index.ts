// Victorian Curriculum Package
// Provides structured curriculum content for Australian students

export * from './types';
export * from './maths';

import { YearLevelCurriculum, CurriculumSection, ExamQuestion, ExamResult } from './types';
import { getMathsCurriculum, getAvailableMathsYearLevels } from './maths';

// Main curriculum access function
export function getCurriculum(yearLevel: number, subject: 'maths' | 'english'): YearLevelCurriculum | null {
  if (subject === 'maths') {
    return getMathsCurriculum(yearLevel);
  }
  // English curriculum to be added
  return null;
}

// Get all sections for a year level and subject (flat list)
export function getAllSections(yearLevel: number, subject: 'maths' | 'english'): CurriculumSection[] {
  const curriculum = getCurriculum(yearLevel, subject);
  if (!curriculum) return [];

  const sections: CurriculumSection[] = [];
  for (const strand of curriculum.strands) {
    for (const chapter of strand.chapters) {
      sections.push(...chapter.sections);
    }
  }
  return sections;
}

// Get a specific section by ID
export function getSection(yearLevel: number, subject: 'maths' | 'english', sectionId: string): CurriculumSection | null {
  const sections = getAllSections(yearLevel, subject);
  return sections.find(s => s.id === sectionId) || null;
}

// Generate a Cambridge-style exam (mix of questions from all sections)
export function generateExam(yearLevel: number, subject: 'maths' | 'english', questionCount: number = 20): ExamQuestion[] {
  const curriculum = getCurriculum(yearLevel, subject);
  if (!curriculum) return [];

  const allQuestions: ExamQuestion[] = [];

  // Collect all questions with their section info
  for (const strand of curriculum.strands) {
    for (const chapter of strand.chapters) {
      for (const section of chapter.sections) {
        for (const question of section.questions) {
          allQuestions.push({
            ...question,
            sectionId: section.id,
            sectionTitle: section.title,
            chapterId: chapter.id,
          });
        }
      }
    }
  }

  // Shuffle and select questions
  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(questionCount, shuffled.length));
}

// Calculate exam results with section breakdown
export function calculateExamResult(
  questions: ExamQuestion[],
  answers: Record<string, number>
): ExamResult {
  const sectionResults: Record<string, { correct: number; total: number; title: string }> = {};

  let totalCorrect = 0;

  for (const question of questions) {
    // Track section results
    if (!sectionResults[question.sectionId]) {
      sectionResults[question.sectionId] = {
        correct: 0,
        total: 0,
        title: question.sectionTitle,
      };
    }
    sectionResults[question.sectionId].total++;

    // Check if correct
    const userAnswer = answers[question.id];
    if (userAnswer === question.correctAnswer) {
      totalCorrect++;
      sectionResults[question.sectionId].correct++;
    }
  }

  // Build section breakdown
  const sectionBreakdown = Object.entries(sectionResults).map(([sectionId, data]) => ({
    sectionId,
    sectionTitle: data.title,
    correct: data.correct,
    total: data.total,
    needsRevision: data.correct / data.total < 0.6, // Less than 60% = needs revision
  }));

  // Sections needing revision
  const recommendedSections = sectionBreakdown
    .filter(s => s.needsRevision)
    .map(s => s.sectionId);

  return {
    totalQuestions: questions.length,
    correctAnswers: totalCorrect,
    percentage: Math.round((totalCorrect / questions.length) * 100),
    sectionBreakdown,
    recommendedSections,
  };
}

// Get available year levels for a subject
export function getAvailableYearLevels(subject: 'maths' | 'english'): number[] {
  if (subject === 'maths') {
    return getAvailableMathsYearLevels();
  }
  return [];
}

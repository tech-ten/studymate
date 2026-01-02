// Victorian Curriculum Data Types and Registry
// All year levels are treated equally - imported from separate files

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 1 | 2 | 3;
}

export interface Example {
  problem: string;
  solution: string;
  explanation: string;
}

export interface CurriculumSection {
  id: string;
  code: string;
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
  examples: Example[];
  questions: Question[];
}

export interface CurriculumChapter {
  id: string;
  title: string;
  description: string;
  sections: CurriculumSection[];
}

export interface CurriculumStrand {
  id: string;
  name: string;
  chapters: CurriculumChapter[];
}

export interface YearLevelCurriculum {
  yearLevel: number;
  subject: 'maths' | 'english';
  strands: CurriculumStrand[];
}

// Import all year levels (all treated equally)
import { year3Maths } from './year3-data';
import { year4Maths } from './year4-data';
import { year5Maths } from './year5-data';
import { year6Maths } from './year6-data';

// Curriculum registry by year level
const curriculumRegistry: Record<number, YearLevelCurriculum> = {
  3: year3Maths,
  4: year4Maths,
  5: year5Maths,
  6: year6Maths,
};

// Get curriculum for a specific year level
export function getCurriculum(yearLevel: number): YearLevelCurriculum | null {
  return curriculumRegistry[yearLevel] || null;
}

// Get available year levels
export function getAvailableYearLevels(): number[] {
  return Object.keys(curriculumRegistry).map(Number).sort((a, b) => a - b);
}

// Re-export all year level data
export { year3Maths, year4Maths, year5Maths, year6Maths };

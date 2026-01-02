// Victorian Curriculum Types

export interface CurriculumSection {
  id: string;
  code: string; // e.g., "VCMNA181"
  title: string;
  description: string; // Official curriculum description
  content: string; // Textbook-style reading content for kids
  keyPoints: string[]; // Bullet points of key concepts
  examples: Example[];
  questions: Question[];
}

export interface Example {
  problem: string;
  solution: string;
  explanation: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 1 | 2 | 3; // Easy, Medium, Hard
}

export interface CurriculumChapter {
  id: string;
  title: string;
  description: string;
  sections: CurriculumSection[];
}

export interface CurriculumStrand {
  id: string;
  name: string; // e.g., "Number and Algebra"
  chapters: CurriculumChapter[];
}

export interface YearLevelCurriculum {
  yearLevel: number;
  subject: 'maths' | 'english';
  strands: CurriculumStrand[];
}

export interface ExamQuestion extends Question {
  sectionId: string;
  sectionTitle: string;
  chapterId: string;
}

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  sectionBreakdown: {
    sectionId: string;
    sectionTitle: string;
    correct: number;
    total: number;
    needsRevision: boolean;
  }[];
  recommendedSections: string[];
}

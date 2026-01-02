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
import { year3Maths } from './year3-data';
import { year4Maths } from './year4-data';
import { year5Maths } from './year5-data';
import { year6Maths } from './year6-data';
export declare function getCurriculum(yearLevel: number): YearLevelCurriculum | null;
export declare function getAvailableYearLevels(): number[];
export { year3Maths, year4Maths, year5Maths, year6Maths };

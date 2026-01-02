import { YearLevelCurriculum } from '../types';
import { year3Maths } from './year3';
import { year4Maths } from './year4';
import { year5Maths } from './year5';
import { year6Maths } from './year6';

// Curriculum data by year level
export const mathsCurriculum: Record<number, YearLevelCurriculum> = {
  3: year3Maths,
  4: year4Maths,
  5: year5Maths,
  6: year6Maths,
};

// Get curriculum for a specific year level
export function getMathsCurriculum(yearLevel: number): YearLevelCurriculum | null {
  return mathsCurriculum[yearLevel] || null;
}

// Get available year levels
export function getAvailableMathsYearLevels(): number[] {
  return Object.keys(mathsCurriculum).map(Number).sort((a, b) => a - b);
}

export { year3Maths, year4Maths, year5Maths, year6Maths };

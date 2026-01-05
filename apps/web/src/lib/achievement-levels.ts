/**
 * Australian Curriculum Achievement Level System
 *
 * Maps student performance to Australian Curriculum achievement standards.
 * Uses a "dot" system with four levels aligned to curriculum expectations.
 */

export type AchievementLevel = 'exceeding' | 'achieving' | 'developing' | 'emerging'

export interface AchievementLevelInfo {
  level: AchievementLevel
  label: string
  description: string
  color: string
  bgColor: string
  borderColor: string
  dotColor: string
  emoji: string
}

/**
 * Determines achievement level based on percentage score
 * Aligned with Australian Curriculum standards
 */
export function getAchievementLevel(percentage: number): AchievementLevelInfo {
  if (percentage >= 85) {
    return {
      level: 'exceeding',
      label: 'Exceeding',
      description: 'Well above expected standard',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      dotColor: 'bg-green-600',
      emoji: '🌟'
    }
  } else if (percentage >= 65) {
    return {
      level: 'achieving',
      label: 'Achieving',
      description: 'At expected standard',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      dotColor: 'bg-blue-600',
      emoji: '✓'
    }
  } else if (percentage >= 45) {
    return {
      level: 'developing',
      label: 'Developing',
      description: 'Working towards standard',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      dotColor: 'bg-yellow-600',
      emoji: '→'
    }
  } else {
    return {
      level: 'emerging',
      label: 'Emerging',
      description: 'Beginning to develop skills',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      dotColor: 'bg-orange-600',
      emoji: '◐'
    }
  }
}

/**
 * Formats a score display with achievement level
 */
export function formatScoreWithLevel(score: number, total: number): {
  percentage: number
  achievement: AchievementLevelInfo
  display: string
} {
  const percentage = Math.round((score / total) * 100)
  const achievement = getAchievementLevel(percentage)

  return {
    percentage,
    achievement,
    display: `${score}/${total} (${percentage}%)`
  }
}

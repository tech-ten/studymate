'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { formatScoreWithLevel } from '@/lib/achievement-levels'
import { useState } from 'react'

export default function SampleReportPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('place-value')

  // Mock data for demonstration
  const mockChild = {
    name: 'Emma',
    avatar: '👧',
    yearLevel: 5
  }

  const mockQuizResults = [
    {
      strand: 'Number & Algebra',
      sections: [
        {
          id: 'place-value',
          title: 'Place Value',
          chapter: 'Number Sense',
          score: 9,
          total: 10,
          date: '2026-01-03',
          questions: [
            {
              question: 'What is the value of the digit 7 in the number 47,382?',
              options: ['7', '70', '700', '7,000'],
              userAnswer: 3,
              correctAnswer: 3,
              isCorrect: true
            },
            {
              question: 'Which number is equivalent to 5,000 + 300 + 20 + 8?',
              options: ['5,328', '53,208', '5,382', '50,328'],
              userAnswer: 0,
              correctAnswer: 0,
              isCorrect: true
            },
            {
              question: 'Round 34,567 to the nearest thousand.',
              options: ['30,000', '34,000', '35,000', '40,000'],
              userAnswer: 2,
              correctAnswer: 2,
              isCorrect: true
            },
            {
              question: 'What is 82,345 written in words?',
              options: [
                'Eighty-two thousand, three hundred and forty-five',
                'Eight thousand, two hundred and thirty-four',
                'Eighty-two hundred and thirty-four',
                'Eight hundred and twenty-three thousand'
              ],
              userAnswer: 0,
              correctAnswer: 0,
              isCorrect: true
            },
            {
              question: 'Which of these numbers is the largest?',
              options: ['78,234', '87,432', '78,432', '87,234'],
              userAnswer: 1,
              correctAnswer: 1,
              isCorrect: true
            },
            {
              question: 'What is the digit in the tens place in 56,421?',
              options: ['1', '2', '4', '5'],
              userAnswer: 1,
              correctAnswer: 1,
              isCorrect: true
            },
            {
              question: 'Write 90,000 + 4,000 + 200 + 30 + 6 as a number.',
              options: ['94,236', '940,236', '94,260', '9,4236'],
              userAnswer: 0,
              correctAnswer: 0,
              isCorrect: true
            },
            {
              question: 'What is 45,678 rounded to the nearest hundred?',
              options: ['45,600', '45,700', '46,000', '45,000'],
              userAnswer: 0,
              correctAnswer: 1,
              isCorrect: false
            },
            {
              question: 'Which number comes next in the sequence: 23,000, 24,000, 25,000, ___?',
              options: ['25,100', '26,000', '30,000', '25,001'],
              userAnswer: 1,
              correctAnswer: 1,
              isCorrect: true
            },
            {
              question: 'What is 100,000 - 1?',
              options: ['99,999', '99,000', '90,999', '100,001'],
              userAnswer: 0,
              correctAnswer: 0,
              isCorrect: true
            }
          ]
        },
        { id: 'addition', title: 'Addition & Subtraction', chapter: 'Operations', score: 8, total: 10, date: '2026-01-02' },
        { id: 'multiplication', title: 'Multiplication', chapter: 'Operations', score: 7, total: 10, date: '2025-12-28' },
        { id: 'fractions', title: 'Fractions', chapter: 'Fractions & Decimals', score: 6, total: 10, date: '2025-12-20' },
      ]
    },
    {
      strand: 'Measurement & Geometry',
      sections: [
        { id: 'length', title: 'Length & Perimeter', chapter: 'Measurement', score: 8, total: 10, date: '2025-12-15' },
        { id: 'area', title: 'Area', chapter: 'Measurement', score: 5, total: 10, date: '2025-12-10' },
        { id: 'angles', title: 'Angles', chapter: 'Geometry', score: 7, total: 10, date: '2025-12-05' },
      ]
    }
  ]

  const mockStats = {
    totalQuestions: 70,
    accuracy: 74,
    currentStreak: 5,
    badges: { earned: 8, total: 12 }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="10/10 Good" width={120} height={40} className="h-8 w-auto" />
            <span className="text-lg font-semibold">Grade My Child</span>
          </Link>
          <Link href="/get-started" className="text-sm text-neutral-500 hover:text-black transition-colors">
            Get Started →
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Demo Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="text-2xl">📊</div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Sample Report - Demo Data</h3>
              <p className="text-sm text-blue-700 mb-3">
                This is an example of what you'll see when tracking your child's progress.
                The data shown below is for demonstration purposes only.
              </p>
              <Link href="/get-started">
                <Button className="rounded-full px-6 h-9 text-sm">
                  Start Tracking Your Child's Progress
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-5xl">{mockChild.avatar}</span>
          <div>
            <h1 className="text-2xl font-semibold">{mockChild.name}'s Progress Report</h1>
            <p className="text-neutral-500">Year {mockChild.yearLevel} • Mathematics</p>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="border border-neutral-200 rounded-xl p-5">
            <div className="text-2xl font-semibold mb-1">
              {mockStats.totalQuestions}
            </div>
            <div className="text-sm text-neutral-500">Questions</div>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5">
            <div className="text-2xl font-semibold mb-1">
              {mockStats.accuracy}%
            </div>
            <div className="text-sm text-neutral-500">Accuracy</div>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5">
            <div className="text-2xl font-semibold mb-1">
              {mockStats.currentStreak}
            </div>
            <div className="text-sm text-neutral-500">Day streak</div>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5">
            <div className="text-2xl font-semibold mb-1">
              {mockStats.badges.earned}/{mockStats.badges.total}
            </div>
            <div className="text-sm text-neutral-500">Badges</div>
          </div>
        </div>

        {/* Achievement Level Legend */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold mb-4">Australian Curriculum Achievement Levels</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-600" />
              <div>
                <div className="text-sm font-medium text-green-700">Exceeding</div>
                <div className="text-xs text-neutral-500">≥85% correct</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <div>
                <div className="text-sm font-medium text-blue-700">Achieving</div>
                <div className="text-xs text-neutral-500">≥65% correct</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-yellow-600" />
              <div>
                <div className="text-sm font-medium text-yellow-700">Developing</div>
                <div className="text-xs text-neutral-500">≥45% correct</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-600" />
              <div>
                <div className="text-sm font-medium text-orange-700">Emerging</div>
                <div className="text-xs text-neutral-500">&lt;45% correct</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-600 border-t border-neutral-200 pt-4">
            <strong>Note:</strong> In the full report, you can click on any section to drill down and see
            the individual questions, your child's answers, and the correct solutions.
          </p>
        </div>

        {/* Quiz Results by Topic */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Quiz Results by Topic</h2>
          <div className="space-y-4">
            {mockQuizResults.map((strand, strandIdx) => (
              <div key={strandIdx} className="border border-neutral-200 rounded-xl overflow-hidden">
                <div className="bg-neutral-50 px-5 py-3 border-b border-neutral-200">
                  <h3 className="font-medium">{strand.strand}</h3>
                  <p className="text-sm text-neutral-500">
                    {strand.sections.length} sections completed
                  </p>
                </div>
                <div className="divide-y divide-neutral-100">
                  {strand.sections.map((section, sectionIdx) => {
                    const scoreData = formatScoreWithLevel(section.score, section.total)
                    const percentage = scoreData.percentage
                    const isExpanded = expandedSection === section.id
                    const hasQuestions = section.questions && section.questions.length > 0

                    return (
                      <div key={sectionIdx}>
                        <button
                          onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                          className="w-full px-5 py-4 hover:bg-neutral-50 transition-colors text-left"
                          disabled={!hasQuestions}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                {section.title}
                                {hasQuestions && (
                                  <svg
                                    className={`w-4 h-4 text-neutral-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                )}
                              </div>
                              <div className="text-sm text-neutral-500">
                                {section.chapter} • {new Date(section.date).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${scoreData.achievement.dotColor}`}
                                   title={scoreData.achievement.description} />
                              <div className="text-right">
                                <div className={`text-lg font-semibold ${scoreData.achievement.color}`}>
                                  {section.score}/{section.total}
                                </div>
                                <div className="text-xs text-neutral-500">
                                  {scoreData.achievement.label}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Progress bar with achievement level markers */}
                          <div className="relative">
                            {/* Background bar */}
                            <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                              {/* Filled progress */}
                              <div
                                className={`h-full ${scoreData.achievement.dotColor.replace('bg-', 'bg-')} transition-all`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>

                            {/* Achievement level markers */}
                            <div className="absolute top-0 left-0 right-0 h-2 flex items-center">
                              {/* Emerging threshold (0%) */}
                              <div className="absolute" style={{ left: '0%' }}>
                                <div className="w-0.5 h-3 bg-neutral-300" />
                              </div>

                              {/* Developing threshold (45%) */}
                              <div className="absolute" style={{ left: '45%' }}>
                                <div className="w-0.5 h-3 bg-neutral-400" />
                              </div>

                              {/* Achieving threshold (65%) */}
                              <div className="absolute" style={{ left: '65%' }}>
                                <div className="w-0.5 h-3 bg-neutral-500" />
                              </div>

                              {/* Exceeding threshold (85%) */}
                              <div className="absolute" style={{ left: '85%' }}>
                                <div className="w-0.5 h-3 bg-neutral-600" />
                              </div>
                            </div>

                            {/* Level labels */}
                            <div className="flex justify-between mt-1 text-[10px] text-neutral-400">
                              <span>Emerging</span>
                              <span>Developing</span>
                              <span>Achieving</span>
                              <span>Exceeding</span>
                            </div>
                          </div>
                        </button>

                        {/* Expanded question details */}
                        {isExpanded && hasQuestions && (
                          <div className="px-5 pb-4 bg-neutral-50">
                            <div className="space-y-3">
                              {section.questions!.map((q, qIdx) => (
                                <div key={qIdx} className="bg-white border border-neutral-200 rounded-lg p-4">
                                  <div className="flex items-start gap-3 mb-3">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                      q.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                      {q.isCorrect ? '✓' : '✗'}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-medium text-sm mb-2">Question {qIdx + 1}</div>
                                      <div className="text-sm mb-3">{q.question}</div>
                                      <div className="space-y-2">
                                        {q.options.map((option, optIdx) => {
                                          const isUserAnswer = optIdx === q.userAnswer
                                          const isCorrectAnswer = optIdx === q.correctAnswer

                                          return (
                                            <div
                                              key={optIdx}
                                              className={`text-sm px-3 py-2 rounded-lg border ${
                                                isCorrectAnswer
                                                  ? 'bg-green-50 border-green-200 text-green-800'
                                                  : isUserAnswer && !q.isCorrect
                                                  ? 'bg-red-50 border-red-200 text-red-800'
                                                  : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                                              }`}
                                            >
                                              <span className="font-medium">{String.fromCharCode(65 + optIdx)}.</span> {option}
                                              {isCorrectAnswer && <span className="ml-2 text-xs">(Correct)</span>}
                                              {isUserAnswer && !q.isCorrect && <span className="ml-2 text-xs">(Your answer)</span>}
                                            </div>
                                          )
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-2 border-black rounded-xl p-8 text-center bg-neutral-50">
          <h2 className="text-2xl font-semibold mb-3">Ready to track your child's progress?</h2>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            Get instant, curriculum-aligned reports like this for your own children.
            Start with 2 free profiles and 20 questions per day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="rounded-full px-8">
                Start Free Now
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

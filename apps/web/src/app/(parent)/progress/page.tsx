'use client'

import { useState, useEffect, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { getChildren, getDetailedStats, getBadges, getSectionQuizzes, getSubscriptionStatus, type Child, type DetailedStats, type Badge, type SectionQuizResult } from '@/lib/api'
import { isAuthenticatedSync } from '@/lib/auth'
import { getCurriculum, type YearLevelCurriculum } from '../../(student)/curriculum/curriculum-data'
import { formatScoreWithLevel } from '@/lib/achievement-levels'

// Use API types
type SectionProgress = SectionQuizResult

function DetailedProgressContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const childId = searchParams.get('child')

  const [child, setChild] = useState<Child | null>(null)
  const [stats, setStats] = useState<DetailedStats | null>(null)
  const [badges, setBadges] = useState<{ earned: number; total: number; badges: Badge[] } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sectionProgress, setSectionProgress] = useState<Record<string, SectionProgress>>({})
  const [curriculum, setCurriculum] = useState<YearLevelCurriculum | null>(null)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [userTier, setUserTier] = useState<string>('free')

  useEffect(() => {
    if (!isAuthenticatedSync()) {
      router.push('/login')
      return
    }
    if (childId) {
      loadData()
    } else {
      setError('No child specified')
      setLoading(false)
    }
  }, [router, childId])

  const loadData = async () => {
    if (!childId) return
    try {
      const [childrenRes, statsRes, badgesRes, quizzesRes, subscriptionRes] = await Promise.all([
        getChildren(),
        getDetailedStats(childId).catch(() => null),
        getBadges(childId).catch(() => null),
        getSectionQuizzes(childId).catch(() => null),
        getSubscriptionStatus().catch(() => null),
      ])

      // Set user tier for feature gating
      if (subscriptionRes) {
        setUserTier(subscriptionRes.tier)
      }

      const found = childrenRes.children.find(c => c.id === childId)
      if (found) {
        setChild(found)
        // Load curriculum for child's year level
        const curriculumData = getCurriculum(found.yearLevel)
        if (curriculumData) {
          setCurriculum(curriculumData)
        }
        // Load section progress from API
        if (quizzesRes?.quizzes) {
          setSectionProgress(quizzesRes.quizzes)
        }
      } else {
        setError('Child not found')
      }

      if (statsRes) setStats(statsRes)
      if (badgesRes) setBadges(badgesRes)
    } catch (err) {
      setError('Failed to load progress data')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-12 text-neutral-400">Loading progress...</div>
  }

  if (!child) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-6">{error || 'Child not found'}</p>
        <Link href="/dashboard">
          <Button className="rounded-full px-6">Back to Dashboard</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-5xl">{child.avatar}</span>
        <div>
          <h1 className="text-2xl font-semibold">{child.name}'s Progress</h1>
          <p className="text-neutral-500">Year {child.yearLevel}</p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="border border-neutral-200 rounded-xl p-5">
          <div className="text-2xl font-semibold mb-1">
            {stats?.totalXp?.toLocaleString() || 0}
          </div>
          <div className="text-sm text-neutral-500">Total XP</div>
        </div>
        <div className="border border-neutral-200 rounded-xl p-5">
          <div className="text-2xl font-semibold mb-1">
            {stats?.overallAccuracy || 0}%
          </div>
          <div className="text-sm text-neutral-500">Accuracy</div>
        </div>
        <div className="border border-neutral-200 rounded-xl p-5">
          <div className="text-2xl font-semibold mb-1">
            {stats?.currentStreak || 0}
          </div>
          <div className="text-sm text-neutral-500">Day streak</div>
        </div>
        <div className="border border-neutral-200 rounded-xl p-5">
          <div className="text-2xl font-semibold mb-1">
            {badges?.earned || 0}/{badges?.total || 0}
          </div>
          <div className="text-sm text-neutral-500">Badges</div>
        </div>
      </div>

      {/* Subject Stats */}
      {stats?.subjectStats && stats.subjectStats.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Subject Progress</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {stats.subjectStats.map(subject => (
              <div key={subject.subject} className="border border-neutral-200 rounded-xl p-6">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold">
                    {subject.subject.charAt(0).toUpperCase() + subject.subject.slice(1)}
                  </h3>
                  <span className="text-lg font-semibold">
                    Level {subject.level}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">XP earned</span>
                    <span className="font-medium">{subject.xp.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Accuracy</span>
                    <span className="font-medium">{subject.accuracy}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">This week</span>
                    <span className="font-medium">{subject.questionsThisWeek} questions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section-level Progress */}
      {curriculum && Object.keys(sectionProgress).length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Quiz Results by Topic</h2>
          <div className="space-y-4">
            {curriculum.strands.map(strand => {
              const strandSections = strand.chapters.flatMap(ch => ch.sections)
              const completedSections = strandSections.filter(s => sectionProgress[s.id]?.completed)
              if (completedSections.length === 0) return null

              return (
                <div key={strand.id} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <div className="bg-neutral-50 px-5 py-3 border-b border-neutral-200">
                    <h3 className="font-medium">{strand.name}</h3>
                    <p className="text-sm text-neutral-500">
                      {completedSections.length} of {strandSections.length} sections completed
                    </p>
                  </div>
                  <div className="divide-y divide-neutral-100">
                    {strand.chapters.map(chapter =>
                      chapter.sections
                        .filter(section => sectionProgress[section.id]?.completed)
                        .map(section => {
                          const progress = sectionProgress[section.id]
                          const scoreData = formatScoreWithLevel(progress.score, progress.totalQuestions)
                          const isExpanded = expandedSection === section.id

                          // Scholar tier users cannot expand (drill-down locked)
                          const canExpand = userTier === 'achiever'

                          return (
                            <div key={section.id}>
                              <button
                                onClick={() => canExpand && setExpandedSection(isExpanded ? null : section.id)}
                                className={`w-full px-5 py-4 transition-colors text-left ${canExpand ? 'hover:bg-neutral-50' : 'cursor-default'}`}
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <div>
                                    <div className="font-medium">{section.title}</div>
                                    <div className="text-sm text-neutral-500">
                                      {chapter.title} • {new Date(progress.lastAttempt).toLocaleDateString()}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    {/* Achievement Level Indicator */}
                                    <div className="flex items-center gap-3">
                                      <div className={`w-3 h-3 rounded-full ${scoreData.achievement.dotColor}`} title={scoreData.achievement.description} />
                                      <div className="text-right">
                                        <div className={`text-lg font-semibold ${scoreData.achievement.color}`}>
                                          {progress.score}/{progress.totalQuestions}
                                        </div>
                                        <div className="text-xs text-neutral-500">
                                          {scoreData.achievement.label}
                                        </div>
                                      </div>
                                    </div>
                                    {!canExpand ? (
                                      <span className="text-lg" title="Upgrade to Achiever for detailed drill-down">🔒</span>
                                    ) : (
                                      <svg
                                        className={`w-5 h-5 text-neutral-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    )}
                                  </div>
                                </div>

                                {/* Progress bar with achievement level markers */}
                                <div className="relative pr-10">
                                  {/* Background bar */}
                                  <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                                    {/* Filled progress */}
                                    <div
                                      className={`h-full ${scoreData.achievement.dotColor} transition-all`}
                                      style={{ width: `${scoreData.percentage}%` }}
                                    />
                                  </div>

                                  {/* Achievement level markers */}
                                  <div className="absolute top-0 left-0 right-10 h-2 flex items-center">
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
                                  <div className="flex justify-between mt-1 text-[10px] text-neutral-400 pr-10">
                                    <span>Emerging</span>
                                    <span>Developing</span>
                                    <span>Achieving</span>
                                    <span>Exceeding</span>
                                  </div>
                                </div>
                              </button>

                              {/* Expanded question details - locked for non-Achiever tiers */}
                              {isExpanded && progress.answers && (
                                canExpand ? (
                                  <div className="px-5 pb-4 bg-neutral-50">
                                    <div className="space-y-3">
                                    {progress.answers.map((answer, idx) => (
                                      <div
                                        key={idx}
                                        className={`p-3 rounded-lg ${
                                          answer.isCorrect
                                            ? 'bg-green-50 border border-green-200'
                                            : 'bg-red-50 border border-red-200'
                                        }`}
                                      >
                                        <div className="flex items-start gap-2">
                                          <span className={`text-sm ${answer.isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                                            {answer.isCorrect ? '✓' : '✗'}
                                          </span>
                                          <div className="flex-1 text-sm">
                                            <div className="font-medium mb-1">{answer.questionText}</div>
                                            <div className={answer.isCorrect ? 'text-green-700' : 'text-red-600'}>
                                              Answer: {String.fromCharCode(65 + answer.userAnswer)}. {answer.options[answer.userAnswer]}
                                            </div>
                                            {!answer.isCorrect && (
                                              <div className="text-green-700 mt-1">
                                                Correct: {String.fromCharCode(65 + answer.correctAnswer)}. {answer.options[answer.correctAnswer]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  </div>
                                ) : (
                                  // Lock UI for Scholar/Free tier users
                                  <div className="px-5 pb-4 bg-neutral-50">
                                    <div className="p-6 border border-neutral-200 rounded-xl bg-white text-center">
                                      <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-100 rounded-full mb-3">
                                        🔒
                                      </div>
                                      <h3 className="font-semibold mb-1">Drill-down locked</h3>
                                      <p className="text-sm text-neutral-600 mb-4">
                                        {userTier === 'scholar'
                                          ? 'Upgrade to Achiever to see individual question breakdowns and detailed reports.'
                                          : 'Upgrade to see detailed question breakdowns.'}
                                      </p>
                                      <Link href="/pricing">
                                        <Button className="rounded-full">
                                          Upgrade to Achiever
                                        </Button>
                                      </Link>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          )
                        })
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Badges */}
      {badges && badges.badges.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Badges</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {badges.badges.map(badge => (
              <div
                key={badge.id}
                className={`text-center p-4 rounded-xl border-2 transition-all ${
                  badge.earned
                    ? 'border-black bg-neutral-50'
                    : 'border-neutral-100 opacity-40'
                }`}
              >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <div className="font-medium text-xs">{badge.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No data message */}
      {!stats?.subjectStats?.length && !badges?.badges?.length && (
        <div className="border border-neutral-200 rounded-xl p-10 text-center">
          <h2 className="text-xl font-semibold mb-2">No progress yet</h2>
          <p className="text-neutral-500 mb-6">
            {child.name} hasn't started learning yet. Complete a benchmark test to begin!
          </p>
          <Link href={`/benchmark?child=${childId}&subject=maths`}>
            <Button className="rounded-full px-6">Start Benchmark</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default function DetailedProgressPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">
            Grade My Child
          </Link>
          <Link href="/dashboard" className="text-sm text-neutral-500 hover:text-black transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Suspense fallback={<div className="text-center text-neutral-400">Loading...</div>}>
          <DetailedProgressContent />
        </Suspense>
      </div>
    </main>
  )
}

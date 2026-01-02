'use client'

import { useState, useEffect, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  getChildren,
  getParentReport,
  getChildWeaknesses,
  getDailyStats,
  getConceptMastery,
  getSubscriptionStatus,
  type Child,
  type ParentReportResponse,
  type WeaknessesResponse,
  type DailyStatsResponse,
  type ConceptMasteryItem,
  type SubscriptionStatus,
} from '@/lib/api'
import { isAuthenticatedSync } from '@/lib/auth'

function AnalyticsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const childId = searchParams.get('child')

  const [child, setChild] = useState<Child | null>(null)
  const [report, setReport] = useState<ParentReportResponse | null>(null)
  const [weaknesses, setWeaknesses] = useState<WeaknessesResponse | null>(null)
  const [dailyStats, setDailyStats] = useState<DailyStatsResponse | null>(null)
  const [concepts, setConcepts] = useState<ConceptMasteryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [period, setPeriod] = useState<'week' | 'month'>('week')
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null)

  useEffect(() => {
    if (!isAuthenticatedSync()) {
      router.push('/login')
      return
    }
    loadSubscription()
    if (childId) {
      loadData()
    } else {
      setError('No child specified')
      setLoading(false)
    }
  }, [router, childId])

  const loadSubscription = async () => {
    try {
      const status = await getSubscriptionStatus()
      setSubscription(status)
    } catch (err) {
      console.error('Failed to load subscription:', err)
    }
  }

  useEffect(() => {
    if (childId && !loading) {
      loadReport()
    }
  }, [period])

  const loadData = async () => {
    if (!childId) return
    try {
      const [childrenRes, reportRes, weaknessesRes, dailyRes, conceptsRes] = await Promise.all([
        getChildren(),
        getParentReport(childId, period).catch(() => null),
        getChildWeaknesses(childId).catch(() => null),
        getDailyStats(childId, period === 'month' ? 30 : 7).catch(() => null),
        getConceptMastery(childId).catch(() => null),
      ])

      const found = childrenRes.children.find(c => c.id === childId)
      if (found) {
        setChild(found)
      } else {
        setError('Child not found')
      }

      if (reportRes) setReport(reportRes)
      if (weaknessesRes) setWeaknesses(weaknessesRes)
      if (dailyRes) setDailyStats(dailyRes)
      if (conceptsRes?.concepts) setConcepts(conceptsRes.concepts)
    } catch (err) {
      console.error('Failed to load analytics:', err)
      setError('Failed to load analytics data')
    } finally {
      setLoading(false)
    }
  }

  const loadReport = async () => {
    if (!childId) return
    try {
      const [reportRes, dailyRes] = await Promise.all([
        getParentReport(childId, period),
        getDailyStats(childId, period === 'month' ? 30 : 7),
      ])
      if (reportRes) setReport(reportRes)
      if (dailyRes) setDailyStats(dailyRes)
    } catch (err) {
      console.error('Failed to load report:', err)
    }
  }

  if (loading) {
    return <div className="text-center py-12 text-neutral-400">Loading analytics...</div>
  }

  // Check if user has premium subscription (Scholar or Achiever)
  const hasPremium = subscription && (subscription.tier === 'scholar' || subscription.tier === 'achiever')

  if (!hasPremium) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="text-6xl mb-6">📊</div>
        <h1 className="text-3xl font-semibold mb-4">Learning Analytics</h1>
        <p className="text-lg text-neutral-600 mb-8">
          Unlock detailed insights into your child's learning journey with our Premium Analytics Dashboard.
        </p>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-purple-900">Premium Analytics Features</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-lg">✓</span>
              <div>
                <div className="font-medium">Concept Mastery Tracking</div>
                <div className="text-sm text-neutral-600">See exactly which concepts your child has mastered vs needs work</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-lg">✓</span>
              <div>
                <div className="font-medium">Error Pattern Detection</div>
                <div className="text-sm text-neutral-600">Identify recurring mistakes like "always rounds down when should round up"</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-lg">✓</span>
              <div>
                <div className="font-medium">Daily Activity Charts</div>
                <div className="text-sm text-neutral-600">Track study habits, time spent, and accuracy trends</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-lg">✓</span>
              <div>
                <div className="font-medium">Personalised Recommendations</div>
                <div className="text-sm text-neutral-600">Get specific suggestions for what to focus on next</div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/pricing">
          <Button size="lg" className="rounded-full px-8">
            Upgrade to Scholar - $5/month
          </Button>
        </Link>
        <p className="text-sm text-neutral-500 mt-4">
          Includes unlimited questions, AI explanations, and full analytics access
        </p>
      </div>
    )
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

  // Status colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
      case 'mastered':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'good':
      case 'progressing':
        return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'needs-attention':
      case 'needs-practice':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'struggling':
        return 'text-red-600 bg-red-50 border-red-200'
      default:
        return 'text-neutral-600 bg-neutral-50 border-neutral-200'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving':
        return <span className="text-green-500">↑</span>
      case 'declining':
        return <span className="text-red-500">↓</span>
      default:
        return <span className="text-neutral-400">→</span>
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{child.avatar}</span>
          <div>
            <h1 className="text-2xl font-semibold">{child.name}'s Learning Analytics</h1>
            <p className="text-neutral-500">Year {child.yearLevel} - Detailed Insights</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant={period === 'week' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full"
            onClick={() => setPeriod('week')}
          >
            This Week
          </Button>
          <Button
            variant={period === 'month' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full"
            onClick={() => setPeriod('month')}
          >
            This Month
          </Button>
        </div>
      </div>

      {/* Summary Banner */}
      {report && (
        <div className={`rounded-xl p-6 mb-8 border ${getStatusColor(report.summary.overallProgress)}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">
              {report.summary.overallProgress === 'excellent' ? '🌟' :
               report.summary.overallProgress === 'good' ? '👍' :
               report.summary.overallProgress === 'needs-attention' ? '📚' : '💪'}
            </span>
            <div>
              <h2 className="text-lg font-semibold">{report.summary.headline}</h2>
              <p className="text-sm opacity-80">
                Overall Status: {report.summary.overallProgress.replace('-', ' ')}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {report.summary.keyInsights.map((insight, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/50">
                {insight}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Daily Activity Chart */}
      {dailyStats && dailyStats.stats.length > 0 && (
        <div className="border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Daily Activity</h2>
          <div className="flex items-end gap-2 h-32 mb-4">
            {dailyStats.stats.map((day, idx) => {
              const maxQuestions = Math.max(...dailyStats.stats.map(d => d.questionsAttempted), 1)
              const height = day.questionsAttempted > 0
                ? Math.max((day.questionsAttempted / maxQuestions) * 100, 10)
                : 4
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t-lg transition-all ${
                      day.questionsAttempted > 0
                        ? day.accuracy >= 70 ? 'bg-green-500' : day.accuracy >= 50 ? 'bg-yellow-500' : 'bg-red-400'
                        : 'bg-neutral-200'
                    }`}
                    style={{ height: `${height}%` }}
                    title={`${day.questionsAttempted} questions, ${day.accuracy}% accuracy`}
                  />
                  <span className="text-xs text-neutral-400">
                    {new Date(day.date).toLocaleDateString('en-AU', { weekday: 'short' }).slice(0, 2)}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="grid grid-cols-4 gap-4 pt-4 border-t border-neutral-100">
            <div>
              <div className="text-2xl font-semibold">{dailyStats.totals.totalQuestions}</div>
              <div className="text-sm text-neutral-500">Questions</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">{dailyStats.totals.overallAccuracy}%</div>
              <div className="text-sm text-neutral-500">Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">{dailyStats.totals.totalMinutes}</div>
              <div className="text-sm text-neutral-500">Minutes</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">{dailyStats.totals.daysActive}</div>
              <div className="text-sm text-neutral-500">Days Active</div>
            </div>
          </div>
        </div>
      )}

      {/* Weaknesses & Error Patterns */}
      {weaknesses && (weaknesses.weakConcepts.length > 0 || weaknesses.errorPatterns.length > 0) && (
        <div className="border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Areas Needing Attention</h2>

          {/* Weak Concepts */}
          {weaknesses.weakConcepts.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-neutral-500 mb-3">Struggling Concepts</h3>
              <div className="space-y-3">
                {weaknesses.weakConcepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border ${
                      concept.severity === 'critical'
                        ? 'bg-red-50 border-red-200'
                        : 'bg-yellow-50 border-yellow-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">
                          {concept.concept.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                          concept.severity === 'critical'
                            ? 'bg-red-200 text-red-700'
                            : 'bg-yellow-200 text-yellow-700'
                        }`}>
                          {concept.severity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${
                          concept.masteryScore < 40 ? 'text-red-600' : 'text-yellow-600'
                        }`}>
                          {concept.masteryScore}%
                        </span>
                        {getTrendIcon(concept.trend)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error Patterns */}
          {weaknesses.errorPatterns.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-neutral-500 mb-3">Recurring Mistakes</h3>
              <div className="space-y-3">
                {weaknesses.errorPatterns.map((pattern, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-orange-800">{pattern.description}</span>
                      <span className="text-sm text-orange-600">{pattern.occurrences}x</span>
                    </div>
                    <p className="text-sm text-orange-700 mb-2">
                      <strong>Suggested focus:</strong> {pattern.suggestedFocus}
                    </p>
                    {pattern.examples && pattern.examples.length > 0 && (
                      <details className="text-xs text-orange-600">
                        <summary className="cursor-pointer hover:text-orange-800">
                          View example mistakes
                        </summary>
                        <div className="mt-2 space-y-2">
                          {pattern.examples.slice(0, 2).map((ex, i) => (
                            <div key={i} className="bg-white/50 p-2 rounded">
                              <div className="font-medium">{ex.questionText}</div>
                              <div className="text-red-600">Answered: {ex.wrongAnswer}</div>
                              <div className="text-green-600">Correct: {ex.correctAnswer}</div>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          {weaknesses.summary && (
            <div className="mt-4 p-3 bg-neutral-100 rounded-lg text-sm text-neutral-600">
              {weaknesses.summary}
            </div>
          )}
        </div>
      )}

      {/* Concept Mastery Grid */}
      {concepts.length > 0 && (
        <div className="border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Concept Mastery Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {concepts.map((concept, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-neutral-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm">
                    {concept.concept.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${
                      concept.masteryScore >= 80 ? 'text-green-600' :
                      concept.masteryScore >= 60 ? 'text-blue-600' :
                      concept.masteryScore >= 40 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {concept.masteryScore}%
                    </span>
                    {getTrendIcon(concept.trend)}
                  </div>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      concept.masteryScore >= 80 ? 'bg-green-500' :
                      concept.masteryScore >= 60 ? 'bg-blue-500' :
                      concept.masteryScore >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${concept.masteryScore}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-neutral-500">
                  <span>{concept.totalAttempts} questions attempted</span>
                  <span>Avg {concept.avgTimeSeconds}s</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {report && report.recommendations.length > 0 && (
        <div className="border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Recommendations for Parents</h2>
          <div className="space-y-4">
            {report.recommendations.map((rec, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border-l-4 ${
                  rec.priority === 'high'
                    ? 'border-l-red-500 bg-red-50'
                    : rec.priority === 'medium'
                    ? 'border-l-yellow-500 bg-yellow-50'
                    : 'border-l-blue-500 bg-blue-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium">{rec.area}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    rec.priority === 'high'
                      ? 'bg-red-200 text-red-700'
                      : rec.priority === 'medium'
                      ? 'bg-yellow-200 text-yellow-700'
                      : 'bg-blue-200 text-blue-700'
                  }`}>
                    {rec.priority} priority
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-1">{rec.issue}</p>
                <p className="text-sm font-medium">{rec.suggestion}</p>
                <p className="text-xs text-neutral-500 mt-1">
                  Estimated time: {rec.estimatedTimeMinutes} minutes
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {report && report.achievements.length > 0 && (
        <div className="border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Recent Achievements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {report.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <span className="text-3xl">🏆</span>
                <div>
                  <div className="font-semibold text-green-800">{achievement.title}</div>
                  <div className="text-sm text-green-600">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No data message */}
      {!report && !weaknesses && concepts.length === 0 && (
        <div className="border border-neutral-200 rounded-xl p-10 text-center">
          <h2 className="text-xl font-semibold mb-2">No analytics data yet</h2>
          <p className="text-neutral-500 mb-6">
            {child.name} needs to complete some practice questions to generate analytics.
            Start with the Learn page to build up data for detailed insights.
          </p>
          <Link href="/learn">
            <Button className="rounded-full px-6">Start Learning</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">
            StudyMate
          </Link>
          <Link href="/dashboard" className="text-sm text-neutral-500 hover:text-black transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Suspense fallback={<div className="text-center text-neutral-400">Loading...</div>}>
          <AnalyticsContent />
        </Suspense>
      </div>
    </main>
  )
}

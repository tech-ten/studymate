'use client'

import { useState, useEffect, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { getChildProfile, isAuthenticatedSync } from '@/lib/auth'
import { getCurriculum, year5Maths, YearLevelCurriculum, Question, CurriculumSection } from '../curriculum/curriculum-data'

interface ChildProfile {
  id: string
  name: string
  avatar?: string
  yearLevel?: number
}

interface ExamQuestion extends Question {
  sectionId: string
  sectionTitle: string
  chapterId: string
  strandName: string
}

interface SectionResult {
  sectionId: string
  sectionTitle: string
  strandName: string
  correct: number
  total: number
  percentage: number
  needsRevision: boolean
}

interface ExamResult {
  totalQuestions: number
  correctAnswers: number
  percentage: number
  sectionBreakdown: SectionResult[]
  recommendedSections: string[]
  passed: boolean
}

// Generate exam questions from curriculum
function generateExamQuestions(curriculum: YearLevelCurriculum, questionCount: number = 20): ExamQuestion[] {
  const allQuestions: ExamQuestion[] = []

  for (const strand of curriculum.strands) {
    for (const chapter of strand.chapters) {
      for (const section of chapter.sections) {
        for (const question of section.questions) {
          allQuestions.push({
            ...question,
            sectionId: section.id,
            sectionTitle: section.title,
            chapterId: chapter.id,
            strandName: strand.name,
          })
        }
      }
    }
  }

  // Shuffle and select questions
  const shuffled = allQuestions.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(questionCount, shuffled.length))
}

// Calculate exam results with section breakdown
function calculateExamResult(
  questions: ExamQuestion[],
  answers: Record<string, number>
): ExamResult {
  const sectionResults: Record<string, { correct: number; total: number; title: string; strandName: string }> = {}

  let totalCorrect = 0

  for (const question of questions) {
    if (!sectionResults[question.sectionId]) {
      sectionResults[question.sectionId] = {
        correct: 0,
        total: 0,
        title: question.sectionTitle,
        strandName: question.strandName,
      }
    }
    sectionResults[question.sectionId].total++

    const userAnswer = answers[question.id]
    if (userAnswer === question.correctAnswer) {
      totalCorrect++
      sectionResults[question.sectionId].correct++
    }
  }

  const sectionBreakdown: SectionResult[] = Object.entries(sectionResults).map(([sectionId, data]) => ({
    sectionId,
    sectionTitle: data.title,
    strandName: data.strandName,
    correct: data.correct,
    total: data.total,
    percentage: Math.round((data.correct / data.total) * 100),
    needsRevision: data.correct / data.total < 0.6,
  }))

  const recommendedSections = sectionBreakdown
    .filter(s => s.needsRevision)
    .map(s => s.sectionId)

  const percentage = Math.round((totalCorrect / questions.length) * 100)

  return {
    totalQuestions: questions.length,
    correctAnswers: totalCorrect,
    percentage,
    sectionBreakdown,
    recommendedSections,
    passed: percentage >= 60,
  }
}

function ExamContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [childProfile, setChildProfile] = useState<ChildProfile | null>(null)
  const [examState, setExamState] = useState<'intro' | 'exam' | 'results'>('intro')
  const [examQuestions, setExamQuestions] = useState<ExamQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [examResult, setExamResult] = useState<ExamResult | null>(null)
  const [timeRemaining, setTimeRemaining] = useState(30 * 60) // 30 minutes in seconds
  const [timerActive, setTimerActive] = useState(false)

  useEffect(() => {
    const profile = getChildProfile()
    if (profile) {
      setChildProfile(profile)
    } else if (!isAuthenticatedSync()) {
      router.push('/child-login')
    }
  }, [router])

  // Timer countdown
  useEffect(() => {
    if (!timerActive || timeRemaining <= 0) return

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Time's up - auto submit
          handleFinishExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timerActive, timeRemaining])

  const yearLevel = childProfile?.yearLevel || 5
  const curriculum: YearLevelCurriculum = getCurriculum(yearLevel) || getCurriculum(5) || year5Maths

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleStartExam = () => {
    const questions = generateExamQuestions(curriculum, 20)
    setExamQuestions(questions)
    setExamState('exam')
    setTimerActive(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setAnswers({})
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setAnswers(prev => ({
      ...prev,
      [examQuestions[currentQuestionIndex].id]: answerIndex,
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(answers[examQuestions[currentQuestionIndex + 1]?.id] ?? null)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      setSelectedAnswer(answers[examQuestions[currentQuestionIndex - 1]?.id] ?? null)
    }
  }

  const handleFinishExam = () => {
    setTimerActive(false)
    const result = calculateExamResult(examQuestions, answers)
    setExamResult(result)
    setExamState('results')
  }

  const handleLogout = () => {
    localStorage.removeItem('selectedChild')
    localStorage.removeItem('childProfile')
    router.push('/child-login')
  }

  // Intro screen
  if (examState === 'intro') {
    return (
      <main className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 h-14 flex justify-between items-center">
            <Link href="/curriculum" className="text-sm text-neutral-500 hover:text-black">
              ← Back to Curriculum
            </Link>
            {childProfile && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">{childProfile.avatar || '👤'}</span>
                <span className="text-sm font-medium hidden sm:block">{childProfile.name}</span>
              </div>
            )}
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full mb-4">
              Cambridge-Style Assessment
            </span>
            <h1 className="text-3xl font-bold mb-4">Year {curriculum.yearLevel} Maths Exam</h1>
            <p className="text-neutral-500">
              Test your knowledge across all curriculum areas
            </p>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Exam Details</h2>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  20
                </span>
                Questions from across the curriculum
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  30
                </span>
                Minutes to complete
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  60
                </span>
                Percent needed to pass
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-2">Before you begin:</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• You can go back and change answers before submitting</li>
              <li>• The timer will start when you click "Start Exam"</li>
              <li>• You'll see which topics need more practice at the end</li>
            </ul>
          </div>

          <Button onClick={handleStartExam} className="w-full h-14 rounded-xl text-lg">
            Start Exam
          </Button>
        </div>
      </main>
    )
  }

  // Exam in progress
  if (examState === 'exam' && examQuestions.length > 0) {
    const currentQuestion = examQuestions[currentQuestionIndex]
    const answeredCount = Object.keys(answers).length

    return (
      <main className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 h-14 flex justify-between items-center">
            <div className="text-sm">
              <span className="font-medium">{answeredCount}</span>
              <span className="text-neutral-400"> / {examQuestions.length} answered</span>
            </div>
            <div className={`text-lg font-mono font-semibold ${timeRemaining < 300 ? 'text-red-600' : 'text-neutral-800'}`}>
              {formatTime(timeRemaining)}
            </div>
            {childProfile && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">{childProfile.avatar || '👤'}</span>
              </div>
            )}
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-neutral-500 mb-2">
              <span>Question {currentQuestionIndex + 1} of {examQuestions.length}</span>
              <span className="text-xs text-neutral-400">{currentQuestion.strandName}</span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestionIndex + 1) / examQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-semibold mb-8">{currentQuestion.question}</h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <span className="font-medium text-neutral-400 mr-3">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex-1 h-12 rounded-xl"
            >
              ← Previous
            </Button>

            {currentQuestionIndex < examQuestions.length - 1 ? (
              <Button
                onClick={handleNextQuestion}
                className="flex-1 h-12 rounded-xl"
              >
                Next →
              </Button>
            ) : (
              <Button
                onClick={handleFinishExam}
                className="flex-1 h-12 rounded-xl bg-green-600 hover:bg-green-700"
              >
                Finish Exam
              </Button>
            )}
          </div>

          {/* Question navigator */}
          <div className="mt-8 pt-8 border-t border-neutral-100">
            <h3 className="text-sm font-medium text-neutral-500 mb-3">Jump to question:</h3>
            <div className="flex flex-wrap gap-2">
              {examQuestions.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentQuestionIndex(i)
                    setSelectedAnswer(answers[q.id] ?? null)
                  }}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                    i === currentQuestionIndex
                      ? 'bg-purple-600 text-white'
                      : answers[q.id] !== undefined
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }

  // Results screen
  if (examState === 'results' && examResult) {
    return (
      <main className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 h-14 flex justify-between items-center">
            <span className="text-sm font-medium">Exam Complete</span>
            {childProfile && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">{childProfile.avatar || '👤'}</span>
                <span className="text-sm font-medium hidden sm:block">{childProfile.name}</span>
              </div>
            )}
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Overall Score */}
          <div className={`text-center p-8 rounded-2xl mb-8 ${examResult.passed ? 'bg-green-50' : 'bg-orange-50'}`}>
            <div className={`text-6xl font-bold mb-2 ${examResult.passed ? 'text-green-600' : 'text-orange-600'}`}>
              {examResult.percentage}%
            </div>
            <div className={`text-lg font-medium mb-1 ${examResult.passed ? 'text-green-700' : 'text-orange-700'}`}>
              {examResult.passed ? 'Well Done!' : 'Keep Practicing!'}
            </div>
            <div className="text-neutral-600">
              {examResult.correctAnswers} of {examResult.totalQuestions} correct
            </div>
          </div>

          {/* Section Breakdown */}
          <h2 className="text-xl font-semibold mb-4">Section Breakdown</h2>
          <div className="space-y-3 mb-8">
            {examResult.sectionBreakdown.map((section) => (
              <div
                key={section.sectionId}
                className={`p-4 rounded-xl border ${
                  section.needsRevision
                    ? 'border-red-200 bg-red-50'
                    : 'border-green-200 bg-green-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{section.sectionTitle}</div>
                    <div className="text-sm text-neutral-500">{section.strandName}</div>
                  </div>
                  <div className={`text-lg font-semibold ${
                    section.needsRevision ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {section.correct}/{section.total}
                  </div>
                </div>
                {section.needsRevision && (
                  <Link
                    href={`/curriculum?section=${section.sectionId}`}
                    className="inline-block mt-2 text-sm text-red-600 hover:underline"
                  >
                    Review this topic →
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Recommended Sections */}
          {examResult.recommendedSections.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-yellow-800 mb-2">Topics to Review</h3>
              <p className="text-sm text-yellow-700 mb-4">
                You scored below 60% in some areas. We recommend reviewing these sections:
              </p>
              <div className="space-y-2">
                {examResult.sectionBreakdown
                  .filter(s => s.needsRevision)
                  .map(section => (
                    <Link
                      key={section.sectionId}
                      href={`/curriculum`}
                      className="block p-3 bg-white rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <span className="font-medium">{section.sectionTitle}</span>
                      <span className="text-sm text-neutral-500 ml-2">({section.strandName})</span>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => {
                setExamState('intro')
                setTimeRemaining(30 * 60)
              }}
              className="flex-1 h-12 rounded-xl"
            >
              Try Again
            </Button>
            <Link href="/curriculum" className="flex-1">
              <Button className="w-full h-12 rounded-xl">
                Back to Curriculum
              </Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // Loading state
  return (
    <div className="min-h-screen flex items-center justify-center text-neutral-400">
      Loading exam...
    </div>
  )
}

export default function ExamPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-neutral-400">Loading exam...</div>}>
      <ExamContent />
    </Suspense>
  )
}

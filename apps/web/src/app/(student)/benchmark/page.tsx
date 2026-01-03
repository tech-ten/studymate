'use client'

import { useState, useEffect, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { startBenchmark, submitBenchmarkAnswer, type BenchmarkQuestion } from '@/lib/api'
import { getSelectedChild, setSelectedChild } from '@/lib/auth'

const TOTAL_QUESTIONS = 5

function BenchmarkContent() {
  const searchParams = useSearchParams()
  const subject = searchParams.get('subject') || 'maths'
  const childIdParam = searchParams.get('child')

  const [benchmarkId, setBenchmarkId] = useState<string | null>(null)
  const [childId, setChildIdState] = useState<string | null>(null)
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [difficulty, setDifficulty] = useState(5)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [finalLevel, setFinalLevel] = useState(5)
  const [answers, setAnswers] = useState<{ correct: boolean; difficulty: number }[]>([])
  const [question, setQuestion] = useState<BenchmarkQuestion | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const id = childIdParam || getSelectedChild()
    if (id) {
      setChildIdState(id)
      setSelectedChild(id)
    }
  }, [childIdParam])

  const fallbackQuestions: Record<number, BenchmarkQuestion> = {
    1: { id: 'bm-1', question: 'What is 2 + 3?', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: '2 + 3 = 5', difficulty: 1 },
    3: { id: 'bm-3', question: 'What is 15 - 8?', options: ['5', '6', '7', '8'], correctAnswer: 2, explanation: '15 - 8 = 7', difficulty: 3 },
    5: { id: 'bm-5', question: 'What is 7 x 6?', options: ['36', '42', '48', '49'], correctAnswer: 1, explanation: '7 x 6 = 42', difficulty: 5 },
    7: { id: 'bm-7', question: 'What is 144 / 12?', options: ['10', '11', '12', '13'], correctAnswer: 2, explanation: '144 / 12 = 12', difficulty: 7 },
    8: { id: 'bm-8', question: 'Solve: 2x + 5 = 13', options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'], correctAnswer: 1, explanation: '2x + 5 = 13, so 2x = 8, so x = 4', difficulty: 8 },
    10: { id: 'bm-10', question: 'What is the derivative of x squared?', options: ['x', '2x', 'x squared', '2x squared'], correctAnswer: 1, explanation: 'The derivative of x squared is 2x', difficulty: 10 },
  }

  const getFallbackQuestion = (diff: number): BenchmarkQuestion => {
    const levels = Object.keys(fallbackQuestions).map(Number)
    const closest = levels.reduce((prev, curr) =>
      Math.abs(curr - diff) < Math.abs(prev - diff) ? curr : prev
    )
    return fallbackQuestions[closest]
  }

  const currentQ = question || getFallbackQuestion(difficulty)

  const handleStart = async () => {
    if (!childId) {
      setError('No child selected. Please select a child first.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await startBenchmark(childId, subject)
      setBenchmarkId(response.benchmarkId)
      setQuestion(response.question)
      setDifficulty(response.question.difficulty)
      setStarted(true)
      setCurrentQuestion(0)
      setAnswers([])
    } catch (err) {
      console.error('Failed to start benchmark:', err)
      setStarted(true)
      setCurrentQuestion(0)
      setDifficulty(5)
      setAnswers([])
      setQuestion(getFallbackQuestion(5))
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async () => {
    if (selectedAnswer === null) return

    setLoading(true)

    try {
      if (benchmarkId) {
        const response = await submitBenchmarkAnswer(benchmarkId, {
          questionId: currentQ.id,
          answer: selectedAnswer,
        })

        setIsCorrect(response.correct)
        setShowResult(true)
        setAnswers([...answers, { correct: response.correct, difficulty }])

        if (response.completed) {
          setFinalLevel(response.finalLevel!)
          setCompleted(true)
        } else if (response.nextQuestion) {
          setQuestion(response.nextQuestion)
          setDifficulty(response.nextQuestion.difficulty)
        }
      } else {
        const correct = selectedAnswer === currentQ.correctAnswer
        setIsCorrect(correct)
        setShowResult(true)

        const newAnswers = [...answers, { correct, difficulty }]
        setAnswers(newAnswers)

        const newDiff = correct ? Math.min(difficulty + 1, 10) : Math.max(difficulty - 1, 1)

        if (currentQuestion + 1 >= TOTAL_QUESTIONS) {
          const correctAnswers = newAnswers.filter(a => a.correct)
          const avgDiff = correctAnswers.length > 0
            ? Math.round(correctAnswers.reduce((sum, a) => sum + a.difficulty, 0) / correctAnswers.length)
            : 1
          setFinalLevel(avgDiff)
          setCompleted(true)
        } else {
          setDifficulty(newDiff)
          setQuestion(getFallbackQuestion(newDiff))
        }
      }
    } catch (err) {
      console.error('Failed to submit answer:', err)
      const correct = selectedAnswer === currentQ.correctAnswer
      setIsCorrect(correct)
      setShowResult(true)
      setAnswers([...answers, { correct, difficulty }])
    } finally {
      setLoading(false)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Already transitioning - ignore
    if (transitioning) return

    // Block all interactions during transition
    setTransitioning(true)

    // Use requestAnimationFrame to ensure state updates are batched
    requestAnimationFrame(() => {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)

      // Allow answer selection after delay to prevent accidental clicks
      setTimeout(() => {
        setTransitioning(false)
      }, 500)
    })
  }

  if (!started) {
    return (
      <div className="w-full max-w-md px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-3">Benchmark Test</h1>
          <p className="text-neutral-500 mb-8">
            This quick {TOTAL_QUESTIONS}-question test will find your level in {subject === 'maths' ? 'Maths' : 'English'}.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {[
            'Takes about 5 minutes',
            'Questions adapt to your level',
            'Sets your starting point',
            'No pressure - just do your best',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              {item}
            </div>
          ))}
        </div>

        {error && (
          <div className="p-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl mb-4">
            {error}
          </div>
        )}

        <Button
          onClick={handleStart}
          className="w-full h-12 rounded-xl"
          disabled={loading}
        >
          {loading ? 'Starting...' : 'Start Benchmark'}
        </Button>
      </div>
    )
  }

  if (completed) {
    return (
      <div className="w-full max-w-md px-6 text-center">
        <h1 className="text-3xl font-semibold mb-3">Complete!</h1>
        <div className="text-6xl font-semibold my-8">
          Level {finalLevel}
        </div>
        <p className="text-neutral-500 mb-10">
          You're starting at Level {finalLevel} in {subject === 'maths' ? 'Maths' : 'English'}.
          This is roughly Year {finalLevel} standard.
        </p>
        <div className="space-y-3">
          <Link href="/learn" className="block">
            <Button className="w-full h-12 rounded-xl">
              Start Learning
            </Button>
          </Link>
          <Link href="/dashboard" className="block">
            <Button variant="outline" className="w-full h-12 rounded-xl">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl px-6">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-neutral-500 mb-3">
          <span>Question {currentQuestion + 1} of {TOTAL_QUESTIONS}</span>
          <span>Level {difficulty}</span>
        </div>
        <div className="w-full h-1 bg-neutral-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-black rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">{currentQ.question}</h2>

        <div className={`space-y-3 ${transitioning ? 'pointer-events-none opacity-50' : ''}`}>
          {currentQ.options.map((option, index) => (
            <button
              key={`${currentQuestion}-${index}`}
              onClick={() => !showResult && !transitioning && setSelectedAnswer(index)}
              disabled={showResult || transitioning}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                showResult
                  ? index === currentQ.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : index === selectedAnswer
                    ? 'border-red-500 bg-red-50'
                    : 'border-neutral-100'
                  : selectedAnswer === index
                  ? 'border-black bg-neutral-50'
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

        {showResult ? (
          <div className="space-y-4">
            <div
              className={`p-6 rounded-xl ${
                isCorrect ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
              }`}
            >
              <div className={`font-semibold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? 'Correct!' : 'Not quite right'}
              </div>
              <div className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {currentQ.explanation}
              </div>
            </div>
            <Button onClick={handleNext} className="w-full h-12 rounded-xl">
              {currentQuestion + 1 >= TOTAL_QUESTIONS ? 'See Results' : 'Next Question'}
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null || loading}
            className="w-full h-12 rounded-xl"
          >
            {loading ? 'Submitting...' : 'Submit Answer'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default function BenchmarkPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12">
      <Suspense fallback={<div className="text-neutral-400">Loading...</div>}>
        <BenchmarkContent />
      </Suspense>
    </main>
  )
}

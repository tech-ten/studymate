'use client'

import { useState, useEffect, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { getChildProfile, getSelectedChild, isAuthenticatedSync } from '@/lib/auth'
import ReactMarkdown from 'react-markdown'

// Import curriculum data and utilities
import { getCurriculum, getAvailableYearLevels, YearLevelCurriculum } from './curriculum-data'

interface ChildProfile {
  id: string
  name: string
  avatar?: string
  yearLevel?: number
}

function CurriculumContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [childProfile, setChildProfile] = useState<ChildProfile | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<'maths' | 'english'>('maths')
  const [selectedStrandId, setSelectedStrandId] = useState<string | null>(null)
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null)
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null)
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  useEffect(() => {
    const profile = getChildProfile()
    if (profile) {
      setChildProfile(profile)
    } else if (!isAuthenticatedSync()) {
      router.push('/child-login')
    }
  }, [router])

  // Get curriculum based on child's year level
  const availableYears = getAvailableYearLevels()
  const yearLevel = childProfile?.yearLevel || (availableYears[0] || 3)
  const curriculum = getCurriculum(yearLevel) || getCurriculum(availableYears[0]) as YearLevelCurriculum

  const selectedStrand = curriculum.strands.find(s => s.id === selectedStrandId)
  const selectedChapter = selectedStrand?.chapters.find(c => c.id === selectedChapterId)
  const selectedSection = selectedChapter?.sections.find(s => s.id === selectedSectionId)

  const handleStartQuiz = () => {
    setShowQuiz(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore({ correct: 0, total: 0 })
  }

  const handleAnswerSubmit = () => {
    if (!selectedSection || selectedAnswer === null) return

    const question = selectedSection.questions[currentQuestionIndex]
    const isCorrect = selectedAnswer === question.correctAnswer

    setShowResult(true)
    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }))
    }
  }

  const handleNextQuestion = () => {
    if (!selectedSection) return

    setScore(prev => ({ ...prev, total: prev.total + 1 }))

    if (currentQuestionIndex < selectedSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Quiz complete
      setShowQuiz(false)
      setScore(prev => ({ ...prev, total: prev.total + 1 }))
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('selectedChild')
    localStorage.removeItem('childProfile')
    router.push('/child-login')
  }

  // Section view with content
  if (selectedSection) {
    const currentQuestion = selectedSection.questions[currentQuestionIndex]

    return (
      <main className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 h-14 flex justify-between items-center">
            <button
              onClick={() => {
                if (showQuiz) {
                  setShowQuiz(false)
                } else {
                  setSelectedSectionId(null)
                }
              }}
              className="text-sm text-neutral-500 hover:text-black flex items-center gap-2"
            >
              ← Back
            </button>
            <span className="text-sm font-medium">{selectedSection.code}</span>
            {childProfile && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">{childProfile.avatar || '👤'}</span>
              </div>
            )}
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-8">
          {!showQuiz ? (
            <>
              {/* Section Header */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full mb-4">
                  {selectedSection.code}
                </span>
                <h1 className="text-3xl font-bold mb-4">{selectedSection.title}</h1>
                <p className="text-neutral-600 italic">{selectedSection.description}</p>
              </div>

              {/* Key Points */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-yellow-800 mb-3">Key Points to Remember</h3>
                <ul className="space-y-2">
                  {selectedSection.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-yellow-700">
                      <span className="text-yellow-500 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content */}
              <div className="prose prose-neutral max-w-none mb-8">
                <ReactMarkdown>{selectedSection.content}</ReactMarkdown>
              </div>

              {/* Examples */}
              {selectedSection.examples.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Worked Examples</h3>
                  <div className="space-y-4">
                    {selectedSection.examples.map((example, i) => (
                      <div key={i} className="bg-neutral-50 rounded-xl p-6">
                        <div className="font-medium mb-2">Problem: {example.problem}</div>
                        <div className="text-green-700 font-semibold mb-2">Solution: {example.solution}</div>
                        <div className="text-sm text-neutral-600">{example.explanation}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practice Quiz Button */}
              <div className="text-center py-8 border-t border-neutral-100">
                <h3 className="text-xl font-semibold mb-3">Ready to practice?</h3>
                <p className="text-neutral-500 mb-6">
                  Test your understanding with {selectedSection.questions.length} practice questions
                </p>
                <Button onClick={handleStartQuiz} className="rounded-full px-8">
                  Start Practice Quiz
                </Button>
              </div>
            </>
          ) : (
            /* Quiz Mode */
            <div className="py-8">
              <div className="text-center mb-8">
                <span className="text-sm text-neutral-500">
                  Question {currentQuestionIndex + 1} of {selectedSection.questions.length}
                </span>
                <div className="w-full bg-neutral-100 rounded-full h-2 mt-2">
                  <div
                    className="bg-black h-2 rounded-full transition-all"
                    style={{ width: `${((currentQuestionIndex + 1) / selectedSection.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-center mb-8">
                {currentQuestion.question}
              </h2>

              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showResult && setSelectedAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                      showResult
                        ? index === currentQuestion.correctAnswer
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
                  <div className={`p-6 rounded-xl ${
                    selectedAnswer === currentQuestion.correctAnswer
                      ? 'bg-green-50 border border-green-100'
                      : 'bg-red-50 border border-red-100'
                  }`}>
                    <div className={`font-semibold mb-2 ${
                      selectedAnswer === currentQuestion.correctAnswer ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Not quite right'}
                    </div>
                    <div className={`text-sm ${
                      selectedAnswer === currentQuestion.correctAnswer ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {currentQuestion.explanation}
                    </div>
                  </div>
                  <Button onClick={handleNextQuestion} className="w-full h-12 rounded-xl">
                    {currentQuestionIndex < selectedSection.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleAnswerSubmit}
                  disabled={selectedAnswer === null}
                  className="w-full h-12 rounded-xl"
                >
                  Submit Answer
                </Button>
              )}

              {/* Score display after quiz */}
              {!showQuiz && score.total > 0 && (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                  <p className="text-xl">
                    You scored {score.correct} out of {score.total}
                    ({Math.round((score.correct / score.total) * 100)}%)
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    )
  }

  // Chapter view with sections list
  if (selectedChapter) {
    return (
      <main className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 h-14 flex justify-between items-center">
            <button
              onClick={() => setSelectedChapterId(null)}
              className="text-sm text-neutral-500 hover:text-black flex items-center gap-2"
            >
              ← Back to Chapters
            </button>
            {childProfile && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">{childProfile.avatar || '👤'}</span>
                <span className="text-sm font-medium hidden sm:block">{childProfile.name}</span>
              </div>
            )}
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">{selectedChapter.title}</h1>
          <p className="text-neutral-500 mb-8">{selectedChapter.description}</p>

          <div className="space-y-4">
            {selectedChapter.sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setSelectedSectionId(section.id)}
                className="w-full p-6 text-left bg-white border border-neutral-200 rounded-xl hover:border-black hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-600 rounded mb-2">
                      {section.code}
                    </span>
                    <h3 className="text-lg font-semibold mb-1">{section.title}</h3>
                    <p className="text-sm text-neutral-500">{section.description}</p>
                  </div>
                  <div className="text-sm text-neutral-400">
                    {section.questions.length} questions →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    )
  }

  // Strand view with chapters list
  if (selectedStrand) {
    return (
      <main className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 h-14 flex justify-between items-center">
            <button
              onClick={() => setSelectedStrandId(null)}
              className="text-sm text-neutral-500 hover:text-black flex items-center gap-2"
            >
              ← Back to Strands
            </button>
            {childProfile && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">{childProfile.avatar || '👤'}</span>
                <span className="text-sm font-medium hidden sm:block">{childProfile.name}</span>
              </div>
            )}
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">{selectedStrand.name}</h1>
          <p className="text-neutral-500 mb-8">Year {curriculum.yearLevel} Mathematics</p>

          <div className="grid gap-4">
            {selectedStrand.chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapterId(chapter.id)}
                className="p-6 text-left bg-white border border-neutral-200 rounded-xl hover:border-black hover:shadow-sm transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{chapter.title}</h3>
                <p className="text-neutral-500 mb-3">{chapter.description}</p>
                <span className="text-sm text-neutral-400">
                  {chapter.sections.length} sections →
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>
    )
  }

  // Main curriculum view with strands
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">
            AgentsForm
          </Link>
          <div className="flex items-center gap-4">
            {childProfile && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">{childProfile.avatar || '👤'}</span>
                <span className="text-sm font-medium hidden sm:block">{childProfile.name}</span>
              </div>
            )}
            <Button variant="outline" size="sm" className="rounded-full" onClick={handleLogout}>
              Exit
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full mb-4">
            Victorian Curriculum
          </span>
          <h1 className="text-3xl font-bold mb-2">Year {curriculum.yearLevel} Curriculum</h1>
          <p className="text-neutral-500 mb-4">
            Learn at your own pace with structured lessons and practice
          </p>
          {/* Year level indicator */}
          <div className="flex justify-center gap-2 flex-wrap">
            {availableYears.map((year) => (
              <span
                key={year}
                className={`px-3 py-1 text-xs rounded-full ${
                  year === curriculum.yearLevel
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-400'
                }`}
              >
                Year {year}
              </span>
            ))}
          </div>
        </div>

        {/* Subject Selector */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedSubject('maths')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              selectedSubject === 'maths'
                ? 'bg-black text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Mathematics
          </button>
          <button
            onClick={() => setSelectedSubject('english')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              selectedSubject === 'english'
                ? 'bg-black text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            English (Coming Soon)
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <Link href="/learn">
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl hover:border-blue-300 transition-all cursor-pointer">
              <h3 className="font-semibold text-blue-900 mb-1">Practice Mode</h3>
              <p className="text-sm text-blue-700">Adaptive questions based on your level</p>
            </div>
          </Link>
          <Link href="/exam">
            <div className="p-6 bg-purple-50 border border-purple-100 rounded-xl hover:border-purple-300 transition-all cursor-pointer">
              <h3 className="font-semibold text-purple-900 mb-1">Take an Exam</h3>
              <p className="text-sm text-purple-700">Cambridge-style mixed assessment</p>
            </div>
          </Link>
        </div>

        {/* Strands */}
        <h2 className="text-xl font-semibold mb-4">Topics</h2>
        <div className="space-y-4">
          {curriculum.strands.map((strand) => {
            const totalSections = strand.chapters.reduce((acc, ch) => acc + ch.sections.length, 0)
            const totalQuestions = strand.chapters.reduce(
              (acc, ch) => acc + ch.sections.reduce((a, s) => a + s.questions.length, 0),
              0
            )

            return (
              <button
                key={strand.id}
                onClick={() => setSelectedStrandId(strand.id)}
                className="w-full p-6 text-left bg-white border border-neutral-200 rounded-xl hover:border-black hover:shadow-sm transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{strand.name}</h3>
                <div className="flex gap-4 text-sm text-neutral-500">
                  <span>{strand.chapters.length} chapters</span>
                  <span>•</span>
                  <span>{totalSections} lessons</span>
                  <span>•</span>
                  <span>{totalQuestions} questions</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default function CurriculumPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-neutral-400">Loading curriculum...</div>}>
      <CurriculumContent />
    </Suspense>
  )
}

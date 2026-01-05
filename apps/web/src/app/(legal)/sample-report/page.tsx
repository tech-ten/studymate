import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { formatScoreWithLevel } from '@/lib/achievement-levels'

export default function SampleReportPage() {
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
        { title: 'Place Value', chapter: 'Number Sense', score: 9, total: 10, date: '2026-01-03' },
        { title: 'Addition & Subtraction', chapter: 'Operations', score: 8, total: 10, date: '2026-01-02' },
        { title: 'Multiplication', chapter: 'Operations', score: 7, total: 10, date: '2025-12-28' },
        { title: 'Fractions', chapter: 'Fractions & Decimals', score: 6, total: 10, date: '2025-12-20' },
      ]
    },
    {
      strand: 'Measurement & Geometry',
      sections: [
        { title: 'Length & Perimeter', chapter: 'Measurement', score: 8, total: 10, date: '2025-12-15' },
        { title: 'Area', chapter: 'Measurement', score: 5, total: 10, date: '2025-12-10' },
        { title: 'Angles', chapter: 'Geometry', score: 7, total: 10, date: '2025-12-05' },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

                    return (
                      <div key={sectionIdx} className="px-5 py-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-medium">{section.title}</div>
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

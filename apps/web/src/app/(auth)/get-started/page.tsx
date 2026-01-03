'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function GetStartedPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    // Store email and proceed to plan selection
    sessionStorage.setItem('signup_email', email)
    router.push('/choose-plan')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Link href="/" className="text-lg font-semibold">
            StudyMate
          </Link>
          <h1 className="text-2xl font-semibold mt-8 mb-2">Get started</h1>
          <p className="text-neutral-500">
            Enter your email to begin
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>

          {error && (
            <div className="p-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 rounded-xl text-base"
            disabled={loading}
          >
            {loading ? 'Continue...' : 'Continue'}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-neutral-500">
          Already have an account?{' '}
          <Link href="/login" className="text-black font-medium hover:underline">
            Sign in
          </Link>
        </p>

        <div className="mt-10 pt-8 border-t border-neutral-100 text-center">
          <p className="text-sm text-neutral-500 mb-3">Is your child logging in?</p>
          <Link href="/child-login">
            <Button variant="outline" className="rounded-full px-6">
              Child Login (PIN)
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

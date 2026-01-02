'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { confirmSignUp, resendVerificationCode } from '@/lib/auth'

function VerifyForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''

  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (!email) {
      router.push('/register')
    }
  }, [email, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await confirmSignUp(email, code)
      setSuccess('Email verified! Redirecting to login...')
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    } catch (err) {
      console.error('Verification failed:', err)
      setError(err instanceof Error ? err.message : 'Verification failed. Please try again.')
      setLoading(false)
    }
  }

  const handleResend = async () => {
    setResending(true)
    setError(null)
    setSuccess(null)

    try {
      await resendVerificationCode(email)
      setSuccess('Verification code sent! Check your email.')
    } catch (err) {
      console.error('Resend failed:', err)
      setError(err instanceof Error ? err.message : 'Failed to resend code.')
    } finally {
      setResending(false)
    }
  }

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-10">
        <Link href="/" className="text-lg font-semibold">
          StudyMate
        </Link>
        <h1 className="text-2xl font-semibold mt-8 mb-2">Verify your email</h1>
        <p className="text-neutral-500">
          We sent a code to <span className="text-black">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="code" className="block text-sm font-medium mb-2">
            Verification code
          </label>
          <input
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
            required
            maxLength={6}
            className="w-full px-4 py-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-center text-2xl tracking-[0.5em] font-mono"
            placeholder="000000"
          />
        </div>

        {error && (
          <div className="p-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl">
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl">
            {success}
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-12 rounded-xl text-base"
          disabled={loading || code.length < 6}
        >
          {loading ? 'Verifying...' : 'Verify email'}
        </Button>
      </form>

      <div className="mt-8 text-center space-y-3">
        <p className="text-sm text-neutral-500">
          Didn't receive the code?{' '}
          <button
            onClick={handleResend}
            disabled={resending}
            className="text-black font-medium hover:underline disabled:opacity-50"
          >
            {resending ? 'Sending...' : 'Resend'}
          </button>
        </p>
        <p className="text-sm text-neutral-500">
          Wrong email?{' '}
          <Link href="/register" className="text-black font-medium hover:underline">
            Go back
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function VerifyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <Suspense fallback={<div className="text-neutral-400">Loading...</div>}>
        <VerifyForm />
      </Suspense>
    </main>
  )
}

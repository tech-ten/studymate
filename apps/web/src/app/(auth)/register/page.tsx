'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signUp } from '@/lib/auth'

function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlPlan = searchParams.get('plan') || 'scholar'
  const urlEmail = searchParams.get('email') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: urlEmail,
    password: '',
    confirmPassword: '',
  })
  const [plan, setPlan] = useState(urlPlan)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Also check sessionStorage for email from get-started flow
    const storedEmail = sessionStorage.getItem('signup_email')
    if (storedEmail && !urlEmail) {
      setFormData(prev => ({ ...prev, email: storedEmail }))
    }
    // Set plan from URL
    if (urlPlan) {
      setPlan(urlPlan)
      // Store plan in session for after verification
      sessionStorage.setItem('signup_plan', urlPlan)
    }
  }, [urlEmail, urlPlan])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    setError(null)

    try {
      await signUp({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        plan,
      })
      // Store plan for after verification
      sessionStorage.setItem('signup_plan', plan)
      router.push(`/verify?email=${encodeURIComponent(formData.email)}&plan=${plan}`)
    } catch (err) {
      console.error('Registration failed:', err)
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const planNames: Record<string, string> = {
    explorer: 'Explorer',
    scholar: 'Scholar',
    achiever: 'Achiever',
  }

  const planPrices: Record<string, string> = {
    explorer: '$0.99/month',
    scholar: '$5/month',
    achiever: '$12/month',
  }

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-10">
        <Link href="/" className="text-lg font-semibold">
          StudyMate
        </Link>
        <div className="mt-6 mb-2">
          <span className="inline-block px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full">
            Step 3 of 3
          </span>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Create your account</h1>

        {/* Selected plan display */}
        <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
          <p className="text-sm text-neutral-500 mb-1">Selected plan</p>
          <p className="font-semibold">{planNames[plan] || 'Scholar'}</p>
          <p className="text-sm text-neutral-500">{planPrices[plan] || '$5/month'}</p>
          <Link
            href="/choose-plan"
            className="text-xs text-blue-600 hover:underline mt-2 inline-block"
          >
            Change plan
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            autoFocus
            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-neutral-50"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="At least 8 characters"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength={8}
            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="Confirm your password"
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
          {loading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>

      <p className="mt-6 text-xs text-neutral-400 text-center">
        By creating an account, you agree to our{' '}
        <Link href="/terms" className="underline">Terms</Link> and{' '}
        <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>

      <p className="mt-8 text-center text-sm text-neutral-500">
        Already have an account?{' '}
        <Link href="/login" className="text-black font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <Suspense fallback={<div className="text-neutral-400">Loading...</div>}>
        <RegisterForm />
      </Suspense>
    </main>
  )
}

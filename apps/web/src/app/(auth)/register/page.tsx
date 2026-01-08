'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    free: 'Explorer',
    explorer: 'Explorer', // Backward compatibility
    scholar: 'Scholar',
    achiever: 'Achiever',
  }

  const planPrices: Record<string, string> = {
    free: 'Always Free',
    explorer: 'Always Free', // Backward compatibility
    scholar: '$5/month',
    achiever: '$12/month',
  }

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-10">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image src="/icon.png" alt="Grade My Child" width={40} height={40} className="w-10 h-10" />
          <span className="text-lg font-semibold">Grade My Child</span>
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

      {/* Google OAuth Button */}
      <button
        type="button"
        onClick={() => {
          const cognitoDomain = 'https://grademychild.auth.ap-southeast-2.amazoncognito.com'
          const clientId = '6sehatih95apslqtikic4sf39o'
          const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
          const responseType = 'code'
          const scope = 'email+openid+profile'

          window.location.href = `${cognitoDomain}/oauth2/authorize?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}&identity_provider=Google`
        }}
        className="w-full h-12 px-4 py-3 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-all flex items-center justify-center gap-3"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
          <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
          <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
          <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
        </svg>
        <span className="font-medium">Continue with Google</span>
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-neutral-500">Or create account with email</span>
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

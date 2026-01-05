'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth'
import { createCheckoutSession } from '@/lib/api'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect')
  const checkoutPlan = searchParams.get('checkout') // Plan to checkout after login
  const prefillEmail = searchParams.get('email') || ''

  const [email, setEmail] = useState(prefillEmail)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  useEffect(() => {
    if (prefillEmail) {
      setEmail(prefillEmail)
    }
  }, [prefillEmail])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { token } = await signIn(email, password)

      // If checkout param is present, go directly to Stripe checkout
      if (checkoutPlan && ['explorer', 'scholar', 'achiever'].includes(checkoutPlan)) {
        setCheckoutLoading(true)
        try {
          // Pass token directly to avoid race condition with session retrieval
          const result = await createCheckoutSession(checkoutPlan as 'explorer' | 'scholar' | 'achiever', token)
          // Redirect to Stripe checkout (same tab for better conversion)
          window.location.href = result.url
          return
        } catch (checkoutErr) {
          console.error('Checkout failed:', checkoutErr)
          // If checkout fails, fall back to pricing page
          router.push(`/pricing?plan=${checkoutPlan}`)
          return
        }
      }

      // Normal login flow
      router.push(redirect || '/dashboard')
    } catch (err) {
      console.error('Login failed:', err)
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const isCheckoutFlow = !!checkoutPlan

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/icon.png" alt="Grade My Child" width={40} height={40} className="w-10 h-10" />
            <span className="text-lg font-semibold">Grade My Child</span>
          </Link>
          <div className="mt-8 mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full">
              {isCheckoutFlow ? 'Almost there!' : 'Parent / Guardian'}
            </span>
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            {isCheckoutFlow ? 'Sign in to continue' : 'Welcome back'}
          </h1>
          <p className="text-neutral-500">
            {isCheckoutFlow
              ? 'Enter your password to complete setup'
              : "Sign in to manage your children's learning"
            }
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
              className={`w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${prefillEmail ? 'bg-neutral-50' : ''}`}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus={!!prefillEmail}
              className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="Enter your password"
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
            disabled={loading || checkoutLoading}
          >
            {checkoutLoading
              ? 'Redirecting to payment...'
              : loading
                ? 'Signing in...'
                : isCheckoutFlow
                  ? 'Continue to payment'
                  : 'Sign in'
            }
          </Button>
        </form>

        {!isCheckoutFlow && (
          <>
            <p className="mt-8 text-center text-sm text-neutral-500">
              Don't have an account?{' '}
              <Link
                href="/get-started"
                className="text-black font-medium hover:underline"
              >
                Sign up
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
          </>
        )}
      </div>
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-neutral-400">Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}

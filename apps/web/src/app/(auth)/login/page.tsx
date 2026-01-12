'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signIn, clearAllAuthState } from '@/lib/auth'
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

      // If checkout param is present, handle based on plan
      if (checkoutPlan) {
        // Free tier bypasses Stripe checkout entirely (supports both 'free' and 'explorer' for backward compatibility)
        if (checkoutPlan === 'free' || checkoutPlan === 'explorer') {
          router.push(redirect || '/dashboard')
          return
        }

        // Paid tiers (scholar, achiever) go through Stripe
        if (['scholar', 'achiever'].includes(checkoutPlan)) {
          setCheckoutLoading(true)
          try {
            // Pass token directly to avoid race condition with session retrieval
            const result = await createCheckoutSession(checkoutPlan as 'scholar' | 'achiever', token)
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

        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={() => {
            // Clear any existing auth data before OAuth redirect
            clearAllAuthState()

            const cognitoDomain = 'https://auth.grademychild.com.au'
            const clientId = '6sehatih95apslqtikic4sf39o'
            const redirectUri = encodeURIComponent(`${window.location.origin}/callback`)
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

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-neutral-500">Or sign in with email</span>
          </div>
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

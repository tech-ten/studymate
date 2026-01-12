'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { clearAllAuthState } from '@/lib/auth'

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
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/icon.png" alt="Grade My Child" width={40} height={40} className="w-10 h-10" />
            <span className="text-lg font-semibold">Grade My Child</span>
          </Link>
          <h1 className="text-2xl font-semibold mt-8 mb-2">Get started</h1>
          <p className="text-neutral-500">
            Create your account in seconds
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
            const oauthRedirectPage = `${window.location.origin}/oauth-redirect`

            // First logout from Cognito to clear any cached session,
            // then redirect to oauth-redirect page which initiates fresh OAuth flow
            window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(oauthRedirectPage)}`
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
            <span className="px-4 bg-white text-neutral-500">Or continue with email</span>
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

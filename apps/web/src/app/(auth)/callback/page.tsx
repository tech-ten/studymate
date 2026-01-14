'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function CallbackHandler() {
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)
  const [showError, setShowError] = useState(false)
  const hasRun = useRef(false)

  useEffect(() => {
    const handleCallback = async () => {
      // Prevent duplicate execution in React Strict Mode
      if (hasRun.current) return
      hasRun.current = true
      const code = searchParams.get('code')
      const errorParam = searchParams.get('error')
      const errorDescription = searchParams.get('error_description')
      const redirect = searchParams.get('redirect') // Preserve any redirect parameter

      // Handle OAuth errors (user cancelled, permissions denied, etc.)
      if (errorParam) {
        console.error('OAuth error:', errorParam, errorDescription)

        // Special handling: USER_LINKED_TO_EXISTING_ACCOUNT means the Google identity
        // was successfully linked to an existing email/password account.
        // We should automatically retry the OAuth flow - it will succeed now.
        if (errorDescription?.includes('USER_LINKED_TO_EXISTING_ACCOUNT')) {
          console.log('Account linked successfully, retrying OAuth...')
          // Set flag to show notification after successful login
          sessionStorage.setItem('accountLinked', 'true')
          // Redirect to OAuth flow again - this time it will work because the identity is linked
          const cognitoDomain = 'https://auth.grademychild.com.au'
          const clientId = '6sehatih95apslqtikic4sf39o'
          const redirectUri = `${window.location.origin}/callback`
          const oauthUrl = `${cognitoDomain}/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=email+openid+profile&identity_provider=Google&prompt=select_account`
          window.location.href = oauthUrl
          return
        }

        // User-friendly messages for common errors
        if (errorParam === 'access_denied' || errorDescription?.includes('access_denied')) {
          setError('You cancelled the sign-in. No worries! Click below to try again.')
        } else if (errorDescription) {
          setError('Something went wrong. Please try again.')
        } else {
          setError('Authentication was cancelled')
        }
        // Delay showing error UI to prevent flicker
        setTimeout(() => setShowError(true), 500)
        return
      }

      // Missing authorization code - wait before showing error
      // This prevents flicker when URL params are still loading
      if (!code) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        // Re-check after delay
        const codeAfterDelay = new URLSearchParams(window.location.search).get('code')
        if (!codeAfterDelay) {
          setError('Something went wrong. Please try signing in again.')
          setTimeout(() => setShowError(true), 500)
        }
        return
      }

      try {
        // Exchange authorization code for tokens via Cognito token endpoint
        const tokenEndpoint = 'https://auth.grademychild.com.au/oauth2/token'
        const clientId = '6sehatih95apslqtikic4sf39o'
        const redirectUri = `${window.location.origin}/callback`

        const response = await fetch(tokenEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: clientId,
            code: code,
            redirect_uri: redirectUri,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error_description || 'Token exchange failed')
        }

        const tokens = await response.json()

        // Parse ID token to get user info
        const idTokenPayload = JSON.parse(atob(tokens.id_token.split('.')[1]))

        // Store tokens and user info in localStorage (same as email/password flow)
        const user = {
          id: idTokenPayload.sub,
          email: idTokenPayload.email,
          name: idTokenPayload.name || idTokenPayload.email.split('@')[0],
          tier: idTokenPayload['custom:tier'] || 'free',
        }

        // Store in localStorage for consistency with existing auth flow
        localStorage.setItem('user', JSON.stringify(user))

        // Store Cognito session tokens
        localStorage.setItem('idToken', tokens.id_token)
        localStorage.setItem('accessToken', tokens.access_token)
        localStorage.setItem('refreshToken', tokens.refresh_token)

        // Check if this is a newly linked account (email user who just added Google)
        // Keep the flag - dashboard will show toast notification and clear it
        // Just redirect immediately for smooth UX

        // Check if returning user by fetching their subscription/profile status
        // If user has an existing profile in DB, they're returning → go to dashboard
        // If no profile (new OAuth user), they're new → go to choose-tier
        try {
          const statusRes = await fetch('https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com/payments/status', {
            headers: { 'Authorization': `Bearer ${tokens.id_token}` }
          })

          if (statusRes.ok) {
            const statusData = await statusRes.json()
            // If we got a valid response with a tier, user exists in DB
            if (statusData.tier) {
              // Returning user - go to dashboard
              // Use window.location for clean redirect (no React re-render issues)
              window.location.href = redirect || '/dashboard'
              return
            }
          }
        } catch (err) {
          console.error('Failed to check user status:', err)
          // On error, fall through to tier selection for safety
        }

        // New user - go to tier selection/onboarding
        // Use window.location for clean redirect (no React re-render issues)
        if (redirect) {
          window.location.href = `/choose-tier?redirect=${encodeURIComponent(redirect)}`
        } else {
          window.location.href = '/choose-tier'
        }
      } catch (err) {
        console.error('OAuth callback error:', err)
        setError(err instanceof Error ? err.message : 'Authentication failed')
        setTimeout(() => setShowError(true), 500)
      }
    }

    handleCallback()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // Only show error UI after delay to prevent flicker
  if (showError && error) {
    const isCancelled = error.includes('cancelled') || error.includes('No worries')

    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/icon.png" alt="Grade My Child" width={40} height={40} className="w-10 h-10" />
              <span className="text-lg font-semibold">Grade My Child</span>
            </Link>
          </div>

          <div className="p-8 text-center border border-neutral-200 bg-neutral-50 rounded-xl">
            <div className="mb-4">
              {isCancelled ? (
                <span className="text-4xl">👋</span>
              ) : (
                <span className="text-4xl">🤔</span>
              )}
            </div>
            <h2 className="text-lg font-semibold mb-3">
              {isCancelled ? 'Sign in cancelled' : 'Oops!'}
            </h2>
            <p className="text-neutral-600 mb-6">{error}</p>
            <Link
              href="/get-started"
              className="inline-block px-8 py-3 bg-black text-white rounded-xl hover:bg-neutral-800 transition-colors font-medium"
            >
              Try again
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Image src="/icon.png" alt="Grade My Child" width={48} height={48} className="w-12 h-12 mx-auto mb-4 animate-pulse" />
        <p className="text-neutral-500">Completing sign in...</p>
      </div>
    </main>
  )
}

export default function CallbackPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-neutral-400">Loading...</p>
        </div>
      </main>
    }>
      <CallbackHandler />
    </Suspense>
  )
}

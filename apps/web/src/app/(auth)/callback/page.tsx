'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function CallbackHandler() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code')
      const errorParam = searchParams.get('error')
      const errorDescription = searchParams.get('error_description')
      const redirect = searchParams.get('redirect') // Preserve any redirect parameter

      // Handle OAuth errors (user cancelled, permissions denied, etc.)
      if (errorParam) {
        console.error('OAuth error:', errorParam, errorDescription)
        setError(errorDescription || 'Authentication failed')
        return
      }

      // Missing authorization code
      if (!code) {
        setError('No authorization code received')
        return
      }

      try {
        // Exchange authorization code for tokens via Cognito token endpoint
        const tokenEndpoint = 'https://grademychild.auth.ap-southeast-2.amazoncognito.com/oauth2/token'
        const clientId = '6sehatih95apslqtikic4sf39o'
        const redirectUri = `${window.location.origin}/auth/callback`

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

        // Redirect based on user tier
        // Existing paid users go to original destination or dashboard
        // New free users choose tier first, then redirect to original destination
        if (user.tier && user.tier !== 'free') {
          // Returning paid user - go to redirect destination or dashboard
          router.push(redirect || '/dashboard')
        } else {
          // New OAuth signup - show tier selection first
          // Pass redirect param to tier selection so it can redirect after tier choice
          if (redirect) {
            router.push(`/choose-tier?redirect=${encodeURIComponent(redirect)}`)
          } else {
            router.push('/choose-tier')
          }
        }
      } catch (err) {
        console.error('OAuth callback error:', err)
        setError(err instanceof Error ? err.message : 'Authentication failed')
      }
    }

    handleCallback()
  }, [searchParams, router])

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/icon.png" alt="Grade My Child" width={40} height={40} className="w-10 h-10" />
              <span className="text-lg font-semibold">Grade My Child</span>
            </Link>
          </div>

          <div className="p-6 text-center border border-red-100 bg-red-50 rounded-xl">
            <h2 className="text-lg font-semibold mb-2 text-red-900">Authentication Failed</h2>
            <p className="text-sm text-red-700 mb-6">{error}</p>
            <Link
              href="/login"
              className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-neutral-800 transition-colors"
            >
              Back to Login
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

'use client'

import { useEffect } from 'react'
import Image from 'next/image'

/**
 * OAuth Redirect Page
 *
 * This page handles the OAuth flow by redirecting to Google OAuth.
 * It's used as an intermediate step to ensure fresh OAuth sessions.
 *
 * The page immediately redirects to Cognito's OAuth authorize endpoint
 * with Google as the identity provider.
 */
export default function OAuthRedirectPage() {
  useEffect(() => {
    const cognitoDomain = 'https://auth.grademychild.com.au'
    const clientId = '6sehatih95apslqtikic4sf39o'
    const redirectUri = encodeURIComponent(`${window.location.origin}/callback`)
    const responseType = 'code'
    const scope = 'email+openid+profile'

    // Redirect to Google OAuth via Cognito
    window.location.href = `${cognitoDomain}/oauth2/authorize?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}&identity_provider=Google`
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Image src="/icon.png" alt="Grade My Child" width={48} height={48} className="w-12 h-12 mx-auto mb-4 animate-pulse" />
        <p className="text-neutral-500">Connecting to Google...</p>
      </div>
    </main>
  )
}

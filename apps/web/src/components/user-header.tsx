'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getUser, signOut } from '@/lib/auth'

interface UserHeaderProps {
  variant?: 'parent' | 'child'
  childName?: string
}

export function UserHeader({ variant = 'parent', childName }: UserHeaderProps) {
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    if (variant === 'child' && childName) {
      setUserName(childName)
    } else {
      const user = getUser()
      if (user?.name) {
        // Extract first name for cleaner display
        const firstName = user.name.split(' ')[0]
        setUserName(firstName)
      }
    }
  }, [variant, childName])

  const handleSignOut = async () => {
    await signOut()
    window.location.href = '/'
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
        <Link href={variant === 'child' ? '/learn' : '/dashboard'} className="flex items-center gap-3">
          <Image src="/icon.png" alt="Grade My Child" width={32} height={32} className="w-8 h-8" />
          <span className="text-lg font-semibold">Grade My Child</span>
        </Link>

        <div className="flex items-center gap-4">
          {userName && (
            <span className="text-sm text-neutral-600">
              Hi, <span className="font-medium text-black">{userName}</span>
            </span>
          )}
          {variant === 'parent' && (
            <button
              onClick={handleSignOut}
              className="text-sm text-neutral-500 hover:text-black transition-colors"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

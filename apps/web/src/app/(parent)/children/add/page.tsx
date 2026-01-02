'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createChild } from '@/lib/api'
import { isAuthenticatedSync, setSelectedChild } from '@/lib/auth'

const AVATARS = ['👦', '👧', '🧒', '👶', '🧒', '🧔', '👩', '🧑‍🦱']

export default function AddChildPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    yearLevel: '5',
    pin: '',
    avatar: '👦',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isAuthenticatedSync()) {
      router.push('/login')
    }
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const child = await createChild({
        name: formData.name,
        yearLevel: parseInt(formData.yearLevel),
        avatar: formData.avatar,
        pin: formData.pin,
      })

      setSelectedChild(child.id)
      router.push(`/benchmark?subject=maths&child=${child.id}`)
    } catch (err) {
      console.error('Failed to create child:', err)
      setError(err instanceof Error ? err.message : 'Failed to create child. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">
            AgentsForm
          </Link>
          <Link href="/dashboard" className="text-sm text-neutral-500 hover:text-black transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-8 text-center">Add a child</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Selection */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Choose an avatar
            </label>
            <div className="flex flex-wrap gap-2">
              {AVATARS.map((avatar, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setFormData({ ...formData, avatar })}
                  className={`text-3xl p-3 rounded-xl border-2 transition-all ${
                    formData.avatar === avatar
                      ? 'border-black bg-neutral-50'
                      : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Child's name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="First name only"
            />
            <p className="text-xs text-neutral-500 mt-2">
              We only store first names for privacy.
            </p>
          </div>

          {/* Year Level */}
          <div>
            <label htmlFor="yearLevel" className="block text-sm font-medium mb-2">
              Year level
            </label>
            <select
              id="yearLevel"
              name="yearLevel"
              value={formData.yearLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
            >
              <option value="0">Prep</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(y => (
                <option key={y} value={y}>Year {y}</option>
              ))}
            </select>
          </div>

          {/* PIN */}
          <div>
            <label htmlFor="pin" className="block text-sm font-medium mb-2">
              PIN (4-6 digits)
            </label>
            <input
              id="pin"
              name="pin"
              type="password"
              value={formData.pin}
              onChange={handleChange}
              required
              pattern="[0-9]{4,6}"
              maxLength={6}
              className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="Enter PIN"
            />
            <p className="text-xs text-neutral-500 mt-2">
              Your child will use this PIN to log in.
            </p>
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
            {loading ? 'Creating...' : 'Add Child'}
          </Button>
        </form>

        <p className="text-center text-xs text-neutral-400 mt-8">
          Your child's data is protected under Australian Privacy Act 1988.
        </p>
      </div>
    </main>
  )
}

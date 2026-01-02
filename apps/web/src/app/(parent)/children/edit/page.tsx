'use client'

import { useState, useEffect, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { getChildren, updateChild, deleteChild, type Child } from '@/lib/api'
import { isAuthenticatedSync } from '@/lib/auth'

const AVATARS = ['👦', '👧', '🧒', '👶', '🧒🏻', '👦🏽', '👧🏾', '🧒🏿']

function EditChildContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const childId = searchParams.get('id')

  const [child, setChild] = useState<Child | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    yearLevel: 5,
    pin: '',
    avatar: '👦',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  useEffect(() => {
    if (!isAuthenticatedSync()) {
      router.push('/login')
      return
    }
    if (childId) {
      loadChild()
    } else {
      setError('No child specified')
      setLoading(false)
    }
  }, [router, childId])

  const loadChild = async () => {
    try {
      const response = await getChildren()
      const found = response.children.find(c => c.id === childId)
      if (found) {
        setChild(found)
        setFormData({
          name: found.name,
          yearLevel: found.yearLevel,
          pin: '',
          avatar: found.avatar,
        })
      } else {
        setError('Child not found')
      }
    } catch (err) {
      setError('Failed to load child data')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!childId) return
    setSaving(true)
    setError(null)

    try {
      const updateData: any = {
        name: formData.name,
        yearLevel: formData.yearLevel,
        avatar: formData.avatar,
      }
      if (formData.pin) {
        updateData.pin = formData.pin
      }

      await updateChild(childId, updateData)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update child')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!childId) return
    setDeleting(true)
    try {
      await deleteChild(childId)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete child')
      setDeleting(false)
    }
  }

  if (loading) {
    return <div className="text-center py-12 text-neutral-400">Loading...</div>
  }

  if (!child) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-6">{error || 'Child not found'}</p>
        <Link href="/dashboard">
          <Button className="rounded-full px-6">Back to Dashboard</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-8 text-center">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-3">Avatar</label>
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

        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Year level</label>
          <select
            value={formData.yearLevel}
            onChange={e => setFormData({ ...formData, yearLevel: parseInt(e.target.value) })}
            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
          >
            <option value="0">Prep</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(year => (
              <option key={year} value={year}>Year {year}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            New PIN (leave blank to keep current)
          </label>
          <input
            type="password"
            value={formData.pin}
            onChange={e => setFormData({ ...formData, pin: e.target.value })}
            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="Enter new PIN"
            minLength={4}
            maxLength={6}
          />
          <p className="text-xs text-neutral-500 mt-2">
            4-6 digit PIN for child login
          </p>
        </div>

        <Button
          type="submit"
          className="w-full h-12 rounded-xl text-base"
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>
      </form>

      <div className="mt-12 pt-8 border-t border-neutral-100">
        <h2 className="text-sm font-medium text-red-600 mb-4">Danger zone</h2>
        {showDeleteConfirm ? (
          <div className="space-y-4">
            <p className="text-sm text-neutral-600">
              Are you sure you want to delete {child.name}'s profile? This will remove all their progress and cannot be undone.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deleting}
                className="flex-1 rounded-xl"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 rounded-xl bg-red-600 hover:bg-red-700"
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="outline"
            onClick={() => setShowDeleteConfirm(true)}
            className="rounded-xl text-red-600 border-red-200 hover:bg-red-50"
          >
            Delete Profile
          </Button>
        )}
      </div>
    </div>
  )
}

export default function EditChildPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">
            StudyMate
          </Link>
          <Link href="/dashboard" className="text-sm text-neutral-500 hover:text-black transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Suspense fallback={<div className="text-center text-neutral-400">Loading...</div>}>
          <EditChildContent />
        </Suspense>
      </div>
    </main>
  )
}

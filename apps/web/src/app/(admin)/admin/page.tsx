'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { isAuthenticatedSync, signOut } from '@/lib/auth'
import {
  getAdminStats,
  getAdminUsers,
  getAdminChildren,
  getAdminAILogs,
  getAdminUsageByDay,
  type AdminStats,
  type AdminUser,
  type AdminChild,
  type AILog,
  type UsageByDay,
} from '@/lib/api'

type Tab = 'overview' | 'users' | 'children' | 'ai-logs'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Data states
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [users, setUsers] = useState<AdminUser[]>([])
  const [children, setChildren] = useState<AdminChild[]>([])
  const [aiLogs, setAILogs] = useState<AILog[]>([])
  const [usageByDay, setUsageByDay] = useState<UsageByDay[]>([])

  useEffect(() => {
    if (!isAuthenticatedSync()) {
      router.push('/login')
      return
    }
    loadData()
  }, [router])

  const loadData = async () => {
    setLoading(true)
    setError(null)

    try {
      const [statsRes, usersRes, childrenRes, logsRes, usageRes] = await Promise.all([
        getAdminStats(),
        getAdminUsers(),
        getAdminChildren(),
        getAdminAILogs(100),
        getAdminUsageByDay(),
      ])

      setStats(statsRes)
      setUsers(usersRes.users)
      setChildren(childrenRes.children)
      setAILogs(logsRes.logs)
      setUsageByDay(usageRes.days)
    } catch (err) {
      console.error('Failed to load admin data:', err)
      setError(err instanceof Error ? err.message : 'Failed to load data. You may not have admin access.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    signOut()
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('en-AU', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const maxUsage = Math.max(...usageByDay.map(d => d.count), 1)

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-semibold">
              StudyMate
            </Link>
            <span className="text-sm text-neutral-400">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="rounded-full">
                Main Dashboard
              </Button>
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-neutral-500 hover:text-black transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-8 p-4 border border-red-200 rounded-xl bg-red-50 text-red-700 text-sm">
            {error}
            <button
              className="ml-2 underline"
              onClick={() => { setError(null); loadData(); }}
            >
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="text-neutral-400">Loading admin data...</div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex gap-2 mb-8 border-b border-neutral-200 pb-4">
              {(['overview', 'users', 'children', 'ai-logs'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-black text-white'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  {tab === 'overview' && 'Overview'}
                  {tab === 'users' && `Users (${users.length})`}
                  {tab === 'children' && `Children (${children.length})`}
                  {tab === 'ai-logs' && `AI Logs (${aiLogs.length})`}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && stats && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-6 border border-neutral-200 rounded-2xl">
                    <div className="text-sm text-neutral-500 mb-1">Total Users</div>
                    <div className="text-3xl font-semibold">{stats.totalUsers}</div>
                  </div>
                  <div className="p-6 border border-neutral-200 rounded-2xl">
                    <div className="text-sm text-neutral-500 mb-1">Total Children</div>
                    <div className="text-3xl font-semibold">{stats.totalChildren}</div>
                  </div>
                  <div className="p-6 border border-neutral-200 rounded-2xl">
                    <div className="text-sm text-neutral-500 mb-1">AI Calls Today</div>
                    <div className="text-3xl font-semibold">{stats.aiCallsToday}</div>
                  </div>
                  <div className="p-6 border border-neutral-200 rounded-2xl">
                    <div className="text-sm text-neutral-500 mb-1">Total AI Calls</div>
                    <div className="text-3xl font-semibold">{stats.totalAiCalls}</div>
                  </div>
                  <div className="p-6 border border-neutral-200 rounded-2xl">
                    <div className="text-sm text-neutral-500 mb-1">Quizzes Done</div>
                    <div className="text-3xl font-semibold">{stats.quizzesCompleted}</div>
                  </div>
                </div>

                {/* Usage Chart */}
                <div className="p-6 border border-neutral-200 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-6">AI Usage (Last 7 Days)</h3>
                  <div className="flex items-end gap-2 h-40">
                    {usageByDay.map((day) => (
                      <div key={day.date} className="flex-1 flex flex-col items-center gap-2">
                        <div className="text-xs text-neutral-500">{day.count}</div>
                        <div
                          className="w-full bg-black rounded-t"
                          style={{
                            height: `${(day.count / maxUsage) * 100}%`,
                            minHeight: day.count > 0 ? '4px' : '0',
                          }}
                        />
                        <div className="text-xs text-neutral-400">
                          {new Date(day.date).toLocaleDateString('en-AU', { weekday: 'short' })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="p-6 border border-neutral-200 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-4">Recent AI Activity</h3>
                  <div className="space-y-2">
                    {aiLogs.slice(0, 10).map((log) => (
                      <div
                        key={log.id}
                        className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            log.requestType === 'chat'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {log.requestType}
                          </span>
                          <span className="text-sm text-neutral-600">
                            Year {log.yearLevel} {log.subject}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-neutral-400">
                          <span>{log.latencyMs}ms</span>
                          <span>{formatDate(log.requestTimestamp)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="border border-neutral-200 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">User ID</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Email</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Tier</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">AI Today</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-t border-neutral-100">
                        <td className="px-4 py-3 text-sm font-mono text-neutral-600">
                          {user.id.substring(0, 8)}...
                        </td>
                        <td className="px-4 py-3 text-sm">{user.email || '-'}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            user.tier === 'premium'
                              ? 'bg-purple-100 text-purple-700'
                              : user.tier === 'essential'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-neutral-100 text-neutral-600'
                          }`}>
                            {user.tier}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">{user.aiCallsToday}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Children Tab */}
            {activeTab === 'children' && (
              <div className="border border-neutral-200 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Name</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Username</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Year</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Parent ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {children.map((child) => (
                      <tr key={child.id} className="border-t border-neutral-100">
                        <td className="px-4 py-3 text-sm font-medium">{child.name}</td>
                        <td className="px-4 py-3 text-sm text-neutral-600">{child.username || '-'}</td>
                        <td className="px-4 py-3 text-sm">Year {child.yearLevel}</td>
                        <td className="px-4 py-3 text-sm font-mono text-neutral-400">
                          {child.parentId.substring(0, 8)}...
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* AI Logs Tab */}
            {activeTab === 'ai-logs' && (
              <div className="border border-neutral-200 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Type</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Subject</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Year</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Latency</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Tokens</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aiLogs.map((log) => (
                      <tr key={log.id} className="border-t border-neutral-100">
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            log.requestType === 'chat'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {log.requestType}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">{log.subject || '-'}</td>
                        <td className="px-4 py-3 text-sm">{log.yearLevel || '-'}</td>
                        <td className="px-4 py-3 text-sm text-neutral-600">{log.latencyMs}ms</td>
                        <td className="px-4 py-3 text-sm text-neutral-600">{log.tokensUsed || '-'}</td>
                        <td className="px-4 py-3 text-sm text-neutral-400">
                          {formatDate(log.requestTimestamp)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Refresh Button */}
            <div className="mt-8 flex justify-center">
              <Button
                onClick={loadData}
                variant="outline"
                className="rounded-full"
              >
                Refresh Data
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

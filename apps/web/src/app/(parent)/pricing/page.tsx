'use client'

import { useState, useEffect, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { isAuthenticatedSync, signOut } from '@/lib/auth'
import {
  createCheckoutSession,
  getSubscriptionStatus,
  getCustomerPortalUrl,
  type SubscriptionStatus,
} from '@/lib/api'

const plans = [
  {
    id: 'free',
    name: 'Explorer',
    subtitle: 'Perfect for getting started',
    price: null,
    priceDisplay: 'Always Free',
    features: [
      '1 child profile',
      'Limited (5 questions)',
      'Solutions locked 🔒',
      'Basic score only',
    ],
    cta: 'Current Plan',
    disabled: true,
  },
  {
    id: 'scholar',
    name: 'Scholar',
    subtitle: 'For dedicated learners',
    price: 5,
    priceDisplay: '$5',
    period: '/month',
    trial: '3-day free trial',
    features: [
      '1 child profile',
      'Unlimited questions',
      'Unlimited worked solutions',
      'Progress snapshots',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'achiever',
    name: 'Achiever',
    subtitle: 'For serious students',
    price: 12,
    priceDisplay: '$12',
    period: '/month',
    trial: '3-day free trial',
    features: [
      '6 child profiles',
      'Unlimited questions',
      'Unlimited worked solutions',
      'Detailed reports with drill down',
      'Concept mastery tracking',
      'Curriculum alignment insights',
      'Priority support',
    ],
    cta: 'Start Free Trial',
  },
]

function PricingContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [upgrading, setUpgrading] = useState<string | null>(null)
  const [status, setStatus] = useState<SubscriptionStatus | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!isAuthenticatedSync()) {
      router.push('/login?redirect=/pricing')
      return
    }
    loadStatus()

    // Check for payment result
    const paymentResult = searchParams.get('payment')
    if (paymentResult === 'success') {
      setMessage('Welcome to your new plan!')
    } else if (paymentResult === 'cancelled') {
      setMessage('Payment cancelled. You can try again anytime.')
    }
  }, [router, searchParams])

  const loadStatus = async () => {
    try {
      const result = await getSubscriptionStatus()
      setStatus(result)
    } catch (err) {
      console.error('Failed to load subscription status:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpgrade = async (planId: string) => {
    // Free tier (both 'free' and 'explorer') can't be "upgraded" to
    if (planId === 'free' || planId === 'explorer') return

    setUpgrading(planId)
    try {
      const result = await createCheckoutSession(planId as 'scholar' | 'achiever')
      window.location.href = result.url
    } catch (err) {
      console.error('Failed to create checkout session:', err)
      setMessage('Failed to start checkout. Please try again.')
      setUpgrading(null)
    }
  }

  const handleManageSubscription = async () => {
    try {
      const result = await getCustomerPortalUrl()
      window.location.href = result.url
    } catch (err) {
      console.error('Failed to open portal:', err)
      setMessage('Failed to open subscription management. Please try again.')
    }
  }

  const handleLogout = () => {
    signOut()
  }

  // Normalize tier: treat 'explorer' as 'free' for backward compatibility
  const currentTier = status?.tier === 'explorer' ? 'free' : (status?.tier || 'free')

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">
            Grade My Child
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="rounded-full">
                Dashboard
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

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-neutral-500">
            Start free. Upgrade anytime. Cancel anytime.
          </p>
        </div>

        {message && (
          <div className={`mb-8 p-4 rounded-xl text-center ${
            message.includes('Welcome')
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-neutral-50 text-neutral-600 border border-neutral-200'
          }`}>
            {message}
            <button
              onClick={() => setMessage(null)}
              className="ml-3 text-xs underline"
            >
              Dismiss
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="text-neutral-400">Loading...</div>
          </div>
        ) : (
          <>
            {/* Current Plan Info */}
            {currentTier !== 'free' && status?.subscriptionId && (
              <div className="mb-8 p-4 bg-neutral-50 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-sm text-neutral-500">Current plan:</span>
                  <span className="ml-2 font-semibold capitalize">{currentTier}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={handleManageSubscription}
                >
                  Manage Subscription
                </Button>
              </div>
            )}

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {plans.map((plan) => {
                const isCurrentPlan = plan.id === currentTier
                const isUpgrade = (
                  (currentTier === 'free' && plan.id !== 'free') ||
                  (currentTier === 'scholar' && plan.id === 'achiever')
                )

                return (
                  <div
                    key={plan.id}
                    className={`rounded-2xl p-8 relative transition-all ${
                      plan.popular
                        ? 'border-2 border-black shadow-lg'
                        : 'border border-neutral-200'
                    } ${isCurrentPlan ? 'ring-2 ring-neutral-300 ring-offset-2' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        Most popular
                      </div>
                    )}

                    {isCurrentPlan && (
                      <div className="absolute -top-3 right-6 bg-neutral-800 text-white text-xs px-3 py-1 rounded-full">
                        Current
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                      <p className="text-sm text-neutral-500">{plan.subtitle}</p>
                    </div>

                    <div className="mb-6">
                      {plan.price !== null ? (
                        <>
                          <span className="text-4xl font-semibold">{plan.priceDisplay}</span>
                          <span className="text-neutral-500">{plan.period}</span>
                        </>
                      ) : (
                        <span className="text-3xl font-semibold">{plan.priceDisplay}</span>
                      )}
                      {plan.trial && (
                        <div className="text-sm mt-2 font-medium text-neutral-600">
                          {plan.trial}
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8 text-sm">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {isCurrentPlan ? (
                      <Button
                        variant="outline"
                        className="w-full rounded-full"
                        disabled
                      >
                        Current Plan
                      </Button>
                    ) : (
                      <Button
                        className="w-full rounded-full"
                        variant={plan.popular || isUpgrade ? 'default' : 'outline'}
                        onClick={() => handleUpgrade(plan.id)}
                        disabled={upgrading !== null || plan.disabled}
                      >
                        {upgrading === plan.id ? 'Processing...' : plan.cta}
                      </Button>
                    )}
                  </div>
                )
              })}
            </div>

            {/* FAQ */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-semibold mb-8">Common questions</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                <div className="p-6 bg-neutral-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                  <p className="text-sm text-neutral-600">
                    Yes. Cancel anytime from your account. You keep access until the end of your billing period.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-xl">
                  <h3 className="font-semibold mb-2">What if I need more than 1 child on Scholar?</h3>
                  <p className="text-sm text-neutral-600">
                    Upgrade to Achiever for 6 child profiles - just $2 per child.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Is payment secure?</h3>
                  <p className="text-sm text-neutral-600">
                    Yes. We use Stripe, the same payment processor trusted by millions of businesses worldwide.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-sm text-neutral-600">
                    Yes. Upgrade or downgrade anytime. Changes take effect immediately.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default function PricingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-neutral-400">Loading...</div>
      </div>
    }>
      <PricingContent />
    </Suspense>
  )
}

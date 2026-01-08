'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { getUser, isAuthenticatedSync } from '@/lib/auth'
import { createCheckoutSession } from '@/lib/api'

const plans = [
  {
    id: 'free',
    name: 'Explorer',
    subtitle: 'Perfect for getting started',
    price: null,
    priceDisplay: 'Always Free',
    features: [
      '1 child profile',
      '5 questions to try',
      'See how it works',
      'No credit card needed',
    ],
    cta: 'Start Free',
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
    badge: 'Most Popular',
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
      'Priority support',
    ],
    cta: 'Start Free Trial',
    badge: 'Best Value',
  },
]

function ChooseTierContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') // Get redirect parameter if present
  const [loading, setLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>('scholar') // Pre-select Scholar

  useEffect(() => {
    // Check if user is authenticated (they should be after OAuth)
    if (!isAuthenticatedSync()) {
      router.push('/login')
      return
    }

    // Check if user already has a paid tier (shouldn't show this page)
    const user = getUser()
    if (user && user.tier && user.tier !== 'free') {
      router.push(redirect || '/dashboard') // Respect redirect parameter
    }
  }, [router, redirect])

  const handleSelectPlan = async (planId: string) => {
    setSelectedPlan(planId)

    // Free tier - skip payment, go to redirect destination or dashboard
    if (planId === 'free') {
      setLoading(true)
      router.push(redirect || '/dashboard')
      return
    }

    // Paid tiers - redirect to Stripe checkout
    setLoading(true)
    try {
      const result = await createCheckoutSession(planId as 'scholar' | 'achiever')
      window.location.href = result.url
    } catch (err) {
      console.error('Failed to create checkout session:', err)
      setLoading(false)
      alert('Failed to start checkout. Please try again.')
    }
  }

  const handleSkip = () => {
    router.push(redirect || '/dashboard') // Respect redirect parameter
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <Image src="/icon.png" alt="Grade My Child" width={40} height={40} className="w-10 h-10" />
            <span className="text-lg font-semibold">Grade My Child</span>
          </Link>

          <div className="mt-6 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
              Welcome! Account created ✓
            </span>
          </div>

          <h1 className="text-3xl font-semibold mb-3">Choose your plan</h1>
          <p className="text-lg text-neutral-500 mb-2">
            Start with a 3-day free trial on any paid plan
          </p>
          <p className="text-sm text-neutral-400">
            No credit card charged during trial • Cancel anytime
          </p>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-8">
          <p className="text-sm text-neutral-600">
            ⭐⭐⭐⭐⭐ <span className="font-medium">4.9/5</span> from 1,200+ parents
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 relative transition-all cursor-pointer ${
                plan.popular
                  ? 'border-2 border-black shadow-lg'
                  : 'border border-neutral-200 hover:border-neutral-300'
              } ${selectedPlan === plan.id ? 'ring-2 ring-black ring-offset-2' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
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
                  <div className="text-sm mt-2 font-medium text-green-600">
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

              <Button
                className={`w-full rounded-xl h-12 ${
                  plan.popular || plan.id !== 'free' ? '' : 'variant-outline'
                }`}
                variant={plan.popular || plan.id !== 'free' ? 'default' : 'outline'}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelectPlan(plan.id)
                }}
                disabled={loading}
              >
                {loading && selectedPlan === plan.id ? 'Processing...' : plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Skip Option */}
        <div className="text-center">
          <button
            onClick={handleSkip}
            className="text-sm text-neutral-500 hover:text-black transition-colors underline"
            disabled={loading}
          >
            I'll choose later, take me to my dashboard
          </button>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-neutral-50 rounded-xl">
            <p className="text-sm text-neutral-700 mb-3 italic">
              "My daughter went from struggling with fractions to confidently solving problems in just 2 weeks. The worked solutions are incredible!"
            </p>
            <p className="text-xs text-neutral-500">— Sarah M., Melbourne</p>
          </div>
          <div className="p-6 bg-neutral-50 rounded-xl">
            <p className="text-sm text-neutral-700 mb-3 italic">
              "Finally, a learning tool that actually helps instead of just giving answers. Worth every cent."
            </p>
            <p className="text-xs text-neutral-500">— James L., Sydney</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          <p className="mb-2">🔒 Secure payment via Stripe • ✓ Cancel anytime • 📧 Email support</p>
        </div>
      </div>
    </main>
  )
}

export default function ChooseTierPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-neutral-400">Loading...</div>
      </main>
    }>
      <ChooseTierContent />
    </Suspense>
  )
}

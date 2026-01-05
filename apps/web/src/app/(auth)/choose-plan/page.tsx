'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const plans = [
  {
    id: 'free',
    name: 'Explorer',
    subtitle: 'Perfect for getting started',
    price: 'Always Free',
    priceAmount: null,
    period: '',
    trial: 'No credit card required',
    features: [
      '1 child profile',
      'Limited (5 questions)',
      'Solutions locked 🔒',
      'Basic score only',
    ],
    popular: false,
    requiresPayment: false,
  },
  {
    id: 'scholar',
    name: 'Scholar',
    subtitle: 'For dedicated learners',
    price: '$5',
    priceAmount: 5,
    period: '/month',
    trial: '3-day free trial',
    features: [
      '1 child profile',
      'Unlimited questions',
      'Unlimited worked solutions',
      'Progress snapshots',
    ],
    popular: true,
    requiresPayment: true,
  },
  {
    id: 'achiever',
    name: 'Achiever',
    subtitle: 'For serious students',
    price: '$12',
    priceAmount: 12,
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
    popular: false,
    requiresPayment: true,
  },
]

export default function ChoosePlanPage() {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    // Get email from session storage
    const storedEmail = sessionStorage.getItem('signup_email')
    if (!storedEmail) {
      // No email, redirect back to get-started
      router.push('/get-started')
      return
    }
    setEmail(storedEmail)
  }, [router])

  const handleSelectPlan = (planId: string) => {
    // Proceed to registration with plan and email
    router.push(`/register?plan=${planId}&email=${encodeURIComponent(email || '')}`)
  }

  if (!email) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-neutral-400">Loading...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/icon.png" alt="Grade My Child" width={40} height={40} className="w-10 h-10" />
            <span className="text-lg font-semibold">Grade My Child</span>
          </Link>
          <div className="mt-6 mb-2">
            <span className="inline-block px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full">
              Step 2 of 3
            </span>
          </div>
          <h1 className="text-2xl font-semibold mb-2">Choose your plan</h1>
          <p className="text-neutral-500">
            Start free, upgrade anytime
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 relative transition-all ${
                plan.popular
                  ? 'border-2 border-black shadow-lg'
                  : 'border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-neutral-500">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                {plan.priceAmount !== null ? (
                  <>
                    <span className="text-4xl font-semibold">{plan.price}</span>
                    <span className="text-neutral-500">{plan.period}</span>
                  </>
                ) : (
                  <span className="text-3xl font-semibold">{plan.price}</span>
                )}
                <div className="text-sm mt-2 font-medium text-neutral-600">
                  {plan.trial}
                </div>
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
                className="w-full rounded-full"
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {plan.requiresPayment ? 'Start Free Trial' : 'Start Free'}
              </Button>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link href="/get-started" className="text-sm text-neutral-500 hover:text-black transition-colors">
            &larr; Back
          </Link>
        </div>
      </div>
    </main>
  )
}

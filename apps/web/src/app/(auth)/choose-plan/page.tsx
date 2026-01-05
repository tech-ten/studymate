'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const plans = [
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'Perfect for getting started',
    price: '$0.99',
    period: '/month',
    trial: '21-day free trial',
    features: [
      '2 child profiles',
      '20 questions per day',
      '10 AI explanations per day',
      'Basic progress tracking',
    ],
    popular: false,
    limit: 'Limited to 60 days after trial. Upgrade to Scholar required.',
  },
  {
    id: 'scholar',
    name: 'Scholar',
    description: 'For dedicated learners',
    price: '$5',
    period: '/month',
    trial: '14-day free trial',
    features: [
      '5 child profiles',
      'Unlimited questions',
      'Unlimited AI tutor help',
      'Weekly progress reports',
      'Concept mastery tracking',
    ],
    popular: true,
  },
  {
    id: 'achiever',
    name: 'Achiever',
    description: 'For serious students',
    price: '$12',
    period: '/month',
    trial: '14-day free trial',
    features: [
      '10 child profiles',
      'Everything in Scholar',
      'Detailed PDF reports',
      'Curriculum alignment insights',
      'Priority support',
    ],
    popular: false,
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
          <Link href="/" className="text-lg font-semibold">
            Grade My Child
          </Link>
          <div className="mt-6 mb-2">
            <span className="inline-block px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full">
              Step 2 of 3
            </span>
          </div>
          <h1 className="text-2xl font-semibold mb-2">Choose your plan</h1>
          <p className="text-neutral-500">
            Select the plan that works best for your family
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 relative transition-all ${
                plan.popular
                  ? 'border-2 border-black ring-4 ring-blue-50 scale-[1.02] shadow-lg'
                  : 'border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 bg-black text-white text-xs px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}

              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-neutral-500 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-neutral-500">{plan.period}</span>
                <span className="text-green-600 block text-sm mt-1 font-medium">
                  {plan.trial}
                </span>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-black rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full rounded-full"
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => handleSelectPlan(plan.id)}
              >
                Select {plan.name}
              </Button>

              {plan.limit && (
                <p className="text-xs text-neutral-400 text-center mt-3">
                  {plan.limit}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link href="/get-started" className="text-sm text-neutral-500 hover:text-black">
            &larr; Back
          </Link>
        </div>
      </div>
    </main>
  )
}

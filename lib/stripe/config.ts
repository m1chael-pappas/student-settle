import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-01-27.acacia',
  typescript: true,
})

// Client-side Stripe promise
let stripePromise: Promise<Stripe | null>
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
  }
  return stripePromise
}

// Package pricing in cents (AUD)
export const PACKAGE_PRICES = {
  essential: {
    amount: 29900, // $299 AUD
    name: 'Essential Package',
    description: 'Airport pickup, temporary accommodation assistance, basic orientation',
  },
  complete: {
    amount: 59900, // $599 AUD
    name: 'Complete Package',
    description: 'Everything in Essential + accommodation search, banking, phone/SIM',
  },
  premium: {
    amount: 99900, // $999 AUD
    name: 'Premium Package',
    description: 'Everything in Complete + 30 days support, city tours, social introductions',
  },
} as const

export type PackageType = keyof typeof PACKAGE_PRICES

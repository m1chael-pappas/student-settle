import Stripe from 'stripe';

import {
  loadStripe,
  Stripe as StripeJS,
} from '@stripe/stripe-js';

// Server-side Stripe instance
// Initialize only if secret key is available
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-09-30.clover",
      typescript: true,
    })
  : null;

// Client-side Stripe promise
let stripePromise: Promise<StripeJS | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
    );
  }
  return stripePromise;
};

// Package pricing in cents (AUD)
export const PACKAGE_PRICES = {
  essential: {
    amount: 29900, // $299 AUD
    name: "Essential Package",
    description:
      "Airport pickup, temporary accommodation assistance, basic orientation",
  },
  complete: {
    amount: 59900, // $599 AUD
    name: "Complete Package",
    description:
      "Everything in Essential + accommodation search, banking, phone/SIM",
  },
  premium: {
    amount: 99900, // $999 AUD
    name: "Premium Package",
    description:
      "Everything in Complete + 30 days support, city tours, social introductions",
  },
} as const;

export type PackageType = keyof typeof PACKAGE_PRICES;

# Stripe Payment Integration Setup

## Overview
The payment system is structured and ready to integrate with Stripe. Follow these steps to complete the setup.

## Setup Steps

### 1. Create Stripe Account
1. Sign up at [stripe.com](https://stripe.com)
2. Complete account verification
3. Switch to Test Mode for development

### 2. Get API Keys
1. Go to [Stripe Dashboard > API Keys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_...`)
3. Copy your **Secret key** (starts with `sk_test_...`)

### 3. Configure Environment Variables
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Stripe keys to `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 4. Test Payment Flow
1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Navigate to `/booking` and complete the booking form

3. Use Stripe test card numbers:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - 3D Secure: `4000 0025 0000 3155`
   - Any future date for expiry
   - Any 3 digits for CVC
   - Any postal code

### 5. Set Up Webhooks (Optional for Development)

For production or testing webhooks locally:

1. Install Stripe CLI:
   ```bash
   brew install stripe/stripe-cli/stripe
   # or download from https://stripe.com/docs/stripe-cli
   ```

2. Login to Stripe:
   ```bash
   stripe login
   ```

3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```

4. Copy the webhook signing secret (starts with `whsec_...`) to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
   ```

### 6. Production Setup

For production deployment:

1. Switch to Live Mode in Stripe Dashboard
2. Get live API keys (start with `pk_live_` and `sk_live_`)
3. Create webhook endpoint in Stripe Dashboard:
   - URL: `https://yourdomain.com/api/stripe/webhook`
   - Events: `checkout.session.completed`, `payment_intent.succeeded`
4. Update environment variables with live keys

## File Structure

```
lib/stripe/
  └── config.ts              # Stripe configuration and pricing

app/api/stripe/
  ├── checkout/route.ts      # Create checkout sessions
  └── webhook/route.ts       # Handle Stripe webhooks

app/booking/
  ├── page.tsx              # Booking form
  └── success/page.tsx      # Payment success page
```

## Features Implemented

✅ Stripe Checkout integration
✅ Three package tiers (Essential, Complete, Premium)
✅ Webhook handling for payment events
✅ Success/cancel redirects
✅ TypeScript type safety
✅ Error handling

## TODO for Full Integration

- [ ] Connect booking form Step 3 to Stripe checkout
- [ ] Add database to store bookings
- [ ] Send confirmation emails after payment
- [ ] Add customer dashboard to view booking status
- [ ] Implement refund handling
- [ ] Add invoice generation

## Package Pricing

| Package | Price | Description |
|---------|-------|-------------|
| Essential | $299 AUD | Airport pickup, basic orientation |
| Complete | $599 AUD | Full settlement support |
| Premium | $999 AUD | Comprehensive + 30 days support |

## Testing Checklist

- [ ] Successful payment flow
- [ ] Canceled payment flow
- [ ] Webhook events received
- [ ] Success page displays correctly
- [ ] Error handling works
- [ ] Mobile responsiveness

## Support

For Stripe-related questions:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Testing Guide](https://stripe.com/docs/testing)
- [Webhook Testing](https://stripe.com/docs/webhooks/test)

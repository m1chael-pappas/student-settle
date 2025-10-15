import {
  NextRequest,
  NextResponse,
} from 'next/server';
import Stripe from 'stripe';

import { stripe } from '@/lib/stripe/config';

export async function POST(req: NextRequest) {
  // Check if Stripe is configured
  if (!stripe) {
    return NextResponse.json(
      { error: "Payment system not configured" },
      { status: 503 }
    );
  }

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "No signature provided" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      // TODO: Save booking to database
      console.log("Payment successful:", {
        sessionId: session.id,
        customerEmail: session.customer_email,
        packageType: session.metadata?.packageType,
        customerName: session.metadata?.customerName,
        amount: session.amount_total,
      });

      // TODO: Send confirmation email
      // TODO: Create booking record in database
      // TODO: Notify team

      break;
    }

    case "checkout.session.expired": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("Checkout session expired:", session.id);
      break;
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("Payment intent succeeded:", paymentIntent.id);
      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.error("Payment failed:", paymentIntent.id);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

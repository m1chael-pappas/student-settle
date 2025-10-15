import {
  NextRequest,
  NextResponse,
} from 'next/server';

import {
  PACKAGE_PRICES,
  PackageType,
  stripe,
} from '@/lib/stripe/config';

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "Payment system not configured. Please add Stripe credentials.",
        },
        { status: 503 }
      );
    }

    const body = await req.json();
    const { packageType, customerEmail, customerName } = body;

    // Validate package type
    if (!packageType || !(packageType in PACKAGE_PRICES)) {
      return NextResponse.json(
        { error: "Invalid package type" },
        { status: 400 }
      );
    }

    const packageInfo = PACKAGE_PRICES[packageType as PackageType];
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: packageInfo.name,
              description: packageInfo.description,
            },
            unit_amount: packageInfo.amount,
          },
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      metadata: {
        packageType,
        customerName,
      },
      success_url: `${appUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/booking?canceled=true`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

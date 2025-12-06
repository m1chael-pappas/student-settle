# Student Settle - Project Initialization

## Project Overview
Landing page and booking funnel for Student Settle - helping international students settle into Sydney, Australia.

**Tagline:** "Because the first week shouldn't be overwhelming"

## Brand Identity

### Color Palette
- **Primary:** Vibrant teal `#00A896` - Sydney harbour vibes, fresh start
- **Secondary:** Warm amber `#FFAA4C` - friendly, welcoming
- **Neutral:** Soft grey and white - clean, modern

### Brand Values
- Welcoming and friendly
- Professional and trustworthy
- Fresh start and new beginnings
- Sydney-focused

## Technical Stack
- **Framework:** Next.js 15.5.5 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Package Manager:** pnpm

## Core Features

### Phase 1 - MVP
1. **Landing Page**
   - Hero section with compelling value proposition
   - Services overview
   - Social proof / testimonials
   - Clear CTA to booking

2. **Calendar Booking System**
   - Integration with scheduling service (Cal.com, Calendly, or custom)
   - Available time slots
   - Consultation type selection

3. **Payment Integration** (Optional Phase 1)
   - Stripe or similar payment processor
   - Deposit or full payment options

### Phase 2 - Enhancements
- Blog/Resources section for international students
- FAQ section
- Multi-language support
- Customer portal

## SEO Strategy
- **Primary Keywords:** International students Sydney, student settlement services Sydney, new students Australia
- **Core Message:** "Because the first week shouldn't be overwhelming"
- **Target Audience:** International students arriving in Sydney

## Development Commands
```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
```

## Project Structure
```
student-settle/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Landing page
│   ├── booking/            # Booking flow
│   └── globals.css         # Global styles
├── components/             # Reusable components
├── public/                 # Static assets
└── lib/                    # Utilities and helpers
```

## Next Steps
1. Configure Tailwind with brand colors
2. Set up SEO metadata
3. Build landing page components
4. Integrate booking system
5. Set up payment processing

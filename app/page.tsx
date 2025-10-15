import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MobileMenu } from "@/components/mobile-menu";
import {
  Plane,
  Home,
  CreditCard,
  Users,
  MapPin,
  Phone,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Star,
  Check
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-neutral-900">Student Settle</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-neutral-700 hover:text-primary transition-colors">Services</a>
              <a href="#how-it-works" className="text-neutral-700 hover:text-primary transition-colors">How It Works</a>
              <a href="#pricing" className="text-neutral-700 hover:text-primary transition-colors">Pricing</a>
              <Link href="/booking">
                <Button variant="default" size="sm">Book Consultation</Button>
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 animate-fade-in">
            Because the first week<br />shouldn't be overwhelming
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Expert support for international students settling into Sydney. We handle the essentials so you can focus on your studies and new adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="text-base">
                <Calendar className="h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
            <a href="#services">
              <Button size="lg" variant="outline" className="text-base">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How We Help You Settle
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From airport pickup to finding your perfect home, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Airport Welcome</CardTitle>
                <CardDescription>
                  Friendly greeting and transport to your temporary accommodation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Accommodation Search</CardTitle>
                <CardDescription>
                  Help finding and securing your perfect student housing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Banking Setup</CardTitle>
                <CardDescription>
                  Assistance opening Australian bank accounts and setting up payments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Phone & Internet</CardTitle>
                <CardDescription>
                  Get connected with the best mobile and internet plans for students
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>City Orientation</CardTitle>
                <CardDescription>
                  Guided tour of your campus, local area, and essential services
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Ongoing Support</CardTitle>
                <CardDescription>
                  24/7 assistance during your first month in Sydney
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-neutral-600">
              Getting settled in Sydney has never been easier
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Consultation</h3>
              <p className="text-neutral-600">
                Schedule a free call to discuss your needs and timeline
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Plan</h3>
              <p className="text-neutral-600">
                Receive a personalized settlement plan and pricing
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Arrive with Confidence</h3>
              <p className="text-neutral-600">
                We'll be there from day one to support your smooth transition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Flexible packages designed to match your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Essential Package */}
            <Card className="border-2 border-neutral-200 hover:border-primary transition-all">
              <CardHeader className="text-center pb-8">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-primary-100 rounded-full">
                    <Plane className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">Essential</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-neutral-600"> AUD</span>
                </div>
                <CardDescription>Perfect for independent students who need a smooth arrival</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Airport pickup and welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Transport to accommodation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Basic city orientation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Essential services guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">7 days support</span>
                  </li>
                </ul>
                <Link href="/booking" className="block">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Complete Package - Featured */}
            <Card className="border-2 border-primary shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-primary rounded-full">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">Complete</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$599</span>
                  <span className="text-neutral-600"> AUD</span>
                </div>
                <CardDescription>Full settlement support for a stress-free transition</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">Everything in Essential, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Accommodation search assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Bank account setup support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Phone & SIM card assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Campus tour coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">14 days support</span>
                  </li>
                </ul>
                <Link href="/booking" className="block">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 border-neutral-200 hover:border-primary transition-all">
              <CardHeader className="text-center pb-8">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-secondary-100 rounded-full">
                    <Star className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="text-neutral-600"> AUD</span>
                </div>
                <CardDescription>Comprehensive support for a seamless Sydney experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">Everything in Complete, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority 24/7 support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Guided city tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Social introductions & events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Shopping & setup assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">30 days ongoing support</span>
                  </li>
                </ul>
                <Link href="/booking" className="block">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-neutral-600">
              Real experiences from international students we've helped
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center text-primary font-bold text-lg">
                    RK
                  </div>
                  <div>
                    <CardTitle className="text-base">Ravi Kumar</CardTitle>
                    <p className="text-sm text-neutral-600">India → UNSW</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 text-sm">
                  "Student Settle made my arrival in Sydney so smooth! They picked me up from the airport and helped me find accommodation within a week. I felt welcomed from day one."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary-200 flex items-center justify-center text-secondary font-bold text-lg">
                    MC
                  </div>
                  <div>
                    <CardTitle className="text-base">Maria Chen</CardTitle>
                    <p className="text-sm text-neutral-600">China → University of Sydney</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 text-sm">
                  "The Complete package was worth every dollar. They helped me with banking, getting a phone, and even showed me around the campus. Couldn't have done it without them!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center text-primary font-bold text-lg">
                    AS
                  </div>
                  <div>
                    <CardTitle className="text-base">Ahmed Singh</CardTitle>
                    <p className="text-sm text-neutral-600">UAE → UTS</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 text-sm">
                  "As an international student, I was nervous about moving to a new country. Student Settle's support was incredible - they were available 24/7 and helped with everything!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Sydney Feel Like Home?
          </h2>
          <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and start your Australian adventure stress-free
          </p>
          <Link href="/booking">
            <Button size="xl" variant="secondary" className="text-lg">
              <Calendar className="h-6 w-6" />
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Student Settle</span>
              </div>
              <p className="text-neutral-400">
                Making Sydney feel like home for international students
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>Sydney, Australia</li>
                <li>info@studentsettle.com.au</li>
                <li>+61 XXX XXX XXX</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
            <p>&copy; 2025 Student Settle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

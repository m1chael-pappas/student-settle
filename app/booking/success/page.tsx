"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, CheckCircle, Mail, Calendar } from "lucide-react"

export default function BookingSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, you would verify the session with your backend
    if (sessionId) {
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-neutral-600">Confirming your payment...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-neutral-900">Student Settle</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Success Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader className="text-center pb-6">
              <div className="mb-6">
                <div className="h-20 w-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto">
                  <CheckCircle className="h-12 w-12" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">Payment Successful!</CardTitle>
              <p className="text-neutral-600">
                Your booking has been confirmed and payment processed successfully
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-neutral-50 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Confirmation Email Sent</h3>
                    <p className="text-sm text-neutral-600">
                      Check your email for booking details and next steps. If you don't see it, check your spam folder.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">What's Next?</h3>
                    <p className="text-sm text-neutral-600">
                      Our team will contact you within 24 hours to schedule your consultation and discuss your arrival plans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Important Information</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Keep your booking confirmation email safe</li>
                  <li>• Prepare any questions you have for your consultation</li>
                  <li>• Update us if your arrival date changes</li>
                  <li>• Join our WhatsApp group for real-time support</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Return to Home
                  </Button>
                </Link>
                <Button className="flex-1">
                  Contact Support
                </Button>
              </div>

              <p className="text-xs text-center text-neutral-500">
                Session ID: {sessionId}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

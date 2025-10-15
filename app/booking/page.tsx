"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Plane, ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    arrivalDate: "",
    servicePackage: "",
    preferredTime: "",
    additionalInfo: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement booking submission
    console.log("Booking submitted:", formData)
    setStep(4) // Success step
  }

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
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Booking Form */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-neutral-400'}`}>
                <div className={`h-10 w-10 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-neutral-300'} text-white flex items-center justify-center font-bold`}>
                  {step > 1 ? <CheckCircle className="h-6 w-6" /> : "1"}
                </div>
                <span className="hidden sm:inline font-medium">Your Details</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-neutral-200">
                <div className={`h-full ${step >= 2 ? 'bg-primary' : 'bg-neutral-200'} transition-all`} style={{ width: step >= 2 ? '100%' : '0%' }} />
              </div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-neutral-400'}`}>
                <div className={`h-10 w-10 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-neutral-300'} text-white flex items-center justify-center font-bold`}>
                  {step > 2 ? <CheckCircle className="h-6 w-6" /> : "2"}
                </div>
                <span className="hidden sm:inline font-medium">Service Details</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-neutral-200">
                <div className={`h-full ${step >= 3 ? 'bg-primary' : 'bg-neutral-200'} transition-all`} style={{ width: step >= 3 ? '100%' : '0%' }} />
              </div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-neutral-400'}`}>
                <div className={`h-10 w-10 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-neutral-300'} text-white flex items-center justify-center font-bold`}>
                  {step > 3 ? <CheckCircle className="h-6 w-6" /> : "3"}
                </div>
                <span className="hidden sm:inline font-medium">Confirm</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {step === 1 && "Tell Us About Yourself"}
                {step === 2 && "Choose Your Service"}
                {step === 3 && "Schedule Consultation"}
                {step === 4 && "Booking Confirmed!"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "We'll use this information to personalize your experience"}
                {step === 2 && "Select the package that best suits your needs"}
                {step === 3 && "Pick a time that works best for your free consultation"}
                {step === 4 && "We'll be in touch shortly to confirm your consultation"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+61 XXX XXX XXX"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="university">University/Institution *</Label>
                      <Select
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select your university</option>
                        <option value="usyd">University of Sydney</option>
                        <option value="unsw">UNSW Sydney</option>
                        <option value="uts">University of Technology Sydney</option>
                        <option value="mq">Macquarie University</option>
                        <option value="wsu">Western Sydney University</option>
                        <option value="other">Other</option>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="arrivalDate">Expected Arrival Date *</Label>
                      <Input
                        id="arrivalDate"
                        name="arrivalDate"
                        type="date"
                        value={formData.arrivalDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Service Package */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <Label>Select Your Package *</Label>
                      <div className="space-y-3">
                        <Card className={`cursor-pointer border-2 ${formData.servicePackage === 'essential' ? 'border-primary bg-primary-50' : 'border-neutral-200'}`} onClick={() => setFormData({...formData, servicePackage: 'essential'})}>
                          <CardHeader>
                            <CardTitle className="text-lg">Essential Package - $299</CardTitle>
                            <CardDescription>Airport pickup, temporary accommodation assistance, basic orientation</CardDescription>
                          </CardHeader>
                        </Card>
                        <Card className={`cursor-pointer border-2 ${formData.servicePackage === 'complete' ? 'border-primary bg-primary-50' : 'border-neutral-200'}`} onClick={() => setFormData({...formData, servicePackage: 'complete'})}>
                          <CardHeader>
                            <CardTitle className="text-lg">Complete Package - $599</CardTitle>
                            <CardDescription>Everything in Essential + permanent accommodation search, banking setup, phone/SIM card</CardDescription>
                          </CardHeader>
                        </Card>
                        <Card className={`cursor-pointer border-2 ${formData.servicePackage === 'premium' ? 'border-primary bg-primary-50' : 'border-neutral-200'}`} onClick={() => setFormData({...formData, servicePackage: 'premium'})}>
                          <CardHeader>
                            <CardTitle className="text-lg">Premium Package - $999</CardTitle>
                            <CardDescription>Everything in Complete + 30 days ongoing support, city tours, social introductions</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        className="flex min-h-[100px] w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        placeholder="Any specific requirements or questions?"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Calendar Integration Placeholder */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="bg-primary-50 border-2 border-primary rounded-lg p-8 text-center">
                      <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Calendar Integration Coming Soon</h3>
                      <p className="text-neutral-600 mb-6">
                        This is where you'll be able to select your preferred consultation time from our available slots.
                        For now, we'll contact you via email to schedule your free consultation.
                      </p>
                      <div className="text-sm text-neutral-500">
                        <p className="mb-2">Integration options:</p>
                        <ul className="space-y-1">
                          <li>• Cal.com (open source, recommended)</li>
                          <li>• Calendly</li>
                          <li>• Google Calendar API</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time (Optional)</Label>
                      <Select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9AM - 12PM AEST)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM AEST)</option>
                        <option value="evening">Evening (5PM - 8PM AEST)</option>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4: Success */}
                {step === 4 && (
                  <div className="text-center py-8">
                    <div className="h-20 w-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You, {formData.fullName}!</h3>
                    <p className="text-neutral-600 mb-6">
                      We've received your booking request for the <strong>{formData.servicePackage} package</strong>.
                      A confirmation email has been sent to <strong>{formData.email}</strong>.
                    </p>
                    <p className="text-neutral-600 mb-8">
                      We'll contact you within 24 hours to schedule your free consultation and answer any questions.
                    </p>
                    <Link href="/">
                      <Button size="lg">Return to Home</Button>
                    </Link>
                  </div>
                )}

                {/* Navigation Buttons */}
                {step < 4 && (
                  <div className="flex gap-4 mt-6">
                    {step > 1 && (
                      <Button type="button" variant="outline" onClick={handlePrevStep} className="flex-1">
                        Previous
                      </Button>
                    )}
                    {step < 3 && (
                      <Button type="button" onClick={handleNextStep} className="flex-1" disabled={
                        (step === 1 && (!formData.fullName || !formData.email || !formData.phone || !formData.university || !formData.arrivalDate)) ||
                        (step === 2 && !formData.servicePackage)
                      }>
                        Next
                      </Button>
                    )}
                    {step === 3 && (
                      <Button type="submit" className="flex-1">
                        Submit Booking
                      </Button>
                    )}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

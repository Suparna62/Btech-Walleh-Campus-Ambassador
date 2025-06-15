"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",

    // Academic Info
    college: "",
    course: "",
    year: "",
    cgpa: "",
    graduationYear: "",

    // Social Media
    instagram: "",
    linkedin: "",
    twitter: "",

    // Experience
    experience: "",
    skills: "",
    motivation: "",

    // Additional
    agreeTerms: false,
    agreePrivacy: false,
  })

  const steps = [
    { number: 1, title: "Personal Information", description: "Basic details about you" },
    { number: 2, title: "Academic Details", description: "Your educational background" },
    { number: 3, title: "Social Presence", description: "Your social media profiles" },
    { number: 4, title: "Experience & Skills", description: "Tell us about yourself" },
    { number: 5, title: "Review & Submit", description: "Final review of your application" },
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    // Redirect to success page or show success message
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campus Ambassador Application</h1>
          <p className="text-gray-600">Join our community of student leaders and make an impact at your campus</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step.number ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.number ? <CheckCircle className="w-6 h-6" /> : step.number}
                  </div>
                  <div className="text-center mt-2 hidden md:block">
                    <div className="text-sm font-medium text-gray-900">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${currentStep > step.number ? "bg-blue-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>
                Step {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>{steps[currentStep - 1].description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Academic Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="college">College/University Name *</Label>
                    <Input
                      id="college"
                      value={formData.college}
                      onChange={(e) => handleInputChange("college", e.target.value)}
                      placeholder="Enter your college/university name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="course">Course/Program *</Label>
                    <Select onValueChange={(value) => handleInputChange("course", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech-cse">B.Tech Computer Science</SelectItem>
                        <SelectItem value="btech-it">B.Tech Information Technology</SelectItem>
                        <SelectItem value="btech-ece">B.Tech Electronics & Communication</SelectItem>
                        <SelectItem value="btech-mechanical">B.Tech Mechanical</SelectItem>
                        <SelectItem value="bca">BCA</SelectItem>
                        <SelectItem value="mca">MCA</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year">Current Year *</Label>
                      <Select onValueChange={(value) => handleInputChange("year", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="graduationYear">Expected Graduation Year *</Label>
                      <Select onValueChange={(value) => handleInputChange("graduationYear", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cgpa">CGPA/Percentage *</Label>
                    <Input
                      id="cgpa"
                      value={formData.cgpa}
                      onChange={(e) => handleInputChange("cgpa", e.target.value)}
                      placeholder="Enter your CGPA or percentage"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Social Presence */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 mb-4">
                    Please provide your social media profiles. At least one platform is required.
                  </div>
                  <div>
                    <Label htmlFor="instagram">Instagram Profile</Label>
                    <Input
                      id="instagram"
                      value={formData.instagram}
                      onChange={(e) => handleInputChange("instagram", e.target.value)}
                      placeholder="https://instagram.com/yourusername"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn Profile *</Label>
                    <Input
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      placeholder="https://linkedin.com/in/yourusername"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitter">Twitter Profile</Label>
                    <Input
                      id="twitter"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange("twitter", e.target.value)}
                      placeholder="https://twitter.com/yourusername"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Experience & Skills */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience">Previous Leadership/Event Experience</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="Describe any leadership roles, events organized, or relevant experience..."
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="skills">Technical Skills & Interests</Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      placeholder="List your technical skills, programming languages, areas of interest..."
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="motivation">Why do you want to be a Campus Ambassador? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      placeholder="Tell us about your motivation and what you hope to achieve..."
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Review & Submit */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Application Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Name:</strong> {formData.firstName} {formData.lastName}
                      </div>
                      <div>
                        <strong>Email:</strong> {formData.email}
                      </div>
                      <div>
                        <strong>College:</strong> {formData.college}
                      </div>
                      <div>
                        <strong>Course:</strong> {formData.course}
                      </div>
                      <div>
                        <strong>Year:</strong> {formData.year}
                      </div>
                      <div>
                        <strong>CGPA:</strong> {formData.cgpa}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreePrivacy}
                        onCheckedChange={(checked) => handleInputChange("agreePrivacy", checked)}
                      />
                      <Label htmlFor="privacy" className="text-sm">
                        I agree to the{" "}
                        <Link href="/privacy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                  Previous
                </Button>
                {currentStep < 5 ? (
                  <Button onClick={nextStep}>Next</Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.agreeTerms || !formData.agreePrivacy}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

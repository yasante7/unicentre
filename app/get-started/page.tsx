"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle, GraduationCap, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AcademicForm } from "./components/academic-form"
import { InterestsForm } from "./components/interests-form"
import { LoginForm } from "./components/login-form"
import { SignupForm } from "./components/signup-form"

export default function GetStartedPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>("signup")
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalSteps = 3

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          <span className="text-xl font-bold">UniMatch</span>
        </div>
      </header>

      <main className="container flex flex-1 items-center justify-center py-12">
        <Card className="mx-auto w-full max-w-[800px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Get Started with UniMatch</CardTitle>
            <CardDescription>
              {activeTab === "login"
                ? "Log in to your account to continue your journey"
                : "Create an account and set up your profile to get personalized university recommendations"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="login">Log In</TabsTrigger>
              </TabsList>

              <TabsContent value="signup" className="mt-6 space-y-6">
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="mb-2 text-lg font-medium">Step 1: Create Your Account</h3>
                      <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
                    </div>
                    <SignupForm />
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="mb-2 text-lg font-medium">Step 2: Academic Information</h3>
                      <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
                    </div>
                    <AcademicForm />
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="mb-2 text-lg font-medium">Step 3: Interests & Preferences</h3>
                      <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
                    </div>
                    <InterestsForm />
                  </motion.div>
                )}

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={handleNext} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                      </>
                    ) : currentStep === totalSteps ? (
                      <>
                        Complete <CheckCircle className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="login" className="mt-6">
                <LoginForm onSuccess={() => router.push("/dashboard")} />
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 border-t bg-muted/30 px-6 py-4">
            <div className="text-center text-sm text-muted-foreground">
              By continuing, you agree to UniMatch's{" "}
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </a>
              .
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

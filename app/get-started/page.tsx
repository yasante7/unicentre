"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { SignupForm } from "./components/signup-form"
import { LoginForm } from "./components/login-form"

export default function GetStartedPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>("signup")

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="container flex h-16 items-center">
        <div className="flex items-center gap-2 text-blue-600">
          <GraduationCap className="h-6 w-6" />
          <span className="text-xl font-bold">UniMatch</span>
        </div>
      </header>

      <main className="container flex flex-1 items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mx-auto w-full max-w-md border-none shadow-2xl rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {activeTab === "signup" ? "Create Account" : "Welcome Back"}
              </CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">
                {activeTab === "signup"
                  ? "Sign up to start your journey to the perfect university 🎓"
                  : "Log in to access your dashboard and recommendations 🚀"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted rounded-xl mb-4">
                  <TabsTrigger value="signup" className="rounded-xl text-sm">
                    Sign Up
                  </TabsTrigger>
                  <TabsTrigger value="login" className="rounded-xl text-sm">
                    Log In
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="signup">
                  <SignupForm />
                </TabsContent>

                <TabsContent value="login">
                  <LoginForm onSuccess={() => router.push("/dashboard")} />
                </TabsContent>
              </Tabs>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 border-t bg-muted/30 px-6 py-4 text-center">
              <p className="text-sm text-muted-foreground">
                By continuing, you agree to our{" "}
                <a href="#" className="underline hover:text-primary">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-primary">
                  Privacy Policy
                </a>
                .
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}

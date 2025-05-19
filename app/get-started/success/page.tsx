"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { GraduationCap } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="container flex h-16 items-center">
        <div className="flex items-center gap-2 text-blue-600">
          <GraduationCap className="h-6 w-6" />
          <span className="text-xl font-bold">UniMatch</span>
        </div>
      </header>

      <main className="flex-1 container py-12 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-2xl font-semibold mb-4">Account Created Successfully!</h1>
          <p className="text-muted-foreground mb-8">
            Signup successful! Please check your email to confirm your account.
          </p>
          <Link href="/dashboard">
            <Button className="w-full">
              Continue to Dashboard
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

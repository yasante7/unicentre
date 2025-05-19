"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Circle } from "lucide-react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [agree, setAgree] = useState(false)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCheckboxChange = (checked: boolean | string) => {
    if (checked && !agree) {
      setIsAnimating(true);
      // Simulate a delay before setting checked state
      setTimeout(() => {
        setAgree(true);
        setIsAnimating(false);
      }, 800);
    } else if (!checked && agree) {
      setAgree(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!agree) {
      setMessage("You must agree to the terms.")
      return
    }

    // Basic phone validation
    const phonePattern = /^\+?[0-9\s\-\(\)]+$/;
    if (!phonePattern.test(phone)) {
      setMessage("Please enter a valid phone number")
      return
    }

    setLoading(true)
    setMessage("")

    // ✅ Use Supabase Auth to sign up the user
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone_number: phone, // Changed key from 'phone' to 'phone_number'
        },
      },
    })
    
    // Log to check the response
    console.log("Signup response:", data)

    if (error) {
      if (error.message.includes("already registered") || 
          error.message.includes("User already registered")) {
        setMessage("Email already registered. Please log in.")
      } else {
          setMessage(`Error: ${error.message}`)

      }
      setLoading(false)
    } else {
      // Check if user was created successfully
      if (data.user) {
        setTimeout(() => router.push("/get-started/success"), 1000)
        setMessage("Signup successful! Your account has been created.")
        console.log("User metadata:", data.user.user_metadata)
        
        // // Clear form
        // setFirstName("")
        // setLastName("")
        // setEmail("")
        // setPhone("")
        // setPassword("")
        // setAgree(false)
        
        // Navigate to success page
      } else {
        setMessage("Account created, but user data couldn't be set. Please contact support.")
        setLoading(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Kindly enter your phone number"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="sr-only">{showPassword ? "Hide" : "Show"} password</span>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Password must be at least 6 characters and include a number and a special character.
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <Checkbox
            id="terms"
            checked={agree}
            onCheckedChange={handleCheckboxChange}
            disabled={isAnimating}
            className={isAnimating ? "opacity-0" : "opacity-100 transition-opacity duration-200"}
          />
          {isAnimating && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center text-primary"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "linear" }}
            >
              <Circle className="h-4 w-4 animate-spin" />
            </motion.div>
          )}
        </div>
        <Label htmlFor="terms" className="text-sm font-normal">
          I agree to receive emails about university recommendations and application deadlines
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Sign Up"}
      </Button>

      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </form>
  )
}

"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="container flex h-20 items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-6 w-6" />
        <span className="text-2xl font-bold">UniMatch</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#features" className="text-base font-medium hover:underline underline-offset-4">
          Features
        </Link>
        <Link href="#how-it-works" className="text-base font-medium hover:underline underline-offset-4">
          How It Works
        </Link>
        <Link href="#testimonials" className="text-base font-medium hover:underline underline-offset-4">
          Testimonials
        </Link>
        <Link href="#pricing" className="text-base font-medium hover:underline underline-offset-4">
          Pricing
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/get-started">
          <Button variant= 'ghost' className="border border-muted shadow-sm hover:bg-muted/30">Log in</Button>
        </Link>
        <Link href="/get-started">
          <Button className="ml-2 md:ml-4">Get Started</Button>
        </Link>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t shadow-md md:hidden flex flex-col items-start px-4 py-4 z-50">
          <Link href="#features" className="py-2 text-base font-medium">Features</Link>
          <Link href="#how-it-works" className="py-2 text-base font-medium">How It Works</Link>
          <Link href="#testimonials" className="py-2 text-base font-medium">Testimonials</Link>
          <Link href="#pricing" className="py-2 text-base font-medium">Pricing</Link>
          <div className="flex gap-2 mt-4">
            <Link href="/get-started">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/get-started">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

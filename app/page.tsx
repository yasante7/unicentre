"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import { Header } from "./components/header"
import { HeroSection } from "./components/hero"
import { FeaturesSection } from "./components/featuresection"
import { HowItWorksSection } from "./components/howitworks"
import { StatsSection } from "./components/stats"
import { TestimonialsSection } from "./components/testimonials"
import { CtaSection } from "./components/cta"
import { Footer } from "./components/footer"


export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Header />
      </header>

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <TestimonialsSection />
        {/* <PricingSection /> */}
        <CtaSection />
      </main>

      <footer className="border-t bg-muted/40">
        <Footer />
      </footer>
    </div>
  )
}

export function AnimatedElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls}>
      {children}
    </motion.div>
  )
}

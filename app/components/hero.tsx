"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 md:px-8 py-12.5 md:py-20">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                Your Path to College{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Success
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-lg text-muted-foreground sm:text-xl"
              >
                Get personalized university recommendations, track applications, and increase your chances of admission.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/get-started">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline">
                  How It Works
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {["smile.jpg", "smilecopy.jpg", "smilecopy1.jpg", "smilecopy2.jpg"].map((i) => (
                  <div key={i} className="h-8 w-8 overflow-hidden rounded-full border-2 border-background">
                    <Image
                      src={`/images/${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">1,000+</span> students found their dream university
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[700px] h-[300px] overflow-hidden rounded-xl border bg-background shadow-xl md:mx-0"
          >
            <Image
              src="/images/student.jpg"
              alt="Dashboard Preview"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 -z-10 h-64 w-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
    </section>
  )
}
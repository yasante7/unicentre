"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, GraduationCap, LineChart, MessageSquare, Search, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">UniMatch</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hidden md:flex">
                Log in
              </Button>
            </Link>
            <Link href="/get-started">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-bold">UniMatch</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Helping students find their perfect university match since 2023.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} UniMatch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm"
              >
                <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                <span className="font-medium">Find your perfect university match</span>
              </motion.div>
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
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 overflow-hidden rounded-full border-2 border-background">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
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
            className="relative mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border bg-background shadow-xl md:mx-0"
          >
            <Image
              src="/student.jpg"
              alt="Dashboard Preview"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 -z-10 h-64 w-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-blue-500" />,
      title: "Smart University Matching",
      description:
        "Our AI-powered algorithm analyzes your academic profile, preferences, and goals to recommend universities where you'll thrive.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-green-500" />,
      title: "Admission Chances",
      description:
        "Get realistic assessments of your admission chances at different universities based on historical data and your profile.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-500" />,
      title: "Application Tracking",
      description: "Easily track all your applications in one place, with deadlines, requirements, and status updates.",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Expert Guidance",
      description: "Connect with admission counselors and get personalized advice on improving your applications.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <AnimatedElement>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Features Designed for Student Success
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to navigate the college admission process with confidence.
            </p>
          </div>
        </AnimatedElement>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <Card className="h-full overflow-hidden border-none bg-gradient-to-b from-muted/50 to-muted shadow-sm transition-all hover:shadow-md">
                <CardContent className="flex h-full flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-muted p-2">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Enter your academic information, extracurricular activities, test scores, and preferences to build your student profile.",
    },
    {
      number: "02",
      title: "Get Personalized Recommendations",
      description:
        "Our algorithm analyzes your profile and suggests universities that match your academic strengths and preferences.",
    },
    {
      number: "03",
      title: "Track Your Applications",
      description: "Manage all your applications in one place, with deadline reminders and requirement checklists.",
    },
    {
      number: "04",
      title: "Receive Admission Offers",
      description: "Compare admission offers, scholarships, and make an informed decision about your academic future.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-muted/30 py-20 md:py-32">
      <div className="container">
        <AnimatedElement>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mt-4 text-muted-foreground">
              A simple four-step process to find and apply to your dream universities.
            </p>
          </div>
        </AnimatedElement>

        <div className="mt-16">
          {steps.map((step, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="relative mb-12 grid gap-8 md:grid-cols-[1fr_3fr]">
                <div className="flex flex-col items-center md:items-end">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && <div className="mt-4 h-full w-px bg-border md:mr-6"></div>}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: "1,000+", label: "Universities" },
    { value: "50,000+", label: "Students Helped" },
    { value: "92%", label: "Admission Rate" },
    { value: "4.8/5", label: "Student Rating" },
  ]

  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-primary-foreground/80">{stat.label}</div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "UniMatch helped me find universities I hadn't even considered. I got accepted to my dream school with a scholarship!",
      author: "Sarah J.",
      role: "Freshman at Stanford University",
      avatar: "/placeholder.svg?height=64&width=64&text=SJ",
    },
    {
      quote:
        "The application tracking feature saved me from missing deadlines. The personalized recommendations were spot on!",
      author: "Michael T.",
      role: "Sophomore at MIT",
      avatar: "/placeholder.svg?height=64&width=64&text=MT",
    },
    {
      quote:
        "As a first-generation college student, I was lost in the application process. UniMatch made it simple and stress-free.",
      author: "Priya K.",
      role: "Junior at UC Berkeley",
      avatar: "/placeholder.svg?height=64&width=64&text=PK",
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container">
        <AnimatedElement>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p className="mt-4 text-muted-foreground">
              Join thousands of students who found their perfect university match with our platform.
            </p>
          </div>
        </AnimatedElement>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <Card className="h-full overflow-hidden">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="flex-1 text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="mt-6 flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic features for students just starting their college search.",
      features: ["University matching", "Basic profile", "Limited recommendations", "Application tracking (up to 3)"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Everything you need for a successful application season.",
      features: [
        "Advanced university matching",
        "Unlimited recommendations",
        "Unlimited application tracking",
        "Deadline reminders",
        "Admission chance calculator",
        "Essay topic suggestions",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$19.99",
      period: "per month",
      description: "Premium features plus personalized guidance from experts.",
      features: [
        "All Premium features",
        "1-on-1 counselor sessions",
        "Essay reviews",
        "Interview preparation",
        "Scholarship matching",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="bg-muted/30 py-20 md:py-32">
      <div className="container">
        <AnimatedElement>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground">
              Choose the plan that fits your needs. All plans include a 7-day free trial.
            </p>
          </div>
        </AnimatedElement>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <Card
                className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-lg" : "border-border"}`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="ml-1 text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-6">
                    <Button
                      className={`w-full ${plan.popular ? "" : "bg-muted-foreground hover:bg-muted-foreground/90"}`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-12 md:px-12 md:py-24">
          <div className="mx-auto max-w-[800px] text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Ready to Find Your Dream University?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-white/80"
            >
              Join thousands of students who found their perfect match with UniMatch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/get-started">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
                >
                  Request a Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

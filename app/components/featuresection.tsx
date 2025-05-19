"use client"
import { LineChart, MessageSquare, Search, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedElement } from "../page"

export function FeaturesSection() {
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
    <section id="features" className="px-4 md:px-8 py-12.5 md:py-20">
      <div className="container">
        <AnimatedElement>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Features Designed for Student Success
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to navigate the University admission process with confidence.
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
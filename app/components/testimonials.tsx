"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedElement } from "../page"

export function TestimonialsSection() {
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
                  <p className="flex-1 text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
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
import { AnimatedElement } from "../page"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function PricingSection() {
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
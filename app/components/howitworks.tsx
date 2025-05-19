import { AnimatedElement } from "../page"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Enter your Biodata to Sign Up. This allows you to track your recommended programs and make future changes to your results.",
    },
    {
      number: "02",
      title: "Create Your Profile",
      description:
        "Enter your academic information to build your student profile.",
    },
    {
      number: "03",
      title: "Get Personalized Recommendations",
      description:
        "Our algorithm analyzes your profile and suggest university Programs that match your academic strengths and preferences.",
    },
    {
      number: "04",
      title: "Learn more about the program and Make your choice",
      description:
        "Explore detailed information about each recommended program, including admission requirements, deadlines, and more.",
    },
    {
      number: "05",
      title: "Track Your Applications",
      description: "Manage all your applications in one place, with deadline reminders and requirement checklists.",
    }
  ]

  return (
    <section id="how-it-works" className="bg-muted/30 px-4 md:px-8 py-12.5 md:py-20">
      <div className="container">
        <AnimatedElement>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mt-4 text-muted-foreground">
              A simple five-step process to find and apply to your dream universities.
            </p>
          </div>
        </AnimatedElement>

        <div className="mt-16">
          {steps.map((step, index) => (
            <AnimatedElement key={index} delay={index * 0.2}>
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
import { AnimatedElement } from "../page"

export function StatsSection() {
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
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
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
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-white text-black hover:bg-white/10 sm:w-auto"
                >
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-black hover:bg-white/10 sm:w-auto"
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
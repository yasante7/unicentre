import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export function RecommendedUniversities() {
  const universities = [
    {
      name: "Stanford University",
      location: "Stanford, CA",
      programs: ["Computer Science", "Data Science"],
      match: 85,
      logo: "/placeholder.svg?height=40&width=40",
      type: "Reach",
    },
    {
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      programs: ["Computer Science", "Artificial Intelligence"],
      match: 92,
      logo: "/placeholder.svg?height=40&width=40",
      type: "Match",
    },
    {
      name: "Georgia Tech",
      location: "Atlanta, GA",
      programs: ["Computer Science", "Cybersecurity"],
      match: 88,
      logo: "/placeholder.svg?height=40&width=40",
      type: "Match",
    },
  ]

  return (
    <div className="space-y-4">
      {universities.map((university, index) => (
        <div key={index} className="flex items-start space-x-4 rounded-lg border p-3">
          <div className="flex-shrink-0">
            <Image
              src={university.logo || "/placeholder.svg"}
              alt={university.name}
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{university.name}</h3>
              <div className="flex items-center">
                <div
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    university.type === "Reach"
                      ? "bg-yellow-100 text-yellow-800"
                      : university.type === "Match"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {university.type}
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{university.location}</p>
            <div className="flex flex-wrap gap-1">
              {university.programs.map((program, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium"
                >
                  {program}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-xs font-medium">{university.match}% match</span>
              </div>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

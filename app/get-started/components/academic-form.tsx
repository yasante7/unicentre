"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function AcademicForm() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Current Academic Status</Label>
        <RadioGroup defaultValue="high-school" className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high-school" id="high-school" />
            <Label htmlFor="high-school" className="font-normal">
              High School Student
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="gap-year" id="gap-year" />
            <Label htmlFor="gap-year" className="font-normal">
              Gap Year / Taking Time Off
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="transfer" id="transfer" />
            <Label htmlFor="transfer" className="font-normal">
              Transfer Student
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="international" id="international" />
            <Label htmlFor="international" className="font-normal">
              International Student
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="gpa">GPA (on 4.0 scale)</Label>
          <Input id="gpa" type="number" step="0.01" min="0" max="4" placeholder="e.g., 3.75" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="graduation-year">Expected Graduation Year</Label>
          <Select defaultValue="2024">
            <SelectTrigger id="graduation-year">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
              <SelectItem value="2027">2027</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Test Scores (Optional)</Label>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="sat" className="text-sm">
              SAT Score (out of 1600)
            </Label>
            <Input id="sat" type="number" min="400" max="1600" placeholder="e.g., 1350" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="act" className="text-sm">
              ACT Score (out of 36)
            </Label>
            <Input id="act" type="number" min="1" max="36" placeholder="e.g., 28" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Academic Strengths</Label>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="math-slider" className="text-sm">
                Mathematics
              </Label>
              <span className="text-sm text-muted-foreground" id="math-value">
                Good
              </span>
            </div>
            <Slider defaultValue={[70]} max={100} step={1} id="math-slider" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="science-slider" className="text-sm">
                Science
              </Label>
              <span className="text-sm text-muted-foreground" id="science-value">
                Very Good
              </span>
            </div>
            <Slider defaultValue={[80]} max={100} step={1} id="science-slider" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="writing-slider" className="text-sm">
                Writing & Language
              </Label>
              <span className="text-sm text-muted-foreground" id="writing-value">
                Excellent
              </span>
            </div>
            <Slider defaultValue={[90]} max={100} step={1} id="writing-slider" />
          </div>
        </div>
      </div>
    </div>
  )
}

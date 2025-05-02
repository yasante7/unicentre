"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function InterestsForm() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Intended Major(s)</Label>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Primary field of study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
                <SelectItem value="psychology">Psychology</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Secondary field (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
                <SelectItem value="psychology">Psychology</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Location Preferences</Label>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="region" className="text-sm">
              Preferred Region(s)
            </Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="northeast" />
                <Label htmlFor="northeast" className="font-normal">
                  Northeast
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="midwest" />
                <Label htmlFor="midwest" className="font-normal">
                  Midwest
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="south" />
                <Label htmlFor="south" className="font-normal">
                  South
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="west" />
                <Label htmlFor="west" className="font-normal">
                  West
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="international" />
                <Label htmlFor="international" className="font-normal">
                  International
                </Label>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="setting" className="text-sm">
              Campus Setting
            </Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="urban" />
                <Label htmlFor="urban" className="font-normal">
                  Urban
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="suburban" />
                <Label htmlFor="suburban" className="font-normal">
                  Suburban
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="rural" />
                <Label htmlFor="rural" className="font-normal">
                  Rural
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>University Size</Label>
        <RadioGroup defaultValue="medium" className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small" id="small" />
            <Label htmlFor="small" className="font-normal">
              Small (less than 5,000 students)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="medium" />
            <Label htmlFor="medium" className="font-normal">
              Medium (5,000 - 15,000 students)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large" id="large" />
            <Label htmlFor="large" className="font-normal">
              Large (more than 15,000 students)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no-preference" id="no-preference" />
            <Label htmlFor="no-preference" className="font-normal">
              No Preference
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="extracurriculars">Extracurricular Interests</Label>
        <Textarea
          id="extracurriculars"
          placeholder="Tell us about your extracurricular activities, hobbies, and interests..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  )
}

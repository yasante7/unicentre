"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function AccountForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Choose a username" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input id="phone" type="tel" placeholder="e.g., (123) 456-7890" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio (Optional)</Label>
        <Textarea id="bio" placeholder="Tell us a bit about yourself..." className="min-h-[100px]" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="how-heard">How did you hear about us?</Label>
        <Select>
          <SelectTrigger id="how-heard">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="search">Search Engine</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="friend">Friend or Family</SelectItem>
            <SelectItem value="school">School Counselor</SelectItem>
            <SelectItem value="ad">Advertisement</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

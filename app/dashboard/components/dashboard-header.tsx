"use client"

import Link from "next/link"
import { Bell, ChevronDown, Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardSidebar } from "./dashboard-sidebar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <DashboardSidebar />
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-2">
        <Link href="/dashboard" className="flex items-center">
          <GraduationCapLogo />
          <span className="ml-2 text-xl font-bold">UniMatch</span>
        </Link>
      </div>

      <div className="relative ml-auto flex-1 max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search universities, programs..."
          className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              2
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="font-medium">Application Update</span>
            <span className="ml-2 text-xs text-muted-foreground">Stanford University</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="font-medium">Deadline Reminder</span>
            <span className="ml-2 text-xs text-muted-foreground">MIT Application</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="h-6 w-6 rounded-full" />
            <span className="hidden md:inline-flex">Alex Johnson</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

function GraduationCapLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  )
}

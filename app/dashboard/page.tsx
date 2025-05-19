import type { Metadata } from "next"
import { ArrowUpRight, Bell, Calendar, CheckCircle, Clock, GraduationCap, MessageSquare, PieChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "./components/dashboard-header"
import { DashboardSidebar } from "./components/dashboard-sidebar"
import { RecommendedUniversities } from "./components/recommended-universities"
import { ApplicationTimeline } from "./components/application-timeline"
import { UpcomingDeadlines } from "./components/upcoming-deadlines"

export const metadata: Metadata = {
  title: "Dashboard | UniMatch",
  description: "University admission recommendation dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 pt-0">
          <div className="space-y-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">Welcome back, Alex! Here&apos;s your admission journey overview.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button>
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Find Universities
                </Button>
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">85%</div>
                      <Progress value={85} className="mt-2" />
                      <p className="text-xs text-muted-foreground mt-2">
                        Complete your profile to get better recommendations
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Applications</CardTitle>
                      <PieChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3/8</div>
                      <Progress value={37.5} className="mt-2" />
                      <p className="text-xs text-muted-foreground mt-2">3 submitted, 5 in progress</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4</div>
                      <div className="flex items-center mt-2">
                        <Clock className="mr-1 h-3 w-3 text-orange-500" />
                        <span className="text-xs text-orange-500">Nearest: 5 days</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Stanford, MIT, Berkeley, UCLA</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Messages</CardTitle>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <div className="flex items-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                        <span className="text-xs text-muted-foreground">2 unread</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">From admission counselors</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Recommended Universities</CardTitle>
                      <CardDescription>Based on your profile and preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecommendedUniversities />
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Recommendations
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Upcoming Deadlines</CardTitle>
                      <CardDescription>Don&apos;t miss these important dates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <UpcomingDeadlines />
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Calendar
                        <Calendar className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Application Timeline</CardTitle>
                      <CardDescription>Track your application progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ApplicationTimeline />
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Applications
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Admission Chances</CardTitle>
                      <CardDescription>Based on your academic profile</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">Stanford University</div>
                            <div className="text-xs text-muted-foreground">Computer Science</div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-sm font-semibold text-yellow-600">Reach</div>
                            <div className="ml-2 h-2 w-2 rounded-full bg-yellow-500"></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">University of Michigan</div>
                            <div className="text-xs text-muted-foreground">Computer Science</div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-sm font-semibold text-green-600">Match</div>
                            <div className="ml-2 h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">Georgia Tech</div>
                            <div className="text-xs text-muted-foreground">Computer Science</div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-sm font-semibold text-green-600">Match</div>
                            <div className="ml-2 h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">UC San Diego</div>
                            <div className="text-xs text-muted-foreground">Computer Science</div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-sm font-semibold text-blue-600">Safety</div>
                            <div className="ml-2 h-2 w-2 rounded-full bg-blue-500"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Detailed Analysis
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>University Recommendations</CardTitle>
                    <CardDescription>Personalized recommendations based on your profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Detailed university recommendations will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Applications</CardTitle>
                    <CardDescription>Track and manage your university applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Your application details will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Timeline</CardTitle>
                    <CardDescription>Important dates and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Your application timeline will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

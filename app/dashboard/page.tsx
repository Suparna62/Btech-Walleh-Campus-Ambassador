"use client"

import { useState } from "react"
import { Bell, Trophy, Target, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "../components/navigation"

export default function DashboardPage() {
  const [notifications] = useState([
    { id: 1, message: "New task assigned: Social Media Campaign", time: "2 hours ago", type: "task" },
    { id: 2, message: "You've earned 50 points for completing workshop!", time: "1 day ago", type: "reward" },
    { id: 3, message: "Upcoming event: Tech Talk on AI", time: "2 days ago", type: "event" },
  ])

  const stats = {
    totalPoints: 2450,
    rank: 3,
    tasksCompleted: 28,
    eventsOrganized: 5,
    studentsReached: 150,
    monthlyTarget: 3000,
  }

  const recentTasks = [
    { id: 1, title: "Organize Workshop on Web Development", status: "completed", points: 100, deadline: "2024-01-15" },
    { id: 2, title: "Social Media Campaign - React Course", status: "in-progress", points: 75, deadline: "2024-01-20" },
    { id: 3, title: "Campus Survey - Student Interests", status: "pending", points: 50, deadline: "2024-01-25" },
  ]

  const upcomingEvents = [
    { id: 1, title: "AI/ML Workshop", date: "2024-01-18", attendees: 45 },
    { id: 2, title: "Coding Bootcamp", date: "2024-01-22", attendees: 32 },
    { id: 3, title: "Tech Career Fair", date: "2024-01-28", attendees: 78 },
  ]

  const achievements = [
    { title: "First Event", description: "Organized your first campus event", earned: true },
    { title: "Social Butterfly", description: "Reached 100+ students", earned: true },
    { title: "Point Master", description: "Earned 1000+ points", earned: true },
    { title: "Event Expert", description: "Organized 5+ events", earned: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Priya! 👋</h1>
            <p className="text-gray-600">Here's what's happening with your ambassador activities</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              {notifications.length} Notifications
            </Button>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Active Ambassador
            </Badge>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Trophy className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPoints.toLocaleString()}</div>
              <p className="text-xs text-blue-100">+180 from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
              <Award className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{stats.rank}</div>
              <p className="text-xs text-green-100">Out of 156 ambassadors</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              <Target className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.tasksCompleted}</div>
              <p className="text-xs text-purple-100">+5 this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students Reached</CardTitle>
              <Target className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.studentsReached}</div>
              <p className="text-xs text-orange-100">+25 this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{task.title}</p>
                      <p className="text-xs text-gray-500">{task.deadline}</p>
                    </div>
                    <Badge
                      variant={
                        task.status === "completed"
                          ? "default"
                          : task.status === "in-progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {task.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Tasks
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.slice(0, 3).map((event) => (
                  <div key={event.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{event.title}</p>
                      <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                    <Badge variant="outline">{event.attendees} attendees</Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Events
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.earned ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      <Trophy className={`w-4 h-4 ${achievement.earned ? "text-green-600" : "text-gray-400"}`} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-gray-500">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Achievements
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      notification.type === "task"
                        ? "bg-blue-500"
                        : notification.type === "reward"
                          ? "bg-green-500"
                          : "bg-purple-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="font-medium">{notification.message}</p>
                    <p className="text-sm text-gray-600">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

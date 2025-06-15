"use client"

import { useState } from "react"
import { Plus, Filter, Search, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "../components/navigation"

export default function TasksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const tasks = [
    {
      id: 1,
      title: "Organize Web Development Workshop",
      description: "Plan and execute a 2-hour workshop on React fundamentals for 30+ students",
      status: "in-progress",
      priority: "high",
      points: 150,
      deadline: "2024-01-20",
      category: "Workshop",
      requirements: ["Book venue", "Prepare materials", "Promote event", "Conduct workshop"],
    },
    {
      id: 2,
      title: "Social Media Campaign - Python Course",
      description: "Create engaging posts to promote the new Python course launch",
      status: "pending",
      priority: "medium",
      points: 75,
      deadline: "2024-01-18",
      category: "Marketing",
      requirements: ["Create 5 posts", "Design graphics", "Schedule posts", "Track engagement"],
    },
    {
      id: 3,
      title: "Student Survey - Course Feedback",
      description: "Conduct survey among 50+ students about current course offerings",
      status: "completed",
      priority: "low",
      points: 50,
      deadline: "2024-01-15",
      category: "Research",
      requirements: ["Design survey", "Collect responses", "Analyze data", "Submit report"],
    },
    {
      id: 4,
      title: "Campus Tech Talk - AI/ML Trends",
      description: "Invite industry expert for a tech talk on latest AI/ML trends",
      status: "pending",
      priority: "high",
      points: 200,
      deadline: "2024-01-25",
      category: "Event",
      requirements: ["Find speaker", "Book auditorium", "Promote event", "Manage logistics"],
    },
    {
      id: 5,
      title: "Create Tutorial Video - JavaScript Basics",
      description: "Record a 15-minute tutorial video explaining JavaScript fundamentals",
      status: "in-progress",
      priority: "medium",
      points: 100,
      deadline: "2024-01-22",
      category: "Content",
      requirements: ["Write script", "Record video", "Edit content", "Upload to platform"],
    },
  ]

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || task.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "pending":
        return <AlertCircle className="w-4 h-4 text-gray-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-orange-100 text-orange-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tasks & Assignments</h1>
            <p className="text-gray-600">Manage your ambassador tasks and track progress</p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Request New Task
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tasks</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Task Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {tasks.filter((t) => t.status === "pending").length}
                </div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {tasks.filter((t) => t.status === "in-progress").length}
                </div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {tasks.filter((t) => t.status === "completed").length}
                </div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {tasks.reduce((sum, task) => sum + task.points, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Points</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getStatusIcon(task.status)}
                    <div>
                      <CardTitle className="text-lg">{task.title}</CardTitle>
                      <CardDescription className="mt-1">{task.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                    <Badge variant="outline">+{task.points} pts</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Badge className={getStatusColor(task.status)}>{task.status.replace("-", " ")}</Badge>
                    <span className="text-sm text-gray-600">Category: {task.category}</span>
                    <span className="text-sm text-gray-600">Due: {task.deadline}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {task.status !== "completed" && (
                      <Button size="sm">{task.status === "pending" ? "Start Task" : "Continue"}</Button>
                    )}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Requirements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {task.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
                <p className="text-gray-600">
                  {searchTerm || filterStatus !== "all"
                    ? "Try adjusting your search or filters"
                    : "You don't have any tasks assigned yet"}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}

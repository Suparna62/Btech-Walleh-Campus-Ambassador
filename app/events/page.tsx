"use client"
import { Calendar, MapPin, Users, Clock, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navigation from "../components/navigation"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI/ML Workshop Series",
      description: "3-day intensive workshop covering machine learning fundamentals and practical applications",
      date: "2024-01-20",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium, Block A",
      attendees: 85,
      maxAttendees: 100,
      organizer: "Priya Kumari",
      status: "confirmed",
      category: "Workshop",
      points: 200,
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      description: "Learn React, Node.js, and full-stack development in this hands-on bootcamp",
      date: "2024-01-25",
      time: "9:00 AM - 6:00 PM",
      location: "Computer Lab 1",
      attendees: 45,
      maxAttendees: 50,
      organizer: "Arjun Sharma",
      status: "confirmed",
      category: "Bootcamp",
      points: 250,
    },
    {
      id: 3,
      title: "Tech Career Fair 2024",
      description: "Meet with top tech companies and explore career opportunities",
      date: "2024-02-01",
      time: "11:00 AM - 5:00 PM",
      location: "Campus Ground",
      attendees: 120,
      maxAttendees: 200,
      organizer: "Sneha Patel",
      status: "planning",
      category: "Career Fair",
      points: 300,
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Python Programming Workshop",
      description: "Introduction to Python programming for beginners",
      date: "2024-01-10",
      attendees: 65,
      organizer: "Priya Kumari",
      status: "completed",
      category: "Workshop",
      points: 150,
      feedback: 4.8,
    },
    {
      id: 5,
      title: "Cybersecurity Awareness Session",
      description: "Learn about online security and best practices",
      date: "2024-01-05",
      attendees: 40,
      organizer: "Rahul Verma",
      status: "completed",
      category: "Seminar",
      points: 100,
      feedback: 4.6,
    },
  ]

  const myEvents = upcomingEvents
    .filter((event) => event.organizer === "Priya Kumari")
    .concat(pastEvents.filter((event) => event.organizer === "Priya Kumari"))

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "planning":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workshop":
        return "bg-purple-100 text-purple-800"
      case "Bootcamp":
        return "bg-orange-100 text-orange-800"
      case "Career Fair":
        return "bg-blue-100 text-blue-800"
      case "Seminar":
        return "bg-green-100 text-green-800"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Events & Workshops</h1>
            <p className="text-gray-600">Organize and participate in campus tech events</p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>

        {/* Event Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Upcoming Events</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">250</div>
                <div className="text-sm text-gray-600">Total Attendees</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">2</div>
                <div className="text-sm text-gray-600">Events Organized</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Badge className="w-8 h-8 text-orange-500 mx-auto mb-2 flex items-center justify-center">★</Badge>
                <div className="text-2xl font-bold text-orange-600">4.7</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="my-events">My Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="mt-2">{event.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {event.attendees}/{event.maxAttendees} attendees
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder-user.jpg" alt={event.organizer} />
                          <AvatarFallback>
                            {event.organizer
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium">Organized by {event.organizer}</div>
                          <div className="text-xs text-gray-600">+{event.points} points</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {event.organizer === "Priya Kumari" ? (
                          <Button size="sm">Manage Event</Button>
                        ) : (
                          <Button size="sm">Register</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-events">
            <div className="space-y-6">
              {myEvents.map((event) => (
                <Card key={event.id} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="mt-2">{event.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                        <Badge variant="outline">Organizer</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {event.attendees} attendees
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="font-medium">Points Earned: </span>
                          <span className="text-blue-600 font-bold">+{event.points}</span>
                        </div>
                        {event.feedback && (
                          <div className="text-sm">
                            <span className="font-medium">Rating: </span>
                            <span className="text-green-600 font-bold">{event.feedback}/5.0</span>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Analytics
                        </Button>
                        <Button size="sm">{event.status === "completed" ? "View Report" : "Manage"}</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="opacity-90">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="mt-2">{event.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-600">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {event.date}
                        </div>
                        <div className="text-sm text-gray-600">
                          <Users className="w-4 h-4 inline mr-1" />
                          {event.attendees} attendees
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Rating: </span>
                          <span className="text-green-600 font-bold">{event.feedback}/5.0</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="font-medium">Points: </span>
                          <span className="text-blue-600 font-bold">+{event.points}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          View Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

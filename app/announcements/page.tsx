"use client"

import { useState } from "react"
import { Bell, Calendar, Pin, Search, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function AnnouncementsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const announcements = [
    {
      id: 1,
      title: "New Ambassador Training Program Launch",
      content:
        "We're excited to announce the launch of our comprehensive training program for new campus ambassadors. This program includes modules on leadership, event management, and digital marketing.",
      type: "program",
      date: "2024-01-15",
      author: "Btech Walleh Team",
      pinned: true,
      urgent: false,
      tags: ["Training", "New Program"],
    },
    {
      id: 2,
      title: "Monthly Ambassador Meet - January 2024",
      content:
        "Join us for our monthly virtual meet on January 20th at 7 PM IST. We'll discuss upcoming events, share success stories, and announce new opportunities.",
      type: "event",
      date: "2024-01-12",
      author: "Community Manager",
      pinned: true,
      urgent: true,
      tags: ["Meeting", "Community"],
      eventDate: "2024-01-20",
    },
    {
      id: 3,
      title: "New Reward System Implementation",
      content:
        "We're implementing a new point-based reward system starting February 1st. Ambassadors can earn points for various activities and redeem them for exciting rewards including gadgets, courses, and certificates.",
      type: "update",
      date: "2024-01-10",
      author: "Product Team",
      pinned: false,
      urgent: false,
      tags: ["Rewards", "System Update"],
    },
    {
      id: 4,
      title: "Tech Fest Season - Special Opportunities",
      content:
        "With tech fest season approaching, we have special opportunities for ambassadors to organize workshops and competitions. Additional points and recognition await active participants.",
      type: "opportunity",
      date: "2024-01-08",
      author: "Events Team",
      pinned: false,
      urgent: false,
      tags: ["Tech Fest", "Workshops", "Competitions"],
    },
    {
      id: 5,
      title: "Ambassador Spotlight: Success Stories",
      content:
        "This month we're featuring success stories from our top ambassadors. Read about how they've made an impact at their campuses and the recognition they've received.",
      type: "spotlight",
      date: "2024-01-05",
      author: "Content Team",
      pinned: false,
      urgent: false,
      tags: ["Success Stories", "Recognition"],
    },
    {
      id: 6,
      title: "Platform Maintenance Schedule",
      content:
        "Our platform will undergo scheduled maintenance on January 25th from 2 AM to 4 AM IST. During this time, the dashboard and some features may be temporarily unavailable.",
      type: "maintenance",
      date: "2024-01-03",
      author: "Technical Team",
      pinned: false,
      urgent: true,
      tags: ["Maintenance", "Technical"],
    },
  ]

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFilter = filterType === "all" || announcement.type === filterType
    return matchesSearch && matchesFilter
  })

  const getTypeColor = (type: string) => {
    const colors = {
      program: "bg-blue-100 text-blue-800",
      event: "bg-green-100 text-green-800",
      update: "bg-purple-100 text-purple-800",
      opportunity: "bg-orange-100 text-orange-800",
      spotlight: "bg-yellow-100 text-yellow-800",
      maintenance: "bg-red-100 text-red-800",
    }
    return colors[type] || "bg-gray-100 text-gray-800"
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "event":
        return <Calendar className="w-4 h-4" />
      case "maintenance":
        return <ExternalLink className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Separate pinned and regular announcements
  const pinnedAnnouncements = filteredAnnouncements.filter((a) => a.pinned)
  const regularAnnouncements = filteredAnnouncements.filter((a) => !a.pinned)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Announcements</h1>
          <p className="text-gray-600">Stay updated with the latest news and updates from the ambassador program</p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search announcements..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="program">Program</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                  <SelectItem value="opportunity">Opportunity</SelectItem>
                  <SelectItem value="spotlight">Spotlight</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Pin className="w-5 h-5 text-blue-600" />
              Pinned Announcements
            </h2>
            <div className="space-y-4">
              {pinnedAnnouncements.map((announcement) => (
                <Card key={announcement.id} className="border-l-4 border-l-blue-500 shadow-md">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getTypeIcon(announcement.type)}
                          <CardTitle className="text-lg">{announcement.title}</CardTitle>
                          {announcement.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{formatDate(announcement.date)}</span>
                          <span>By {announcement.author}</span>
                          {announcement.eventDate && (
                            <Badge variant="outline" className="text-xs">
                              Event: {formatDate(announcement.eventDate)}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(announcement.type)}>{announcement.type}</Badge>
                        <Pin className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 mb-4">{announcement.content}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {announcement.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Announcements</h2>
          <div className="space-y-4">
            {regularAnnouncements.map((announcement) => (
              <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getTypeIcon(announcement.type)}
                        <CardTitle className="text-lg">{announcement.title}</CardTitle>
                        {announcement.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{formatDate(announcement.date)}</span>
                        <span>By {announcement.author}</span>
                        {announcement.eventDate && (
                          <Badge variant="outline" className="text-xs">
                            Event: {formatDate(announcement.eventDate)}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Badge className={getTypeColor(announcement.type)}>{announcement.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4">{announcement.content}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {announcement.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredAnnouncements.length === 0 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No announcements found</h3>
                <p className="text-gray-600">
                  {searchTerm || filterType !== "all"
                    ? "Try adjusting your search or filters"
                    : "Check back later for new announcements"}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  )
}

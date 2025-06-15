"use client"

import { useState } from "react"
import { Video, FileText, Download, ExternalLink, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "../components/navigation"

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  const resources = [
    {
      id: 1,
      title: "Campus Ambassador Handbook",
      description: "Complete guide for new campus ambassadors covering all essential information",
      type: "PDF",
      category: "Guide",
      downloadUrl: "#",
      size: "2.5 MB",
      downloads: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "Event Organization Checklist",
      description: "Step-by-step checklist for organizing successful campus events",
      type: "PDF",
      category: "Template",
      downloadUrl: "#",
      size: "1.2 MB",
      downloads: 890,
    },
    {
      id: 3,
      title: "Social Media Marketing Kit",
      description: "Templates, graphics, and guidelines for promoting Btech Walleh courses",
      type: "ZIP",
      category: "Marketing",
      downloadUrl: "#",
      size: "15.8 MB",
      downloads: 650,
    },
    {
      id: 4,
      title: "Technical Workshop Planning Guide",
      description: "How to plan and execute technical workshops effectively",
      type: "Video",
      category: "Training",
      downloadUrl: "#",
      duration: "45 min",
      downloads: 420,
    },
    {
      id: 5,
      title: "Student Engagement Strategies",
      description: "Proven methods to increase student participation and engagement",
      type: "PDF",
      category: "Strategy",
      downloadUrl: "#",
      size: "3.1 MB",
      downloads: 780,
    },
    {
      id: 6,
      title: "Brand Guidelines & Assets",
      description: "Official Btech Walleh logos, colors, and branding materials",
      type: "ZIP",
      category: "Branding",
      downloadUrl: "#",
      size: "25.4 MB",
      downloads: 1100,
      featured: true,
    },
  ]

  const trainingVideos = [
    {
      id: 1,
      title: "Getting Started as a Campus Ambassador",
      description: "Introduction to your role and responsibilities",
      duration: "12 min",
      thumbnail: "/placeholder.svg?height=120&width=200",
      category: "Onboarding",
    },
    {
      id: 2,
      title: "Effective Communication Skills",
      description: "How to communicate effectively with students and faculty",
      duration: "18 min",
      thumbnail: "/placeholder.svg?height=120&width=200",
      category: "Skills",
    },
    {
      id: 3,
      title: "Event Management Masterclass",
      description: "Advanced techniques for organizing large-scale events",
      duration: "35 min",
      thumbnail: "/placeholder.svg?height=120&width=200",
      category: "Advanced",
    },
    {
      id: 4,
      title: "Digital Marketing for Ambassadors",
      description: "Leverage social media and digital platforms effectively",
      duration: "22 min",
      thumbnail: "/placeholder.svg?height=120&width=200",
      category: "Marketing",
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterCategory === "all" || resource.category.toLowerCase() === filterCategory.toLowerCase()
    return matchesSearch && matchesFilter
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-5 h-5 text-red-500" />
      case "Video":
        return <Video className="w-5 h-5 text-blue-500" />
      case "ZIP":
        return <Download className="w-5 h-5 text-green-500" />
      default:
        return <FileText className="w-5 h-5 text-gray-500" />
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Guide: "bg-blue-100 text-blue-800",
      Template: "bg-green-100 text-green-800",
      Marketing: "bg-purple-100 text-purple-800",
      Training: "bg-orange-100 text-orange-800",
      Strategy: "bg-yellow-100 text-yellow-800",
      Branding: "bg-pink-100 text-pink-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Resources & Training</h1>
            <p className="text-gray-600">Access guides, templates, and training materials</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <ExternalLink className="w-4 h-4 mr-2" />
            Request Resource
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="guide">Guide</SelectItem>
                  <SelectItem value="template">Template</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="strategy">Strategy</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Resource Tabs */}
        <Tabs defaultValue="downloads" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="downloads">Downloads & Guides</TabsTrigger>
            <TabsTrigger value="training">Training Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="downloads">
            {/* Featured Resources */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources
                  .filter((r) => r.featured)
                  .map((resource) => (
                    <Card
                      key={resource.id}
                      className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            {getTypeIcon(resource.type)}
                            <div>
                              <CardTitle className="text-lg">{resource.title}</CardTitle>
                              <Badge className="mt-1">Featured</Badge>
                            </div>
                          </div>
                          <Badge className={getCategoryColor(resource.category)}>{resource.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">{resource.description}</CardDescription>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            {resource.size && `${resource.size} • `}
                            {resource.downloads.toLocaleString()} downloads
                          </div>
                          <Button size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* All Resources */}
            <div>
              <h2 className="text-xl font-semibold mb-4">All Resources</h2>
              <div className="space-y-4">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {getTypeIcon(resource.type)}
                          <div>
                            <h3 className="font-medium">{resource.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge className={getCategoryColor(resource.category)}>{resource.category}</Badge>
                              <span className="text-xs text-gray-500">
                                {resource.size && `${resource.size} • `}
                                {resource.downloads.toLocaleString()} downloads
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="training">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingVideos.map((video) => (
                <Card key={video.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                      <Video className="w-12 h-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{video.category}</Badge>
                        <span className="text-sm text-gray-600">{video.duration}</span>
                      </div>
                      <Button size="sm">
                        <Video className="w-4 h-4 mr-2" />
                        Watch
                      </Button>
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

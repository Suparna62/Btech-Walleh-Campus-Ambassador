"use client"

import { useState } from "react"
import { Trophy, Medal, Award, TrendingUp, Users, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Navigation from "../components/navigation"

export default function LeaderboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")

  const leaderboardData = [
    {
      rank: 1,
      name: "Arjun Sharma",
      college: "IIT Delhi",
      points: 3250,
      tasksCompleted: 45,
      eventsOrganized: 8,
      studentsReached: 320,
      avatar: "/placeholder-user.jpg",
      badge: "Gold",
      streak: 15,
    },
    {
      rank: 2,
      name: "Sneha Patel",
      college: "NIT Surat",
      points: 2980,
      tasksCompleted: 42,
      eventsOrganized: 7,
      studentsReached: 285,
      avatar: "/placeholder-user.jpg",
      badge: "Gold",
      streak: 12,
    },
    {
      rank: 3,
      name: "Priya Kumari",
      college: "BITS Pilani",
      points: 2450,
      tasksCompleted: 38,
      eventsOrganized: 6,
      studentsReached: 220,
      avatar: "/placeholder-user.jpg",
      badge: "Silver",
      streak: 8,
      isCurrentUser: true,
    },
    {
      rank: 4,
      name: "Rahul Verma",
      college: "VIT Vellore",
      points: 2200,
      tasksCompleted: 35,
      eventsOrganized: 5,
      studentsReached: 195,
      avatar: "/placeholder-user.jpg",
      badge: "Silver",
      streak: 6,
    },
    {
      rank: 5,
      name: "Ananya Singh",
      college: "DTU Delhi",
      points: 2050,
      tasksCompleted: 32,
      eventsOrganized: 4,
      studentsReached: 180,
      avatar: "/placeholder-user.jpg",
      badge: "Bronze",
      streak: 10,
    },
    {
      rank: 6,
      name: "Karthik Raj",
      college: "IIIT Hyderabad",
      points: 1890,
      tasksCompleted: 29,
      eventsOrganized: 4,
      studentsReached: 165,
      avatar: "/placeholder-user.jpg",
      badge: "Bronze",
      streak: 4,
    },
    {
      rank: 7,
      name: "Meera Joshi",
      college: "Manipal University",
      points: 1750,
      tasksCompleted: 26,
      eventsOrganized: 3,
      studentsReached: 145,
      avatar: "/placeholder-user.jpg",
      badge: "Bronze",
      streak: 7,
    },
    {
      rank: 8,
      name: "Vikram Gupta",
      college: "SRM University",
      points: 1620,
      tasksCompleted: 24,
      eventsOrganized: 3,
      studentsReached: 130,
      avatar: "/placeholder-user.jpg",
      badge: "Bronze",
      streak: 3,
    },
  ]

  const achievements = [
    {
      title: "Top Performer",
      description: "Ranked #1 for 3 consecutive months",
      icon: Trophy,
      color: "text-yellow-500",
    },
    { title: "Event Master", description: "Organized 10+ successful events", icon: Award, color: "text-purple-500" },
    { title: "Community Builder", description: "Reached 500+ students", icon: Users, color: "text-blue-500" },
    { title: "Consistency King", description: "20+ day activity streak", icon: Target, color: "text-green-500" },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-600">#{rank}</span>
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Gold":
        return "bg-yellow-100 text-yellow-800"
      case "Silver":
        return "bg-gray-100 text-gray-800"
      case "Bronze":
        return "bg-amber-100 text-amber-800"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard 🏆</h1>
            <p className="text-gray-600">See how you rank among fellow campus ambassadors</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Your Rank: #3
            </Badge>
            <Badge variant="outline">Silver Tier</Badge>
          </div>
        </div>

        {/* Top 3 Podium */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl">🏆 Top Performers</CardTitle>
            <CardDescription className="text-center text-blue-100">
              This month's leading campus ambassadors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leaderboardData.slice(0, 3).map((ambassador, index) => (
                <div
                  key={ambassador.rank}
                  className={`text-center ${index === 0 ? "md:order-2" : index === 1 ? "md:order-1" : "md:order-3"}`}
                >
                  <div className={`relative ${index === 0 ? "transform md:scale-110" : ""}`}>
                    <Avatar className={`mx-auto mb-4 ${index === 0 ? "w-20 h-20" : "w-16 h-16"} border-4 border-white`}>
                      <AvatarImage src={ambassador.avatar || "/placeholder.svg"} alt={ambassador.name} />
                      <AvatarFallback>
                        {ambassador.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2">{getRankIcon(ambassador.rank)}</div>
                  </div>
                  <h3 className={`font-bold ${index === 0 ? "text-lg" : "text-base"}`}>{ambassador.name}</h3>
                  <p className="text-blue-100 text-sm">{ambassador.college}</p>
                  <div className={`mt-2 ${index === 0 ? "text-2xl" : "text-xl"} font-bold`}>
                    {ambassador.points.toLocaleString()} pts
                  </div>
                  <Badge className={`mt-2 ${getBadgeColor(ambassador.badge)}`}>{ambassador.badge}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Full Rankings</CardTitle>
                <CardDescription>Complete leaderboard for all campus ambassadors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboardData.map((ambassador) => (
                    <div
                      key={ambassador.rank}
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        ambassador.isCurrentUser ? "bg-blue-50 border-blue-200" : "bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8">{getRankIcon(ambassador.rank)}</div>
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={ambassador.avatar || "/placeholder.svg"} alt={ambassador.name} />
                          <AvatarFallback>
                            {ambassador.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium flex items-center gap-2">
                            {ambassador.name}
                            {ambassador.isCurrentUser && (
                              <Badge variant="outline" className="text-xs">
                                You
                              </Badge>
                            )}
                          </h4>
                          <p className="text-sm text-gray-600">{ambassador.college}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{ambassador.points.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">{ambassador.tasksCompleted} tasks</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Your Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Points Progress</span>
                      <span>2450 / 3000</span>
                    </div>
                    <Progress value={81.7} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">38</div>
                      <div className="text-xs text-gray-600">Tasks Done</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">8</div>
                      <div className="text-xs text-gray-600">Day Streak</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your earned badges and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon
                    return (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                        <Icon className={`w-8 h-8 ${achievement.color}`} />
                        <div>
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Next Milestone */}
            <Card>
              <CardHeader>
                <CardTitle>Next Milestone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-bold">Gold Tier</h3>
                  <p className="text-sm text-gray-600 mb-3">550 points to go!</p>
                  <Progress value={81.7} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

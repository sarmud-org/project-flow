"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Users,
  DollarSign,
  Clock,
  Target,
  FileText,
  ExternalLink,
  Download,
  Share2,
  Edit,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import ProjectRoadmap from "@/components/ProjectRoadmap";
import { useRouter } from "next/navigation";

export default function ProjectDetail({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => router.back()} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>

        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-linear-to-br from-primary to-primary/60 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Enterprise CRM Platform</h1>
                <p className="text-muted-foreground">
                  Product Team • Acme Corp
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge className="gap-1">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                On Track
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                12 members
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Jan 15 - Jun 30, 2025
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                $450,000
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/client-view/1")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Client View
            </Button>
            <Button size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Project
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion</p>
                <p className="text-3xl font-bold">68%</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
            </div>
            <Progress value={68} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Tasks</p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              12 completed this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Hours Logged</p>
                <p className="text-3xl font-bold">1,245</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-warning" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              of 2,000 estimated
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Blockers</p>
                <p className="text-3xl font-bold">1</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              1 item needs attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Project Description */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                A comprehensive customer relationship management system designed
                to streamline operations and enhance customer engagement. The
                platform will include advanced analytics, automated workflows,
                and seamless integration with existing business tools.
              </p>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Project Manager
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">
                        sarah@acme.com
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Lead Developer
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Michael Chen</p>
                      <p className="text-xs text-muted-foreground">
                        michael@acme.com
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Client Manager
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Emily Rodriguez</p>
                      <p className="text-xs text-muted-foreground">
                        emily@acme.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phases */}
          <Card>
            <CardHeader>
              <CardTitle>Project Phases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Discovery & Planning",
                  progress: 100,
                  status: "completed",
                },
                {
                  name: "Design & Prototyping",
                  progress: 100,
                  status: "completed",
                },
                { name: "Development", progress: 65, status: "in_progress" },
                { name: "Testing & QA", progress: 30, status: "in_progress" },
                { name: "Deployment", progress: 0, status: "pending" },
              ].map((phase, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{phase.name}</p>
                    <Badge
                      variant={
                        phase.status === "completed"
                          ? "default"
                          : phase.status === "in_progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {phase.status === "completed"
                        ? "Completed"
                        : phase.status === "in_progress"
                        ? "In Progress"
                        : "Pending"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={phase.progress} className="flex-1" />
                    <span className="text-sm text-muted-foreground w-12">
                      {phase.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Milestones */}
          <Card>
            <CardHeader>
              <CardTitle>Key Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Project Kickoff",
                    date: "Jan 15, 2025",
                    status: "completed",
                  },
                  {
                    name: "Design Phase Complete",
                    date: "Feb 28, 2025",
                    status: "completed",
                  },
                  {
                    name: "Development Milestone 1",
                    date: "Mar 31, 2025",
                    status: "in_progress",
                  },
                  {
                    name: "Beta Launch",
                    date: "May 15, 2025",
                    status: "upcoming",
                  },
                  {
                    name: "Production Release",
                    date: "Jun 30, 2025",
                    status: "upcoming",
                  },
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`mt-1 h-3 w-3 rounded-full ${
                        milestone.status === "completed"
                          ? "bg-success"
                          : milestone.status === "in_progress"
                          ? "bg-warning animate-pulse"
                          : "bg-muted"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium">{milestone.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {milestone.date}
                      </p>
                    </div>
                    <Badge
                      variant={
                        milestone.status === "completed"
                          ? "default"
                          : milestone.status === "in_progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {milestone.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="mt-6">
          <ProjectRoadmap projectId={projectId || "p1"} />
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-12">
                Task management view - navigate to Projects page for full Kanban
                board
              </p>
              <div className="flex justify-center">
                <Button onClick={() => router.back()}>View Tasks</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-12">
                Timeline view coming soon
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Project Manager",
                    hours: 120,
                  },
                  {
                    name: "Michael Chen",
                    role: "Lead Developer",
                    hours: 180,
                  },
                  { name: "Emily Rodriguez", role: "UX Designer", hours: 95 },
                  { name: "David Kim", role: "QA Engineer", hours: 88 },
                  { name: "Lisa Wang", role: "Frontend Dev", hours: 156 },
                  { name: "James Martinez", role: "Backend Dev", hours: 142 },
                ].map((member, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{member.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Hours: </span>
                          <span className="font-semibold">{member.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {[
                  {
                    name: "Requirements Document",
                    type: "PDF",
                    size: "2.4 MB",
                    updated: "2 days ago",
                  },
                  {
                    name: "Design System",
                    type: "Figma",
                    size: "—",
                    updated: "1 week ago",
                  },
                  {
                    name: "API Documentation",
                    type: "PDF",
                    size: "1.8 MB",
                    updated: "3 days ago",
                  },
                  {
                    name: "Release Notes v1.2",
                    type: "PDF",
                    size: "450 KB",
                    updated: "1 day ago",
                  },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {doc.type} • {doc.size} • Updated {doc.updated}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  {
                    user: "Michael Chen",
                    action: "completed task",
                    target: "User authentication module",
                    time: "2 hours ago",
                  },
                  {
                    user: "Emily Rodriguez",
                    action: "uploaded",
                    target: "Design mockups v2.0",
                    time: "5 hours ago",
                  },
                  {
                    user: "Sarah Johnson",
                    action: "updated milestone",
                    target: "Development Phase",
                    time: "1 day ago",
                  },
                  {
                    user: "David Kim",
                    action: "commented on",
                    target: "Payment integration task",
                    time: "1 day ago",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg border">
                    <Avatar>
                      <AvatarFallback>
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{" "}
                        {activity.action}{" "}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

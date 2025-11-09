"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Download,
  Presentation,
  CheckCircle2,
  Clock,
  AlertCircle,
  Users,
  FileText,
  TrendingUp,
  Target,
  Zap,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  Activity,
} from "lucide-react";
import { BurndownChart } from "@/components/charts/BurndownChart";
import { CumulativeFlowChart } from "@/components/charts/CumulativeFlowChart";
import { VelocityChart } from "@/components/charts/VelocityChart";
import { ResourceAllocationChart } from "@/components/charts/ResourceAllocationChart";
import { ProgressChart } from "@/components/charts/ProgressChart";
import { TimelineChart } from "@/components/charts/TimelineChart";

// Mock data
const burndownData = [
  { date: "Week 1", ideal: 100, actual: 100 },
  { date: "Week 2", ideal: 85, actual: 90 },
  { date: "Week 3", ideal: 70, actual: 75 },
  { date: "Week 4", ideal: 55, actual: 60 },
  { date: "Week 5", ideal: 40, actual: 45 },
  { date: "Week 6", ideal: 25, actual: 30 },
  { date: "Week 7", ideal: 10, actual: 18 },
  { date: "Week 8", ideal: 0, actual: 8 },
];

const cumulativeFlowData = [
  { date: "Week 1", backlog: 45, inProgress: 5, done: 0 },
  { date: "Week 2", backlog: 40, inProgress: 8, done: 2 },
  { date: "Week 3", backlog: 35, inProgress: 10, done: 5 },
  { date: "Week 4", backlog: 30, inProgress: 12, done: 8 },
  { date: "Week 5", backlog: 25, inProgress: 10, done: 15 },
  { date: "Week 6", backlog: 20, inProgress: 8, done: 22 },
  { date: "Week 7", backlog: 15, inProgress: 7, done: 28 },
  { date: "Week 8", backlog: 10, inProgress: 5, done: 35 },
];

const velocityData = [
  { week: "W1", committed: 12, completed: 10 },
  { week: "W2", committed: 15, completed: 14 },
  { week: "W3", committed: 14, completed: 12 },
  { week: "W4", committed: 16, completed: 15 },
  { week: "W5", committed: 15, completed: 16 },
  { week: "W6", committed: 14, completed: 14 },
];

const resourceAllocationData = [
  { name: "Frontend", value: 180 },
  { name: "Backend", value: 150 },
  { name: "Design", value: 90 },
  { name: "QA", value: 60 },
  { name: "PM", value: 45 },
];

const phaseProgressData = [
  { phase: "Discovery", progress: 100 },
  { phase: "Design", progress: 100 },
  { phase: "Development", progress: 65 },
  { phase: "Testing", progress: 30 },
  { phase: "Deployment", progress: 0 },
];

const milestoneData = [
  {
    name: "Project Kickoff",
    date: "Jan 15, 2025",
    status: "completed" as const,
  },
  {
    name: "Design Phase Complete",
    date: "Feb 28, 2025",
    status: "completed" as const,
  },
  {
    name: "Development Milestone 1",
    date: "Mar 31, 2025",
    status: "in_progress" as const,
  },
  { name: "QA & Testing", date: "Apr 30, 2025", status: "delayed" as const },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    avatar: "",
    contribution: 92,
    email: "sarah@acme.com",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    avatar: "",
    contribution: 88,
    email: "michael@acme.com",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    avatar: "",
    contribution: 85,
    email: "emily@acme.com",
  },
  {
    name: "David Kim",
    role: "QA Engineer",
    avatar: "",
    contribution: 78,
    email: "david@acme.com",
  },
];

const recentActivity = [
  {
    date: "Mar 10, 2025",
    time: "2:30 PM",
    update: "Completed user authentication module",
    user: "Michael Chen",
    important: true,
  },
  {
    date: "Mar 8, 2025",
    time: "4:15 PM",
    update: "Design system finalized and approved",
    user: "Emily Rodriguez",
    important: true,
  },
  {
    date: "Mar 5, 2025",
    time: "10:00 AM",
    update: "Sprint planning for Phase 2 completed",
    user: "Sarah Johnson",
    important: false,
  },
  {
    date: "Mar 3, 2025",
    time: "3:45 PM",
    update: "API integration testing completed",
    user: "David Kim",
    important: true,
  },
];

const keyDocuments = [
  {
    name: "Requirements Document",
    type: "PDF",
    size: "2.4 MB",
    updated: "2 days ago",
  },
  { name: "Design Mockups", type: "Figma", size: "—", updated: "1 week ago" },
  {
    name: "Technical Architecture",
    type: "PDF",
    size: "1.8 MB",
    updated: "2 weeks ago",
  },
  {
    name: "Release Notes v1.2",
    type: "PDF",
    size: "450 KB",
    updated: "3 days ago",
  },
  {
    name: "API Documentation",
    type: "PDF",
    size: "3.1 MB",
    updated: "5 days ago",
  },
  {
    name: "User Testing Results",
    type: "PDF",
    size: "1.2 MB",
    updated: "1 week ago",
  },
];

export default function EnhancedClientView() {
  const [presentationMode, setPresentationMode] = useState(false);

  const handleExportPDF = () => {
    console.log("Exporting to PDF...");
  };

  const togglePresentationMode = () => {
    setPresentationMode(!presentationMode);
    if (!presentationMode) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Project Summary */}
      <div className="bg-linear-to-br from-primary/5 via-background to-background border-b">
        <div className="container mx-auto px-6 py-12">
          {/* Header with Logo and Actions */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex gap-6 items-start">
              <div className="h-20 w-20 rounded-xl bg-linear-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                <Target className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">
                  Enterprise CRM Platform
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  A comprehensive customer relationship management system
                  designed to streamline operations and enhance customer
                  engagement.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Jan 15 - Jun 30, 2025
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-medium">165 days duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-medium">$450,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" onClick={handleExportPDF}>
                <Download className="mr-2 h-4 w-4" />
                Export PDF
              </Button>
              <Button size="lg" onClick={togglePresentationMode}>
                {presentationMode ? (
                  <Maximize2 className="mr-2 h-4 w-4" />
                ) : (
                  <Presentation className="mr-2 h-4 w-4" />
                )}
                {presentationMode ? "Exit" : "Present"}
              </Button>
            </div>
          </div>

          {/* Health Indicator & Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <Card className="p-6 col-span-2 bg-linear-to-br from-success/10 to-success/5 border-success/20">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Project Health</p>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-success animate-pulse" />
                  <span className="text-3xl font-bold text-success">
                    On Track
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  All milestones progressing as planned
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4" />
                  <p className="text-sm">Completion</p>
                </div>
                <p className="text-3xl font-bold">68%</p>
                <Progress value={68} className="h-1.5" />
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="h-4 w-4" />
                  <p className="text-sm">Active Tasks</p>
                </div>
                <p className="text-3xl font-bold">24</p>
                <p className="text-xs text-muted-foreground">
                  12 completed this week
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <p className="text-sm">Milestones</p>
                </div>
                <p className="text-3xl font-bold">4/7</p>
                <p className="text-xs text-muted-foreground">57% complete</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <p className="text-sm">Hours Logged</p>
                </div>
                <p className="text-3xl font-bold">1,245</p>
                <p className="text-xs text-muted-foreground">
                  of 2,000 estimated
                </p>
              </div>
            </Card>
          </div>

          {/* Key Contacts */}
          <Card className="mt-6 p-6 bg-linear-to-br from-primary/5 to-background">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Key Contacts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                <Avatar>
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-sm">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">
                    Project Manager
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      sarah@acme.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                <Avatar>
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-sm">Michael Chen</p>
                  <p className="text-xs text-muted-foreground">Lead Engineer</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      michael@acme.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                <Avatar>
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-sm">Emily Rodriguez</p>
                  <p className="text-xs text-muted-foreground">QA Lead</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      emily@acme.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                <Avatar>
                  <AvatarFallback>DK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-sm">David Kim</p>
                  <p className="text-xs text-muted-foreground">
                    Client Manager
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      david@acme.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Last Updated Info */}
          <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Last updated: March 10, 2025 at 2:30 PM EST</span>
            </div>
            <span>Version 1.2.3</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Executive Summary */}
        <Card className="p-8 bg-linear-to-br from-primary/5 to-background border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Executive Summary</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90">
            The Enterprise CRM Platform is progressing exceptionally well, with{" "}
            <strong>68% completion</strong> achieved ahead of schedule. Our team
            has successfully delivered the core authentication system and
            dashboard interface, demonstrating strong velocity and technical
            execution. The upcoming payment integration phase is on track for
            the March 25th milestone. Current risk factors are minimal, with all
            critical path items proceeding as planned. We anticipate delivering
            the full production-ready system by the target date of{" "}
            <strong>June 30, 2025</strong>.
          </p>
          <Separator className="my-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Key Achievements This Month
              </p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  Authentication system completed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  Dashboard UI finalized
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  API integration tested
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Next Steps
              </p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Payment gateway integration
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  User acceptance testing
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Performance optimization
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Risk Assessment
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Overall Risk</span>
                  <Badge
                    variant="outline"
                    className="bg-success/10 text-success border-success/20"
                  >
                    Low
                  </Badge>
                </div>
                <Progress value={15} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Minimal blockers, strong team velocity
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Progress Overview Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Progress Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Overall Completion
              </h3>
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.68)}`}
                    className="text-primary"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">68%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Task Distribution
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Done</span>
                    <span className="font-medium">35 tasks</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>In Progress</span>
                    <span className="font-medium">24 tasks</span>
                  </div>
                  <Progress value={48} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>To Do</span>
                    <span className="font-medium">15 tasks</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                KPI Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tasks Completed</span>
                  <span className="text-2xl font-bold">35</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Tasks</span>
                  <span className="text-2xl font-bold">24</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bugs Open</span>
                  <span className="text-2xl font-bold text-warning">3</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Charts & Visuals Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Project Analytics & Charts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BurndownChart data={burndownData} />
            <CumulativeFlowChart data={cumulativeFlowData} />
            <VelocityChart data={velocityData} />
            <ResourceAllocationChart data={resourceAllocationData} />
            <ProgressChart data={phaseProgressData} />
            <TimelineChart milestones={milestoneData} />
          </div>
        </div>

        {/* Roadmap Timeline */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Interactive Roadmap
          </h2>
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 min-w-max">
                {milestoneData.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center min-w-[200px]"
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${
                        milestone.status === "completed"
                          ? "bg-success"
                          : milestone.status === "in_progress"
                          ? "bg-warning animate-pulse"
                          : "bg-destructive"
                      }`}
                    />
                    <div className="h-20 w-0.5 bg-border my-2" />
                    <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                      <p className="font-medium text-sm mb-2">
                        {milestone.name}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">
                        {milestone.date}
                      </p>
                      <Badge
                        variant={
                          milestone.status === "completed"
                            ? "default"
                            : milestone.status === "in_progress"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {milestone.status.replace("_", " ")}
                      </Badge>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-6 w-6" />
            Project Team & Workload
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-20 w-20 border-4 border-primary/10">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className="text-xl bg-primary/10">
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
                    <p className="text-xs text-muted-foreground mt-1">
                      {member.email}
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">
                        Contribution
                      </span>
                      <span className="font-medium">
                        {member.contribution}%
                      </span>
                    </div>
                    <Progress value={member.contribution} className="h-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Key Documents & Deliverables
            </h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyDocuments.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {doc.type} • {doc.size} • {doc.updated}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity Feed */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Activity className="h-6 w-6" />
              Recent Activity Timeline
            </h2>
            <Button variant="outline" size="sm">
              Filter by Important
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="shrink-0">
                  <Avatar>
                    <AvatarFallback>
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.update}
                    </p>
                    {activity.important && (
                      <Badge variant="outline" className="ml-2">
                        Important
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {activity.date} at {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming & Blocked Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-5 w-5 text-warning" />
              <h2 className="text-xl font-semibold">
                Upcoming Milestones & Deadlines
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium">Payment Integration</p>
                  <Badge
                    variant="outline"
                    className="bg-warning/10 text-warning border-warning/20"
                  >
                    5 days left
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Due Mar 25, 2025
                </p>
                <Progress value={75} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground">
                  75% complete - on track
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium">API Documentation</p>
                  <Badge variant="outline">10 days left</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Due Mar 30, 2025
                </p>
                <Progress value={45} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground">45% complete</p>
              </div>
              <div className="p-4 rounded-lg bg-card border">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium">User Testing Phase</p>
                  <Badge variant="outline">18 days left</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Due Apr 8, 2025
                </p>
                <Progress value={20} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground">20% complete</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <h2 className="text-xl font-semibold">Blocked Items & Risks</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-destructive">
                    Third-party API Integration
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-destructive/10 text-destructive border-destructive/20"
                  >
                    Blocked 3 days
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Reason:</strong> Waiting for vendor API credentials
                </p>
                <p className="text-sm">
                  <strong>Impact:</strong> May delay payment integration
                  milestone by 2-3 days
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Owner: Michael Chen
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border">
                <div className="flex items-center gap-2 text-success">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="font-medium">
                    No other blockers currently identified
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Team is actively monitoring potential risks and dependencies
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Footer */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-xl bg-linear-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">
                AC
              </span>
            </div>
            <div>
              <p className="font-semibold">Acme Corporation</p>
              <p className="text-sm text-muted-foreground">
                Enterprise Solutions Division
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">
              For questions or support:
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:support@acme.com"
                  className="hover:text-primary transition-colors"
                >
                  support@acme.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © 2025 Acme Corporation. All rights reserved. Confidential and
            Proprietary.
          </p>
          <p>Report generated on March 10, 2025 at 2:30 PM EST</p>
        </div>
      </div>
    </div>
  );
}

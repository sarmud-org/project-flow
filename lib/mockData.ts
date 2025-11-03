// Complete Sample Dataset for Project Management Application
// 2 Organizations, 4 Workspaces, 8 Projects with Phases, Tasks, Users, Documents

export const mockUsers = [
  { id: "u1", name: "John Doe", email: "john@acme.com", role: "admin", avatar: "JD", status: "active" },
  { id: "u2", name: "Sarah Kim", email: "sarah@acme.com", role: "member", avatar: "SK", status: "active" },
  { id: "u3", name: "Alex Morgan", email: "alex@techstartup.com", role: "admin", avatar: "AM", status: "active" },
  { id: "u4", name: "Rachel Kumar", email: "rachel@acme.com", role: "member", avatar: "RK", status: "active" },
  { id: "u5", name: "Lisa Martinez", email: "lisa@acme.com", role: "member", avatar: "LM", status: "invited" },
  { id: "u6", name: "David Chen", email: "david@techstartup.com", role: "member", avatar: "DC", status: "active" },
  { id: "c1", name: "Client User", email: "client@external.com", role: "client", avatar: "CU", status: "active" },
];

export const mockOrganizations = [
  {
    id: "org1",
    name: "Acme Corporation",
    logo: "/placeholder.svg",
    accentColor: "#9333ea",
    members: ["u1", "u2", "u4", "u5"],
    subscription: "enterprise",
    created: "2025-01-15",
  },
  {
    id: "org2",
    name: "TechStartup Inc",
    logo: "/placeholder.svg",
    accentColor: "#3b82f6",
    members: ["u3", "u6"],
    subscription: "pro",
    created: "2025-03-10",
  },
];

export const mockWorkspaces = [
  { id: "ws1", orgId: "org1", name: "Marketing Campaigns", description: "All marketing initiatives", members: ["u1", "u2", "u5"], created: "2025-02-01" },
  { id: "ws2", orgId: "org1", name: "Product Development", description: "Core product work", members: ["u1", "u4"], created: "2025-02-15" },
  { id: "ws3", orgId: "org2", name: "Mobile App", description: "Mobile application development", members: ["u3", "u6"], created: "2025-04-01" },
  { id: "ws4", orgId: "org2", name: "Infrastructure", description: "Platform and DevOps", members: ["u3"], created: "2025-04-15" },
];

export const mockMilestones = [
  { id: "m1", projectId: "p1", title: "Project Kickoff", date: "2025-09-01", status: "completed" },
  { id: "m2", projectId: "p1", title: "Design Phase", date: "2025-10-15", status: "completed" },
  { id: "m3", projectId: "p1", title: "Development Sprint 1", date: "2025-11-20", status: "active" },
  { id: "m4", projectId: "p1", title: "Testing & QA", date: "2025-12-10", status: "upcoming" },
  { id: "m5", projectId: "p1", title: "Launch", date: "2025-12-15", status: "upcoming" },
  { id: "m6", projectId: "p2", title: "Research Complete", date: "2025-10-01", status: "completed" },
  { id: "m7", projectId: "p2", title: "Strategy Approved", date: "2025-11-01", status: "active" },
];

export const mockProjects = [
  {
    id: "p1",
    workspaceId: "ws1",
    name: "Website Redesign",
    description: "A comprehensive redesign of company website with modern UX",
    status: "in_progress",
    progress: 65,
    startDate: "2025-09-01",
    endDate: "2025-12-15",
    budget: 125000,
    members: ["u1", "u2", "u4", "u5", "c1"],
    tags: ["high-priority", "client-facing"],
    created: "2025-08-15",
  },
  {
    id: "p2",
    workspaceId: "ws1",
    name: "Q4 Campaign Launch",
    description: "Multi-channel marketing campaign for Q4",
    status: "in_progress",
    progress: 45,
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    budget: 75000,
    members: ["u2", "u5"],
    tags: ["marketing", "high-priority"],
    created: "2025-09-01",
  },
  {
    id: "p3",
    workspaceId: "ws2",
    name: "Mobile App v2.0",
    description: "Major update with new features and performance improvements",
    status: "planning",
    progress: 15,
    startDate: "2025-11-15",
    endDate: "2026-03-31",
    budget: 200000,
    members: ["u1", "u4"],
    tags: ["product", "high-priority"],
    created: "2025-10-01",
  },
  {
    id: "p4",
    workspaceId: "ws2",
    name: "API Gateway Upgrade",
    description: "Modernize API infrastructure",
    status: "in_progress",
    progress: 70,
    startDate: "2025-08-01",
    endDate: "2025-11-30",
    budget: 50000,
    members: ["u4"],
    tags: ["infrastructure"],
    created: "2025-07-15",
  },
  {
    id: "p5",
    workspaceId: "ws3",
    name: "iOS App Launch",
    description: "Launch iOS version of mobile app",
    status: "in_progress",
    progress: 55,
    startDate: "2025-09-15",
    endDate: "2026-01-15",
    budget: 150000,
    members: ["u3", "u6"],
    tags: ["mobile", "high-priority"],
    created: "2025-08-30",
  },
  {
    id: "p6",
    workspaceId: "ws3",
    name: "Android Performance",
    description: "Optimize Android app performance",
    status: "planning",
    progress: 20,
    startDate: "2025-11-01",
    endDate: "2026-02-28",
    budget: 80000,
    members: ["u6"],
    tags: ["mobile", "optimization"],
    created: "2025-10-15",
  },
  {
    id: "p7",
    workspaceId: "ws4",
    name: "CI/CD Pipeline",
    description: "Automated deployment pipeline",
    status: "completed",
    progress: 100,
    startDate: "2025-04-01",
    endDate: "2025-09-30",
    budget: 60000,
    members: ["u3"],
    tags: ["infrastructure", "completed"],
    created: "2025-03-15",
  },
  {
    id: "p8",
    workspaceId: "ws4",
    name: "Monitoring Setup",
    description: "Comprehensive monitoring and alerting",
    status: "in_progress",
    progress: 80,
    startDate: "2025-08-01",
    endDate: "2025-11-30",
    budget: 45000,
    members: ["u3"],
    tags: ["infrastructure"],
    created: "2025-07-20",
  },
];

export const mockPhases = [
  { id: "ph1", projectId: "p1", name: "Discovery & Research", sequence: 1, status: "completed", startDate: "2025-09-01", endDate: "2025-09-30", progress: 100 },
  { id: "ph2", projectId: "p1", name: "Design", sequence: 2, status: "completed", startDate: "2025-10-01", endDate: "2025-10-31", progress: 100 },
  { id: "ph3", projectId: "p1", name: "Development", sequence: 3, status: "in_progress", startDate: "2025-11-01", endDate: "2025-12-10", progress: 60 },
  { id: "ph4", projectId: "p1", name: "Testing & QA", sequence: 4, status: "upcoming", startDate: "2025-12-05", endDate: "2025-12-14", progress: 0 },
  { id: "ph5", projectId: "p1", name: "Launch", sequence: 5, status: "upcoming", startDate: "2025-12-15", endDate: "2025-12-15", progress: 0 },
  { id: "ph6", projectId: "p2", name: "Strategy", sequence: 1, status: "completed", startDate: "2025-10-01", endDate: "2025-10-15", progress: 100 },
  { id: "ph7", projectId: "p2", name: "Content Creation", sequence: 2, status: "in_progress", startDate: "2025-10-16", endDate: "2025-11-30", progress: 50 },
  { id: "ph8", projectId: "p2", name: "Campaign Execution", sequence: 3, status: "upcoming", startDate: "2025-12-01", endDate: "2025-12-31", progress: 0 },
];

export const mockTasks = [
  { id: "t1", phaseId: "ph3", projectId: "p1", title: "Implement authentication", description: "Build JWT authentication system", priority: "high", status: "in_progress", assignee: "u4", dueDate: "2025-11-22", estimatedHours: 16, loggedHours: 8, tags: ["backend", "security"], dependencies: [], subtasks: [] },
  { id: "t2", phaseId: "ph3", projectId: "p1", title: "Design landing page mockup", description: "Create high-fidelity mockups for homepage", priority: "high", status: "in_review", assignee: "u2", dueDate: "2025-11-18", estimatedHours: 12, loggedHours: 12, tags: ["design", "frontend"], dependencies: [], subtasks: [] },
  { id: "t3", phaseId: "ph3", projectId: "p1", title: "Write API documentation", description: "Document all REST endpoints", priority: "medium", status: "in_progress", assignee: "u5", dueDate: "2025-11-25", estimatedHours: 8, loggedHours: 4, tags: ["documentation"], dependencies: ["t1"], subtasks: [] },
  { id: "t4", phaseId: "ph4", projectId: "p1", title: "Test payment integration", description: "E2E testing of payment flows", priority: "high", status: "todo", assignee: "u2", dueDate: "2025-12-08", estimatedHours: 20, loggedHours: 0, tags: ["testing", "payments"], dependencies: ["t1"], subtasks: [] },
  { id: "t5", phaseId: "ph2", projectId: "p1", title: "User research report", description: "Compile findings from user interviews", priority: "low", status: "done", assignee: "u5", dueDate: "2025-10-20", estimatedHours: 12, loggedHours: 14, tags: ["research", "ux"], dependencies: [], subtasks: [] },
  { id: "t6", phaseId: "ph2", projectId: "p1", title: "Create component library", description: "Build reusable UI components", priority: "high", status: "done", assignee: "u2", dueDate: "2025-10-28", estimatedHours: 24, loggedHours: 26, tags: ["design", "frontend"], dependencies: [], subtasks: [] },
  { id: "t7", phaseId: "ph3", projectId: "p1", title: "Implement responsive navigation", description: "Mobile-friendly navigation menu", priority: "medium", status: "in_progress", assignee: "u4", dueDate: "2025-11-20", estimatedHours: 8, loggedHours: 6, tags: ["frontend", "mobile"], dependencies: ["t6"], subtasks: [] },
  { id: "t8", phaseId: "ph3", projectId: "p1", title: "Set up analytics tracking", description: "Integrate Google Analytics", priority: "low", status: "backlog", assignee: null, dueDate: "2025-12-01", estimatedHours: 6, loggedHours: 0, tags: ["analytics"], dependencies: [], subtasks: [] },
  { id: "t9", phaseId: "ph7", projectId: "p2", title: "Write blog posts", description: "Create 5 blog posts for campaign", priority: "high", status: "in_progress", assignee: "u5", dueDate: "2025-11-15", estimatedHours: 20, loggedHours: 12, tags: ["content"], dependencies: [], subtasks: [] },
  { id: "t10", phaseId: "ph7", projectId: "p2", title: "Design social media assets", description: "Create graphics for all platforms", priority: "high", status: "in_progress", assignee: "u2", dueDate: "2025-11-18", estimatedHours: 16, loggedHours: 10, tags: ["design", "social"], dependencies: [], subtasks: [] },
];

export const mockComments = [
  { id: "c1", taskId: "t1", userId: "u4", content: "Started implementing JWT authentication. Using bcrypt for password hashing.", timestamp: "2025-11-18T10:30:00Z" },
  { id: "c2", taskId: "t1", userId: "u1", content: "Great! Make sure to add refresh token logic.", timestamp: "2025-11-18T14:22:00Z" },
  { id: "c3", taskId: "t2", userId: "u2", content: "Mockups are ready for review. Check Figma link in attachments.", timestamp: "2025-11-17T16:45:00Z" },
  { id: "c4", taskId: "t2", userId: "u1", content: "Looks fantastic! Small tweaks on mobile view needed.", timestamp: "2025-11-18T09:15:00Z" },
];

export const mockDocuments = [
  { id: "d1", projectId: "p1", name: "Project Brief.pdf", type: "pdf", size: 245000, folderId: "f1", uploadedBy: "u1", uploadedAt: "2025-09-05T10:00:00Z", version: 2, permissions: ["u1", "u2", "u4", "u5", "c1"] },
  { id: "d2", projectId: "p1", name: "Wireframes_v3.fig", type: "figma", size: 1200000, folderId: "f2", uploadedBy: "u2", uploadedAt: "2025-10-12T14:30:00Z", version: 3, permissions: ["u1", "u2", "c1"] },
  { id: "d3", projectId: "p1", name: "User Research Findings.docx", type: "doc", size: 89000, folderId: "f1", uploadedBy: "u5", uploadedAt: "2025-10-20T11:20:00Z", version: 1, permissions: ["u1", "u2", "u5"] },
  { id: "d4", projectId: "p1", name: "Final Design Mockups.png", type: "image", size: 4500000, folderId: "f2", uploadedBy: "u2", uploadedAt: "2025-10-28T16:00:00Z", version: 1, permissions: ["u1", "u2", "u4", "c1"] },
  { id: "d5", projectId: "p2", name: "Campaign Strategy.pdf", type: "pdf", size: 178000, folderId: "f3", uploadedBy: "u2", uploadedAt: "2025-10-05T09:00:00Z", version: 1, permissions: ["u1", "u2", "u5"] },
];

export const mockFolders = [
  { id: "f1", projectId: "p1", name: "Project Documents", parentId: null },
  { id: "f2", projectId: "p1", name: "Design Files", parentId: null },
  { id: "f3", projectId: "p2", name: "Campaign Materials", parentId: null },
];

export const mockActivityLog = [
  { id: "a1", projectId: "p1", userId: "u4", action: "task_updated", entity: "Task", entityId: "t1", description: "Updated status to In Progress", timestamp: "2025-11-18T10:30:00Z" },
  { id: "a2", projectId: "p1", userId: "u2", action: "task_completed", entity: "Task", entityId: "t2", description: "Moved to Review", timestamp: "2025-11-17T16:45:00Z" },
  { id: "a3", projectId: "p1", userId: "u1", action: "comment_added", entity: "Task", entityId: "t1", description: "Added comment", timestamp: "2025-11-18T14:22:00Z" },
  { id: "a4", projectId: "p1", userId: "u5", action: "document_uploaded", entity: "Document", entityId: "d3", description: "Uploaded User Research Findings.docx", timestamp: "2025-10-20T11:20:00Z" },
  { id: "a5", projectId: "p1", userId: "u2", action: "task_created", entity: "Task", entityId: "t7", description: "Created new task: Implement responsive navigation", timestamp: "2025-11-15T09:00:00Z" },
];

export const mockNotifications = [
  { id: "n1", userId: "u1", type: "task_assigned", title: "New task assigned", message: "You've been assigned to Test payment integration", read: false, timestamp: "2025-11-18T15:30:00Z", link: "/projects/p1/tasks/t4" },
  { id: "n2", userId: "u1", type: "comment_mention", title: "You were mentioned", message: "John Doe mentioned you in a comment", read: false, timestamp: "2025-11-18T14:22:00Z", link: "/projects/p1/tasks/t1" },
  { id: "n3", userId: "u4", type: "milestone_approaching", title: "Milestone due soon", message: "Development Sprint 1 is due in 2 days", read: true, timestamp: "2025-11-18T09:00:00Z", link: "/projects/p1/roadmap" },
  { id: "n4", userId: "u2", type: "document_shared", title: "Document shared with you", message: "Project Brief.pdf was shared with you", read: true, timestamp: "2025-11-17T10:00:00Z", link: "/projects/p1/documents" },
];

export const mockAuditLogs = [
  { id: "al1", orgId: "org1", userId: "u1", action: "user_invited", details: "Invited lisa@acme.com as Team Member", ipAddress: "192.168.1.1", timestamp: "2025-11-15T10:00:00Z" },
  { id: "al2", orgId: "org1", userId: "u1", action: "role_changed", details: "Changed Sarah Kim's role from Member to Admin", ipAddress: "192.168.1.1", timestamp: "2025-11-10T14:30:00Z" },
  { id: "al3", orgId: "org1", userId: "u1", action: "project_deleted", details: "Deleted project: Old Marketing Site", ipAddress: "192.168.1.1", timestamp: "2025-11-05T09:15:00Z" },
  { id: "al4", orgId: "org2", userId: "u3", action: "workspace_created", details: "Created workspace: Infrastructure", ipAddress: "10.0.0.5", timestamp: "2025-10-15T11:00:00Z" },
];

export const kanbanColumns = [
  { id: "backlog", title: "Backlog", color: "gray" },
  { id: "todo", title: "To Do", color: "blue" },
  { id: "in_progress", title: "In Progress", color: "purple" },
  { id: "in_review", title: "Review", color: "yellow" },
  { id: "done", title: "Done", color: "green" },
];

export const priorityColors = {
  low: "text-muted-foreground",
  medium: "text-warning",
  high: "text-destructive",
};

export const statusColors = {
  backlog: "bg-gray-500",
  todo: "bg-blue-500",
  in_progress: "bg-purple-500",
  in_review: "bg-yellow-500",
  done: "bg-green-500",
};

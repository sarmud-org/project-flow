"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  Users,
  FolderKanban,
  TrendingUp,
  Clock,
  Trash2,
} from "lucide-react";
import {
  mockOrganizations,
  mockWorkspaces,
  mockProjects,
  mockUsers,
} from "@/lib/mockData";
import { CreateModal } from "@/components/modals/CreateModal";
import { DeleteModal } from "@/components/modals/DeleteModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function OrganizationDashboardComponent({
  orgId,
}: {
  orgId?: string;
}) {
  const router = useRouter();
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [deleteProjectModal, setDeleteProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    workspace: "",
    startDate: "",
    endDate: "",
    budget: "",
  });

  const org =
    mockOrganizations.find((o) => o.id === orgId) || mockOrganizations[0];
  const workspaces = mockWorkspaces.filter((w) => w.orgId === org.id);
  const projects = mockProjects.filter((p) =>
    workspaces.some((w) => w.id === p.workspaceId)
  );

  const activeProjects = projects.filter((p) => p.status === "in_progress");
  const completedProjects = projects.filter((p) => p.status === "completed");
  const totalProgress =
    projects.reduce((acc, p) => acc + p.progress, 0) / projects.length;

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    toast("Project created", {
      description: `${projectForm.name} has been created successfully`,
    });
    setCreateProjectModal(false);
    setProjectForm({
      name: "",
      description: "",
      workspace: "",
      startDate: "",
      endDate: "",
      budget: "",
    });
  };

  const handleDeleteProject = async () => {
    toast("Project deleted", {
      description: `${selectedProject.name} has been deleted`,
    });
    setDeleteProjectModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{org.name}</h1>
            <p className="text-muted-foreground mt-1">Organization Overview</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Manage Members
            </Button>
            <Button onClick={() => setCreateProjectModal(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Projects
              </CardTitle>
              <FolderKanban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-muted-foreground">
                {activeProjects.length} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Workspaces</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{workspaces.length}</div>
              <p className="text-xs text-muted-foreground">
                {org.members.length} total members
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Overall Progress
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(totalProgress)}%
              </div>
              <Progress value={totalProgress} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {completedProjects.length}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round((completedProjects.length / projects.length) * 100)}
                % completion rate
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">All Projects</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const manager = mockUsers.find(
                (u) => u.id === project.members[0]
              );

              return (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-all cursor-pointer group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex-1"
                        onClick={() =>
                          router.push(`/${orgId}/project/${project.id}`)
                        }
                      >
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {project.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                          setDeleteProjectModal(true);
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent
                    onClick={() => router.push(`/projects/${project.id}`)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="capitalize">
                          {project.status.replace("_", " ")}
                        </Badge>
                        <span className="text-2xl font-bold">
                          {project.progress}%
                        </span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{manager?.name || "Unassigned"}</span>
                        <span>{project.endDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {project.members.length} members
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Project created",
                  item: "Website Redesign",
                  time: "2 hours ago",
                },
                {
                  action: "Member invited",
                  item: "lisa@acme.com",
                  time: "5 hours ago",
                },
                {
                  action: "Project completed",
                  item: "CI/CD Pipeline",
                  time: "1 day ago",
                },
                {
                  action: "Workspace created",
                  item: "Product Development",
                  time: "3 days ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.item}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <CreateModal
        open={createProjectModal}
        onClose={() => setCreateProjectModal(false)}
        onSubmit={handleCreateProject}
        title="Create Project"
        description="Create a new project in this organization"
        submitLabel="Create Project"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="project-name">Project Name</Label>
            <Input
              id="project-name"
              value={projectForm.name}
              onChange={(e) =>
                setProjectForm({ ...projectForm, name: e.target.value })
              }
              placeholder="Website Redesign"
              required
            />
          </div>
          <div>
            <Label htmlFor="project-description">Description</Label>
            <Textarea
              id="project-description"
              value={projectForm.description}
              onChange={(e) =>
                setProjectForm({ ...projectForm, description: e.target.value })
              }
              placeholder="Project description"
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="project-workspace">Workspace</Label>
            <Select
              value={projectForm.workspace}
              onValueChange={(value) =>
                setProjectForm({ ...projectForm, workspace: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select workspace" />
              </SelectTrigger>
              <SelectContent>
                {workspaces.map((ws) => (
                  <SelectItem key={ws.id} value={ws.id}>
                    {ws.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="project-start">Start Date</Label>
              <Input
                id="project-start"
                type="date"
                value={projectForm.startDate}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, startDate: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="project-end">End Date</Label>
              <Input
                id="project-end"
                type="date"
                value={projectForm.endDate}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, endDate: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <Label htmlFor="project-budget">Budget</Label>
            <Input
              id="project-budget"
              type="number"
              value={projectForm.budget}
              onChange={(e) =>
                setProjectForm({ ...projectForm, budget: e.target.value })
              }
              placeholder="50000"
            />
          </div>
        </div>
      </CreateModal>

      <DeleteModal
        open={deleteProjectModal}
        onClose={() => setDeleteProjectModal(false)}
        onConfirm={handleDeleteProject}
        title="Delete Project"
        description="Are you sure you want to delete this project?"
        itemName={selectedProject?.name || "project"}
        consequences={[
          "All tasks and phases will be permanently deleted",
          "All documents will be removed",
          "Team members will lose access to this project",
          "This action cannot be undone",
        ]}
        confirmationText="DELETE"
      />
    </div>
  );
}

"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, GripVertical, Calendar, User } from "lucide-react";
import { mockPhases, mockTasks, mockUsers } from "@/lib/mockData";
import { CreateModal } from "@/components/modals/CreateModal";
import { EditModal } from "@/components/modals/EditModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ProjectRoadmapProps {
  projectId: string;
}

export default function ProjectRoadmap({ projectId }: ProjectRoadmapProps) {
  const [draggedTask, setDraggedTask] = useState<any>(null);
  const [createTaskModal, setCreateTaskModal] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    priority: "medium",
    assignee: "",
    dueDate: "",
    estimatedHours: "",
  });

  const phases = mockPhases.filter((p) => p.projectId === projectId);
  const tasks = mockTasks.filter((t) => t.projectId === projectId);

  const handleDragStart = (task: any) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (phaseId: string) => {
    if (draggedTask && draggedTask.phaseId !== phaseId) {
      toast("Task moved", {
        description: `Moved "${draggedTask.title}" to new phase`,
      });
      setDraggedTask(null);
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    toast("Task created", {
      description: `${taskForm.title} has been created`,
    });
    setCreateTaskModal(false);
    setTaskForm({
      title: "",
      description: "",
      priority: "medium",
      assignee: "",
      dueDate: "",
      estimatedHours: "",
    });
  };

  const handleEditTask = async (e: React.FormEvent) => {
    e.preventDefault();
    toast("Task updated", {
      description: `${taskForm.title} has been updated`,
    });
    setEditTaskModal(false);
  };

  const openEditModal = (task: any) => {
    setSelectedTask(task);
    setTaskForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      assignee: task.assignee || "",
      dueDate: task.dueDate || "",
      estimatedHours: task.estimatedHours?.toString() || "",
    });
    setEditTaskModal(true);
  };

  const priorityColors = {
    low: "bg-blue-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  const statusColors = {
    backlog: "bg-gray-500",
    todo: "bg-blue-500",
    in_progress: "bg-purple-500",
    in_review: "bg-yellow-500",
    done: "bg-green-500",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Project Roadmap</h2>
          <p className="text-muted-foreground">
            Drag tasks between phases to organize work
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {phases.map((phase) => {
          const phaseTasks = tasks.filter((t) => t.phaseId === phase.id);
          const completedTasks = phaseTasks.filter(
            (t) => t.status === "done"
          ).length;
          const progress =
            phaseTasks.length > 0
              ? (completedTasks / phaseTasks.length) * 100
              : 0;

          return (
            <Card
              key={phase.id}
              className="overflow-hidden"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(phase.id)}
            >
              <CardHeader className="pb-3 bg-muted/30">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">{phase.name}</CardTitle>
                      <Badge
                        variant={
                          phase.status === "completed"
                            ? "default"
                            : phase.status === "in_progress"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {phase.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {phase.startDate} - {phase.endDate}
                      </span>
                      <span>{phaseTasks.length} tasks</span>
                      <span>{completedTasks} completed</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {Math.round(progress)}%
                      </div>
                      <Progress value={progress} className="w-24 h-2" />
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setSelectedPhase(phase.id);
                        setCreateTaskModal(true);
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  {phaseTasks.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No tasks yet. Click + to add a task.
                    </div>
                  ) : (
                    phaseTasks.map((task) => {
                      const assignee = mockUsers.find(
                        (u) => u.id === task.assignee
                      );
                      return (
                        <div
                          key={task.id}
                          draggable
                          onDragStart={() => handleDragStart(task)}
                          onClick={() => openEditModal(task)}
                          className="flex items-center gap-3 p-3 border rounded-lg bg-card hover:bg-accent/50 cursor-move transition-colors group"
                        >
                          <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium truncate">
                                {task.title}
                              </h4>
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  priorityColors[
                                    task.priority as keyof typeof priorityColors
                                  ]
                                }`}
                              />
                            </div>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              {assignee && (
                                <span className="flex items-center gap-1">
                                  <User className="h-3 w-3" />
                                  {assignee.name}
                                </span>
                              )}
                              {task.dueDate && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {task.dueDate}
                                </span>
                              )}
                              {task.estimatedHours && (
                                <span>{task.estimatedHours}h estimated</span>
                              )}
                            </div>
                          </div>
                          <Badge variant="secondary" className="shrink-0">
                            {task.status.replace("_", " ")}
                          </Badge>
                        </div>
                      );
                    })
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <CreateModal
        open={createTaskModal}
        onClose={() => setCreateTaskModal(false)}
        onSubmit={handleCreateTask}
        title="Create Task"
        description="Add a new task to this phase"
        submitLabel="Create Task"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="task-title">Title</Label>
            <Input
              id="task-title"
              value={taskForm.title}
              onChange={(e) =>
                setTaskForm({ ...taskForm, title: e.target.value })
              }
              placeholder="Task title"
              required
            />
          </div>
          <div>
            <Label htmlFor="task-description">Description</Label>
            <Textarea
              id="task-description"
              value={taskForm.description}
              onChange={(e) =>
                setTaskForm({ ...taskForm, description: e.target.value })
              }
              placeholder="Task description"
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="task-priority">Priority</Label>
              <Select
                value={taskForm.priority}
                onValueChange={(value) =>
                  setTaskForm({ ...taskForm, priority: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="task-assignee">Assignee</Label>
              <Select
                value={taskForm.assignee}
                onValueChange={(value) =>
                  setTaskForm({ ...taskForm, assignee: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select user" />
                </SelectTrigger>
                <SelectContent>
                  {mockUsers.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="task-due">Due Date</Label>
              <Input
                id="task-due"
                type="date"
                value={taskForm.dueDate}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, dueDate: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="task-hours">Estimated Hours</Label>
              <Input
                id="task-hours"
                type="number"
                value={taskForm.estimatedHours}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, estimatedHours: e.target.value })
                }
                placeholder="8"
              />
            </div>
          </div>
        </div>
      </CreateModal>

      <EditModal
        open={editTaskModal}
        onClose={() => setEditTaskModal(false)}
        onSubmit={handleEditTask}
        title="Edit Task"
        description="Update task details"
        submitLabel="Save Changes"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="edit-task-title">Title</Label>
            <Input
              id="edit-task-title"
              value={taskForm.title}
              onChange={(e) =>
                setTaskForm({ ...taskForm, title: e.target.value })
              }
              placeholder="Task title"
              required
            />
          </div>
          <div>
            <Label htmlFor="edit-task-description">Description</Label>
            <Textarea
              id="edit-task-description"
              value={taskForm.description}
              onChange={(e) =>
                setTaskForm({ ...taskForm, description: e.target.value })
              }
              placeholder="Task description"
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-task-priority">Priority</Label>
              <Select
                value={taskForm.priority}
                onValueChange={(value) =>
                  setTaskForm({ ...taskForm, priority: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit-task-assignee">Assignee</Label>
              <Select
                value={taskForm.assignee}
                onValueChange={(value) =>
                  setTaskForm({ ...taskForm, assignee: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select user" />
                </SelectTrigger>
                <SelectContent>
                  {mockUsers.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-task-due">Due Date</Label>
              <Input
                id="edit-task-due"
                type="date"
                value={taskForm.dueDate}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, dueDate: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="edit-task-hours">Estimated Hours</Label>
              <Input
                id="edit-task-hours"
                type="number"
                value={taskForm.estimatedHours}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, estimatedHours: e.target.value })
                }
                placeholder="8"
              />
            </div>
          </div>
        </div>
      </EditModal>
    </div>
  );
}

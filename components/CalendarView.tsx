import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Task {
  id: number;
  title: string;
  date: Date;
  priority: "Low" | "Medium" | "High";
  status: string;
}

const mockTasks: Task[] = [
  { id: 1, title: "Research competitor features", date: new Date(2025, 2, 15), priority: "Low", status: "backlog" },
  { id: 2, title: "Design landing page mockup", date: new Date(2025, 2, 18), priority: "High", status: "todo" },
  { id: 3, title: "Implement authentication", date: new Date(2025, 2, 20), priority: "High", status: "progress" },
  { id: 4, title: "Write API documentation", date: new Date(2025, 2, 22), priority: "Medium", status: "progress" },
  { id: 5, title: "Test payment integration", date: new Date(2025, 2, 25), priority: "High", status: "review" },
  { id: 6, title: "User testing session", date: new Date(2025, 2, 28), priority: "Medium", status: "todo" },
];

const priorityColors = {
  Low: "bg-muted text-muted-foreground",
  Medium: "bg-warning/20 text-warning",
  High: "bg-destructive/20 text-destructive",
};

export const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const tasksForSelectedDate = selectedDate
    ? mockTasks.filter(
        (task) =>
          task.date.getDate() === selectedDate.getDate() &&
          task.date.getMonth() === selectedDate.getMonth() &&
          task.date.getFullYear() === selectedDate.getFullYear()
      )
    : [];

  const datesWithTasks = mockTasks.map((task) => task.date);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Calendar */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Task Calendar</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md"
            modifiers={{
              hasTask: datesWithTasks,
            }}
            modifiersStyles={{
              hasTask: {
                fontWeight: "bold",
                textDecoration: "underline",
              },
            }}
          />
        </CardContent>
      </Card>

      {/* Tasks for Selected Date */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {selectedDate
              ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
              : "Select a date"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {tasksForSelectedDate.length > 0 ? (
            tasksForSelectedDate.map((task) => (
              <div key={task.id} className="p-3 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <p className="font-medium mb-2">{task.title}</p>
                <div className="flex gap-2">
                  <Badge variant="outline" className={priorityColors[task.priority]}>
                    {task.priority}
                  </Badge>
                  <Badge variant="outline">{task.status}</Badge>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">
              No tasks scheduled for this date
            </p>
          )}
        </CardContent>
      </Card>

      {/* Upcoming Tasks */}
      <Card className="lg:col-span-3">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Scheduled Tasks</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockTasks.map((task) => (
              <div key={task.id} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium">{task.title}</p>
                  <Badge variant="outline" className={priorityColors[task.priority]}>
                    {task.priority}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {task.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

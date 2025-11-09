import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { UserPlus, Search, Mail, MoreVertical } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@acme.com",
    role: "Admin",
    avatar: "JD",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Kim",
    email: "sarah@acme.com",
    role: "Team Member",
    avatar: "SK",
    status: "Active",
  },
  {
    id: 3,
    name: "Alex Morgan",
    email: "alex@acme.com",
    role: "Team Member",
    avatar: "AM",
    status: "Active",
  },
  {
    id: 4,
    name: "Rachel Kumar",
    email: "rachel@acme.com",
    role: "Team Member",
    avatar: "RK",
    status: "Active",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    email: "lisa@acme.com",
    role: "Team Member",
    avatar: "LM",
    status: "Invited",
  },
];

export default function TeamComponent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team Members</h1>
          <p className="text-muted-foreground mt-1">
            Manage your team and permissions
          </p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search team members..." className="pl-9" />
      </div>

      {/* Team List */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-primary">
                    {member.avatar}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{member.name}</p>
                    <Badge
                      variant={
                        member.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {member.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {member.email}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

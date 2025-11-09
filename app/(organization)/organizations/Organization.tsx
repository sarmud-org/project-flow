"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Users,
  FolderKanban,
  Building2,
  Search,
  Sparkles,
} from "lucide-react";
import {
  mockOrganizations,
  mockWorkspaces,
  mockProjects,
} from "@/lib/mockData";
import { CreateModal } from "@/components/modals/CreateModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function OrganizationsComponent() {
  const router = useRouter();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    accentColor: "#9333ea",
  });

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateOrg = async (e: React.FormEvent) => {
    e.preventDefault();
    toast("Organization created", {
      description: `${formData.name} has been created successfully`,
    });
    setCreateModalOpen(false);
    setFormData({ name: "", accentColor: "#9333ea" });
  };

  // Filter organizations based on search query
  const filteredOrganizations = mockOrganizations.filter((org) =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Main Content */}
      <main className="container px-6 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Your Organizations</h1>
              <p className="text-muted-foreground mt-1">
                Select an organization to manage projects and teams
              </p>
            </div>
            <Button
              onClick={() => setCreateModalOpen(true)}
              size="lg"
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Organization
            </Button>
          </div>

          {/* Mobile Search */}
          <div className="relative md:hidden">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search organizations..."
              className="pl-9 bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Skeleton className="w-12 h-12 rounded-lg" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredOrganizations.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 animate-pulse bg-primary/20 rounded-full blur-2xl" />
                <Building2 className="relative h-20 w-20 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                {searchQuery
                  ? "No organizations found"
                  : "No organizations yet"}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {searchQuery
                  ? `No organizations match "${searchQuery}". Try a different search term.`
                  : "You're not part of any organization yet. Create one to start managing projects and collaborating with your team."}
              </p>
              {!searchQuery && (
                <Button
                  onClick={() => setCreateModalOpen(true)}
                  size="lg"
                  className="gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Create Your First Organization
                </Button>
              )}
            </div>
          ) : (
            /* Organizations Grid */
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredOrganizations.map((org) => {
                const workspaces = mockWorkspaces.filter(
                  (w) => w.orgId === org.id
                );
                const projects = mockProjects.filter((p) =>
                  workspaces.some((w) => w.id === p.workspaceId)
                );

                return (
                  <Card
                    key={org.id}
                    className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary/20"
                    onClick={() => router.push(`/${org.id}/dashboard`)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                            style={{ backgroundColor: `${org.accentColor}20` }}
                          >
                            <Building2
                              className="h-6 w-6"
                              style={{ color: org.accentColor }}
                            />
                          </div>
                          <div>
                            <CardTitle className="group-hover:text-primary transition-colors">
                              {org.name}
                            </CardTitle>
                            <Badge variant="secondary" className="mt-1">
                              {org.subscription}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground flex items-center gap-2">
                            <FolderKanban className="h-4 w-4" />
                            Projects
                          </span>
                          <span className="font-semibold">
                            {projects.length}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Members
                          </span>
                          <span className="font-semibold">
                            {org.members.length}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm pt-2 border-t">
                          <span className="text-muted-foreground">
                            Workspaces
                          </span>
                          <span className="font-semibold">
                            {workspaces.length}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Create Organization Modal */}
      <CreateModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateOrg}
        title="Create Organization"
        description="Create a new organization to manage projects and teams"
        submitLabel="Create Organization"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="org-name">Organization Name</Label>
            <Input
              id="org-name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Acme Corporation"
              required
            />
          </div>
          <div>
            <Label htmlFor="accent-color">Accent Color</Label>
            <div className="flex gap-2">
              <Input
                id="accent-color"
                type="color"
                value={formData.accentColor}
                onChange={(e) =>
                  setFormData({ ...formData, accentColor: e.target.value })
                }
                className="w-20 h-10"
              />
              <Input
                value={formData.accentColor}
                onChange={(e) =>
                  setFormData({ ...formData, accentColor: e.target.value })
                }
                placeholder="#9333ea"
              />
            </div>
          </div>
        </div>
      </CreateModal>
    </div>
  );
}

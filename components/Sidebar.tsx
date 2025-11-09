"use client";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  ChevronDown,
  HelpCircle,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: Users, label: "Team", path: "/team" },
];

const bottomNavItems = [
  { icon: User, label: "Profile", path: "/profile" },
  { icon: HelpCircle, label: "Help", path: "/help" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  // params
  const params = useParams<{ orgName: string; projectId: string }>();
  const pathName = usePathname();

  console.log({ pathName });

  return (
    <aside className="w-[280px] border-r border-border bg-card flex flex-col">
      {/* Organization Selector */}
      <div className="p-4 border-b border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">AC</span>
                </div>
                <span className="font-semibold">Acme Corp</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60">
            <DropdownMenuItem>Acme Corp</DropdownMenuItem>
            <DropdownMenuItem>Design Agency</DropdownMenuItem>
            <DropdownMenuItem className="text-primary">
              + New Organization
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Workspace Selector */}
      <div className="px-4 py-3 border-b border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between"
            >
              <span className="text-sm font-medium">Product Team</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60">
            <DropdownMenuItem>Product Team</DropdownMenuItem>
            <DropdownMenuItem>Marketing Team</DropdownMenuItem>
            <DropdownMenuItem>Engineering</DropdownMenuItem>
            <DropdownMenuItem className="text-primary">
              + New Workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 flex flex-col">
        <div className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={`/${params.orgName}${item.path}`}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathName === `/${params.orgName}${item.path}`
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-border pt-3 mt-3 space-y-1">
          {bottomNavItems.map((item) => (
            <Link
              key={item.path}
              href={`/${params.orgName}${item.path}`}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathName === `/${params.orgName}${item.path}`
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

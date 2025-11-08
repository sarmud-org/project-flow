"use client";
import Link from "next/link";
import { Rocket, Search } from "lucide-react";
import { UserProfileDropdown } from "@/components/UserProfileDropdown";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function OrganizationHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Rocket className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ProjectFlow</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search organizations..."
              className="pl-9 w-64 bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <UserProfileDropdown />
        </div>
      </div>
    </header>
  );
}

// src/app/(public)/layout.tsx
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/layout/headers/DashboardHeader";

export const metadata = {
  title: "Project Management Platform",
  description: "Manage organizations, projects, and clients efficiently.",
};

export default function OrgDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

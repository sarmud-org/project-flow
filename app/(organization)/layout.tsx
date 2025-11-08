// src/app/(public)/layout.tsx
import React from "react";
import PublicHeader from "@/components/layout/headers/PublicHeader";
import PublicFooter from "@/components/layout/footers/PublicFooter";
import { Toaster } from "sonner";

export const metadata = {
  title: "Project Management Platform",
  description: "Manage organizations, projects, and clients efficiently.",
};

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header (Navigation, Branding) */}
      <PublicHeader />
      <Toaster />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <PublicFooter />
    </div>
  );
}

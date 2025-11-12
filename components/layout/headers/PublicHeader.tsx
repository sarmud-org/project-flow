"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";

export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto max-w-360 px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-lg sm:text-xl font-bold text-foreground">
              ProjectFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-sm font-medium">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="text-sm font-medium">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="sm:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-background/95 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <hr className="my-2 border-border" />
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Login
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)}>
              <Button className="w-full justify-start">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

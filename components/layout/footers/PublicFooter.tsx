"use client";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function PublicFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 sm:px-8 lg:px-12 2xl:px-24">
      <div className="mx-auto max-w-360 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <Rocket className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">ProjectFlow</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs mx-auto sm:mx-0">
              Modern project management for modern teams.
            </p>
            <div className="flex justify-center sm:justify-start gap-2">
              <Button
                size="sm"
                variant="outline"
                className="w-8 h-8 p-0 rounded-full"
                aria-label="Twitter"
              >
                𝕏
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-8 h-8 p-0 rounded-full"
                aria-label="LinkedIn"
              >
                in
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-8 h-8 p-0 rounded-full"
                aria-label="GitHub"
              >
                @
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Features", "Pricing", "Security", "Roadmap"].map((item) => (
                <li key={item}>
                  <Link
                    href="/help"
                    className="hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="/help"
                    className="hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ProjectFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

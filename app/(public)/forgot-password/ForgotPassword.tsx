"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket, Loader2, CheckCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setEmailSent(true);
      toast.success("Email sent", { description: "Check your inbox" });
      setIsLoading(false);
    }, 1000);
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">ProjectFlow</span>
            </Link>
          </div>
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-success/10 p-3">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">
                Check your email
              </CardTitle>
              <CardDescription>
                We&apos;ve sent instructions to
                <br />
                <span className="font-medium text-foreground">{email}</span>
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="mt-4 text-center">
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">ProjectFlow</span>
          </Link>
        </div>
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              Forgot password?
            </CardTitle>
            <CardDescription>
              No worries, we&apos;ll send reset instructions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send reset link"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-4 text-center">
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;

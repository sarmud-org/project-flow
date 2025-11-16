"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Mail } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { login } from "@/services/api/authApi";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Login failed", {
        description: "Please enter your email and password",
      });
      return;
    }

    try {
      setIsLoading(true);

      // 🔥 API CALL
      const res = await login({
        email,
        password,
      });

      if (res.status === 200 || res.status === 201) {
        // Check if JWT token is stored in cookies
        if (typeof document !== "undefined") {
          const cookies = document.cookie.split(";");
          console.log("All cookies after login:", cookies);

          // Check for common JWT cookie names
          const accessToken = cookies.find((cookie) =>
            cookie.trim().startsWith("access_token=")
          );
          const refreshToken = cookies.find((cookie) =>
            cookie.trim().startsWith("refresh_token=")
          );

          console.log("Access Token Cookie:", accessToken || "Not found");
          console.log("Refresh Token Cookie:", refreshToken || "Not found");
        }

        toast.success("Login successful", { description: "Welcome back!" });

        // Redirect to the original page if redirect param exists, otherwise go to organizations
        const redirectPath = redirect || "/organizations";
        router.replace(redirectPath);
      }
    } catch (err: any) {
      console.error("Login Error:", err);

      let errorMessage = "Login failed. Please try again.";

      if (err.response) {
        const status = err.response.status;

        switch (status) {
          case 400:
            errorMessage = err.response.data?.message || "Invalid credentials.";
            break;
          case 401:
            errorMessage = "Invalid email or password.";
            break;
          case 403:
            errorMessage = "You do not have access to perform this action.";
            break;
          case 404:
            errorMessage = "Login service not found. Please contact support.";
            break;
          case 500:
          default:
            errorMessage = "Server error. Please try again later.";
            break;
        }
      } else if (err.request) {
        errorMessage = "Network error. Check your internet connection.";
      } else {
        errorMessage = err.message || "Unexpected error occurred.";
      }

      toast.error("Login failed", {
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background/90 to-muted flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        {/* Login Card */}
        <Card className="shadow-lg border-border/60">
          <CardHeader className="space-y-1 text-center sm:text-left">
            <CardTitle className="text-2xl sm:text-3xl font-bold">
              Welcome back 👋
            </CardTitle>
            <CardDescription className="text-sm sm:text-base text-muted-foreground">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm sm:text-base">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-xs sm:text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-10 sm:h-11 text-sm sm:text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6 sm:my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <Button
              variant="outline"
              className="w-full h-10 sm:h-11 text-sm sm:text-base"
            >
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex flex-col space-y-3">
            <div className="text-sm text-muted-foreground text-center">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

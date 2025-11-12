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
import { Rocket, Loader2, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

const SignupComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    organizationName: "",
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    if (!formData.agreeToTerms) {
      toast.error("You must agree to the terms");
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      toast.success("Account created!", {
        description: "Please verify your email",
      });
      router.push(`/verify-otp?email=${formData.email}`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background/90 to-muted flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        {/* Signup Card */}
        <Card className="shadow-lg border-border/60">
          <CardHeader className="text-center sm:text-left space-y-1">
            <CardTitle className="text-2xl sm:text-3xl font-bold">
              Create an account
            </CardTitle>
            <CardDescription className="text-sm sm:text-base text-muted-foreground">
              Enter your information to get started
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {/* Organization (Optional) */}
              <div className="space-y-2">
                <Label
                  htmlFor="organizationName"
                  className="text-sm sm:text-base"
                >
                  Organization Name (Optional)
                </Label>
                <Input
                  id="organizationName"
                  type="text"
                  placeholder="Your Company"
                  value={formData.organizationName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      organizationName: e.target.value,
                    })
                  }
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm sm:text-base">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm sm:text-base"
                >
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      agreeToTerms: checked as boolean,
                    })
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-xs sm:text-sm text-muted-foreground leading-snug"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:underline font-medium"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-10 sm:h-11 text-sm sm:text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create account"
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
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Back to home */}
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

export default SignupComponent;

"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket, Loader2, CheckCircle } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation"; // TODO: Uncomment when ready to redirect
import { toast } from "sonner";
import Link from "next/link";
import { verifyEmail, resentEmailVerification } from "@/services/api/authApi";

const VerifyOTPComponent = ({ email }: { email: string }) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const router = useRouter(); // TODO: Uncomment when ready to redirect

  // get query params
  console.log("Email from query:", email);

  // derive canResend from timer instead of storing it
  const canResend = timer <= 0;

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error("Invalid OTP", {
        description: "Please enter a 6-digit code",
      });
      return;
    }

    try {
      setIsLoading(true);

      // 🔥 API CALL
      const res = await verifyEmail({
        email,
        otp,
      });

      if (res.status === 200 || res.status === 201) {
        // Check if JWT token is stored in cookies
        if (typeof document !== "undefined") {
          const cookies = document.cookie.split(";");
          console.log("All cookies after verification:", cookies);

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

        toast.success("Verification successful!", {
          description: "Your account has been verified",
        });

        // TODO: Uncomment after verifying JWT token is stored in cookies
        router.push("/organizations");
      }
    } catch (err: any) {
      console.error("Verification Error:", err);

      let errorMessage = "Verification failed. Please try again.";

      if (err.response) {
        const status = err.response.status;

        switch (status) {
          case 400:
            errorMessage = err.response.data?.message || "Invalid OTP code.";
            break;
          case 401:
            errorMessage = "Invalid or expired OTP code.";
            break;
          case 404:
            errorMessage =
              "Verification service not found. Please contact support.";
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

      toast.error("Verification failed", {
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    try {
      // 🔥 API CALL
      const res = await resentEmailVerification({
        email,
      });

      if (res.status === 200 || res.status === 201) {
        setTimer(60);
        toast.success("Code sent", {
          description: "A new verification code has been sent to your email",
        });
      }
    } catch (err: any) {
      console.error("Resend Error:", err);

      let errorMessage = "Failed to resend code. Please try again.";

      if (err.response) {
        const status = err.response.status;

        switch (status) {
          case 400:
            errorMessage = err.response.data?.message || "Invalid request.";
            break;
          case 404:
            errorMessage = "Resend service not found. Please contact support.";
            break;
          case 429:
            errorMessage =
              "Too many requests. Please wait before requesting again.";
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

      toast.error("Failed to resend code", {
        description: errorMessage,
      });
    }
  };

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
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              Verify your email
            </CardTitle>
            <CardDescription>
              We&apos;ve sent a 6-digit code to <br />
              <span className="font-medium text-foreground">{email}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>

              <Button
                onClick={handleVerify}
                className="w-full"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify Email"
                )}
              </Button>

              <div className="text-center text-sm">
                {canResend ? (
                  <button
                    onClick={handleResend}
                    className="text-primary hover:underline font-medium"
                  >
                    Resend code
                  </button>
                ) : (
                  <span className="text-muted-foreground">
                    Resend code in {timer}s
                  </span>
                )}
              </div>
            </div>
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

export default VerifyOTPComponent;

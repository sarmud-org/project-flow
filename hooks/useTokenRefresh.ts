// src/hooks/useTokenRefresh.ts
"use client";
import { useEffect } from "react";
import { refreshAccessToken } from "@/services/api/authApi";

export function useTokenRefresh() {
  useEffect(() => {
    const interval = setInterval(async () => {
      await refreshAccessToken();
    }, 14 * 60 * 1000); // every 14 minutes

    return () => clearInterval(interval);
  }, []);
}

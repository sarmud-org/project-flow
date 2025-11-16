// src/services/api/tokenUtils.ts
"use client";
import Cookies from "js-cookie";

const ACCESS_COOKIE = "access_token";
const REFRESH_COOKIE = "refresh_token";

// Read access token client-side (not for HTTP-only cookies)
export const getAccessToken = () => Cookies.get(ACCESS_COOKIE);

// Clear cookies on logout (client fallback)
export const clearAuthCookies = () => {
  Cookies.remove(ACCESS_COOKIE);
  Cookies.remove(REFRESH_COOKIE);
};

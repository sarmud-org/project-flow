import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Public routes that don't require authentication
const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/signup",
  "/verify-otp",
  "/forgot-password",
  "/privacy",
  "/terms",
];

// Auth routes that should redirect to /organizations if user is already authenticated
const AUTH_REDIRECT_ROUTES = ["/login", "/signup"];

// Client view prefix
const CLIENT_VIEW_PREFIX = "/client-view";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip proxy for static files and API routes
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next/static") ||
    pathname.startsWith("/_next/image") ||
    pathname === "/favicon.ico" ||
    /\.(png|jpg|jpeg|svg|webp|gif|ico|json)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Get authentication cookies (using underscore naming from tokenUtils)
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;
  const isAuthenticated = !!accessToken || !!refreshToken;

  // 1️⃣ Handle public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    // If user is authenticated and trying to access auth pages, redirect to organizations
    if (isAuthenticated && AUTH_REDIRECT_ROUTES.includes(pathname)) {
      return NextResponse.redirect(new URL("/organizations", req.url));
    }
    // Allow access to public routes
    return NextResponse.next();
  }

  // 2️⃣ Handle client view routes (might be public or have different auth)
  // For now, we'll allow them if they have any token
  if (pathname.startsWith(CLIENT_VIEW_PREFIX)) {
    // Client views might be public or have different auth logic
    // Adjust this based on your requirements
    return NextResponse.next();
  }

  // 3️⃣ Protect all other routes - require authentication
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    const loginUrl = new URL("/login", req.url);
    // Add return URL as query parameter for redirect after login
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 4️⃣ Allow authenticated users to access protected routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths.
     * Static files and API routes are handled in the proxy function itself.
     */
    {
      source: "/:path*",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

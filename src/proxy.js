import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

/**
 * Next.js 16 Proxy (formerly Middleware).
 * Performs an optimistic cookie-based check to guard /dashboard routes.
 * No database calls are made here — full session validation happens in
 * Server Components / Route Handlers closer to the data source.
 */
export function proxy(request) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Only run on /dashboard and every sub-path beneath it.
  // Exclude Next.js internals and static assets automatically via this pattern.
  matcher: ["/dashboard/:path*"],
};

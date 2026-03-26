import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicAdminAsset = pathname === "/admin/riot.txt";

  // Protect /admin routes, but keep the login page and Riot verification file public.
  if (
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login" &&
    !isPublicAdminAsset
  ) {
    const token = request.cookies.get("admin_session")?.value;

    if (!token) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login", "/register", "/forget-password"];
const protectedRoutes = ["^/dashboard(/.*)?"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req: req });
  const loginURL = new URL("/login", req.nextUrl.origin);
  const dashboardURL = new URL("/dashboard", req.nextUrl.origin);

  if (authRoutes.includes(req.nextUrl.pathname)) {
    if (token) return NextResponse.redirect(dashboardURL);

    return NextResponse.next();
  }

  if (
    protectedRoutes.some((route) =>
      new RegExp(route).test(req.nextUrl.pathname)
    )
  ) {
    if (token) return NextResponse.next();
    
    const params = new URLSearchParams();
    params.set("callback", req.nextUrl.pathname);

    loginURL.search = params.toString();

    return NextResponse.redirect(loginURL);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

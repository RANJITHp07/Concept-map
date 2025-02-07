import { NextResponse } from "next/server";
import { auth } from "./auth";
import { PUBLIC_ROUTE } from "./lib/constant";

export default auth((req: any) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;
  const isPublicRoute = PUBLIC_ROUTE.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isAuthenticated && !isPublicRoute)
    return NextResponse.redirect(new URL("/login", req.url));

  if (
    req.auth &&
    req?.auth?.user?.role === "CREATOR" &&
    nextUrl.pathname === "/"
  ) {
    return NextResponse.redirect(new URL("/creator-dashboard", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|auth|logo_).*)"],
};

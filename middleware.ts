// In: middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This array must match your 'init' command
const locales = ["en", "es"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return; // It's a valid language page, do nothing
  }

  // If it's missing a language, redirect to the default '/en' version
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|i18n|images).*)"],
};

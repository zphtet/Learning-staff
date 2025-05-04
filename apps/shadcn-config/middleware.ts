import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const publicPaths = ["/signin", "/signup"];
  const { pathname } = request.nextUrl;

  if (publicPaths.some((publicPath) => pathname.endsWith(publicPath))) {
    return NextResponse.next();
  }

  const intlResponse = intlMiddleware(request);
  if (intlResponse) return intlResponse;

  const session = await auth(request as any);
  console.log("Session:", session);

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = `/${url.locale || "en"}/signin`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(de|en|mm)/:dashboard"],
};

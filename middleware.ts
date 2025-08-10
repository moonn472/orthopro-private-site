import { NextRequest, NextResponse } from "next/server";

// "mounir:futura" encodé en Base64 = bW91bmlyOmZ1dHVyYQ==
const BASIC_B64 = process.env.BASIC_AUTH_B64 || "bW91bmlyOmZ1dHVyYQ==";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Laisse passer les assets Next.js et le favicon
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization") || "";
  if (auth === `Basic ${BASIC_B64}`) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Private Preview", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

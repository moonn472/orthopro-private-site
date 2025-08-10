
import { NextRequest, NextResponse } from "next/server";

// Basic Auth for private preview (change credentials via env on Vercel)
const BASIC_USER = process.env.BASIC_AUTH_USER || "private";
const BASIC_PASS = process.env.BASIC_AUTH_PASS || "orthopro";
const realm = "Private Preview";

export function middleware(req: NextRequest) {
  // Allow robots.txt and favicon to be served but still noindex them
  const {"pathname": path} = req.nextUrl;
  if (path.startsWith("/api")) return NextResponse.next();

  const auth = req.headers.get("authorization");
  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme.toLowerCase() === "basic") {
      const decoded = Buffer.from(encoded, "base64").toString();
      const [user, pass] = decoded.split(":");
      if (user === BASIC_USER && pass === BASIC_PASS) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${realm}", charset="UTF-8"`
    }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

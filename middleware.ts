import { NextRequest, NextResponse } from "next/server";

const BASIC_USER = process.env.BASIC_AUTH_USER || "mounir";
const BASIC_PASS = process.env.BASIC_AUTH_PASS || "futura";
const realm = "Private Preview";

// Decode Base64 using Web API (Edge runtime)
function decodeBasic(b64: string): string {
  try {
    // atob est dispo sur l’Edge runtime
    return atob(b64);
  } catch {
    return "";
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Laisse passer les assets et l’API
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization") || "";
  const [scheme, encoded] = auth.split(" ");

  if (scheme?.toLowerCase() === "basic" && encoded) {
    const decoded = decodeBasic(encoded);
    const i = decoded.indexOf(":");
    const u = i >= 0 ? decoded.slice(0, i) : "";
    const p = i >= 0 ? decoded.slice(i + 1) : "";
    if (u === BASIC_USER && p === BASIC_PASS) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${realm}", charset="UTF-8"`,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

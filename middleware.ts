import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Si no es la página principal
  if (url.pathname !== "/") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Aplicar a todas las rutas
export const config = {
  matcher: "/((?!_next|favicon.ico).*)",
};
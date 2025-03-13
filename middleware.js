import { NextResponse } from "next/server";

export function middleware(req) {
    const isAuthenticated = req.cookies.get("auth")?.value === "true";
    
    if (!isAuthenticated && req.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"], // Protege tudo dentro de /dashboard
};

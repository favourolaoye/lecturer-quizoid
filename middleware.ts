import { NextResponse } from "next/server";

export default function middleware(request: any) {
    const pass = request.cookies.get('token')?.value;

    if (!pass || pass === undefined) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard:path*'],
};

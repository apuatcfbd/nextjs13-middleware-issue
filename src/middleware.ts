// This function can be marked `async` if using `await` inside
import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  console.log(Math.random() + ' Middleware ran');
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/secure',
  ],
}
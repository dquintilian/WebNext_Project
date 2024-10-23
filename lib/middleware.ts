// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Ensure URLs without a trailing slash are redirected to include one (except API routes or files)
  if (!pathname.endsWith('/') && !pathname.includes('.')) {
    return NextResponse.redirect(`${request.nextUrl.origin}${pathname}/`);
  }

  // Allow other requests to proceed as normal
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next|.*\\..*).*)', // Match all paths except API, static files, etc.
};

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.endsWith('/') && !pathname.includes('.')) {
    return NextResponse.redirect(`${request.nextUrl.origin}${pathname}/`);
  }
  return NextResponse.next();
}
export const config = {
  matcher: '/((?!api|_next|.*\\..*).*)',
};

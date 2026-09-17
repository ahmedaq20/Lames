import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exact /en or /ar -> rewrite to home page /
  if (pathname === '/en' || pathname === '/ar') {
    const targetUrl = request.nextUrl.clone();
    targetUrl.pathname = '/';
    const response = NextResponse.rewrite(targetUrl);
    response.headers.set('x-locale', pathname.slice(1));
    return response;
  }

  // Subpaths like /en/contact, /ar/portfolio -> rewrite to /contact, /portfolio
  if (pathname.startsWith('/en/') || pathname.startsWith('/ar/')) {
    const locale = pathname.startsWith('/en/') ? 'en' : 'ar';
    const strippedPath = pathname.replace(/^\/(en|ar)/, '');
    const targetUrl = request.nextUrl.clone();
    targetUrl.pathname = strippedPath || '/';
    const response = NextResponse.rewrite(targetUrl);
    response.headers.set('x-locale', locale);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/en',
    '/ar',
    '/en/:path*',
    '/ar/:path*',
  ],
};

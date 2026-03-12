import { NextRequest, NextResponse } from 'next/server';

const PROTECTED_PATHS = [
  '/investors/dashboard',
  '/investors/gerente-virtual',
  '/investors/sexto-sentido',
  '/investors/cerca',
  '/investors/abuelo-matias',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(path + '/')
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get('sf-investor-auth');

  if (!authCookie || authCookie.value !== 'authenticated') {
    const loginUrl = new URL('/investors', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/investors/dashboard',
    '/investors/gerente-virtual',
    '/investors/sexto-sentido',
    '/investors/cerca',
    '/investors/abuelo-matias',
  ],
};

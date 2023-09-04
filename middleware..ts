import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const token = getCookie('islogins');

  if (token !== 'true') {
    if (request.nextUrl.pathname.startsWith('/Dashboard')) {
      return NextResponse.rewrite(new URL('/Login', request.url));
    }
  } else {
    if (url.pathname === "/Login") {
      url.pathname = "/Dashboard";
      return NextResponse.redirect(url);
    }
  }
}

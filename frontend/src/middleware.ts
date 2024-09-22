import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export default async function middleware(
  req: NextRequest,
  res: NextResponse,
  event: NextFetchEvent
) {
    // console.log('req pure', req.headers)
  // console.log('req nexturl', req.nextUrl);
  // console.log('req url', req.url)
  // console.log(cookies().get('loggedin'));
  // console.log(cookies().getAll())

  //   const isAuthenticated = !!token;

    if (req.nextUrl.pathname.startsWith('/signin') && cookies().get('loggedin')) {
        // return redirect('/')
        // return NextResponse.redirect('http://localhost:3000');
        // return NextResponse.redirect(new URL('/', req.url));
    }

  //   const authMiddleware = await withAuth({
  //     pages: {
  //       signIn: `/signin`,
  //     },
  //   });

  //   // @ts-expect-error
  //   return authMiddleware(req, event);
}

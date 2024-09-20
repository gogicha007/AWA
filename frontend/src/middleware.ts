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
    console.log('req pure', req)
//   console.log('req', req.nextUrl);
  console.log(cookies().get('loggedin'));

  //   const isAuthenticated = !!token;

    if (req.nextUrl.pathname.startsWith('/signin') && cookies().get('loggedin')) {
        // return redirect('/')
        //   return NextResponse.redirect('/');
    //   return NextResponse.redirect(new URL('/', req.url));
    }

  //   const authMiddleware = await withAuth({
  //     pages: {
  //       signIn: `/signin`,
  //     },
  //   });

  //   // @ts-expect-error
  //   return authMiddleware(req, event);
}

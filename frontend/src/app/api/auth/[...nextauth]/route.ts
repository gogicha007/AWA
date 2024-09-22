import NextAuth, { NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { jwtDecode } from 'jwt-decode';
import { endpointObj } from '@/lib/endpoints';
import CredentialsProvider from 'next-auth/providers/credentials';
import { setLoginCookie } from '@/lib/utils';

interface UserData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  user_id: number;
  exp: number;
  is_superuser: boolean;
  is_staff: boolean;
  refresh?: string;
  refresh_lifetime?: number;
  access_lifetime?: number;
}

async function refreshAccessToken(token: JWT) {
  const res = await fetch(endpointObj.refreshUrl, {
    method: 'POST',
    body: JSON.stringify({ refresh: token.refresh }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (res.ok) {
    const data = await res.json();
    setLoginCookie('true');
    return {
      ...token,
      error: null,
      accessToken: data.access_token,
      refreshtoken: data.refreshToken,
      accessExpiresIn: Date.now() + data.exp - 2000,
    };
  } else {
    setLoginCookie('false');
    return {
      error: 'RefreshAccessTokenError',
    };
  }
}
export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(endpointObj.signinUrl, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const token = await res.json();
        if (res.status !== 200) return null;
        setLoginCookie('true');
        const {
          firstName,
          lastName,
          email,
          user_id,
          exp,
          is_superuser,
          is_staff,
          // refresh_lifetime,
          // access_lifetime,
        } = jwtDecode(token.access) as UserData;
        const name = firstName.concat(' ', lastName);
        return {
          ...token,
          exp,
          user: {
            name,
            email,
            user_id,
            is_staff,
            is_superuser,
            // refresh_lifetime,
            // refreshExpiresIn: dateNow + (refresh_lifetime as number),
            // accessExpiresIn: dateNow + (access_lifetime as number),
          },
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      // console.log('jwt callback', { token, user });
      if (user) {
        token.user = user.user;
        token.access = user.access;
        token.refresh = user.refresh;
        token.accessExpiresIn = user.exp - 2000;
      }
      if (Date.now() < (token.accessExpiresIn as number)) {
        return token;
      }

      return await refreshAccessToken(token);
    },
    async session({ session, token }): Promise<Session> {
      // console.log('token', { token });
      session.user = token.user as User;
      session.accessToken = token.access;
      session.refreshToken = token.refresh;
      session.accessExpiresIn = token.accessExpiresIn;
      // session.refreshExp =
      //   (token.iat as number) * 1000 + (token.user.refresh_lifetime as number);
      // console.log('session callback', { session });
      // console.log('session', session)
      return session;
    },
  },
  session: { strategy: 'jwt' },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

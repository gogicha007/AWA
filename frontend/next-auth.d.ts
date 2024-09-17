import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface User {
    user: {
      name: string,
      email: string,
      user_id: number;
      is_staff: boolean;
      is_superuser: boolean;
      refresh_lifetime: number;
      access_lifetime: number;
    }
    access?: string;
    refresh?: string;
  }

  interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
    accessToken?: string,
    refreshToken?: string,
    accessExp?: number,
    refreshExp?: number,
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    user: {
      refresh_lifetime?: number;
      access_lifetime?: number;
    }
    access?: string,
    accessExp: number;
    refresh?: string;
    refreshExp: number;
  }
}
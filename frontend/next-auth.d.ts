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
    }
    access?: string;
    refresh?: string;
    exp: number;
  }

  interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    expiresIn: number;
  }
}
import NextAuth, { DefaultSession, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import apiHelper from "./lib/apiHelper";
import { apis } from "./lib/api";

declare module "next-auth" {
  interface User {
    _id?: string | undefined;
    email?: string | undefined | null;
    role?: string;
    token: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      role?: string;
      token: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string;
    role?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        code: {},
        userId: {},
        type: {},
        email: {},
        password: {},
        role: {},
      },
      async authorize(credentials) {
        try {
          const { password, email, code, type, userId, role } = credentials;

          if (type == "register" && !code && !userId)
            throw new Error("Code and userId is a required field");

          if (type == "login" && !email && !password)
            throw new Error("Email and password is a required field");

          if (type == "login") {
            const res = await apiHelper(apis.login, "POST", {
              email: email,
              password: password,
              role: role,
            });

            if (res.status == "success") return res.data;

            throw new Error(res.error.message);
          } else if (type == "register") {
            const res = await apiHelper(apis.verifyOtp, "POST", {
              code: Number(code as string),
              userId,
            });

            if (res.status == "success") return res.data;

            throw new Error(res.error.message);
          }

          throw new Error("Invalid credentials");
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user?.email && user._id) {
        token.email = user.email;
        token.id = user._id;
        token.role = user.role;
        token.jwtToken = user.token;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && token.email) {
        session.user = {
          id: token.id as string,
          email: token.email,
          role: token.role,
          token: token.jwtToken as string,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/verify-otp",
  },
  secret: "12345555",
});

import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserT } from "./lib/types/user";
import { APIResponse } from "./lib/types/next-auth-api-response";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch(`${process.env.API_URL}/api/v1/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const payload: APIResponse<UserT> = await res.json();

        if ("code" in payload) {
          throw new Error(`failed to login : ${payload.message}`);
        }

        return {
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.access_token = user.token;
        token.user = user.user;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;

      return session;
    },
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
};

"use server";

import { JWT, decode } from "next-auth/jwt";
import { cookies } from "next/headers";

const NEXTAUTH_COOKIE =
  process.env.NODE_ENV === "production"
    ? "__Secure-next-auth.session-token"
    : "next-auth.session-token";

export async function getToken() {
  const token = cookies().get(NEXTAUTH_COOKIE)?.value;

  if (!token) return null;

  try {
    const jwt: JWT | null = await decode({
      token: token,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    return jwt;
  } catch (e) {
    console.error("Error decoding token", e);

    return null;
  }
}

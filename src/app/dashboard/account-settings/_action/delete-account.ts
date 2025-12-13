"use server";

import { getToken } from "@/lib/utils/get-token";
import { DeleteAPIResponse } from "../_types/account-settings";

export async function deleteAccount() {
  const tokenData = await getToken();
  const token = tokenData?.access_token;

  if (!token) {
    return {
      message: "Token is not found !",
      code: 401,
    };
  }

  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/auth/deleteMe`, {
      method: "DELETE",
      headers: {
        token: token,
        Authorization: `Bearer ${token}`,
      },
    });

    const payload: DeleteAPIResponse = await res.json();

    return payload;
  } catch (e) {
    return {
      code: 500,
      message: (e as Error).message || "Failed to delete your account",
    };
  }
}

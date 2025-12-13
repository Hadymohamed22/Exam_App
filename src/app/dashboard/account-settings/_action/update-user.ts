"use server";

import { getToken } from "@/lib/utils/get-token";
import { UpdateAPIResponse } from "../_types/account-settings";

export async function updateUser(state: UpdateAPIResponse, formdata: FormData) {
  let phone = formdata.get("phone") as string;
  if (phone) {
    phone = phone
      .split("")
      .filter((x) => x !== " ")
      .join("")
      .slice(2);
  }
  const data = {
    firstName: formdata.get("name.firstName"),
    lastName: formdata.get("name.lastName"),
    username: formdata.get("username"),
    email: formdata.get("email"),
    phone,
  };

  const tokenData = await getToken();
  const token = tokenData?.access_token;

  if (!token) {
    return {
      message: "Failed to get token",
      code: 401,
    };
  }

  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/auth/editProfile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: token,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const payload: UpdateAPIResponse = await res.json();

    return payload;
  } catch (e) {
    return {
      message: (e as Error).message || "Failed to update data !",
      code: 404,
    };
  }
}

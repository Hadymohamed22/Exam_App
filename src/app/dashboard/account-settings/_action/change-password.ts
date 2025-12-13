"use server";

import { getToken } from "@/lib/utils/get-token";
import { UpdatePasswordAPIResponse } from "../_types/account-settings";

export async function changePassword(
  _prevState: UpdatePasswordAPIResponse,
  formdata: FormData
) {
  const oldPassword = formdata.get("oldPassword");
  const newPassword = formdata.get("newPassword");
  const confirmPassword = formdata.get("confirmPassword");

  if (!oldPassword || !newPassword || !confirmPassword) {
    return {
      message: "Please fill all data",
      code: 404,
    };
  }

  const tokenData = await getToken();
  const token = tokenData?.access_token;

  if (!token) {
    return {
      message: "Token is not found !",
      code: 401,
    };
  }

  try {
    console.log(
      JSON.stringify({
        oldPassword: oldPassword,
        password: newPassword,
        rePassword: confirmPassword,
      })
    );
    const res = await fetch(
      `${process.env.API_URL}/api/v1/auth/changePassword`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          token: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword: oldPassword,
          password: newPassword,
          rePassword: confirmPassword,
        }),
      }
    );

    const payload: UpdatePasswordAPIResponse = await res.json();

    return payload;
  } catch (e) {
    return {
      message: (e as Error).message || "Failed to update Password",
      code: 500,
    };
  }
}

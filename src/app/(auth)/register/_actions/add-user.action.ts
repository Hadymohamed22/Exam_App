"use server";

import { redirect } from "next/navigation";
import { RegisterFields } from "../types/register-fields";

type AddUserProps = {
  values: RegisterFields;
};

export async function AddUser({ values }: AddUserProps) {
  if (values.password !== values.rePassword) {
    throw new Error("Password and Confirm Password is not matched");
  }

  const res = await fetch("https://exam.elevateegy.com/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: values.username,
      firstName: values.name.firstName,
      lastName: values.name.lastName,
      email: values.email,
      password: values.password,
      rePassword: values.rePassword,
      phone: values.phone.slice(2),
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to sign in !");
  }

  redirect("/login");
}

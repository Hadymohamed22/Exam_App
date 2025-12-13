import z from "zod";
import { RegisterSchema } from "./auth.schema";

export const ProfileSettingSchema = RegisterSchema.omit({
  password: true,
  rePassword: true,
});

// change password
export const ChangePasswordSchema = z
  .object({
    oldPassword: z
      .string("Enter valid password !")
      .nonempty("Old Password is required !"),
    newPassword: z
      .string("Password Is Required !")
      .regex(/(?=.*?[A-Z])/, "At least one uppercase letter (A-Z)")
      .regex(/(?=.*?[a-z])/, "At least one lowercase letter (a-z)")
      .regex(/(?=.*?[0-9])/, "At least one number (0-9)")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "At least one special character (!@#$%^&*-)"
      )
      .min(8, "Password Must Be At Least 8 Digits"),
    confirmPassword: z
      .string("Enter valid confirm password !")
      .nonempty("Confirm Password is required !"),
  })
  .refine((values) => values.newPassword === values.confirmPassword, {
    error: "Confirm Password is not matched !",
    path: ["confirmPassword"],
  });

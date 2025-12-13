import z from "zod";

// Login

export const LoginSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input === undefined || issue.input === ""
        ? "Email Is Required !"
        : "Please Enter Valid Email !",
  }),
  password: z
    .string("Please Enter A Valid Password !")
    .nonempty("Password Is Required !"),
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Forget Password Stepper
export const ForgetPassStepperSchema = z
  .object({
    email: z.email({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? "Email Is Required !"
          : "Please Enter Valid Email !",
    }),
    resetCode: z
      .string("Verify Code Is Required !")
      .min(6, "Verify Code Must Be At Least 6 Digits"),
    newPassword: z
      .string("New Password is required !")
      .regex(/(?=.*?[A-Z])/, "At least one uppercase letter (A-Z)")
      .regex(/(?=.*?[a-z])/, "At least one lowercase letter (a-z)")
      .regex(/(?=.*?[0-9])/, "At least one number (0-9)")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "At least one special character (!@#$%^&*-)"
      )
      .min(8, "Password Must Be At Least 8 Digits"),
    confirmNewPassword: z.string("Confirm Password is required !"),
  })
  .refine((values) => values.confirmNewPassword === values.newPassword, {
    error: "Confirm Password is not matched",
    path: ["confirmNewPassword"],
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Register
export const RegisterSchema = z
  .object({
    name: z.object({
      firstName: z.string().nonempty("Please enter your first name !"),
      lastName: z.string().nonempty("Please enter your last name !"),
    }),
    username: z.string().nonempty("please enter your username !"),
    email: z.email({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? "Email Is Required !"
          : "Please Enter Valid Email !",
    }),
    phone: z
      .string()
      .nonempty("Please enter your phone number !")
      .min(12, "EG Phone Number must be at least 11 digits"),
    password: z
      .string("Password Is Required !")
      .regex(/(?=.*?[A-Z])/, "At least one uppercase letter (A-Z)")
      .regex(/(?=.*?[a-z])/, "At least one lowercase letter (a-z)")
      .regex(/(?=.*?[0-9])/, "At least one number (0-9)")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "At least one special character (!@#$%^&*-)"
      )
      .min(8, "Password Must Be At Least 8 Digits"),
    rePassword: z.string().nonempty("Confirm Password is required !"),
  })
  .refine((values) => values.password === values.rePassword, {
    error: "Confirm Password is not matched",
    path: ["rePassword"],
  });

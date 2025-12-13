"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomButton } from "@/components/shared/custom-button";
import { CustomInput } from "@/components/shared/custom-input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import ErrorComponent from "../../../../components/shared/error-component";
import { LoginFields } from "../_types/login-fields";
import ErrorMessage from "../../../../components/shared/error-message";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schemas/auth.schema";

export default function LoginForm() {
  // States
  const [errorBox, setErrorBox] = useState<string | null | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form
  const { register, handleSubmit, formState } = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: zodResolver(LoginSchema),
  });

  // Effects
  useEffect(() => {
    let errorTimeout: NodeJS.Timeout;
    if (errorBox) {
      errorTimeout = setTimeout(() => {
        setErrorBox("");
      }, 3000);
    }

    return () => clearTimeout(errorTimeout);
  }, [errorBox]);

  {
    /* On Submit Handler */
  }

  const onSubmit: SubmitHandler<LoginFields> = async (values) => {
    const { email, password } = values;

    setIsSubmitting(true);
    try {
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (!res?.ok) {
        setErrorBox(res?.error);
        return;
      }

      const callback = new URLSearchParams(location.search).get("callback");

      location.href = callback || "/dashboard";
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div className="form-field">
        <Label htmlFor="email">Email</Label>
        <CustomInput
          type="email"
          placeholder="user@example.com"
          id="email"
          required={false}
          variant={formState.errors.email && "destructive"}
          {...register("email")}
        />
        {formState.errors.email && (
          <ErrorMessage message={formState.errors.email.message} />
        )}
      </div>

      {/* Password */}
      <div className="form-field">
        <Label htmlFor="password">Password</Label>
        <CustomInput
          type="password"
          placeholder="********"
          id="password"
          required={false}
          variant={formState.errors.password && "destructive"}
          {...register("password")}
        />
        {formState.errors.password && (
          <ErrorMessage message={formState.errors.password.message} />
        )}
      </div>

      {/* Forget Pass */}
      <div className="forget-pass flex items-center justify-end">
        <Link
          href="/forget-password"
          className="text-main duration-300 hover:text-blue-700 font-medium text-sm"
        >
          Forgot your password?
        </Link>
      </div>
      
      {/* Error Box */}
      {errorBox && <ErrorComponent message={errorBox} />}
      <CustomButton
        type="submit"
        className="mt-6"
        disabled={formState.isValidating || isSubmitting}
      >
        {formState.isValidating || isSubmitting ? "Login Please Wait ..." : "Login"}
      </CustomButton>
    </form>
  );
}

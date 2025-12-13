"use client";
import { CustomButton } from "@/components/shared/custom-button";
import { CustomInput } from "@/components/shared/custom-input";

import { Label } from "@/components/ui/label";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RegisterFields } from "../types/register-fields";
import { PhoneInput } from "@/components/ui/phone-input";
import ErrorMessage from "../../../../components/shared/error-message";
import { AddUser } from "../_actions/add-user.action";
import { useEffect, useState } from "react";
import ErrorComponent from "../../../../components/shared/error-component";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/lib/schemas/auth.schema";

export default function RegisterForm() {
  // States
  const [errorBox, setErrorBox] = useState<string | null | undefined>();

  // Form
  const { register, handleSubmit, control, formState } =
    useForm<RegisterFields>({
      defaultValues: {
        name: {
          firstName: "",
          lastName: "",
        },
        username: "",
        email: "",
        phone: "",
        password: "",
        rePassword: "",
      },
      mode: "all",
      resolver: zodResolver(RegisterSchema),
    });

  {
    /* On Submit Handler */
  }
  const onSubmit: SubmitHandler<RegisterFields> = async (values) => {
    try {
      await AddUser({ values });
      toast.success("Created Successfully , Login now !");
    } catch (e) {
      setErrorBox((e as Error).message || "Failed to sign in !");
    }
  };

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* Name */}
      <div className="name grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {/* First Name */}
        <div className="first-name">
          <Label htmlFor="firstName">First Name</Label>
          <CustomInput
            type="text"
            placeholder="Hady"
            id="firstName"
            required={false}
            {...register("name.firstName")}
            variant={formState.errors.name?.firstName && "destructive"}
          />
          {formState.errors.name?.firstName && (
            <ErrorMessage message={formState.errors.name?.firstName.message} />
          )}
        </div>

        {/* Last Name */}
        <div className="last-name">
          <Label htmlFor="lastName">Last Name</Label>
          <CustomInput
            type="text"
            placeholder="Mohamed"
            id="lastName"
            required={false}
            {...register("name.lastName")}
            variant={formState.errors.name?.lastName && "destructive"}
          />
          {formState.errors.name?.lastName && (
            <ErrorMessage message={formState.errors.name?.lastName.message} />
          )}
        </div>
      </div>

      {/* UserName */}
      <div className="username">
        <Label htmlFor="username">Username</Label>
        <CustomInput
          type="text"
          placeholder="user123"
          id="username"
          required={false}
          {...register("username")}
          variant={formState.errors.username && "destructive"}
        />
        {formState.errors.username && (
          <ErrorMessage message={formState.errors.username.message} />
        )}
      </div>

      {/* Email */}
      <div className="email">
        <Label htmlFor="email">Email</Label>
        <CustomInput
          type="email"
          placeholder="user@example.com"
          id="email"
          required={false}
          {...register("email")}
          variant={formState.errors.email && "destructive"}
        />
        {formState.errors.email && (
          <ErrorMessage message={formState.errors.email.message} />
        )}
      </div>

      {/* Phone */}
      <div className="phone">
        <Label htmlFor="phone">Phone</Label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              defaultCountry="EG"
              international
              limitMaxLength
              value={field.value}
              onChange={field.onChange}
              id="phone"
              data-variant={formState.errors.phone ? "destructive" : undefined}
            />
          )}
        />
        {formState.errors.phone && (
          <ErrorMessage message={formState.errors.phone.message} />
        )}
      </div>

      {/* Password */}
      <div className="password">
        <Label htmlFor="password">Password</Label>
        <CustomInput
          type="password"
          placeholder="*******"
          id="password"
          required={false}
          {...register("password")}
          variant={formState.errors.password && "destructive"}
        />
        {formState.errors.password && (
          <ErrorMessage message={formState.errors.password.message} />
        )}
      </div>

      {/* Confirm Password */}
      <div className="confirm-pass">
        <Label htmlFor="confirmPass">Confirm Password</Label>
        <CustomInput
          type="password"
          placeholder="*******"
          id="confirmPass"
          required={false}
          {...register("rePassword")}
          variant={formState.errors.rePassword && "destructive"}
        />
        {formState.errors.rePassword && (
          <ErrorMessage message={formState.errors.rePassword.message} />
        )}
      </div>

      {/* Error Box */}
      {errorBox && <ErrorComponent message={errorBox} />}

      {/* Create Account Button */}
      <CustomButton
        type="submit"
        className="mt-6"
        disabled={formState.isValidating}
      >
        {formState.isValidating ? "Creating ..." : "Create Account"}
      </CustomButton>
    </form>
  );
}

"use client";

import { CustomButton } from "@/components/shared/custom-button";
import { CustomInput } from "@/components/shared/custom-input";
import ErrorMessage from "@/components/shared/error-message";
import { PhoneInput } from "@/components/ui/phone-input";
import { ProfileSettingSchema } from "@/lib/schemas/settings.schema";
import { ProfileSettingsType } from "@/lib/types/settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Controller, useForm } from "react-hook-form";
import {
  ProfileSettingsProps,
  UpdateAPIResponse,
} from "../_types/account-settings";
import DeleteConfirmBox from "./delete-confirm-box";
import { updateUser } from "../_action/update-user";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "sonner";

// Variables
const initialState: UpdateAPIResponse = {
  message: "",
  user: {
    _id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    isVerified: true,
    createdAt: "",
    passwordResetCode: "",
    passwordResetExpires: "",
    resetCodeVerified: true,
    passwordChangedAt: "",
  },
};

export default function ProfileSettings({ user }: ProfileSettingsProps) {
  const [state, formAction] = useFormState(updateUser, initialState);

  // Form
  const { register, formState, control, reset } = useForm<ProfileSettingsType>({
    defaultValues: {
      email: user?.email,
      name: {
        firstName: user?.firstName,
        lastName: user?.lastName,
      },
      phone: `+20${user?.phone.slice(1)}`,
      username: user?.username,
    },
    resolver: zodResolver(ProfileSettingSchema),
  });

  // Effects
  useEffect(() => {
    // Only show toast if there's a message (avoid showing on initial mount)
    if (!state.message) return;

    if ("code" in state) {
      toast.error(state.message);
      return;
    }
    const newDefaultValues = {
      email: state.user.email,
      name: {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
      },
      phone: `+20${state.user.phone.slice(1)}`,
      username: state.user.username,
    };
    toast.success("Your data is updated");
    reset(newDefaultValues);
  }, [state, reset]);
  
  return (
    <form className="flex flex-col gap-4" action={formAction}>
      {/* Name */}
      <div className="name grid grid-cols-1 md:grid-cols-2 gap-4">

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

      {/* Username */}
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
              name={field.name}
            />
          )}
        />
        {formState.errors.phone && (
          <ErrorMessage message={formState.errors.phone.message} />
        )}
      </div>

      {/* Delete And Save Buttons */}
      <div className="save-delete grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Delete */}
        <DeleteConfirmBox />

        {/* Save Changes */}
        <CustomButton type="submit" disabled={!formState.isDirty}>
          Save Changes
        </CustomButton>
      </div>
    </form>
  );
}

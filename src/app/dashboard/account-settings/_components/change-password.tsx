import { useForm } from "react-hook-form";
import {
  ChangePasswordType,
  UpdatePasswordAPIResponse,
} from "../_types/account-settings";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/custom-input";
import ErrorMessage from "@/components/shared/error-message";
import { CustomButton } from "@/components/shared/custom-button";
import ErrorComponent from "@/components/shared/error-component";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { changePassword } from "../_action/change-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangePasswordSchema } from "@/lib/schemas/settings.schema";
import { toast } from "sonner";

// Variables
const initialState: UpdatePasswordAPIResponse = {
  message: "",
  token: "",
};

export default function ChangePassword() {
  // States
  const [errorBox, setErrorBox] = useState<string>();
  const [state, formAction] = useFormState(changePassword, initialState);

  // Form
  const { register, formState, reset } = useForm<ChangePasswordType>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(ChangePasswordSchema),
    mode: "onChange",
  });

  // Effects
  useEffect(() => {
    if (state.message !== "") {
      if ("code" in state) {
        setErrorBox(state.message);

        return;
      }

      toast.success("Your password has been updated.");
      reset();
    }
  }, [state, reset]);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (errorBox) {
      id = setTimeout(() => setErrorBox(""), 3000);
    }

    return () => clearTimeout(id);
  }, [errorBox]);
  
  return (
    <form className="flex flex-col gap-4" action={formAction}>
      {/* Current Password */}
      <div className="password">
        <Label htmlFor="password">Current Password</Label>
        <CustomInput
          type="password"
          placeholder="*******"
          id="password"
          required={false}
          {...register("oldPassword")}
          variant={formState.errors.oldPassword && "destructive"}
        />
        {formState.errors.oldPassword && (
          <ErrorMessage message={formState.errors.oldPassword.message} />
        )}
      </div>

      <hr className="border-gray-100" />

      {/* New Password */}
      <div className="password">
        <Label htmlFor="password">New Password</Label>
        <CustomInput
          type="password"
          placeholder="*******"
          id="password"
          required={false}
          {...register("newPassword")}
          variant={formState.errors.newPassword && "destructive"}
        />
        {formState.errors.newPassword && (
          <ErrorMessage message={formState.errors.newPassword.message} />
        )}
      </div>

      {/* Confirm Password */}
      <div className="password">
        <Label htmlFor="password">Confirm New Password</Label>
        <CustomInput
          type="password"
          placeholder="*******"
          id="password"
          required={false}
          {...register("confirmPassword")}
          variant={formState.errors.confirmPassword && "destructive"}
        />
        {formState.errors.confirmPassword && (
          <ErrorMessage message={formState.errors.confirmPassword.message} />
        )}
      </div>

      {/* Update Password Button */}
      <div className="mt-2 flex flex-col gap-4">
        {errorBox && <ErrorComponent message={errorBox} />}
        <CustomButton
          type="submit"
          disabled={
            formState.isLoading || !formState.isDirty || !formState.isValid
          }
        >
          {formState.isLoading ? "Updating ..." : "Update Password"}
        </CustomButton>
      </div>
    </form>
  );
}

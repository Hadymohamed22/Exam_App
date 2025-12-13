import { useFormContext } from "react-hook-form";
import AuthFormTitle from "../../_components/auth-form-title";
import { ForgetPassStepperData } from "../_types/forget-pass-stepper-data";
import { Label } from "@radix-ui/react-label";
import { CustomInput } from "@/components/shared/custom-input";
import ErrorMessage from "../../../../components/shared/error-message";
import { CustomButton } from "@/components/shared/custom-button";
import ErrorComponent from "../../../../components/shared/error-component";
import { useEffect, useState } from "react";

export default function NewPassword() {
  // Form
  const { formState, register } = useFormContext<ForgetPassStepperData>();
  
  // States
  // Specific case because state based on formState
  const [backendError, setBackendError] = useState(
    Boolean(formState.errors.root?.message)
  );

  // Effects
  useEffect(() => {
    const id = setTimeout(() => {
      setBackendError(false);
    }, 3000);

    return () => clearTimeout(id);
  }, [backendError]);

  return (
    <>
      {/* Auth form title */}
      <AuthFormTitle
        title="Create a New Password"
        description="Create a new strong password for your account."
      />

      {/* Inputs */}

      {/* Password */}
      <div className="password">
        <Label htmlFor="password">Password</Label>
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
      <div className="confirm-pass">
        <Label htmlFor="confirmPass">Confirm Password</Label>
        <CustomInput
          type="password"
          placeholder="*******"
          id="confirmPass"
          required={false}
          {...register("confirmNewPassword")}
          variant={formState.errors.confirmNewPassword && "destructive"}
        />
        {formState.errors.confirmNewPassword && (
          <ErrorMessage message={formState.errors.confirmNewPassword.message} />
        )}
      </div>

      {/* Error From Backend */}
      {backendError && (
        <ErrorComponent
          message={
            formState.errors.root!.message || "Failed to update password"
          }
        />
      )}

      {/* Set New Password Button */}
      <CustomButton
        type="submit"
        className="mt-6 w-full"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? "Please Wait ..." : "Reset Password"}
      </CustomButton>
    </>
  );
}

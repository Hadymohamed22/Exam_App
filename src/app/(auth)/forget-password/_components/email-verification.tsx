import { CustomButton } from "@/components/shared/custom-button";
import { CustomInput } from "@/components/shared/custom-input";
import { Label } from "@radix-ui/react-label";
import { MoveRight } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { ForgetPassStepperData } from "../_types/forget-pass-stepper-data";
import ErrorMessage from "../../../../components/shared/error-message";
import AuthFormTitle from "../../_components/auth-form-title";
import { handleNextStep } from "../_utils/handle-next-step";
import { handleEmailStep } from "../_utils/handle-email-step";
import { SetStateAction } from "react";
import { ForgetPassStepperSteps } from "../_types/forget-pass-stepper-steps";

export default function EmailVerification({
  setStep,
}: {
  setStep: React.Dispatch<SetStateAction<ForgetPassStepperSteps>>;
}) {
  // Form
  const { register, formState, setError, trigger, getValues } =
    useFormContext<ForgetPassStepperData>();

  return (
    <>
      {/* Auth Form Title */}
      <AuthFormTitle
        title="Forgot Password"
        description="Don’t worry, we will help you recover your account."
      />

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

      {/* Continue Button */}
      <CustomButton
        type="button"
        className="mt-6"
        disabled={formState.isValidating}
        onClick={async () => {
          try {
            const isValid = await handleNextStep("Email Verification", trigger);

            if (isValid) {
              try {
                await handleEmailStep(getValues("email"));
                setStep("Verify Reset Code");
              } catch (e) {
                setError("email", { message: (e as Error).message });
              }
            }
          } catch (e) {
            setError("email", { message: (e as Error).message });
          }
        }}
      >
        {formState.isValidating ? "Please Wait" : "Continue"}
        <MoveRight size={18} />
      </CustomButton>
    </>
  );
}

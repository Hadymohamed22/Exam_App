import { MoveLeft } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { ForgetPassStepperData } from "../_types/forget-pass-stepper-data";
import AuthFormTitle from "../../_components/auth-form-title";
import { CustomButton } from "@/components/shared/custom-button";
import { SetStateAction } from "react";
import { ForgetPassStepperSteps } from "../_types/forget-pass-stepper-steps";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import ResendCodeTimer from "./resend-code-timer";
import { getTime } from "../_utils/get-time";
import ErrorMessage from "../../../../components/shared/error-message";
import { handleNextStep } from "../_utils/handle-next-step";
import { handleCodeStep } from "../_utils/handle-code-step";

type VerifyResetCodeProps = {
  setStep: React.Dispatch<SetStateAction<ForgetPassStepperSteps>>;
};

export default function VerifyResetCode({ setStep }: VerifyResetCodeProps) {
  // Form
  const { getValues, control, resetField, formState, trigger, setError } =
    useFormContext<ForgetPassStepperData>();

  // Variables
  const start = getTime("startVerifyDate");
  const end = getTime("endVerifyDate");
  const timer = !start || !end ? 0 : end - start;

  return (
    <div className="verify-reset-code">
      {/* Previous Step Button */}
      <div
        className="prev-step size-10 border-2 border-gray-200 flex justify-center items-center duration-300 hover:bg-gray-50 cursor-pointer mb-10"
        onClick={() => {
          setStep("Email Verification");
          resetField("resetCode");
        }}
      >
        <MoveLeft className="text-gray-800" />
      </div>

      {/* Auth Form Title */}
      <AuthFormTitle
        title="Verify OTP"
        description={
          <>
            Please enter the 6-digits code we have sent to:
            <p className="text-gray-800">
              {getValues("email")}{" "}
              <span
                className="text-main duration-300 hover:text-blue-700 underline cursor-pointer font-medium"
                onClick={() => {
                  setStep("Email Verification");
                  resetField("resetCode");
                  sessionStorage.setItem("startVerifyDate", String(new Date()));
                  sessionStorage.setItem(
                    "emailVerification",
                    getValues("email")
                  );
                }}
              >
                Edit
              </span>
            </p>
          </>
        }
      />

      {/* OTP Input */}
      <div className="otp-input-container flex justify-center">
        <Controller
          control={control}
          name="resetCode"
          render={({ field }) => (
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={field.value}
              onChange={field.onChange}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        />
      </div>
      {formState.errors.resetCode && (
        <ErrorMessage
          message={formState.errors.resetCode.message}
          className="text-center mt-1"
        />
      )}

      {/* Resend Code */}
      <p className="mt-6 text-sm font-medium text-gray-500 text-center">
        You can request another code in:{" "}
        {<ResendCodeTimer seconds={timer < 0 ? 0 : timer} />}
      </p>

      {/* Verify Code Button */}
      <CustomButton
        type="button"
        className="mt-6 w-full"
        disabled={formState.isValidating}
        onClick={async () => {
          try {
            const isValid = await handleNextStep("Verify Reset Code", trigger);

            if (isValid) {
              try {
                await handleCodeStep(getValues("resetCode"));

                setStep("New Password");
              } catch (e) {
                setError("resetCode", { message: (e as Error).message });
              }
            }
          } catch (e) {
            setError("resetCode", { message: (e as Error).message });
          }
        }}
      >
        {formState.isValidating ? "Verifying ..." : "Verify Code"}
      </CustomButton>
    </div>
  );
}

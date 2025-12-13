import { UseFormTrigger } from "react-hook-form";
import { ForgetPassStepperData } from "../_types/forget-pass-stepper-data";
import { ForgetPassStepperSteps } from "../_types/forget-pass-stepper-steps";

export const handleNextStep = async (
  currentStep: ForgetPassStepperSteps,
  trigger: UseFormTrigger<ForgetPassStepperData>
) => {
  let fieldsToValidate: (keyof ForgetPassStepperData)[] = [];

  if (currentStep === "Email Verification") {
    fieldsToValidate = ["email"];
  } else if (currentStep === "Verify Reset Code") {
    fieldsToValidate = ["resetCode"];
  } else if (currentStep === "New Password") {
    fieldsToValidate = ["newPassword", "confirmNewPassword"];
  }

  const isValid = await trigger(fieldsToValidate);

  return isValid;
};

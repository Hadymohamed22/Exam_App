"use client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import EmailVerification from "./email-verification";
import { ForgetPassStepperData } from "../_types/forget-pass-stepper-data";
import { useState } from "react";
import { ForgetPassStepperSteps } from "../_types/forget-pass-stepper-steps";
import VerifyResetCode from "./verify-reset-code";
import NewPassword from "./new-password";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetPassStepperSchema } from "@/lib/schemas/auth.schema";

export default function ForgetPassStepper() {
  // Navigation
  const router = useRouter();

  // States
  const [currentStep, setCurrentStep] =
    useState<ForgetPassStepperSteps>("Email Verification");

  // Form
  const form = useForm<ForgetPassStepperData>({
    defaultValues: {
      email: "",
      resetCode: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    mode: "all",
    resolver: zodResolver(ForgetPassStepperSchema),
  });

  // Submit Handler
  const onSubmit: SubmitHandler<ForgetPassStepperData> = async (values) => {
    console.log("submit ...");

    if (currentStep === "New Password") {
      try {
        const res = await fetch("/api/reset-password", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            newPassword: values.newPassword,
            confirmNewPassword: values.confirmNewPassword,
          }),
        });

        const payload: ResetPassAPIResponse = await res.json();

        if ("code" in payload) {
          form.setError("root", { message: payload.message });
          return;
        }

        toast.success(payload.message);
        sessionStorage.clear();
        router.push("/login");
      } catch (e) {
        form.setError("root", { message: (e as Error).message });
        return;
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Email Verification */}
        {currentStep === "Email Verification" && (
          <EmailVerification setStep={setCurrentStep} />
        )}

        {/* Verify Reset Code */}
        {currentStep === "Verify Reset Code" && (
          <VerifyResetCode setStep={setCurrentStep} />
        )}

        {currentStep === "New Password" && <NewPassword />}
      </form>
    </FormProvider>
  );
}

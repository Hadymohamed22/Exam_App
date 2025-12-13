import "client-only";
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ForgetPassStepperData } from "../_types/forget-pass-stepper-data";
import { toast } from "sonner";

export default function ResendCodeTimer({ seconds }: { seconds: number }) {
  // States
  const [time, setTime] = useState(seconds);
  const [canResend, setCanResend] = useState(false);

  // Refs
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Form
  const { getValues, setError } = useFormContext<ForgetPassStepperData>();

  // Functions
  const startTimer = (ms: number) => {
    setTime(ms);
    setCanResend(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTime((prev) => {

        if (prev <= 1000) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setCanResend(true);

          return 0;
        }

        return prev - 1000;
      });
    }, 1000);
  };

  const handleResend = async () => {
    const res = await fetch("/api/forget-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: getValues("email") }),
    });

    const payload: EmailVerificationAPIResponse = await res.json();

    if ("code" in payload) {
      return setError("email", { message: payload.message });
    }

    const now = Date.now();
    sessionStorage.setItem("startVerifyDate", String(new Date(now)));
    sessionStorage.setItem("endVerifyDate", String(new Date(now + 60 * 1000)));

    startTimer(60 * 1000);
    toast.success("Code is send again");
  };

  // Effects
  useEffect(() => {
    startTimer(seconds);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [seconds]);

  return (
    <>
      {canResend ? (
        <span
          className="text-main duration-300 hover:text-blue-700 cursor-pointer hover:underline"
          onClick={handleResend}
        >
          Resend
        </span>
      ) : (
        <span className="timer">{Math.ceil(time / 1000)}s</span>
      )}
    </>
  );
}

import Link from "next/link";
import ForgetPassStepper from "./_components/forget-pass-stepper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description:
    "Reset your Exam App account password. Enter your email to receive secure password reset instructions and regain account access.",
  openGraph: {
    title: "Forgot Password | Exam App",
    description:
      "Easily reset your Exam App password. Receive instructions to restore account access quickly and securely.",
    url: "/forget-password",
    type: "website",
  },
  keywords: [
    "forgot password",
    "reset password",
    "Exam App",
    "account recovery",
    "password assistance",
    "student"
  ],
};

export default function Page() {
  return (
    <div className="container flex flex-col gap-4 mx-auto">
      {/* Forget Password Stepper */}
      <ForgetPassStepper />

      <p className="text-gray-500 text-sm font-medium text-center mt-9">
        Don’t have an account?{" "}
        <Link href="/register" className="text-main duration-300 hover:text-blue-700">
          Create yours
        </Link>
      </p>
    </div>
  );
}

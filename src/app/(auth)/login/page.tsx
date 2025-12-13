import Link from "next/link";
import AuthFormTitle from "../_components/auth-form-title";
import LoginForm from "./_components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Exam App account to access practice exams, track results, and more.",
  openGraph: {
    title: "Login | Exam App",
    description: "Access your Exam App account to start practicing exams and monitoring your progress.",
    url: "/login",
    type: "website",
  },
  keywords: ["login", "sign in", "exam App", "student", "education", "practice exams"]
};


export default function Page() {
  return (
    <div className="container flex flex-col gap-4 mx-auto">
      {/* Auth Form Title */}
      <AuthFormTitle title="login" />

      {/* Login Form */}
      <LoginForm />

      {/* Create Your Account */}
      <p className="text-gray-500 text-sm font-medium text-center mt-9">
        Don’t have an account?{" "}
        <Link href="/register" className="text-main duration-300 hover:text-blue-700">
          Create yours
        </Link>
      </p>
    </div>
  );
}

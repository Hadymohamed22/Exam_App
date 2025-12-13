import Link from "next/link";
import AuthFormTitle from "../_components/auth-form-title";
import RegisterForm from "./_components/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account to access the Exam App. Register with your details and get started solving exams.",
  openGraph: {
    title: "Register | Exam App",
    description: "Sign up for your Exam App account and unlock access to practice exams, results, and more.",
    url: "/register",
    type: "website",
  },
  keywords: ["register", "sign up", "exam App", "create account", "student", "education"]
};

export default function Page() {
  return (
    <div className="container flex flex-col gap-4 mx-auto">
      {/* Auth Form Title */}
      <AuthFormTitle title="Create Account" />

      {/* Register Form */}
      <RegisterForm />

      {/* Login Link */}
      <p className="text-gray-500 text-sm font-medium text-center mt-9">
        Already have an account?{" "}
        <Link href="/login" className="text-main duration-300 hover:text-blue-700">
          Login
        </Link>
      </p>
    </div>
  );
}


import Header from "./_components/header";
import { GraduationCap } from "lucide-react";
import Diplomas from "@/components/features/diploma/diplomas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Welcome to your Exam App dashboard manage your account, explore programming exams, and track your diploma achievements in one place.',
  openGraph: {
    title: "Dashboard | Exam App",
    description:
      "Access your personalized dashboard on Exam App. Manage account settings, attempt diverse programming exams, and view your collected diplomas.",
    images: ['/assets/images/logo.png'],
    type: "website",
  },
  keywords: [
    'Exam App',
    'Dashboard',
    'Programming Exams',
    'Diplomas',
    'Account Management',
    'Online Learning',
    'Coding Skills'
  ],
};

export default function Page() {
  return (
    <>
    {/* Header */}
      <Header
        icon={
          <GraduationCap className="size-9 md:size-11" absoluteStrokeWidth />
        }
        text="Diplomas"
      />

      {/* Main Content */}
      <div className="main-content my-6">
        <div className="container mx-auto">
          {/* Diplomas */}
          <Diplomas />
        </div>
      </div>
    </>
  );
}

import { UserRound } from "lucide-react";
import Header from "../_components/header";
import AccountSettingsContent from "./_components/account-settings-content";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings",
  description:
    "Manage your account settings on Exam App. Update your profile information, secure your account, and configure personalized preferences.",
  openGraph: {
    title: "Account Settings | Exam App",
    description:
      "Customize your Exam App experience by updating your account details, managing your profile, and setting your preferences for programming exams.",
    images: ["/assets/images/logo.png"],
    type: "website",
  },
  keywords: [
    "Account Settings",
    "Profile Management",
    "Exam App",
    "User Preferences",
    "Account Security"
  ],
};

export default async function Page() {
  // Variables
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Header */}
      <Header
        icon={<UserRound className="size-8 md:size-11" absoluteStrokeWidth />}
        text="Exams"
        prevBtn
      />

      {/* Account Setting Content */}
      <AccountSettingsContent user={session?.user} />
    </>
  );
}

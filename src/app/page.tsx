import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Exam App – your platform to practice and excel in programming with curated exams across various tech fields. Sharpen your coding skills, track your progress, and earn digital diplomas for your achievements.",
  openGraph: {
    title: "Home | Exam App",
    description:
      "Boost your programming abilities with Exam App. Explore and attempt a variety of coding exams, monitor your progress, and showcase your earned diplomas all in one place.",
    images: ["/assets/images/logo.png"],
    type: "website",
  },
  keywords: [
    "Exam App",
    "Programming Exams",
    "Coding Practice",
    "Online Assessment",
    "Tech Skills",
    "Digital Diploma",
    "Developer Learning"
  ],
};

export default function Home() {
  return <h1 className="my-5 text-center font-bold">hi in exam app</h1>;
}

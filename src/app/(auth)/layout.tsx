import ExamAppDetails from "./_components/exam-app-details";
import ExamAppLogo from "../../components/shared/exam-app-logo";

type LayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* Left Part */}
        <div className="overflow-hidden exam-app-info justify-center items-center relative before:absolute before:size-96 2xl:before:size-[25.125rem] before:bg-blue-400 before:-bottom-40 before:left-3 before:rounded-full before:z-10 after:absolute after:size-96 2xl:after:size-[25.125rem] after:bg-blue-400 after:top-24 after:-right-7 after:rounded-full after:z-10 hidden md:flex">
          <div className="container mx-auto relative z-20 bg-panel backdrop-blur-2xl md:p-10 lg:p-12">

            {/* Exam App Logo */}
            <ExamAppLogo iconWidth={40} />

            {/* Exam App Details */}
            <ExamAppDetails />
          </div>
        </div>

        {/* Form Content */}
        <div className="page flex justify-center items-center p-5 md:p-10 lg:p-12">
          {children}
        </div>
      </main>
    </>
  );
}

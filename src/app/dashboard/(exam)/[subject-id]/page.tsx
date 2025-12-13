import { BookOpenCheck } from "lucide-react";
import Header from "../../_components/header";
import { GetExamsOnSubject } from "@/lib/api/get-exams";
import ExamSummary from "./_components/exam-summary";
import ErrorMessage from "@/components/shared/error-message";
import { subjectsMap } from "@/lib/constants/subjects-map.constant";
import { Metadata } from "next";

type PageParamsType = {
  params: {
    "subject-id": string;
  };
};

export function generateMetadata({ params }: PageParamsType): Metadata {
  const title = subjectsMap[params["subject-id"]] ?? "Exam Subject";
  const description = `Browse available exams, quizzes, and assessments for ${title}. Test your skills, review questions, and improve your knowledge in ${title} with Exam App.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ["/assets/images/logo.png"],
      type: "website",
    },
    keywords: [
      title,
      "Exams",
      "Quizzes",
      "Online Assessment",
      "Exam App",
      "Programming Exams",
      "Subject Exams"
    ],
  };
}

export function generateStaticParams(){

  return [{'subject-id': '670070a830a3c3c1944a9c63'}];
}

export default async function Page({ params }: PageParamsType) {
  const { data, error, isEmpty } = await GetExamsOnSubject(
    params["subject-id"]
  );
  return (
    <>
      {/* Header */}
      <Header
        icon={<BookOpenCheck className="size-8 md:size-11" />}
        text="Exams"
        prevBtn
      />

      {/* Page Content */}
      <div className="content p-4 md:p-6 flex flex-col gap-4 bg-white min-h-[70vh] mt-6">
        {/* Error Message */}
        {error && <ErrorMessage message={error}/>}

        {/* Is Empty Message */}
        {isEmpty ? (
          <h5 className="text-xl md:text-2xl text-main font-medium">
            No Exams Found in this subject :(
          </h5>
        ) : (

          // Exams
          data?.map((exam, i) => (
            <>

              {/* Exam Summary Box */}
              <ExamSummary
                key={exam._id}
                title={exam.title}
                numberOfQuestions={exam.numberOfQuestions}
                duration={exam.duration}
                _id={exam._id}
                subjectId={params["subject-id"]}
              />

              {/* End Of List Message */}
              {i === data.length - 1 && (
                <p className="text-xs md:text-sm text-gray-600 text-center">
                  End of list
                </p>
              )}
            </>
          ))
        )}
      </div>
    </>
  );
}

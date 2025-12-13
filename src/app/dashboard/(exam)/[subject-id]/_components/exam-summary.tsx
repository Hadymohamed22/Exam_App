"use client";
import { Exam } from "@/lib/types/exam";
import { Timer } from "lucide-react";
import Link from "next/link";

type ExamSummaryProps = { subjectId: string } & Pick<
  Exam,
  "_id" | "title" | "duration" | "numberOfQuestions"
>;

export default function ExamSummary({
  subjectId,
  _id,
  title,
  duration,
  numberOfQuestions,
}: ExamSummaryProps) {
  return (
    // Exam Link Box
    <Link
      className="exam-summary-box bg-blue-50 p-4 flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-between border border-transparent duration-300 hover:border-main hover:bg-blue-100 cursor-pointer"
      href={`/dashboard/${subjectId}/${_id}`}
      onClick={() =>
        sessionStorage.setItem("startExamAt", String(new Date().getTime()))
      }
    >
      {/* Title And Number Of Questions */}
      <div className="title-questions flex sm:flex-col items-center justify-between w-full sm:w-fit">

        {/* Title */}
        <h5 className="text-lg lg:text-xl font-semibold text-main">{title}</h5>

        {/* Number Of Questions */}
        <p className="text-xs md:text-sm text-gray-500">
          {numberOfQuestions} Questions
        </p>
      </div>

      {/* Exam Duration */}
      <p className="duration flex items-center gap-1.5">
        <Timer className="text-gray-400 size-4 md:size-6" />
        <span className="text-gray-800 font-medium text-xs md:text-sm">
          Duration: <span className="font-regular">{duration} minutes</span>
        </span>
      </p>
    </Link>
  );
}

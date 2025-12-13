"use client";

import { useMemo, useState } from "react";
import { ExamID } from "../_types/exam-id";
import useQuestions from "@/hooks/use-questions";
import ErrorMessage from "@/components/shared/error-message";
import LoadingComponent from "@/components/shared/loading-component";
import QuestionComponent from "./question-component";
import Header from "@/app/dashboard/_components/header";
import { CircleQuestionMark } from "lucide-react";
import { AnswersDataType, Question } from "@/lib/types/exam";
import { useForm } from "react-hook-form";

type QuestionsPropsType = {
  examId: ExamID;
};

export default function Questions({ examId }: QuestionsPropsType) {
  // State
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Hooks
  const { questions, error, isError, isLoading } = useQuestions({ examId });

  // Form
  const form = useForm<AnswersDataType>({
    defaultValues: {
      answers: [],
    },
  });

  // Variables
  const question: Question | undefined = useMemo(
    () => questions?.[currentQuestion],
    [questions, currentQuestion]
  );

  return (
    <>
      {/* Header */}
      <Header
        icon={<CircleQuestionMark className="size-8 md:size-11" />}
        text={`[${question?.exam.title || "Exam"}] Questions`}
        prevBtn
      />

      {/* Error Message */}
      {isError && <ErrorMessage message={error?.message} />}

      {isLoading ? (
        // Loading
        <LoadingComponent />
      ) : (
        // Question Component
        <QuestionComponent
          totalQuestions={questions?.length || 0}
          setCurrentIndex={setCurrentQuestion}
          form={form}
          currentIndex={currentQuestion}
          examId={examId}
          setNext={setCurrentQuestion}
          setPrev={setCurrentQuestion}
          question={question}
        />
      )}
    </>
  );
}

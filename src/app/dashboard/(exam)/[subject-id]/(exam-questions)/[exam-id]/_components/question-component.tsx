"use client";
import {
  ChevronLeft,
  ChevronRight,
  FolderSearch,
  RotateCcw,
} from "lucide-react";
import React, { SetStateAction, useState } from "react";
import ProgressBar from "./progress-bar";
import ExamTitle from "./exam-title";
import ExamAnswers from "./exam-answers";
import { ExamID } from "../_types/exam-id";
import { AnswersDataType, Question } from "@/lib/types/exam";
import { CustomButton } from "@/components/shared/custom-button";
import ExamTimer from "./exam-timer";
import { UseFormReturn } from "react-hook-form";
import ExamResult from "./exam-result";
import Link from "next/link";

type QuestionComponentPropsType = {
  examId: ExamID;
  currentIndex: number;
  setPrev: React.Dispatch<SetStateAction<number>>;
  setNext: React.Dispatch<SetStateAction<number>>;
  question: Question | undefined;
  form: UseFormReturn<AnswersDataType>;
  setCurrentIndex: React.Dispatch<SetStateAction<number>>;
  totalQuestions: number;
};

export default function QuestionComponent({
  examId,
  currentIndex,
  setCurrentIndex,
  setPrev,
  setNext,
  question,
  form,
  totalQuestions,
}: QuestionComponentPropsType) {
  // States
  const [examTimeEnd, setExamTimeEnd] = useState<boolean>(false);

  // Variables
  const answers = form.watch("answers");
  const onSubmit = () => console.log(form.getValues("answers"));

  // Function
  const handleSelectedValue = (selectedValue: string) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentIndex] = {
      questionId: question!._id,
      correct: selectedValue,
    };

    form.setValue("answers", updatedAnswers, { shouldDirty: true });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Question */}
      <div className="question flex flex-col gap-2.5">
        {/* Question Content */}
        <div className="question-content mt-6 flex flex-col gap-4 p-4 md:p-6 bg-white">
          {/* Progress Bar */}
          <ProgressBar
            current={currentIndex}
            end={totalQuestions - 1}
            exam_id={examId}
            subject_id="670037f6728c92b7fdf434fc"
          />

          {/* Question Or Result */}
          {!examTimeEnd ? (
            <>
              {/* Exam Title */}
              <ExamTitle
                title={question?.question || "Exam"}
                className="mt-3 md:mt-6"
              />

              {/* Exam Answers */}
              <ExamAnswers
                answers={question?.answers}
                questionType={question?.type}
                handleSelect={handleSelectedValue}
                questionID={question?._id}
                currentValue={answers[currentIndex]?.correct}
              />
            </>
          ) : (
            // Exam Result
            <ExamResult
              answers={(answers || []).filter(Boolean)}
              total={totalQuestions - 1}
            />
          )}
        </div>

        {!examTimeEnd ? (
          <>
            {/* Question Footer */}
            <div className="question-footer flex items-center mt-8 gap-4">
              {/* Previous Button */}
              <CustomButton
                disabled={currentIndex === 0}
                onClick={() => currentIndex > 0 && setPrev(currentIndex - 1)}
                className="flex-grow select-none"
              >
                <ChevronLeft size={18} />
                <span>Previous</span>
              </CustomButton>

              {/* Timer */}
              <ExamTimer
                duration={question?.exam.duration}
                setExamTimeEnd={setExamTimeEnd}
              />

              {/* Next Or Finish Button */}
              {currentIndex !== totalQuestions - 1 ? (
                <CustomButton
                  onClick={() => setNext(currentIndex + 1)}
                  className="flex-grow select-none"
                  disabled={form.formState.isSubmitting}
                >
                  <span>Next</span>
                  <ChevronRight size={18} />
                </CustomButton>
              ) : (
                <CustomButton
                  className="flex-grow select-none"
                  onClick={() => setExamTimeEnd(true)}
                >
                  Finish
                </CustomButton>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Result Footer */}
            <div className="result-footer flex items-center mt-8 gap-4">
              {/* Restart Button */}
              <CustomButton
                variant={"secondary"}
                className="select-none grow"
                onClick={() => {
                  setExamTimeEnd(false);
                  setCurrentIndex(0);
                  form.reset()
                }}
              >
                <RotateCcw size={18} />
                <span>Restart</span>
              </CustomButton>

              {/* Explore Button */}
              <Link
                href="/dashboard/670037f6728c92b7fdf434fc"
                className="grow select-none"
              >
                <CustomButton className="w-full">
                  <FolderSearch size={18} />
                  <span>Explore</span>
                </CustomButton>
              </Link>
            </div>
          </>
        )}
      </div>
    </form>
  );
}

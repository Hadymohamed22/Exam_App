import z from "zod";
import { AnswersData } from "./../schemas/exam.schema";
// Exams API Response
export type Exam = {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
};
export type GetExamsErrorResponse = {
  message: string;
  code: number;
};
export type GetExamsSuccessResponse = {
  message: string;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  exams: Exam[];
};
export type GetExamsAPIResponse =
  | GetExamsErrorResponse
  | GetExamsSuccessResponse;

// Question API Response
export type QuestionType = "single_choice" | "true_false";
export type Answer = {
  answer: string;
  key: string;
};
export type Question = {
  answers: Answer[];
  type: QuestionType;
  _id: string;
  question: string;
  correct: string;
  subject: null;
  exam: Exam;
  createdAt: string;
};
export type QuestionsErrorResponse = {
  code: number;
};
export type QuestionsSuccessResponse = {
  questions: Question[];
};
export type GetQuestionsAPIResponse = { message: string } & (
  | QuestionsSuccessResponse
  | QuestionsErrorResponse
);

// Answers
export type AnswersDataType = z.infer<typeof AnswersData>;

// Question Result
export type CorrectQuestion = {
  QID: string;
  Question: string;
  correctAnswer: string;
  answers: {};
};

export type InCorrectQuestion = {
  QID: string;
  Question: string;
  inCorrectAnswer: string;
  correctAnswer: string;
  answers: {};
};

export type QuestionResult = {
  message: string;
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: InCorrectQuestion[];
  correctQuestions: CorrectQuestion[];
};

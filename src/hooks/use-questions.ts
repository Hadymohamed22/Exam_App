import { getQuestionService } from "@/lib/services/exams.service";
import { GetQuestionsAPIResponse, Question } from "@/lib/types/exam";
import { useQuery } from "@tanstack/react-query";

type useQuestionsPropsType = {
  examId: string;
};

export default function useQuestions({ examId }: useQuestionsPropsType) {
  const { isError, isLoading, error, data } = useQuery<GetQuestionsAPIResponse>(
    {
      queryKey: [`questions to examID : ${examId}`],
      queryFn: () => getQuestionService(examId),
    }
  );
  const questions: Question[] | undefined = (() => {
    if (data) {
      if ("code" in data) return undefined;

      return data.questions;
    }
  })();
  return { isError, isLoading, error, questions };
}

import { getExamResult } from "@/lib/services/exams.service";
import { QuestionResult } from "@/lib/types/exam";
import { useEffect, useState } from "react";

type UseQuestionsResultReturn = {
  data:
    | {
        wrongQuestionData: QuestionResult["WrongQuestions"];
        numOfWrongQuestions: number;
        numOfCorrectQuestions: number;
      }
    | undefined;
  error: string | null;
  isLoading: boolean;
};

export default function useQuestionsResult(
  answers: Array<{ questionId: string; correct: string } | undefined>
): UseQuestionsResultReturn {
  // States
  const [data, setData] = useState<UseQuestionsResultReturn["data"]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Effects
  useEffect(() => {
    const fetchResult = async (
      answers: Array<{ questionId: string; correct: string } | undefined>
    ) => {
      // Skip call if there are no answers yet
      const presentAnswers = answers.filter(
        (answer): answer is { questionId: string; correct: string } =>
          Boolean(answer && answer.questionId && answer.correct)
      );
      if (presentAnswers.length === 0) return;

      setIsLoading(true);
      setError(null);

      try {
        const validAnswers = presentAnswers.map((answer) => {
          // If the value is composite (e.g., "0-A-<qid>"), extract the key; otherwise use as-is.
          const parts = answer.correct.split("-");
          const key = parts.length >= 2 ? parts[1] : answer.correct;

          return {
            questionId: answer.questionId,
            correct: key,
          };
        });
        const payload: QuestionResult = await getExamResult(validAnswers);

        setData({
          wrongQuestionData: payload.WrongQuestions,
          numOfWrongQuestions: payload.wrong,
          numOfCorrectQuestions: payload.correct,
        });
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResult(answers);
  }, [answers]);

  return { data, isLoading, error };
}

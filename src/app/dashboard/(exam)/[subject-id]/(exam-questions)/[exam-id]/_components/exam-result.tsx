import useQuestionsResult from "@/hooks/use-questions-result";
import QuestionResult from "./question-result";
import ResultGraph from "./result-graph";
import LoadingComponent from "@/components/shared/loading-component";
import ErrorMessage from "@/components/shared/error-message";
import { questionsMapByKey } from "../_constants/questions-map";

type ExamResultPropsType = {
  answers: Array<{ questionId: string; correct: string } | undefined>;
  total: number;
};

export default function ExamResult({ answers, total }: ExamResultPropsType) {
  // Hooks
  const { data, error, isLoading } = useQuestionsResult(answers);

  // Variables
  const graphData = [
    {
      name: "correct",
      count: data?.numOfCorrectQuestions,
    },
    {
      name: "incorrect",
      count: total - (data?.numOfCorrectQuestions || 0),
    },
  ];

  return (
    <div>
      {isLoading && <LoadingComponent />}

      {!error ? (
        <>
          <h4 className="text-xl md:text-2xl font-semibold text-main mt-6 mb-4">
            Result :
          </h4>
          <div className="exam-result overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Result Graph */}
            <ResultGraph graphData={graphData} />

            {/* Wrong Questions */}
            <div className="wrong-questions border border-gray-100 p-2 col-span-1 lg:col-span-2">
              <div className="flex flex-col gap-4">
                {/* Question Result */}
                {data?.wrongQuestionData.map((question) => (
                  <QuestionResult
                    key={question.QID}
                    title={question.Question}
                    correctAnswer={
                      questionsMapByKey[question.QID][question.correctAnswer]
                    }
                    inCorrectAnswer={
                      questionsMapByKey[question.QID][question.inCorrectAnswer]
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <ErrorMessage message={error} />
      )}
    </div>
  );
}

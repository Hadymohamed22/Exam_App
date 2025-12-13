import Questions from "./_components/questions";
import { ExamID } from "./_types/exam-id";

type PagePropsType = {
  params: {
    "exam-id": ExamID;
  };
};

export default function Page({ params }: PagePropsType) {
  return <Questions examId={params["exam-id"]} />;
}

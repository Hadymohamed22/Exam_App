import CorrectAnswer from "./correct-answer";
import InCorrectAnswer from "./incorrect-answer";

type QuestionResultPropsType = {
  title: string;
  correctAnswer: string;
  inCorrectAnswer: string;
};

export default function QuestionResult({
  title,
  correctAnswer,
  inCorrectAnswer,
}: QuestionResultPropsType) {
  
  return (
    <div className="question-result-box flex flex-col gap-2.5">
      {/* Title */}
      <h5 className="text-base md:text-lg font-semibold text-main">{title}</h5>

      {/* Incorrect Answer */}
      <InCorrectAnswer inCorrectAnswer={inCorrectAnswer} />

      {/* Correct Answer */}
      <CorrectAnswer correctAnswer={correctAnswer} />
    </div>
  );
}

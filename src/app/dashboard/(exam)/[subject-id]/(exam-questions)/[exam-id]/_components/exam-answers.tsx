import { RadioGroup } from "@radix-ui/react-radio-group";
import RadioField from "./radio-field";
import { Answer, QuestionType } from "@/lib/types/exam";

type ExamAnswersPropsType = {
  questionType?: QuestionType;
  answers?: Answer[];
  handleSelect: (value: string) => void;
  questionID?: string;
  currentValue?: string;
};

export default function ExamAnswers({
  questionType,
  answers,
  handleSelect,
  questionID,
  currentValue,
}: ExamAnswersPropsType) {

  return (
    <>
      {questionType === "single_choice" && (
        // Radio Group
        <RadioGroup
          name={`question-${questionID}`}
          className="flex flex-col gap-2.5"
          onValueChange={handleSelect}
          value={currentValue}
        >
          {/* Answers Map */}
          {answers?.map((answer, i) => (

            // Radio Field
            <RadioField
              value={`${i}-${answer.key}-${questionID}`}
              key={i}
              questionID={questionID}
              answerKey={answer.key}
              index={i}
              answerText={answer.answer}
            />
          ))}
        </RadioGroup>
      )}
    </>
  );
}

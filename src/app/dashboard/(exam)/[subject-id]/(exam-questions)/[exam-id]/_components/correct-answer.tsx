import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type CorrectAnswerPropsType = {
  correctAnswer: string;
};

export default function CorrectAnswer({
  correctAnswer,
}: CorrectAnswerPropsType) {

  return (
    <div className="correct-answer">
      {/* Radio Group0 */}
      <RadioGroup>

        {/* Field */}
        <Field orientation="horizontal" className="bg-emerald-50 gap-2.5 px-4">

          {/* Radio Group Item */}
          <RadioGroupItem
            value={correctAnswer}
            id={`${correctAnswer}`}
            className="fill-emerald-600 text-emerald-600"
            variant={"success"}
            checked={false}
          />

          {/* Field Label */}
          <FieldLabel
            htmlFor={`${correctAnswer}`}
            className="font-normal text-gray-800 py-4"
          >
            {correctAnswer}
          </FieldLabel>
        </Field>
      </RadioGroup>
    </div>
  );
}

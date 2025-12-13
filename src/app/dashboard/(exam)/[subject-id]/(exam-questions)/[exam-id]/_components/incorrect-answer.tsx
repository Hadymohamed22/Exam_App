import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type InCorrectAnswerPropsType = {
  inCorrectAnswer: string;
};

export default function InCorrectAnswer({
  inCorrectAnswer,
}: InCorrectAnswerPropsType) {
  return (
    <div className="in-correct-answer">
      {/* Radio Group */}
      <RadioGroup>

        {/* Field */}
        <Field orientation="horizontal" className="bg-red-50 gap-2.5 px-4">

          {/* Radio Group Item */}
          <RadioGroupItem
            value={inCorrectAnswer}
            id={`${inCorrectAnswer}`}
            className="fill-red-600 text-red-600"
            variant={"wrong"}
            checked
          />

          {/* Field Label */}
          <FieldLabel
            htmlFor={`${inCorrectAnswer}`}
            className="font-normal text-gray-800 py-4"
          >
            {inCorrectAnswer}
          </FieldLabel>
        </Field>
      </RadioGroup>
    </div>
  );
}

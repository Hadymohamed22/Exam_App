import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroupItem } from "@/components/ui/radio-group";

type RadioFieldPropsType = {
  value: string;
  questionID?: string;
  answerKey: string;
  index: number;
  answerText: string;
};

export default function RadioField({
  value,
  questionID,
  answerKey,
  index,
  answerText,
}: RadioFieldPropsType) {

  return (
    <Field
      orientation="horizontal"
      className="bg-gray-50 duration-300 hover:bg-gray-100 gap-2.5 cursor-pointer px-4"
    >
      {/* Radio Group Item */}
      <RadioGroupItem
        value={value}
        id={`${questionID}-${answerKey}-${index}`}
        className="text-main"
      />

      {/* Field Label */}
      <FieldLabel
        htmlFor={`${questionID}-${answerKey}-${index}`}
        className="font-normal text-gray-800 cursor-pointer py-4 text-sm md:text-base overflow-auto"
      >
        {answerText}
      </FieldLabel>
    </Field>
  );
}

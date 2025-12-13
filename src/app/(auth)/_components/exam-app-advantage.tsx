type ExamAppAdvantageProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function ExamAppAdvantage({
  title,
  description,
  icon,
}: ExamAppAdvantageProps) {

  return (
    <div className="flex gap-5">
      {/* Icon */}
      <div className="icon border-2 border-main text-main size-9 shrink-0 flex justify-center items-center">
        {icon}
      </div>

      {/* Advantage Title And Description */}
      <div className="info">

        {/* Title */}
        <h4 className="text-main text-lg md:text-xl mb-2 font-semibold">
          {title}
        </h4>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

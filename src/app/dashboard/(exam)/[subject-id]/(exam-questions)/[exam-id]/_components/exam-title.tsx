type ExamTitlePropsType = { title?: string; className?: string };

export default function ExamTitle({ title, className }: ExamTitlePropsType) {
  return (
    <h4
      className={`text-lg md:text-xl lg:text-2xl text-main font-semibold ${className}`}
    >
      {title}
    </h4>
  );
}

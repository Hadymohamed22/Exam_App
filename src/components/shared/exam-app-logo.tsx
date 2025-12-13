import { FolderCode } from "lucide-react";

type ExamAppLogo = {
  iconWidth: number;
};

export default function ExamAppLogo({ iconWidth }: ExamAppLogo) {
  return (
    <div className="logo flex items-center gap-2.5 text-main font-semibold">
      <FolderCode
        size={iconWidth}
        className={`
          size-[${iconWidth - 16}px]
          md:size-[${iconWidth - 8}px]
          lg:size-[${iconWidth}px]
          `}
      />
      <h4 className="text-lg md:text-xl">Exam App</h4>
    </div>
  );
}

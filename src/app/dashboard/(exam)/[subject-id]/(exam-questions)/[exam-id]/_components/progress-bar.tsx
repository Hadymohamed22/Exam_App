import { subjects } from "@/app/dashboard/_constants/subjects";
import { SubjectID } from "../_types/subject-id";
import { ExamID } from "../_types/exam-id";
import { exams } from "@/app/dashboard/_constants/exams";
import { Progress } from "@/components/ui/progress";

type ProgressBarPropsType = {
  end?: number;
  current: number;
  subject_id: SubjectID;
  exam_id: ExamID;
};

export default function ProgressBar({
  subject_id,
  exam_id,
  end,
  current,
}: ProgressBarPropsType) {
  return (
    <div className="progress-bar">
      {/* Question Info */}
      <div className="question-info flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-0">

        {/* Subject And Exam Name  */}
        <p className="text-xs md:text-sm text-gray-500">
          <span>{subjects[subject_id]}</span> - <span>{exams[exam_id]}</span>
        </p>

        {/* Number Of Questions */}
        <p className="text-xs md:text-sm text-gray-500">
          Questions <span className="font-bold text-main">{current}</span> of{" "}
          <span>{end}</span>
        </p>
      </div>

      {/* Progress Bar */}
      <Progress value={Number(((current / (end || 40)) * 100).toFixed(0))} />
    </div>
  );
}

import { BookOpenCheck, Brain, RectangleEllipsis } from "lucide-react";
import ExamAppAdvantage from "./exam-app-advantage";

export default function ExamAppDetails() {
  return (
    <div className="details my-32">

      {/* Title */}
      <h1 className="text-gray-800 font-bold font-inter mb-14 text-3xl">
        Empower your learning journey with our smart exam platform.
      </h1>

      {/* Exam App Advantages */}
      <div className="exam-app-advantages flex flex-col items-start gap-9">
        {/* Exam Advantage One */}
        <ExamAppAdvantage
          title="Tailored Diplomas"
          description="Choose from specialized tracks like Frontend, Backend, and Mobile Development."
          icon={<Brain size={24} />}
        />

        {/* Exam Advantage Two */}
        <ExamAppAdvantage
          title="Focused Exams"
          description="Access topic-specific tests including HTML, CSS, JavaScript, and more."
          icon={<BookOpenCheck size={24} />}
        />

        {/* Exam Advantage Three */}
        <ExamAppAdvantage
          title="Smart Multi-Step Forms"
          description="Choose from specialized tracks like Frontend, Backend, and Mobile Development."
          icon={<RectangleEllipsis size={24} />}
        />
      </div>
    </div>
  );
}

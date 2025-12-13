import { CircleX } from "lucide-react";

type ErrorComponentProps = {
  message: string;
};

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <div className="error-box mt-6 p-2.5 border border-red-600 text-red-600 bg-red-50 text-center relative">
      <div className="icon absolute -top-2 left-1/2 -translate-x-1/2 bg-white">
        <CircleX size={18} />
      </div>
      <span className="text">{message}</span>
    </div>
  );
}

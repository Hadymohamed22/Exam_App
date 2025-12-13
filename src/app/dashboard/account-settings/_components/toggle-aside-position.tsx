"use client";
import { ChevronRight } from "lucide-react";
import { SetStateAction } from "react";

type ToggleAsidePositionPropsType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function ToggleAsidePosition({
  isOpen,
  setIsOpen,
}: ToggleAsidePositionPropsType) {
  
  return (
    <div
      className={`open-close absolute top-20 left-full h-12 w-6 bg-main duration-300 hover:bg-blue-700 text-white rounded-r-lg flex items-center justify-center md:hidden`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <ChevronRight
        className={`${isOpen ? "rotate-180" : "rotate-0"} duration-300`}
      />
    </div>
  );
}

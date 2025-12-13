"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrevBtn() {
  // Variables
  const router = useRouter();
  
  return (
    <div
      className="prev-btn bg-white border border-main text-main flex justify-center items-center min-w-8 md:min-w-9 shrink-0 cursor-pointer duration-300 hover:bg-blue-50"
      onClick={() => router.back()}
      role="button"
      aria-label="back to previous page button"
    >
      <ChevronLeft className="size-5 md:size-6" />
    </div>
  );
}

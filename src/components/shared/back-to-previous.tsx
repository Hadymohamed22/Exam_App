'use client'
import { useRouter } from "next/navigation"
import { CustomButton } from "./custom-button";

export default function BackToPrevious() {
  // Navigation
  const router = useRouter();

  return (
  <CustomButton onClick={() => router.back()}>
    Previous Page
  </CustomButton>
  )
}

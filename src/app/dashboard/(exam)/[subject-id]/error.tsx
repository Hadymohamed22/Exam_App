'use client'
import { CustomButton } from "@/components/shared/custom-button";
import Link from "next/link";

type ErrorPagePropsType = { error: Error; reset: () => void }

export default function ErrorPage({ error, reset }: ErrorPagePropsType) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="mx-auto mb-6">
        <svg
          className="w-16 h-16 text-red-500 mx-auto mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5"
          />
        </svg>
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-700 mb-3">
          Sorry, there was a problem loading the exam or subject.<br />
          {error?.message && (
            <span className="block text-xs text-gray-500 mt-2">
              <span className="font-semibold">Error:</span> {error.message}
            </span>
          )}
        </p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition font-medium"
        >
          Try Again
        </button>
        <CustomButton asChild>
        <Link
          href="/dashboard"
        >
          Back to Dashboard
        </Link>
        </CustomButton>
      </div>
    </div>
  );
}

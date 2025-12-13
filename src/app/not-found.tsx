import BackToPrevious from '@/components/shared/back-to-previous'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col items-center">
        <svg
          className="w-24 h-24 mb-4 text-main animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 48 48"
        >
          <path
            d="M24 4v7M24 37v7M8.22 8.22l4.95 4.95M34.83 34.83l4.95 4.95M4 24h7M37 24h7M8.22 39.78l4.95-4.95M34.83 13.17l4.95-4.95"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
        </svg>
        <h1 className="text-main font-bold text-4xl mb-2">404</h1>
        <h2 className="font-semibold text-2xl text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-500 text-center max-w-md mb-6">
          Sorry, the page you are looking for does not exist or has been moved. Lets get you back on track!
        </p>
        <BackToPrevious />
      </div>
    </div>
  )
}

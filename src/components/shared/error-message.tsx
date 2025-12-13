type ErrorMessageProps = {
  message?: string;
  className?: string;
};

export default function ErrorMessage({
  message,
  className,
}: ErrorMessageProps) {
  return <p className={`text-red-600 text-sm ${className}`}>{message}</p>;
}

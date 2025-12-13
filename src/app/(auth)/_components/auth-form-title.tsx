type AuthFormTitleProps = {
  title: string;
  description?: string | React.ReactNode;
};

export default function AuthFormTitle({
  title,
  description,
}: AuthFormTitleProps) {

  return (
    <div className="auth-form-title mb-6">
      {/* Title */}
      <h2 className="font-inter font-bold text-2xl md:text-3xl text-gray-800 capitalize">
        {title}
      </h2>

      {/* Description If It Found */}
      {description && (
        <p className="text-sm md:text-base text-gray-500 mt-2.5">
          {description}
        </p>
      )}
    </div>
  );
}

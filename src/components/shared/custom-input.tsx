"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/tailwind-merge";

import { Eye, EyeOff } from "lucide-react";

const inputVariants = cva(
  "flex w-full border border-gray-200 bg-white text-sm text-gray-950 ring-offset-background placeholder:text-gray-400 focus:outline-none focus-visible:outline-none focus:border-blue-600 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-200",
        destructive: "border-red-600 focus:border-red-600",
        ghost: "border-transparent bg-transparent focus-visible:ring-0",
      },
      size: {
        default: "h-11 p-input",
        sm: "h-9 py-1.5 text-sm",
        lg: "h-12 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPasswordType = type === "password";
    const inputType = isPasswordType && showPassword ? "text" : type;

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(inputVariants({ variant, size }), className)}
          ref={ref}
          {...props}
        />
        {isPasswordType && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 duration-300 hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </span>
        )}
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";

export { CustomInput, inputVariants };

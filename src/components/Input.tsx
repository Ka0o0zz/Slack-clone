import { forwardRef } from "react";
import { ImWarning } from "react-icons/im";

interface Props {
  placeholder?: string;
  className?: string;
  type: "text" | "email" | "number" | "password";
  error?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { type, placeholder, className, error, errorMessage, ...rest }: Props,
    ref
  ) => {
    return (
      <div className={`w-full ${className} `}>
        <input
          type={type}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          className={`w-full p-3 h-11 line leading-snug rounded border-2 border-slate-600 outline-none text-lg ${
            error ? "error" : ""
          }`}
        />
        {error && (
          <div className="item-error text-slate-600">
            <ImWarning />
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

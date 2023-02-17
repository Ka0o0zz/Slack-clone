import { forwardRef } from "react";
import { ImWarning } from "react-icons/im";

interface Props {
  /**
   * Placeholder text for the input field
   */
  placeholder?: string;

  /**
   * Additional className(s) for the input container element
   */
  className?: string;

  /**
   * Input type
   */
  type: "text" | "email" | "number" | "password";

  /**
   * Whether or not an error has occurred
   */
  error?: boolean;

  /**
   * Error message to display when error is true
   */
  errorMessage?: string;
}

/**
 * An input component that can render different types of inputs (text, email, number, or password).
 * Displays an error message if `error` prop is true.
 */
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

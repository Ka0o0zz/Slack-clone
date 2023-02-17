import Image from "next/image";

interface Props {
  /**
   * The URL of the button image. It is optional.
   */
  src?: string;

  /**
   * The alternative text of the button image. It is optional.
   */
  alt?: string;

  /**
   * The additional CSS class that is applied to the button. It is optional.
   */
  className?: string;

  /**
   * The text displayed inside the button.
   */
  text: string;

  /**
   * The type of button, for example "submit" or "reset". Optional, defaults to "button".
   * Example: type='submit'
   */
  type?: "reset" | "submit";

  /**
   * The function that is called when the button is clicked. It is optional.
   */
  onClick?: () => void;
}

/**
 * The Button component represents a button in the user interface.
 *
 * This component can include an image along with the button's text, and can receive an additional CSS class
 * to customize its style. In addition, the button type and the function that is called when the button is clicked are configurable.
 */

export const Button = ({ src, alt, className, text, type, onClick }: Props) => {
  return (
    <button
      type={type ? type : "button"}
      className={`w-full max-w-full flex text-lg font-bold h-11 items-center rounded justify-center border-2 ${className}`}
      onClick={onClick}
    >
      {src && alt && (
        <Image src={src} alt={alt} width={18} height={18} className={"mr-3"} />
      )}
      <span>{text}</span>
    </button>
  );
};

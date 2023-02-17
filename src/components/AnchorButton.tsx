import Link from "next/link";

interface Props {
  /**
   * The content to display inside the anchor button.
   * It can be a JSX Element, an array of JSX Elements or a string.
   */
  children: JSX.Element | JSX.Element[] | string;

  /**
   * The URL that the anchor button should navigate to.
   */
  href: string;

  /**
   * The additional CSS class that is applied to the anchor button. It is optional.
   */
  className?: string;

  /**
   * If true, the anchor button will have a width of 100%.
   */
  widthFull?: boolean;
}

/**
 * The AnchorButton component represents a button in the user interface that uses an anchor element to navigate to a different page.
 *
 * This component receives the URL to navigate to, the content to display inside the button, and can receive an additional CSS class to customize its style.
 * It also has an option to have a width of 100%.
 */

export const AnchorButton = ({
  children,
  href,
  className,
  widthFull,
}: Props) => {
  /**
   * Renders the anchor button using the Next.js Link component.
   */
  return (
    <Link
      href={href}
      className={`${className} ${widthFull ? "widthFull" : ""}`}
    >
      {children}
    </Link>
  );
};

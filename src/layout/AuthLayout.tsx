import Image from "next/image";
import Link from "next/link";

interface Props {
  /**
   * The content to display inside the AuthLayout.
   */
  children: JSX.Element | JSX.Element[];

  /**
   * The main heading of the AuthLayout. Can be a string or JSX Element.
   */
  h1: string | JSX.Element | JSX.Element[];

  /**
   * The paragraph text to display in the AuthLayout. Can be a string or JSX Element.
   */
  p: string | JSX.Element | JSX.Element[];

  /**
   * The text to display underneath the `p` paragraph. Usually used to advertise
   * some kind of feature or benefit. Can be a string or JSX Element.
   */
  pRecording: string;

  /**
   * The text to display inside a Link component. This Link will be displayed
   * at the bottom of the AuthLayout.
   */
  linkText: string;

  /**
   * The URL to which the `linkText` Link component will direct the user.
   */
  href: string;
}

/**
 *  A list of items to be displayed in the footer
 *  @returns string[]
 */
const listItemsFooter = ["Privacy & Terms", "Contact Us", "Change region"];

/**
 * Map over the listItemsFooter array and return a new array with each item rendered as an li element
 * @param text
 * @returns li element with text
 */

const liMap = ({ text }: { text: string }) => (
  <li key={`${text}-key-li-footer`}>{text}</li>
);

/**
 * A layout component that is intended to be used on authentication pages.
 * Provides a standardized layout for the page.
 */
export const AuthLayout = ({
  children,
  h1,
  p,
  pRecording,
  linkText,
  href,
}: Props) => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <header className="grid place-items-center pt-12 pb-10">
        <div>
          {/* The Slack logo, linked to the homepage */}
          <Link href={"/"}>
            <Image
              src={"/assets/slackLogoBlack.svg"}
              alt="logo"
              width={103}
              height={26}
            />
          </Link>
        </div>
      </header>
      <section className="flex items-center flex-col flex-grow flex-shrink-0 max-w-3xl w-full">
        {/* The main heading */}
        <h1 className="text-center text-5xl font-bold mb-3 leading-10 tracking-tight max-w-2xl">
          {h1}
        </h1>
        {/* The introductory paragraph */}
        {p}
        {/* The content of the page, typically a form */}
        {children}

        {/* The recording message */}
        <p className="text-base text-slate-600 mt-3">{pRecording}</p>
        {/* The Link component that directs the user to another page */}
        <Link href={href} className="text-base text-sky-600">
          {linkText}
        </Link>
      </section>
      <div className="flex items-center flex-col py-9 px-0 justify-end h-full">
        <footer className=" justify-center text-center w-full">
          <ul className="flex gap-3">
            {/* List items for the footer */}
            {listItemsFooter.map((text: string) => liMap({ text }))}
          </ul>
        </footer>
      </div>
    </main>
  );
};

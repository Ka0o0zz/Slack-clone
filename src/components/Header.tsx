import Image from "next/image";
import { AnchorButton } from "./AnchorButton";

// An array of strings for the navigation menu items
const listItemsNav = [
  "Product",
  "Solution",
  "Enterprise",
  "Resources",
  "Price",
];

// A helper function that creates an <li> element for each item in listItemsNav
const liMap = ({ text }: { text: string }) => {
  return <li key={`${text}-key-list-header`}>{text}</li>;
};

/**
 * The Header component represents the header section of the web page.
 * It displays a navigation menu, a company logo and two buttons to talk to sales or sign in.
 * @returns This component returns a header that includes a logo, navigation menu, and two anchor buttons.
 */
export const Header = () => {
  return (
    <header className="w-full bg-fuchsia-900 py-5 flex fixed top-0 left-0 right-0 px-36">
      {/* The company logo */}
      <div className="mr-5 flex items-center">
        <Image
          src={"assets/slackLogoWhite.svg"}
          alt="logo"
          width={110}
          height={30}
        />
      </div>
      {/* The navigation menu */}
      <nav className="flex items-center justify-start flex-1">
        <ul className="flex gap-10 text-white font-medium text-base items-center justify-start flex-1">
          {listItemsNav.map((text: string) => liMap({ text }))}
        </ul>
        {/* The two buttons to talk to sales or sign in */}
        <div className="flex gap-x-5">
          <AnchorButton href={"/"} className="buttons second">
            Talk to sales
          </AnchorButton>
          <AnchorButton href={"/auth/login"} className="buttons principal">
            Sign In
          </AnchorButton>
        </div>
      </nav>
    </header>
  );
};

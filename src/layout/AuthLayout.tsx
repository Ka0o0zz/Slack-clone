import Image from "next/image";
import Link from "next/link";

interface Props {
  children: JSX.Element | JSX.Element[];
  h1: string | JSX.Element | JSX.Element[];
  p: string | JSX.Element | JSX.Element[];
  pRecording: string;
  linkText: string;
  href: string;
}

const listItemsFooter = ["Privacy & Terms", "Contact Us", "Change region"];

const liMap = ({ text }: { text: string }) => (
  <li key={`${text}-key-li-footer`}>{text}</li>
);

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
        <h1 className="text-center text-5xl font-bold mb-3 leading-10 tracking-tight max-w-2xl">
          {h1}
        </h1>
        {p}
        {children}

        <p className="text-base text-slate-600 mt-3">{pRecording}</p>
        <Link href={href} className="text-base text-sky-600">
          {linkText}
        </Link>
      </section>
      <div className="flex items-center flex-col py-9 px-0 justify-end h-full">
        <footer className=" justify-center text-center w-full">
          <ul className="flex gap-3">
            {listItemsFooter.map((text: string) => liMap({ text }))}
          </ul>
        </footer>
      </div>
    </main>
  );
};

import Link from "next/link";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  href: string;
  className?: string;
  widthFull?: boolean;
}

export const AnchorButton = ({
  children,
  href,
  className,
  widthFull,
}: Props) => {
  return (
    <Link
      href={href}
      className={`${className} ${widthFull ? "widthFull" : ""}`}
    >
      {children}
    </Link>
  );
};

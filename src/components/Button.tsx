import Image from "next/image";

interface Props {
  src?: string;
  alt?: string;
  className?: string;
  text: string;
  type?: "reset" | "submit";
}

export const Button = ({ src, alt, className, text, type }: Props) => {
  return (
    <button
      type={type ? type : "button"}
      className={`w-full max-w-full flex text-lg font-bold h-11 items-center rounded justify-center border-2 ${className}`}
    >
      {src && alt && (
        <Image src={src} alt={alt} width={18} height={18} className={"mr-3"} />
      )}
      <span>{text}</span>
    </button>
  );
};
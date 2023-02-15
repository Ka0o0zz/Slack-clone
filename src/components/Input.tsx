interface Props {
  type: "text" | "password" | "number" | "email";
  name: string;
  placeholder?: string;
  className?: string;
}

export const Input = ({ type, name, placeholder, className }: Props) => {
  return (
    <div className={`w-full ${className}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-3 h-11 line leading-snug rounded border-2 border-slate-600 outline-none text-lg"
      />
    </div>
  );
};

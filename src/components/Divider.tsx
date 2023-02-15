export const Divider = ({ text }: { text: string }) => {
  return (
    <div className="my-6 flex items-center ">
      <hr className="flex-grow border-t border-slate-400" />
      <span className="mx-2">{text}</span>
      <hr className="flex-grow border-t border-slate-400" />
    </div>
  );
};

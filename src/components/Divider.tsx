/**
 * The Divider component represents a visual divider in the user interface.
 *
 * This component displays a horizontal line and a text in the center of it.
 * The text is configurable, and the line has a default style that can be customized
 * by modifying its CSS.
 *
 * @param text - The text displayed in the center of the divider.
 * @returns A JSX element representing the Divider component.
 */

export const Divider = ({ text }: { text: string }) => {
  return (
    <div className="my-6 flex items-center ">
      <hr className="flex-grow border-t border-slate-400" />
      <span className="mx-2">{text}</span>
      <hr className="flex-grow border-t border-slate-400" />
    </div>
  );
};

import { cn } from "../utils/cn";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  mode?: "light" | "dark";
  className?: string;
}

export const Button = (props: IButton) => {
  const { text, className, mode = "light", ...rest } = props;

  return (
    <button className={cn(
      "p-5 min-w-[220px] text-3xl font-bold border-none bg-white text-black rounded-full cursor-pointer",
      "hover:opacity-80 transition-all duration-200",
      mode === 'dark' && "text-white bg-gradient-to-r from-[#00b7ff] to-[#0040ff]",
      className)} {...rest}>
      {text}
    </button>
  );
};
// ▶

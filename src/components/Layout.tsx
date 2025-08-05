import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface ILayout {
  children: ReactNode;
  className?: string;
}

export const Layout = (props: ILayout) => {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "w-full bg-[url('./assets/img/Background.png')]",
        "h-screen bg-no-repeat bg-fixed bg-contain",
        className
      )}
    >
      {children}
    </div>
  );
};

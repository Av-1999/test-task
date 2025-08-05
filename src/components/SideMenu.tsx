import { cn } from "../utils/cn";
import homeIcon from "../assets/icons/HomeIcon.png";
import searchIcon from "../assets/icons/ICON - Search.png";
import faceIcon from "../assets/icons/faceicon.png";
import playVideoIcon from "../assets/icons/playVideoIcon.png";
import videoIcon from "../assets/icons/videoIcon.png";
import timeIcon from "../assets/icons/timeIcon.png";
import userImage from "../assets/img/userimage.webp";
import type { ReactNode } from "react";

type MenuItems = { icon: string; label: string };

const menuItems: MenuItems[] = [
  {
    icon: searchIcon,
    label: "Search",
  },
  {
    icon: homeIcon,
    label: "Home",
  },
  {
    icon: playVideoIcon,
    label: "TV Shows",
  },
  {
    icon: videoIcon,
    label: "Movies",
  },
  {
    icon: faceIcon,
    label: "Genres",
  },
  {
    icon: timeIcon,
    label: "Watch Later",
  },
];

export const SideMenu = () => {
  return (
    <div
      className={cn(
        "absolute group left-0 top-0 h-full w-[100px] bg-black shadow-2xl pt-30",
        "hover:w-[300px] hover:pl-[40px] transition-all duration-200",
        "flex flex-col hover:items-start items-center shadow-black shadow-2xl/30"
      )}
    >
      <div className="p-4 hidden group-hover:flex w-full relative -top-10 items-center gap-4">
        <img className="rounded-full max-w-[50px]" src={userImage} alt="" />
        <p className="text-white text-2xl">Player 001</p>
      </div>
      
      {menuItems.map(({ icon, label }, i) => (
        <div
          className={cn(
            "transition-all duration-200 cursor-pointer",
            "group-hover:w-full max-w-[200px] rounded-full group-hover:rounded-lg hover:bg-gray-400",
            "flex items-center justify-start p-4 gap-3 mb-4",
            "w-max",
            i == 1 && "group-hover:bg-gray-400 bg-gray-600/50"
          )}
        >
          <img className="" src={icon} alt="icon.png" />
          <p className="opacity-0 absolute group-hover:relative group-hover:opacity-100 text-white text-2xl">
            {label}
          </p>
        </div>
      ))}
      <div className="hidden group-hover:flex flex-col gap-2 text-3xl mt-[100%]">
        <HoveringText>LANGUAGE</HoveringText>
        <HoveringText>GET HELP</HoveringText>
        <HoveringText>EXIT</HoveringText>
      </div>
    </div>
  );
};

const HoveringText = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-500 hover:text-gray-300 cursor-pointer transition-all">
    {children}
  </p>
);

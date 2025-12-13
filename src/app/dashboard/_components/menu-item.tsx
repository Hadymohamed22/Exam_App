import Link from "next/link";
import { ElementType } from "react";

type MenuItemProps = {
  icon: React.ReactNode;
  text: string;
  href?: string;
  isLogoutLink?: boolean;
  onClick?: () => void;
};

export default function MenuItem({
  href,
  icon,
  text,
  isLogoutLink,
  onClick,
}: MenuItemProps) {
  // Variables
  const Comp = href ? Link : ("button" as ElementType);
  const props = href ? { href } : { onClick: onClick, type: "button" };

  return (
    <li className="menu-item">
      <Comp
        {...props}
        className={`flex items-center gap-1.5 duration-300 p-4 w-full ${
          isLogoutLink
            ? "text-red-600 hover:text-red-700 hover:bg-red-100 focus-within:outline-none focus:outline-none"
            : "text-gray-800 hover:bg-blue-100"
        }`}
      >
        <span className={`icon ${isLogoutLink && "rotate-180"}`}>{icon}</span>
        <span className="text text-sm">{text}</span>
      </Comp>
    </li>
  );
}

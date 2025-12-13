"use client";
import { GraduationCap, User } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../_constants/nav-links";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  // Navigation
  const pathname = usePathname();

  return (
    <nav className="mt-14 sticky top-4">
      {/* Links ul */}
      <ul className="flex flex-col gap-2.5">
        {navLinks.map((navLink) => {
          return (

            // Link li Item
            <li key={navLink.text}>
              <Link
                href={navLink.href}
                className={`flex items-center gap-2.5 p-4 border duration-300 hover:text-main ${
                  pathname === navLink.href
                    ? "border-main text-main bg-blue-100"
                    : "border-transparent text-gray-500"
                }`}
              >

                {/* Icon */}
                <span className="icon">
                  {navLink.icon === "grade" ? (
                    <GraduationCap className="size-5 md:size-6" />
                  ) : navLink.icon === "user" ? (
                    <User className="size-5 md:size-6" />
                  ) : (
                    "X"
                  )}
                </span>

                {/* Link Text */}
                <span className="text-sm md:text-base">{navLink.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

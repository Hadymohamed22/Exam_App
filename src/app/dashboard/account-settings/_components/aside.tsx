"use client";
import ExamAppLogo from "@/components/shared/exam-app-logo";
import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "../../_components/nav-links";
import Menu from "../../_components/menu";
import ToggleAsidePosition from "./toggle-aside-position";
import { Session } from "next-auth";

type AsidePropsType = {
  session: Session | null;
};

export default function Aside({ session }: AsidePropsType) {
  // States
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`col-span-1 bg-blue-50 min-h-screen p-8 lg:p-10 border-r border-r-blue-50 duration-500 ease-in-out flex flex-col z-50 fixed top-0 md:left-0 ${
        !isOpen ? "left-[-18.25rem]" : "left-0"
      } shadow-lg lg:shadow-none lg:relative`}
    >
      {/* Logo */}
      <div className="logo">
        <Image
          src="/assets/images/logo.png"
          alt="elevate logo"
          width={192}
          height={37}
          className="mb-2.5 w-36 md:w-40 lg:w-48"
        />
        <ExamAppLogo iconWidth={30} />
      </div>

      {/* Nav Links */}
      <NavLinks />

      {/* User Info */}
      <div className="user flex items-center justify-between mt-auto sticky bottom-4">
        <div className="user-info flex items-center gap-2.5">

          {/* User Image */}
          <div className="image-box relative size-12 border border-main">
            <Image
              src="/assets/images/user-image.jpg"
              alt="user profile image"
              fill
              className="object-cover"
            />
          </div>

          {/* User Summary Info */}
          <div className="info">
            <h6 className="text-main text-sm md:text-base font-medium">
              {session?.user.firstName}
            </h6>
            <p className="text-xs md:text-sm text-gray-500">
              {session?.user.email}
            </p>
          </div>
        </div>

        {/* Logout And Account Setting Menu */}
        <Menu />
      </div>

      {/* Div To Toggle Aside Position On Mobile */}
      <ToggleAsidePosition isOpen={isOpen} setIsOpen={setIsOpen} />
    </aside>
  );
}

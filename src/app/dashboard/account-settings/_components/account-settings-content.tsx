"use client";

import { useState } from "react";
import { settingsNavLinks } from "../_constants/settings-nav-links";
import { CircleUserRound, Lock, LogOut } from "lucide-react";
import { CustomButton } from "@/components/shared/custom-button";
import { signOut } from "next-auth/react";
import ProfileSettings from "./profile-settings";
import ChangePassword from "./change-password";
import {
  AccountSettingsContent,
  SettingsRoutes,
} from "../_types/account-settings";

export default function AccountSettingsContent({
  user,
}: AccountSettingsContent) {
  // States
  const [currentRoute, setCurrentRoute] = useState<SettingsRoutes>("profile");
  
  // Variables
  const icons = {
    "circle-user": <CircleUserRound />,
    lock: <Lock />,
  };

  return (
    <div className="account-settings-content mt-6">
      {/* Main Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:min-h-[70vh]">

        {/* Settings Nav links */}
        <div className="settings-nav col-span-1 bg-white p-6 min-h-80 flex flex-col justify-between">
          <nav>
            <ul className="flex flex-col gap-2.5">
              {settingsNavLinks.map((settingNavLink) => (
                <li
                  key={settingNavLink.text}
                  className={`py-2.5 px-4 flex items-center gap-2.5 duration-300 text-gray-500 cursor-pointer hover:bg-blue-50 hover:text-main capitalize ${
                    currentRoute === settingNavLink.text &&
                    "bg-blue-50 text-main"
                  }`}
                  onClick={() => {
                    setCurrentRoute(settingNavLink.text);
                  }}
                >
                  {icons[settingNavLink.icon]}
                  <span>{settingNavLink.text}</span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="logout-btn">
            <CustomButton
              className="flex justify-start items-center gap-2.5 w-full"
              variant={"halfDestructive"}
              onClick={() => signOut()}
            >
              <LogOut className="rotate-180" absoluteStrokeWidth />
              <span className="text-base">Logout</span>
            </CustomButton>
          </div>
        </div>

        {/* Profile Or Change Password Page */}
        <div className="settings col-span-1 md:col-span-2 bg-white p-6">
          {/* Profile */}
          {currentRoute === "profile" && <ProfileSettings user={user} />}

          {/* Change Password */}
          {currentRoute === "change password" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
}

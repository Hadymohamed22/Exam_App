import { LogOut, User } from "lucide-react";
import MenuItem from "./menu-item";
import { signOut } from "next-auth/react";

export default function MenuItems({ visible }: { visible: boolean }) {
  return (
    <ul
      className={`menu-items bg-white absolute -right-2 lg:right-0 min-w-64 shadow-md duration-300 ${
        visible
          ? "opacity-1 bottom-[250%] visible"
          : "opacity-0 -bottom-[100%] invisible"
      }`}
    >
      <MenuItem
        href="/dashboard/account-settings"
        icon={<User size={18} />}
        text="Account"
      />
      <MenuItem
        icon={<LogOut size={18} />}
        text="Logout"
        isLogoutLink
        onClick={() => signOut()}
      />
    </ul>
  );
}

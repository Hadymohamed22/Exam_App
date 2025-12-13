"use client";

import { EllipsisVertical, X } from "lucide-react";
import MenuItems from "./menu-items";
import { useState } from "react";

export default function Menu() {
  // States
  const [open, setOpen] = useState(false);

  return (
    <div className="menu relative">
      <div
        className="icon text-gray-500 duration-300 hover:text-gray-600 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={18} /> : <EllipsisVertical size={18} />}
      </div>

      {/* Menu Items  */}
      <MenuItems visible={open} />
    </div>
  );
}

export type navLink = {
  href: string;
  icon: string;
  text: string;
};

export const navLinks: navLink[] = [
  {
    href: "/dashboard",
    icon: "grade",
    text: "Diplomas",
  },
  {
    href: "/dashboard/account-settings",
    icon: "user",
    text: "Account Settings",
  },
];

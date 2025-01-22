import localizationStrings from "@/statics/localization/index";

export type MainConfig = typeof mainConfig;

export const mainConfig = {
  navItems: [
    {
      label: "Hakkımızıda",
      href: "/docs",
    },
  ],
  dropdownItems: [
    {
      label: "Divanlar",
      href: "/divanlar",
      subItems: [
        { label: "Submenu 1", href: "/submenu1" },
        {
          label: "Submenu 2",
          subItems: [
            { label: "Submenu 2.1", href: "/submenu2-1" },
            { label: "Submenu 2.2", href: "/submenu2-2" },
          ],
        },
      ],
    },
    {
      label: "Yayınlar",
      href: "Yayınlar",
      subItems: [
        { label: "Submenu 1", href: "/murat" },
        { label: "Submenu 2", href: "/murat" },
      ],
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};

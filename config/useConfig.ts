import { useState } from "react";

export const useConfig = () => {
  const [mainConfig, setMainConfig] = useState({
    navItems: [
      { label: "Default", href: "/" },
      { label: "Risk Assessment", href: "/docs" },
    ],
    navMenuItems: [
      { label: "Profile", href: "/profile" },
      { label: "Dashboard", href: "/dashboard" },
    ],
    links: {
      github: "https://github.com/",
    },
  });

  const updateConfig = (newConfig: Partial<typeof mainConfig>) => {
    setMainConfig((prev) => ({ ...prev, ...newConfig }));
  };

  return { mainConfig, updateConfig };
};

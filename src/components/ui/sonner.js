import React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = (props) => {
  const { theme = "system" } = useTheme();

  return React.createElement(
    Sonner,
    Object.assign(
      {
        theme,
        className: "toaster group",
        style: {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        },
      },
      props
    )
  );
};

export { Toaster };

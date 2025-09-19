import React from "react";
import { cn } from "./utils";

function Skeleton({ className, ...props }) {
  return React.createElement("div", Object.assign({
    "data-slot": "skeleton",
    className: cn("bg-accent animate-pulse rounded-md", className)
  }, props));
}

export { Skeleton };

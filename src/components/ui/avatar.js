"use client";

function _extends() {
  return _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      },
    _extends.apply(null, arguments);
}

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "./utils";

// Avatar Root
function Avatar({ className, ...props }) {
  return React.createElement(
    AvatarPrimitive.Root,
    _extends(
      {
        "data-slot": "avatar",
        className: cn(
          "relative flex size-10 shrink-0 overflow-hidden rounded-full",
          className
        ),
      },
      props
    )
  );
}

// Avatar Image
function AvatarImage({ className, ...props }) {
  return React.createElement(
    AvatarPrimitive.Image,
    _extends(
      {
        "data-slot": "avatar-image",
        className: cn("aspect-square size-full", className),
      },
      props
    )
  );
}

// Avatar Fallback
function AvatarFallback({ className, ...props }) {
  return React.createElement(
    AvatarPrimitive.Fallback,
    _extends(
      {
        "data-slot": "avatar-fallback",
        className: cn(
          "bg-muted flex size-full items-center justify-center rounded-full",
          className
        ),
      },
      props
    )
  );
}

export { Avatar, AvatarImage, AvatarFallback };

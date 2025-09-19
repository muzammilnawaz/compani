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
import { cn } from "./utils";

// Card Root
function Card({ className, ...props }) {
  return React.createElement(
    "div",
    _extends(
      {
        "data-slot": "card",
        className: cn(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
          className
        ),
      },
      props
    )
  );
}

// Card Header
function CardHeader({ className, ...props }) {
  return React.createElement(
    "div",
    _extends(
      {
        "data-slot": "card-header",
        className: cn(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          className
        ),
      },
      props
    )
  );
}

// Card Title
function CardTitle({ className, ...props }) {
  return React.createElement(
    "h4",
    _extends(
      {
        "data-slot": "card-title",
        className: cn("leading-none", className),
      },
      props
    )
  );
}

// Card Description
function CardDescription({ className, ...props }) {
  return React.createElement(
    "p",
    _extends(
      {
        "data-slot": "card-description",
        className: cn("text-muted-foreground", className),
      },
      props
    )
  );
}

// Card Action
function CardAction({ className, ...props }) {
  return React.createElement(
    "div",
    _extends(
      {
        "data-slot": "card-action",
        className: cn(
          "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
          className
        ),
      },
      props
    )
  );
}

// Card Content
function CardContent({ className, ...props }) {
  return React.createElement(
    "div",
    _extends(
      {
        "data-slot": "card-content",
        className: cn("px-6 [&:last-child]:pb-6", className),
      },
      props
    )
  );
}

// Card Footer
function CardFooter({ className, ...props }) {
  return React.createElement(
    "div",
    _extends(
      {
        "data-slot": "card-footer",
        className: cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className),
      },
      props
    )
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

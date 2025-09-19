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
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "./utils";

// Breadcrumb Root
function Breadcrumb(props) {
  return React.createElement(
    "nav",
    _extends(
      {
        "aria-label": "breadcrumb",
        "data-slot": "breadcrumb",
      },
      props
    )
  );
}

// Breadcrumb List
function BreadcrumbList({ className, ...props }) {
  return React.createElement(
    "ol",
    _extends(
      {
        "data-slot": "breadcrumb-list",
        className: cn(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          className
        ),
      },
      props
    )
  );
}

// Breadcrumb Item
function BreadcrumbItem({ className, ...props }) {
  return React.createElement(
    "li",
    _extends(
      {
        "data-slot": "breadcrumb-item",
        className: cn("inline-flex items-center gap-1.5", className),
      },
      props
    )
  );
}

// Breadcrumb Link
function BreadcrumbLink({ asChild, className, ...props }) {
  const Comp = asChild ? Slot : "a";
  return React.createElement(
    Comp,
    _extends(
      {
        "data-slot": "breadcrumb-link",
        className: cn("hover:text-foreground transition-colors", className),
      },
      props
    )
  );
}

// Breadcrumb Page
function BreadcrumbPage({ className, ...props }) {
  return React.createElement(
    "span",
    _extends(
      {
        "data-slot": "breadcrumb-page",
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: cn("text-foreground font-normal", className),
      },
      props
    )
  );
}

// Breadcrumb Separator
function BreadcrumbSeparator({ children, className, ...props }) {
  return React.createElement(
    "li",
    _extends(
      {
        "data-slot": "breadcrumb-separator",
        role: "presentation",
        "aria-hidden": "true",
        className: cn("[&>svg]:size-3.5", className),
      },
      props
    ),
    children ?? React.createElement(ChevronRight, null)
  );
}

// Breadcrumb Ellipsis
function BreadcrumbEllipsis({ className, ...props }) {
  return React.createElement(
    "span",
    _extends(
      {
        "data-slot": "breadcrumb-ellipsis",
        role: "presentation",
        "aria-hidden": "true",
        className: cn("flex size-9 items-center justify-center", className),
      },
      props
    ),
    React.createElement(MoreHorizontal, { className: "size-4" }),
    React.createElement("span", { className: "sr-only" }, "More")
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

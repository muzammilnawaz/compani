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
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "./utils";
import { buttonVariants } from "./button";

// Root
function AlertDialog(props) {
  return React.createElement(
    AlertDialogPrimitive.Root,
    _extends({ "data-slot": "alert-dialog" }, props)
  );
}

// Trigger
function AlertDialogTrigger(props) {
  return React.createElement(
    AlertDialogPrimitive.Trigger,
    _extends({ "data-slot": "alert-dialog-trigger" }, props)
  );
}

// Portal
function AlertDialogPortal(props) {
  return React.createElement(
    AlertDialogPrimitive.Portal,
    _extends({ "data-slot": "alert-dialog-portal" }, props)
  );
}

// Overlay
function AlertDialogOverlay({ className, ...props }) {
  return React.createElement(
    AlertDialogPrimitive.Overlay,
    _extends(
      {
        "data-slot": "alert-dialog-overlay",
        className: cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out " +
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
            "fixed inset-0 z-50 bg-black/50",
          className
        ),
      },
      props
    )
  );
}

// Content
function AlertDialogContent({ className, ...props }) {
  return React.createElement(
    AlertDialogPortal,
    null,
    React.createElement(AlertDialogOverlay, null),
    React.createElement(
      AlertDialogPrimitive.Content,
      _extends(
        {
          "data-slot": "alert-dialog-content",
          className: cn(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out " +
              "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
              "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 " +
              "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] " +
              "translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg " +
              "duration-200 sm:max-w-lg",
            className
          ),
        },
        props
      )
    )
  );
}

// Header
function AlertDialogHeader({ className, ...props }) {
  return React.createElement(
    "div",
    _extends(
      {
        "data-slot": "alert-dialog-header",
        className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      },
      props
    )
  );
}

// Footer
function AlertDialogFooter({ className, ...props }) {
  return React.createElement(
    "div",
    _extends(
      {
        "data-slot": "alert-dialog-footer",
        className: cn(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          className
        ),
      },
      props
    )
  );
}

// Title
function AlertDialogTitle({ className, ...props }) {
  return React.createElement(
    AlertDialogPrimitive.Title,
    _extends(
      {
        "data-slot": "alert-dialog-title",
        className: cn("text-lg font-semibold", className),
      },
      props
    )
  );
}

// Description
function AlertDialogDescription({ className, ...props }) {
  return React.createElement(
    AlertDialogPrimitive.Description,
    _extends(
      {
        "data-slot": "alert-dialog-description",
        className: cn("text-muted-foreground text-sm", className),
      },
      props
    )
  );
}

// Action
function AlertDialogAction({ className, ...props }) {
  return React.createElement(
    AlertDialogPrimitive.Action,
    _extends(
      { className: cn(buttonVariants(), className) },
      props
    )
  );
}

// Cancel
function AlertDialogCancel({ className, ...props }) {
  return React.createElement(
    AlertDialogPrimitive.Cancel,
    _extends(
      {
        className: cn(
          buttonVariants({ variant: "outline" }),
          className
        ),
      },
      props
    )
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

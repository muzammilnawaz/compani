"use client";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group@1.2.3";
import { CircleIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function RadioGroup({
  className,
  ...props
}) {
  return /*#__PURE__*/React.createElement(RadioGroupPrimitive.Root, _extends({
    "data-slot": "radio-group",
    className: cn("grid gap-3", className)
  }, props));
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /*#__PURE__*/React.createElement(RadioGroupPrimitive.Item, _extends({
    "data-slot": "radio-group-item",
    className: cn("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className)
  }, props), /*#__PURE__*/React.createElement(RadioGroupPrimitive.Indicator, {
    "data-slot": "radio-group-indicator",
    className: "relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(CircleIcon, {
    className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
  })));
}
export { RadioGroup, RadioGroupItem };
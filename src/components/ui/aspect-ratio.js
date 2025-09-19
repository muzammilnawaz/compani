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
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

function AspectRatio(props) {
  return React.createElement(
    AspectRatioPrimitive.Root,
    _extends(
      {
        "data-slot": "aspect-ratio",
      },
      props
    )
  );
}

export { AspectRatio };

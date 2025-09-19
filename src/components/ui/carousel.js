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
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";

// Context
const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// Root
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return React.createElement(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      },
    },
    React.createElement(
      "div",
      _extends(
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
        },
        props
      ),
      children
    )
  );
}

// Content
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return React.createElement(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
    },
    React.createElement(
      "div",
      _extends(
        {
          className: cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          ),
        },
        props
      )
    )
  );
}

// Item
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return React.createElement(
    "div",
    _extends(
      {
        role: "group",
        "aria-roledescription": "slide",
        "data-slot": "carousel-item",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
      },
      props
    )
  );
}

// Previous Button
function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return React.createElement(
    Button,
    _extends(
      {
        "data-slot": "carousel-previous",
        variant,
        size,
        className: cn(
          "absolute size-8 rounded-full",
          orientation === "horizontal"
            ? "top-1/2 -left-12 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
      },
      props
    ),
    React.createElement(ArrowLeft, null),
    React.createElement("span", { className: "sr-only" }, "Previous slide")
  );
}

// Next Button
function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return React.createElement(
    Button,
    _extends(
      {
        "data-slot": "carousel-next",
        variant,
        size,
        className: cn(
          "absolute size-8 rounded-full",
          orientation === "horizontal"
            ? "top-1/2 -right-12 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
      },
      props
    ),
    React.createElement(ArrowRight, null),
    React.createElement("span", { className: "sr-only" }, "Next slide")
  );
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };

import React from "react";
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent } from "./sidebar";

function App() {
  return React.createElement(
    SidebarProvider,
    null,
    React.createElement(
      "div",
      { className: "flex" },
      React.createElement(SidebarTrigger, null),
      React.createElement(
        Sidebar,
        null,
        React.createElement(SidebarContent, null, "Hello Sidebar!")
      )
    )
  );
}

export default App;

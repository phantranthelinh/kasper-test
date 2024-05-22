import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

const render = (Component) => {
  const rootElement = document.getElementById("root");
  if (process.env.NODE_ENV === "production") {
    ReactDOM.hydrateRoot(rootElement, <Component />);
  } else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Component />);
  }
};

render(App);

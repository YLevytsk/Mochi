/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigation."; 

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Navigation />);
}


/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navigation from "./components/navigation"; // ✅ Теперь путь правильный!

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>
      <Navigation />
      <App />
    </>
  );
}





 
  
  
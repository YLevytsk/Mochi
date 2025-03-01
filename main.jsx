/* eslint-disable no-unused-vars */
import React from "react"; // ✅ React нужен для рендеринга
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />); // ✅ JSX требует импорт React
}




 
  
  
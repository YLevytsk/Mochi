import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigation.js"; // ✅ Убедись, что этот файл существует

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Navigation />
    </React.StrictMode>
  );
}





 
  
  
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark:bg-custom-background bg-white dark:text-custom-foreground text-black min-h-screen">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);

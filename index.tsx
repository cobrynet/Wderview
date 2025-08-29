import React from "react";
import { createRoot } from "react-dom/client";
import "../tailwind.css";

function Test() {
  return (
    <div className="min-h-screen grid place-items-center">
      <h1 className="text-4xl font-bold text-indigo-600">Hello from Vite ✅</h1>
    </div>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(<Test />);

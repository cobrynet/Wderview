import { createRoot } from "react-dom/client";
import "../tailwind.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <div className="min-h-screen grid place-items-center">
    <h1 className="text-4xl font-bold text-indigo-600">Hello from Vite ✅</h1>
  </div>
);

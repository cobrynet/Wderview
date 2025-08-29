import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
      // se vuoi l'alias per shadcn/ui: "@/components/ui" -> "src/components/ui"
      // "@" già punterà a "src", quindi importa così: "@/components/ui/button"
    }
  }
});


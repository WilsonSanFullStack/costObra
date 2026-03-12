import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    electron([
      {
        entry: "./electrom/main.ts",
        // onstart(options) {
        // options.startup()
        // }
      },
      {
        entry: "./electrom/preload.ts",
      },
    ]),
    tailwindcss(),
    react(),
  ],
});

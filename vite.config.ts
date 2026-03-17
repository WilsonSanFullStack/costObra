import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  plugins: [
    electron([
      {
        entry: "./electrom/main.ts",
        vite: {
          resolve: {
            alias: {
              "@shared": path.resolve(__dirname, "shared"),
            },
          },
        },
      },
      {
        entry: "./electrom/preload.ts",
        vite: {
          resolve: {
            alias: {
              "@shared": path.resolve(__dirname, "shared"),
            },
          },
        },
      },
    ]),
    tailwindcss(),
    react(),
  ],
});

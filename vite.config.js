/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: { outDir: "build" },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api-server/": "...",
      "/authorization/": "...",
    },
  },
});

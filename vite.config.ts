import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path"; // Node.js `path` module
import EnvironmentPlugin from "vite-plugin-environment";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      OPEN_CAGE_URL: "https://api.opencagedata.com/geocode/v1/json",
      OPEN_METEO_URL: "https://api.open-meteo.com/v1/forecast",
      OPEN_CAGE_API_KEY: "720cc2fe56554c5bb56a46b3b9151dba",
    }),
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
    },
  },
});

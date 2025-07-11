import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./testSetup.js",
  },
  server: {
    /**
     * Docker Compose creates a network for the different services, app and
     * reverse-proxy, as well as a DNS. Therefore, from within reverse-proxy's
     * container, it can reach app's container at http://app:5173.
     */
    allowedHosts: ["app"],
  },
});

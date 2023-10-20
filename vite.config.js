import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/petpet/",
  plugins: [vue()],
  css: {
    devSourcemap: true
  },
  server: {
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});

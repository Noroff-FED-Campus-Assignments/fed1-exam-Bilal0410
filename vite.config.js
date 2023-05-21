/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        list: resolve(__dirname, "list.html"),
        details: resolve(__dirname, "details.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html")
      },
    },
  },
});

import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/design/_fonts.scss";
          @import "./src/design/_mixin.scss";
          @import "./src/design/_custom.scss";
        `
      }
    }
  },

  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@query": path.resolve(__dirname, "./src/query"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
    },
  },
});

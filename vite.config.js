import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative asset paths make the built site work on GitHub Pages
  // whether it is deployed at / or /your-repo-name/.
  base: "./",
});

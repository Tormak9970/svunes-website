import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from "svelte-preprocess";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        sveltePreprocess({
          typescript: true,
        }),
      ],
    }),
  ],

  resolve: {
    alias: {
      "@interactables": resolve(__dirname, "./src/components/interactables"),
      "@layout": resolve(__dirname, "./src/components/layout"),
      "@navigation": resolve(__dirname, "./src/components/navigation"),
      "@component-utils": resolve(__dirname, "./src/components/utils"),
      "@icons": resolve(__dirname, "./src/lib/icons")
    }
  },
})

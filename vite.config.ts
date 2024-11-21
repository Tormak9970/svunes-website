import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from "path";
import sveltePreprocess from "svelte-preprocess";
import { defineConfig } from 'vite';

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
      "@stores": resolve(__dirname, "./src/Stores"),
      "@site-navigation": resolve(__dirname, "./src/lib/navigation"),
      "@platforms": resolve(__dirname, "./src/lib/platforms"),
      "@icons": resolve(__dirname, "./src/lib/icons"),
      "@utils": resolve(__dirname, "./src/lib/utils"),
    }
  },
})

import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [],
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/@shoelace-style/shoelace/dist/assets/**/*",
            dest: "./shoelace/assets",
          },
        ],
      }),
    ],
  },
});

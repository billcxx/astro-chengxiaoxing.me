import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://chengxiaoxing.me/',
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare({mode:"directory"})
});
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://thecontractorservices.com',
  output: 'static',
  adapter: vercel(),
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://maunahig.anmitali.dev',
  integrations: [mdx()]
});

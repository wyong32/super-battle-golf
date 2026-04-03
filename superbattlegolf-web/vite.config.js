import { fileURLToPath, URL } from 'node:url'
import { join } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { writeSitemapBundle } from './scripts/generate-sitemap.mjs'

/** Emit sitemap.xml + robots.txt into dist after build (same data as `npm run generate-sitemap`). */
function superbattlegolfSitemapPlugin() {
  return {
    name: 'superbattlegolf-sitemap',
    apply: 'build',
    closeBundle() {
      const distDir = join(fileURLToPath(new URL('.', import.meta.url)), 'dist')
      const { count } = writeSitemapBundle(distDir)
      console.log(`[superbattlegolf-sitemap] wrote ${count} URLs → dist/sitemap.xml, dist/robots.txt`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    superbattlegolfSitemapPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

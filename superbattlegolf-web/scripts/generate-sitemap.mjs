#!/usr/bin/env node
/**
 * Sitemap + robots.txt (single module).
 * - Run: npm run generate-sitemap  (also used by vite build via writeSitemapBundle)
 * - Env: VITE_SITE_ORIGIN (optional, default https://superbattlegolf.org)
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import advancedTips from '../src/data/advancedTips.js'
import guides from '../src/data/guides.js'
import mods from '../src/data/mods.js'

/**
 * Static routes (incl. legal: privacy, terms, copyright).
 */
const BASE_ROUTES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/getting-started', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki/weapons', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki/maps', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki/achievements', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki/cosmetics', priority: 0.9, changefreq: 'weekly' },
  { path: '/guides', priority: 0.85, changefreq: 'weekly' },
  { path: '/mods', priority: 0.85, changefreq: 'weekly' },
  { path: '/platforms', priority: 0.75, changefreq: 'monthly' },
  { path: '/support', priority: 0.75, changefreq: 'monthly' },
  { path: '/search', priority: 0.7, changefreq: 'daily' },
  { path: '/about-us', priority: 0.5, changefreq: 'monthly' },
  { path: '/contact-us', priority: 0.5, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.35, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.35, changefreq: 'yearly' },
  { path: '/copyright', priority: 0.35, changefreq: 'yearly' },
]

function escapeXml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10)
}

function generateUrlXml(loc, lastmod, priority, changefreq) {
  const p = Number(priority).toFixed(1)
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${p}</priority>
  </url>`
}

function collectSitemapEntries(siteOrigin) {
  const base = siteOrigin.replace(/\/$/, '')
  const entries = []
  const today = todayIsoDate()

  for (const route of BASE_ROUTES) {
    entries.push({
      loc: new URL(route.path, `${base}/`).href,
      lastmod: today,
      priority: route.priority,
      changefreq: route.changefreq,
    })
  }

  for (const g of guides) {
    entries.push({
      loc: new URL(`/guides/${g.addressBar}`, `${base}/`).href,
      lastmod: (g.publishDate || today).slice(0, 10),
      priority: 0.8,
      changefreq: 'monthly',
    })
  }

  for (const t of advancedTips) {
    if (t.hasDetailPage === false) continue
    entries.push({
      loc: new URL(`/advanced/${t.addressBar}`, `${base}/`).href,
      lastmod: (t.publishDate || today).slice(0, 10),
      priority: 0.82,
      changefreq: 'monthly',
    })
  }

  for (const m of mods) {
    entries.push({
      loc: new URL(`/mods/${m.addressBar}`, `${base}/`).href,
      lastmod: (m.publishDate || today).slice(0, 10),
      priority: 0.8,
      changefreq: 'monthly',
    })
  }

  return entries
}

function buildSitemapXml(siteOrigin, entries) {
  const blocks = entries.map((e) => generateUrlXml(e.loc, e.lastmod, e.priority, e.changefreq)).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${blocks}
</urlset>
`
}

function buildRobotsTxt(siteOrigin) {
  const base = siteOrigin.replace(/\/$/, '')
  const sitemapUrl = new URL('/sitemap.xml', `${base}/`).href
  return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`
}

/**
 * Write sitemap.xml + robots.txt into outDir (public/ or dist/).
 * @param {string} outDir
 * @param {string} [siteOrigin]
 */
export function writeSitemapBundle(outDir, siteOrigin = process.env.VITE_SITE_ORIGIN || 'https://superbattlegolf.org') {
  const origin = siteOrigin.replace(/\/$/, '')
  const entries = collectSitemapEntries(origin)
  const xml = buildSitemapXml(origin, entries)
  const robots = buildRobotsTxt(origin)

  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'sitemap.xml'), xml, 'utf8')
  writeFileSync(join(outDir, 'robots.txt'), robots, 'utf8')

  return { count: entries.length, outDir, xml }
}

function runCli() {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const rootDir = join(__dirname, '..')
  const publicDir = join(rootDir, 'public')
  const distDir = join(rootDir, 'dist')

  console.log('Loading data & generating sitemap...')

  const { count, outDir, xml } = writeSitemapBundle(publicDir)
  console.log(`Wrote ${count} URLs -> ${join(outDir, 'sitemap.xml')}`)
  console.log(`Wrote robots.txt -> ${join(outDir, 'robots.txt')}`)

  if (existsSync(distDir)) {
    writeSitemapBundle(distDir)
    console.log(`Also wrote sitemap + robots -> ${distDir} (dist existed)`)
  }

  const valid =
    xml.includes('<?xml') && xml.includes('<urlset') && xml.includes('</urlset>') && xml.includes('xmlns:xhtml')
  console.log(valid ? 'Sitemap XML structure OK.' : 'Warning: sitemap XML may be incomplete.')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runCli()
}

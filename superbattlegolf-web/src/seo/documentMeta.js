/**
 * 站点级 SEO：直接更新 document.head（对齐 windrose-web，避免 @unhead 运行时开销）。
 */
import advancedTips from '../data/advancedTips.js'
import guides from '../data/guides.js'
import mods from '../data/mods.js'
import {
  AUTHOR_NAME,
  SITE_NAME,
  SITE_TAGLINE,
  TWITTER_SITE_HANDLE,
  absoluteOgImage,
  absoluteUrl,
} from './siteConfig.js'
import {
  articleNode,
  organizationNode,
  toJsonLdGraph,
  webPageNode,
  websiteNode,
} from './jsonLd.js'

function setMeta(attribute, name, content) {
  if (content === undefined || content === null) return
  let el = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setAlternateHreflang(hreflang, href) {
  let el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function injectJsonLd(data) {
  const existing = document.querySelector('script[data-seo-ld="1"]')
  if (existing) existing.remove()
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-seo-ld', '1')
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

/**
 * @param {object} p
 * @param {string} p.title
 * @param {string} p.description
 * @param {string} [p.keywords]
 * @param {string} p.canonicalUrl
 * @param {string} p.ogImageAbs
 * @param {string} [p.ogType]
 * @param {object} p.jsonLd
 */
export function applyDocumentSeo({ title, description, keywords, canonicalUrl, ogImageAbs, ogType, jsonLd }) {
  document.documentElement.lang = 'en'
  document.title = title

  setMeta('name', 'description', description)
  setMeta('name', 'keywords', keywords ?? 'Super Battle Golf, wiki, Steam, guides')
  setMeta('name', 'author', AUTHOR_NAME)
  setMeta('name', 'robots', 'index, follow')
  setMeta('name', 'googlebot', 'index, follow')

  setMeta('property', 'og:site_name', SITE_NAME)
  setMeta('property', 'og:type', ogType || 'website')
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', canonicalUrl)
  setMeta('property', 'og:locale', 'en_US')
  setMeta('property', 'og:image', ogImageAbs)
  setMeta('property', 'og:image:alt', typeof title === 'string' ? title : '')

  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', ogImageAbs)

  if (TWITTER_SITE_HANDLE) {
    const at = `@${TWITTER_SITE_HANDLE.replace(/^@/, '')}`
    setMeta('name', 'twitter:site', at)
    setMeta('name', 'twitter:creator', at)
  }

  setCanonical(canonicalUrl)
  setAlternateHreflang('en', canonicalUrl)
  setAlternateHreflang('x-default', canonicalUrl)

  injectJsonLd(jsonLd)
}

/**
 * 按路由写入 TDK / OG / JSON-LD（guides/advancedTips/mods 与首页同源打包，同步读取即可）。
 * @param {import('vue-router').RouteLocationNormalizedLoaded} route
 */
export function applyRouteSeo(route) {
  const path = route.path
  const canonicalUrl = absoluteUrl(path)

  let title = `${SITE_NAME} | Wiki, Tips & Steam Help`
  let description = SITE_TAGLINE
  let keywords = 'Super Battle Golf, wiki, Steam, guides'
  let ogType = 'website'
  let ogImage = absoluteOgImage()

  /** @type {Record<string, unknown>[]} */
  let jsonLdNodes = [organizationNode(), websiteNode()]

  const name = route.name

  if (name === 'guide-detail') {
    const slug = typeof route.params.slug === 'string' ? route.params.slug : ''
    const g = guides.find((x) => x.addressBar === slug)
    if (g) {
      title = g.seo?.title || `Super Battle Golf guide — ${g.title} | ${SITE_NAME}`
      description = g.seo?.description || g.description
      keywords = g.seo?.keywords || keywords
      ogType = 'article'
      ogImage = absoluteOgImage(g.imageSrc)
      jsonLdNodes = [
        organizationNode(),
        websiteNode(),
        webPageNode({ path, name: g.title, description }),
        articleNode({
          path,
          headline: g.title,
          description,
          datePublished: `${g.publishDate}T12:00:00.000Z`,
          dateModified: `${g.publishDate}T12:00:00.000Z`,
          imageSrc: g.imageSrc,
        }),
      ]
    } else {
      title = `Super Battle Golf guide — not found | ${SITE_NAME}`
      description = 'The requested guide was not found. Browse all Super Battle Golf guides from the hub.'
    }
  } else if (name === 'advanced-tip-detail') {
    const slug = typeof route.params.slug === 'string' ? route.params.slug : ''
    const t = advancedTips.find((x) => x.addressBar === slug)
    if (t) {
      title = t.seo?.title || `Super Battle Golf advanced — ${t.title} | ${SITE_NAME}`
      description = t.seo?.description || t.description
      keywords = t.seo?.keywords || keywords
      if (t.hasDetailPage === false) {
        ogType = 'website'
        ogImage = absoluteOgImage(t.imageSrc)
        jsonLdNodes = [
          organizationNode(),
          websiteNode(),
          webPageNode({ path, name: t.title, description }),
        ]
      } else {
        ogType = 'article'
        ogImage = absoluteOgImage(t.imageSrc)
        jsonLdNodes = [
          organizationNode(),
          websiteNode(),
          webPageNode({ path, name: t.title, description }),
          articleNode({
            path,
            headline: t.title,
            description,
            datePublished: `${t.publishDate}T12:00:00.000Z`,
            dateModified: `${t.publishDate}T12:00:00.000Z`,
            imageSrc: t.imageSrc,
          }),
        ]
      }
    } else {
      title = `Super Battle Golf advanced technique — not found | ${SITE_NAME}`
      description =
        'The requested technique page was not found. Browse Advanced techniques on the dedicated hub.'
    }
  } else if (name === 'mod-detail') {
    const slug = typeof route.params.slug === 'string' ? route.params.slug : ''
    const m = mods.find((x) => x.addressBar === slug)
    if (m) {
      title = m.seo?.title || `Super Battle Golf mod — ${m.title} | ${SITE_NAME}`
      description = m.seo?.description || m.description
      keywords = m.seo?.keywords || keywords
      ogType = 'article'
      ogImage = absoluteOgImage(m.imageSrc)
      jsonLdNodes = [
        organizationNode(),
        websiteNode(),
        webPageNode({ path, name: m.title, description }),
        articleNode({
          path,
          headline: m.title,
          description,
          datePublished: `${m.publishDate}T12:00:00.000Z`,
          dateModified: `${m.publishDate}T12:00:00.000Z`,
          imageSrc: m.imageSrc,
        }),
      ]
    } else {
      title = `Super Battle Golf mod — not found | ${SITE_NAME}`
      description = 'The requested article was not found. Browse all Super Battle Golf mod topics.'
    }
  } else {
    const seo = route.meta?.seo
    if (seo && typeof seo === 'object') {
      if (typeof seo.title === 'string' && seo.title.length) title = seo.title
      if (typeof seo.description === 'string' && seo.description.length) description = seo.description
      if (typeof seo.keywords === 'string' && seo.keywords.length) keywords = seo.keywords
    }

    if (name === 'home') {
      jsonLdNodes = [organizationNode(), websiteNode(), webPageNode({ path: '/', name: title, description })]
    } else if (
      seo &&
      name &&
      name !== 'guide-detail' &&
      name !== 'mod-detail' &&
      name !== 'advanced-tip-detail'
    ) {
      jsonLdNodes = [
        organizationNode(),
        websiteNode(),
        webPageNode({ path, name: title, description }),
      ]
    }
  }

  const ld = toJsonLdGraph(...jsonLdNodes)

  applyDocumentSeo({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImageAbs: ogImage,
    ogType,
    jsonLd: ld,
  })
}

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import advancedTips from '../data/advancedTips.js'
import guides from '../data/guides.js'
import mods from '../data/mods.js'
import {
  AUTHOR_NAME,
  SITE_NAME,
  SITE_TAGLINE,
  TWITTER_SITE_HANDLE,
  absoluteUrl,
  absoluteOgImage,
} from '../seo/siteConfig.js'
import {
  articleNode,
  organizationNode,
  toJsonLdGraph,
  webPageNode,
  websiteNode,
} from '../seo/jsonLd.js'

const route = useRoute()

const headPayload = computed(() => {
  const path = route.path
  const canonical = absoluteUrl(path)

  let title = `${SITE_NAME} | Wiki, Tips & Steam Help`
  let description = SITE_TAGLINE
  let keywords = 'Super Battle Golf, wiki, Steam, guides'
  let ogType = 'website'
  let ogImage = absoluteOgImage()

  /** @type {Record<string, unknown>[]} */
  let jsonLdNodes = [organizationNode(), websiteNode()]

  if (route.name === 'guide-detail') {
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
        webPageNode({
          path,
          name: g.title,
          description,
        }),
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
  } else if (route.name === 'advanced-tip-detail') {
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
          webPageNode({
            path,
            name: t.title,
            description,
          }),
        ]
      } else {
        ogType = 'article'
        ogImage = absoluteOgImage(t.imageSrc)
        jsonLdNodes = [
          organizationNode(),
          websiteNode(),
          webPageNode({
            path,
            name: t.title,
            description,
          }),
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
  } else if (route.name === 'mod-detail') {
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
        webPageNode({
          path,
          name: m.title,
          description,
        }),
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

    if (route.name === 'home') {
      jsonLdNodes = [organizationNode(), websiteNode(), webPageNode({ path: '/', name: title, description })]
    } else if (
      seo &&
      route.name &&
      route.name !== 'guide-detail' &&
      route.name !== 'mod-detail' &&
      route.name !== 'advanced-tip-detail'
    ) {
      jsonLdNodes = [
        organizationNode(),
        websiteNode(),
        webPageNode({ path, name: title, description }),
      ]
    }
  }

  const ld = toJsonLdGraph(...jsonLdNodes)

  const meta = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: AUTHOR_NAME },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:type', content: ogType },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ]

  if (TWITTER_SITE_HANDLE) {
    const at = `@${TWITTER_SITE_HANDLE.replace(/^@/, '')}`
    meta.push({ name: 'twitter:site', content: at })
    meta.push({ name: 'twitter:creator', content: at })
  }

  return {
    title,
    htmlAttrs: { lang: 'en' },
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'en', href: canonical },
      { rel: 'alternate', hreflang: 'x-default', href: canonical },
    ],
    meta,
    script: [
      {
        key: 'ld-json-site',
        type: 'application/ld+json',
        textContent: JSON.stringify(ld),
      },
    ],
  }
})

useHead(headPayload)
</script>

<template>
  <span class="site-head-root" aria-hidden="true" />
</template>

<style scoped>
.site-head-root {
  position: fixed;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  pointer-events: none;
}
</style>

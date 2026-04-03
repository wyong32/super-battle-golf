import {
  SITE_NAME,
  SITE_ORIGIN,
  SITE_TAGLINE,
  SOCIAL_SAME_AS,
  absoluteUrl,
  absoluteOgImage,
} from './siteConfig.js'

const ORG_ID = `${SITE_ORIGIN}/#organization`
const WEBSITE_ID = `${SITE_ORIGIN}/#website`

export function organizationNode() {
  const node = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    description: SITE_TAGLINE,
    logo: {
      '@type': 'ImageObject',
      url: absoluteOgImage(),
    },
  }
  if (SOCIAL_SAME_AS.length) {
    node.sameAs = [...SOCIAL_SAME_AS]
  }
  return node
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_ORIGIN}/`,
    name: SITE_NAME,
    description: SITE_TAGLINE,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_ORIGIN}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function webPageNode({ path, name, description }) {
  return {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
  }
}

export function articleNode({ path, headline, description, datePublished, dateModified, imageSrc }) {
  const images = imageSrc ? [absoluteOgImage(imageSrc)] : [absoluteOgImage()]
  return {
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    mainEntityOfPage: { '@id': `${absoluteUrl(path)}#webpage` },
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    image: images,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  }
}

export function toJsonLdGraph(...nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  }
}

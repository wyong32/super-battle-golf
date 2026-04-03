/** Production canonical host (override with VITE_SITE_ORIGIN for staging). */
export const SITE_ORIGIN = (import.meta.env.VITE_SITE_ORIGIN || 'https://superbattlegolf.org').replace(
  /\/$/,
  '',
)

export const SITE_NAME = 'Super Battle Golf Guide'
/** Default meta description fallback (matches `SEO.home` in router/seoMeta.js). */
export const SITE_TAGLINE =
  'Super Battle Golf wiki & guides: all maps and holes, ten weapons, Steam achievements, cosmetics, mods on PC, and troubleshooting. Unofficial fan site.'

/** Shown in meta author / schema (Escape the Backrooms style). */
export const AUTHOR_NAME = 'Super Battle Golf Guide contributors'

/**
 * Organization sameAs URLs for JSON-LD (add Steam community, X, Discord, etc. when available).
 * @type {string[]}
 */
export const SOCIAL_SAME_AS = []

/** Default share image — same as site logo (Open Graph / Twitter / JSON-LD fallback). */
export const DEFAULT_OG_IMAGE_PATH = '/images/logo.png'

/** Optional X (Twitter) @handle without @ — add when you have a brand account. */
export const TWITTER_SITE_HANDLE = ''

export function absoluteUrl(pathname) {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${SITE_ORIGIN}${path}`
}

export function absoluteOgImage(imageSrc) {
  if (!imageSrc) return absoluteUrl(DEFAULT_OG_IMAGE_PATH)
  if (/^https?:\/\//i.test(imageSrc)) return imageSrc
  return absoluteUrl(imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`)
}

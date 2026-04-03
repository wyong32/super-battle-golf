/**
 * Build in-site `href` for plain `<a>` tags, respecting Vite `import.meta.env.BASE_URL`.
 * Accepts `/path`, `/path?query=1`, `/path#section`, or combined.
 */
export function appHref(pathOrLocation) {
  const raw = typeof pathOrLocation === 'string' ? pathOrLocation : pathOrLocation?.path || '/'
  let hash = ''
  let pathAndQuery = raw
  const hi = raw.indexOf('#')
  if (hi >= 0) {
    hash = raw.slice(hi)
    pathAndQuery = raw.slice(0, hi)
  }
  const qi = pathAndQuery.indexOf('?')
  const pathname = qi >= 0 ? pathAndQuery.slice(0, qi) : pathAndQuery
  const search = qi >= 0 ? pathAndQuery.slice(qi) : ''
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`
  const b = import.meta.env.BASE_URL || '/'
  if (b === '/') {
    return `${p}${search}${hash}`
  }
  const base = b.endsWith('/') ? b.slice(0, -1) : b
  return `${base}${p}${search}${hash}`
}

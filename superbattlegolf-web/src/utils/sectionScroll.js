import { nextTick, onMounted, onUnmounted, ref, unref, watch } from 'vue'

/** Offset below fixed header (px) — shared by smooth scroll + TOC spy */
export const SECTION_SCROLL_OFFSET = 80

/**
 * Scroll to first element with matching `data-section` (no URL hash).
 */
export function scrollToSection(key) {
  return nextTick().then(() => {
    const el = document.querySelector(`[data-section="${key}"]`)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - SECTION_SCROLL_OFFSET
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  })
}

/**
 * Highlights the TOC entry for whichever `[data-section]` block is nearest above the scroll line.
 * @param {import('vue').Ref<string[]> | (() => string[]) | string[]} keysSource ordered section keys
 * @param {{ offset?: number }} [options] extra pixels below top (after fixed header)
 */
export function useScrollSpySections(keysSource, options = {}) {
  const extra = options.offset ?? 12
  const activeKey = ref('')

  function getKeys() {
    const k = unref(keysSource)
    return Array.isArray(k) ? k : []
  }

  function findActive() {
    const sectionKeys = getKeys()
    if (!sectionKeys.length) return
    const y = window.scrollY + SECTION_SCROLL_OFFSET + extra
    let current = sectionKeys[0]
    for (const key of sectionKeys) {
      const el = document.querySelector(`[data-section="${key}"]`)
      if (!el) continue
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= y) current = key
    }
    if (activeKey.value !== current) activeKey.value = current
  }

  onMounted(async () => {
    await nextTick()
    findActive()
    window.addEventListener('scroll', findActive, { passive: true })
    window.addEventListener('resize', findActive, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', findActive)
    window.removeEventListener('resize', findActive)
  })

  watch(
    () => getKeys().join('\0'),
    () => nextTick().then(findActive),
  )

  return { activeKey }
}

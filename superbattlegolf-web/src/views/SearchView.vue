<template>
  <div class="page sv">
    <PageHero eyebrow="Site search" title="Search Super Battle Golf" heading-id="sv-title" :show-bottom-rule="false">
      <p class="sv-lead">
        Wiki topics, guides, mods, and list shortcuts — same index as the home search, on a full page.
      </p>
    </PageHero>

    <div class="container sv-body">
      <form class="sv-form" role="search" aria-label="Search site" @submit.prevent="onSubmit">
        <label class="sv-label" for="sv-q">Query</label>
        <div class="sv-row">
          <input
            id="sv-q"
            v-model.trim="qInput"
            type="search"
            class="sv-input"
            placeholder="Wiki topics, guides, Steam, items…"
            autocomplete="off"
          />
          <button type="submit" class="sv-btn">Search</button>
        </div>
      </form>

      <p v-if="hintTooShort" class="sv-hint">Enter at least 2 characters to see matches.</p>
      <p v-else-if="hintEmpty" class="sv-hint">Type a query and press Search, or open this page from the home search bar.</p>
      <p v-else-if="!searchResults.length" class="sv-empty">No results for “{{ activeQuery }}”. Try another word or browse the <a :href="appHref('/wiki')">wiki</a>.</p>

      <ul v-else class="sv-hits" aria-label="Search results">
        <li v-for="hit in searchResults" :key="hit.kind + hit.key">
          <a :href="appHref(hit.to)" class="sv-hit-link">{{ hit.title }}</a>
          <span class="sv-hit-meta">{{ hit.kind }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import { appHref } from '../utils/appHref.js'
import advancedTips from '../data/advancedTips.js'
import guides from '../data/guides.js'
import mods from '../data/mods.js'
import wikiWeapons from '../data/wiki/weapons.js'
import wikiMaps from '../data/wiki/maps.js'
import wikiAchievements from '../data/wiki/achievements.js'
import wikiCosmetics from '../data/wiki/cosmetics.js'

const route = useRoute()
const router = useRouter()

/** Wiki hub rows (mirrors cards on /wiki — not loaded from a separate data file). */
const wikiHubSearch = [
  { id: 1, title: 'Weapons & items', to: '/wiki/weapons' },
  { id: 2, title: 'Maps & courses', to: '/wiki/maps' },
  { id: 3, title: 'Achievement cosmetics', to: '/wiki/cosmetics' },
  { id: 4, title: 'Steam achievements', to: '/wiki/achievements' },
]

/** Flat wiki rows for title / key matching (hub, weapons, maps, achievements). */
const wikiSearchEntries = [
  ...wikiHubSearch.map((s) => ({
    kind: 'Wiki',
    title: s.title,
    key: `hub-${s.id}`,
    to: s.to,
  })),
  ...wikiWeapons.map((w) => ({
    kind: 'Wiki',
    title: `${w.name} (weapon)`,
    key: `w-${w.slug}`,
    to: `/wiki/weapons?focus=weapon-${w.slug}`,
  })),
  ...wikiMaps.flatMap((course) =>
    course.holes.map((hole) => ({
      kind: 'Wiki',
      title: `${course.name} · ${hole.name} (Hole ${hole.order}) (course)`,
      key: `h-${course.id}-${hole.slug}`,
      to: `/wiki/maps?focus=${course.id}-${hole.slug}`,
    })),
  ),
  ...wikiAchievements.map((a) => ({
    kind: 'Wiki',
    title: `${a.name} (achievement)`,
    key: `a-${a.slug}`,
    to: `/wiki/achievements?focus=achievement-${a.slug}`,
  })),
  ...wikiCosmetics.map((c) => ({
    kind: 'Wiki',
    title: `${c.title} (cosmetic)`,
    key: `c-${c.slug}`,
    to: `/wiki/cosmetics?focus=cosmetic-${c.slug}`,
  })),
]

const qInput = ref(typeof route.query.q === 'string' ? route.query.q : '')

watch(
  () => route.query.q,
  (v) => {
    qInput.value = typeof v === 'string' ? v : ''
  },
)

const activeQuery = computed(() =>
  typeof route.query.q === 'string' ? route.query.q.trim() : '',
)

const hintEmpty = computed(() => activeQuery.value.length === 0)
const hintTooShort = computed(() => activeQuery.value.length === 1)

const searchResults = computed(() => {
  const q = activeQuery.value.toLowerCase()
  if (q.length < 2) return []

  const fromGuides = guides
    .filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.addressBar.toLowerCase().includes(q),
    )
    .map((g) => ({
      kind: 'Guide',
      title: g.title,
      key: g.addressBar,
      to: `/guides/${g.addressBar}`,
    }))

  const fromAdvanced = advancedTips
    .filter((t) => {
      const kw = (t.seo?.keywords || '').toLowerCase()
      const tags = (t.tags || []).join(' ').toLowerCase()
      return (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.addressBar.toLowerCase().includes(q) ||
        kw.includes(q) ||
        tags.includes(q)
      )
    })
    .map((t) => ({
      kind: 'Technique',
      title: t.title,
      key: `adv-${t.addressBar}`,
      to:
        t.hasDetailPage === false && t.linkOut?.href
          ? t.linkOut.href
          : `/advanced/${t.addressBar}`,
    }))

  const fromMods = mods
    .filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.addressBar.toLowerCase().includes(q),
    )
    .map((m) => ({
      kind: 'PC tool',
      title: m.title,
      key: m.addressBar,
      to: `/mods/${m.addressBar}`,
    }))

  const fromWiki = wikiSearchEntries
    .filter((t) => t.title.toLowerCase().includes(q) || t.key.toLowerCase().includes(q))
    .map((t) => ({
      kind: t.kind,
      title: t.title,
      key: t.key,
      to: t.to,
    }))

  return [...fromGuides, ...fromAdvanced, ...fromMods, ...fromWiki]
})

function onSubmit() {
  const q = qInput.value.trim()
  router.replace({ path: '/search', query: q ? { q } : {} })
}
</script>

<style scoped>
.page {
  padding: 0 0 3.5rem;
}

.sv-lead {
  margin: 0;
  max-width: 44rem;
  font-size: 0.92rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.sv-body {
  padding-top: 1.25rem;
}

.sv-form {
  margin-bottom: 1.25rem;
}

.sv-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 800;
  font-family: var(--font-heading);
  margin-bottom: 0.35rem;
  color: #fef9c3;
}

.sv-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.sv-input {
  flex: 1 1 220px;
  min-height: 3rem;
  padding: 0 1rem;
  border-radius: 999px;
  border: 3px solid #0f172a;
  background: rgba(8, 14, 26, 0.92);
  color: var(--color-text);
  font-size: 1rem;
  outline: none;
  box-shadow: 0 4px 0 rgba(15, 23, 42, 0.45);
}

.sv-input:focus {
  border-color: #4ade80;
}

.sv-btn {
  min-height: 3rem;
  padding: 0 1.25rem;
  border-radius: 999px;
  border: 3px solid #0f172a;
  font-weight: 900;
  font-family: var(--font-heading);
  cursor: pointer;
  background: linear-gradient(135deg, #f472b6, #a78bfa);
  color: #0f172a;
  box-shadow: 0 4px 0 rgba(15, 23, 42, 0.55);
}

.sv-btn:hover {
  filter: brightness(1.06);
}

.sv-hint,
.sv-empty {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(203, 213, 225, 0.9);
}

.sv-empty a {
  color: #7dd3fc;
  font-weight: 700;
}

.sv-hits {
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 1rem;
  border: 3px solid rgba(56, 189, 248, 0.35);
  background: rgba(10, 20, 36, 0.88);
  overflow: hidden;
}

.sv-hits li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.6rem 0.95rem;
  border-bottom: 2px dashed rgba(148, 184, 168, 0.15);
  margin: 0;
}

.sv-hits li:last-child {
  border-bottom: none;
}

.sv-hit-link {
  font-weight: 800;
  color: #fffbeb;
  text-decoration: none;
}

.sv-hit-link:hover {
  color: #fde047;
}

.sv-hit-meta {
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a5f3fc;
  flex-shrink: 0;
}
</style>

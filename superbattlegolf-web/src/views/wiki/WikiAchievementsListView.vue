<template>
  <div class="page wal wiki-page">
    <PageHero eyebrow="Super Battle Golf · Steam" title="Super Battle Golf Steam achievements" heading-id="wal-title" :show-bottom-rule="false">
      <p class="wal-lead">
        All <strong>34</strong> milestones with global unlock percentages shown on each card.
        Rare entries (under about 10% worldwide) also include short community-written tips layered under the in-game description.
      </p>
    </PageHero>

    <section class="wal-hero-strip" aria-labelledby="wal-hero-title">
      <div class="container wal-hero-inner">
        <div class="wal-hero-copy">
          <p id="wal-hero-title" class="wal-hero-kicker">Community deep-dive</p>
          <h2 class="wal-hero-h">Rare achievements &amp; cosmetic rewards</h2>
          <p class="wal-hero-deck">
            Tough unlocks get extra notes on setups, items, and map picks — written from community play, not patch notes.
            Cosmetic reward counts are listed where the community sheet recorded them.
          </p>
        </div>
      </div>
    </section>

    <div class="container wal-body">
      <nav class="wiki-crumb" aria-label="Breadcrumb">
        <a :href="appHref('/wiki')">Wiki</a>
        <span class="wiki-crumb-sep" aria-hidden="true">/</span>
        <span class="wiki-crumb-here">Steam achievements</span>
      </nav>

      <div class="wal-toolbar" role="toolbar" aria-label="Filter achievements">
        <span class="wal-toolbar-label">Show</span>
        <div class="wal-filters">
          <button
            v-for="opt in filterOptions"
            :key="opt.id"
            type="button"
            class="wal-filter"
            :class="{ 'is-active': filter === opt.id }"
            @click="filter = opt.id"
          >
            {{ opt.label }}
            <span class="wal-filter-count">{{ opt.count }}</span>
          </button>
        </div>
      </div>

      <div class="wal-layout">
        <aside class="wal-toc-wrap" aria-label="Jump to achievement">
          <nav class="wal-toc wiki-toc-panel">
            <p class="wal-toc-h wiki-toc-title">{{ visible.length }} listed</p>
            <div class="wal-toc-grid">
              <button
                v-for="a in visible"
                :key="a.slug"
                type="button"
                class="wal-toc-btn"
                :title="a.name"
                :class="{ 'is-active': activeSection === `achievement-${a.slug}` }"
                :aria-current="activeSection === `achievement-${a.slug}` ? 'location' : undefined"
                @click="scrollTo(`achievement-${a.slug}`)"
              >
                <span class="wal-toc-name">{{ a.name }}</span>
              </button>
            </div>
          </nav>
        </aside>

        <div class="wal-stack">
          <article
            v-for="a in visible"
            :key="a.slug"
            class="wal-card wiki-entry wiki-entry--achievements"
            :class="{ 'wal-card--community': a.seaTea, 'wal-card--rare': isRarePct(a.steamGlobal) }"
            :data-section="`achievement-${a.slug}`"
            tabindex="-1"
          >
            <div class="wal-card-grid">
              <div class="wal-card-main">
                <div class="wal-card-top">
                  <span class="wal-pct" :title="'Global unlock rate'">{{ a.steamGlobal }}</span>
                  <h2 class="wal-name">{{ a.name }}</h2>
                  <span v-if="a.seaTea" class="wal-reward-tag">{{ a.seaTea.rewardCount }} cosmetics</span>
                  <span v-if="isRarePct(a.steamGlobal)" class="wal-rare-tag">Rare</span>
                </div>
                <p class="wal-desc">{{ a.description }}</p>

                <div v-if="a.seaTea" class="wal-community wiki-prose" v-html="a.seaTea.html" />

                <div class="wal-extra-block">
                  <p class="wal-extra-kicker">Extra notes</p>
                  <div class="wal-extra wiki-prose" v-html="a.detailsHtml" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import PageHero from '../../components/PageHero.vue'
import { appHref } from '../../utils/appHref.js'
import achievements from '../../data/wiki/achievements.js'
import communityBySlug from '../../data/wiki/achievementsCommunity.js'
import { scrollToSection, useScrollSpySections } from '../../utils/sectionScroll.js'

const merged = computed(() =>
  achievements.map((a) => ({
    ...a,
    seaTea: communityBySlug[a.slug] ?? null,
  })),
)

function isRarePct(sg) {
  if (!sg || sg === '—') return false
  const n = parseFloat(String(sg).replace(/%/g, '').trim())
  return !Number.isNaN(n) && n < 10
}

const filter = ref('all')

const visible = computed(() => {
  const m = merged.value
  if (filter.value === 'rare') return m.filter((a) => isRarePct(a.steamGlobal))
  if (filter.value === 'community') return m.filter((a) => a.seaTea)
  return m
})

const filterOptions = computed(() => {
  const m = merged.value
  const rareN = m.filter((a) => isRarePct(a.steamGlobal)).length
  const comN = m.filter((a) => a.seaTea).length
  return [
    { id: 'all', label: 'All', count: m.length },
    { id: 'rare', label: 'Rare (<10%)', count: rareN },
    { id: 'community', label: 'Community guide', count: comN },
  ]
})

const sectionKeys = computed(() => visible.value.map((a) => `achievement-${a.slug}`))
const { activeKey: activeSection } = useScrollSpySections(sectionKeys)

function scrollTo(key) {
  scrollToSection(key)
}
</script>

<style scoped>
.page {
  padding: 0;
}

.wal-lead {
  margin: 0;
  max-width: 48rem;
  font-size: 0.92rem;
  line-height: 1.58;
  color: rgba(196, 219, 212, 0.92);
}

.wal-hero-strip {
  padding: 1.5rem 0 1.75rem;
  background:
    linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.55) 100%),
    radial-gradient(ellipse 70% 60% at 100% 0%, rgba(167, 139, 250, 0.12), transparent 55%);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.wal-hero-inner {
  max-width: 44rem;
}

.wal-hero-kicker {
  margin: 0 0 0.35rem;
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fde047;
}

.wal-hero-h {
  margin: 0 0 0.55rem;
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
  font-weight: 900;
  color: #f8fafc;
  line-height: 1.2;
}

.wal-hero-deck {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #cbd5e1;
}

.wal-body {
  padding-top: 1rem;
}

.wal-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.85rem;
  margin-bottom: 1.25rem;
  padding: 0.65rem 0;
  border-bottom: 1px dashed rgba(148, 163, 184, 0.2);
}

.wal-toolbar-label {
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
}

.wal-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.wal-filter {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  background: rgba(15, 23, 42, 0.35);
  color: #cbd5e1;
  font-size: 0.72rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  transition:
    border-color 0.12s ease,
    background 0.12s ease;
}

.wal-filter:hover {
  border-color: rgba(253, 224, 71, 0.3);
}

.wal-filter.is-active {
  border-color: rgba(253, 224, 71, 0.5);
  background: rgba(30, 27, 14, 0.55);
  color: #fef9c3;
}

.wal-filter-count {
  font-size: 0.62rem;
  font-weight: 900;
  opacity: 0.85;
  padding: 0.08rem 0.35rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.25);
}

.wal-layout {
  display: grid;
  gap: 1.5rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .wal-layout {
    grid-template-columns: 13.5rem 1fr;
    gap: 1.75rem;
  }

  .wal-toc-wrap {
    position: sticky;
    top: 5.75rem;
    max-height: calc(100vh - 6.5rem);
    overflow: auto;
  }
}

.wal-toc {
  margin: 0;
}

.wal-toc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.3rem;
}

.wal-toc-btn {
  display: block;
  width: 100%;
  text-align: left;
  font: inherit;
  cursor: pointer;
  appearance: none;
  border: 1px solid transparent;
  border-radius: 0.45rem;
  padding: 0.38rem 0.42rem;
  min-height: 2.35rem;
  background: rgba(15, 23, 42, 0.3);
  color: inherit;
  transition:
    border-color 0.12s ease,
    background 0.12s ease;
}

.wal-toc-btn:hover {
  border-color: rgba(253, 224, 71, 0.25);
  background: rgba(30, 27, 15, 0.5);
}

.wal-toc-btn.is-active {
  border-color: rgba(253, 224, 71, 0.45);
  background: rgba(30, 27, 14, 0.65);
}

.wal-toc-name {
  font-size: 0.62rem;
  font-weight: 700;
  line-height: 1.2;
  color: #cbd5e1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.wal-toc-btn.is-active .wal-toc-name {
  color: #fef9c3;
}

@media (max-width: 1023px) {
  .wal-toc {
    padding: 0.65rem;
  }
}

.wal-stack {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
}

.wal-card {
  border-radius: 1rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(8, 12, 26, 0.55);
  padding: 0;
  overflow: hidden;
}

.wal-card--rare {
  border-color: rgba(167, 139, 250, 0.28);
}

.wal-card--community {
  border-color: rgba(253, 224, 71, 0.22);
  box-shadow: 0 0 0 1px rgba(253, 224, 71, 0.06);
}

.wal-card-grid {
  display: block;
}

.wal-card-main {
  padding: 1rem 1.1rem 1.05rem;
}

.wal-card-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem 0.65rem;
  margin-bottom: 0.45rem;
}

.wal-pct {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: rgba(15, 23, 42, 0.95);
  min-width: 3.1rem;
  padding: 0.28rem 0.45rem;
  border-radius: 0.4rem;
  background: rgba(253, 224, 71, 0.92);
  text-align: center;
}

.wal-name {
  margin: 0;
  flex: 1 1 8rem;
  font-size: 1.05rem;
  font-weight: 800;
  font-family: var(--font-heading);
  color: #f8fafc;
  line-height: 1.25;
}

.wal-reward-tag {
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.45rem;
  border-radius: 999px;
  color: #422006;
  border: 1px solid rgba(253, 224, 71, 0.55);
  background: rgba(253, 224, 71, 0.35);
}

.wal-rare-tag {
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.2rem 0.45rem;
  border-radius: 999px;
  color: #e9d5ff;
  border: 1px solid rgba(167, 139, 250, 0.45);
  background: rgba(88, 28, 135, 0.25);
}

.wal-desc {
  margin: 0 0 0.55rem;
  font-size: 0.86rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.wal-community {
  margin: 0.5rem 0 0.65rem;
  padding: 0.75rem 0.85rem;
  border-radius: 0.55rem;
  border-left: 3px solid rgba(253, 224, 71, 0.55);
  background: rgba(30, 27, 14, 0.35);
}

.wal-community :deep(p) {
  margin: 0 0 0.5rem;
  font-size: 0.82rem;
  line-height: 1.55;
  color: rgba(226, 232, 240, 0.95);
}

.wal-community :deep(p:last-child) {
  margin-bottom: 0;
}

.wal-community :deep(ul.wal-stea-tips) {
  margin: 0.35rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.8rem;
  line-height: 1.45;
  color: rgba(203, 213, 225, 0.95);
}

.wal-extra-block {
  margin-top: 0.35rem;
  border-radius: 0.45rem;
  border: 1px solid rgba(148, 163, 184, 0.15);
  background: rgba(15, 23, 42, 0.35);
  padding: 0.5rem 0.65rem 0.6rem;
}

.wal-extra-kicker {
  margin: 0 0 0.4rem;
  font-size: 0.72rem;
  font-weight: 800;
  color: #94a3b8;
}

.wal-extra :deep(p) {
  margin: 0.35rem 0 0;
  font-size: 0.78rem;
  line-height: 1.5;
  color: rgba(148, 163, 184, 0.95);
}

.wal-extra :deep(p:first-child) {
  margin-top: 0;
}

.wal-extra :deep(strong) {
  color: #cbd5e1;
}
</style>

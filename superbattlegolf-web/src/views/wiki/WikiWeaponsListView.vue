<template>
  <div class="page wwl wiki-page">
    <PageHero eyebrow="Super Battle Golf · Arsenal" title="Super Battle Golf weapons &amp; items" heading-id="wwl-title" :show-bottom-rule="false">
      <p class="wwl-lead">
        All <strong>ten</strong> purple-briefcase tools in one list — what each does, when to bring it, and how it fits a fight.
      </p>
    </PageHero>

    <div class="container wwl-body">
      <nav class="wiki-crumb" aria-label="Breadcrumb">
        <a :href="appHref('/wiki')">Wiki</a>
        <span class="wiki-crumb-sep" aria-hidden="true">/</span>
        <span class="wiki-crumb-here">Weapons &amp; items</span>
      </nav>

      <div class="wwl-layout">
        <aside class="wwl-toc-wrap" aria-label="Jump to item">
          <nav class="wwl-toc wiki-toc-panel">
            <p class="wwl-toc-h wiki-toc-title">On this list</p>
            <button
              v-for="w in weapons"
              :key="w.slug"
              type="button"
              class="wwl-toc-btn"
              :class="{ 'is-active': activeSection === `weapon-${w.slug}` }"
              :aria-current="activeSection === `weapon-${w.slug}` ? 'location' : undefined"
              @click="scrollTo(`weapon-${w.slug}`)"
            >
              <span class="wwl-toc-name">{{ w.name }}</span>
              <span class="wwl-toc-role">{{ w.role }}</span>
            </button>
          </nav>
        </aside>

        <div class="wwl-stack">
          <article
            v-for="w in weapons"
            :key="w.slug"
            class="wwl-card wiki-entry"
            :data-section="`weapon-${w.slug}`"
            tabindex="-1"
          >
            <div class="wwl-card-top">
              <div class="wwl-shot">
                <img
                  class="wwl-thumb"
                  :src="w.image"
                  :alt="w.name"
                  width="160"
                  height="90"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <header class="wwl-card-head">
                <span class="wwl-role">{{ w.role }}</span>
                <h2 class="wwl-name">{{ w.name }}</h2>
                <p class="wwl-tagline">{{ w.tagline }}</p>
                <p class="wwl-blurb">{{ w.listBlurb }}</p>
              </header>
            </div>
            <div class="wwl-prose wiki-prose" v-html="w.detailsHtml" />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PageHero from '../../components/PageHero.vue'
import { appHref } from '../../utils/appHref.js'
import weapons from '../../data/wiki/weapons.js'
import { scrollToSection, useScrollSpySections } from '../../utils/sectionScroll.js'

const sectionKeys = computed(() => weapons.map((w) => `weapon-${w.slug}`))
const { activeKey: activeSection } = useScrollSpySections(sectionKeys)

function scrollTo(key) {
  scrollToSection(key)
}
</script>

<style scoped>
.page {
  padding: 0;
}

.wwl-lead {
  margin: 0;
  max-width: 46rem;
  font-size: 0.92rem;
  line-height: 1.58;
  color: rgba(196, 219, 212, 0.92);
}

.wwl-body {
  padding-top: 1rem;
}

.wwl-layout {
  display: grid;
  gap: 1.5rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .wwl-layout {
    grid-template-columns: 14rem 1fr;
    gap: 2rem;
  }

  .wwl-toc-wrap {
    position: sticky;
    top: 5.75rem;
  }
}

.wwl-toc {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.wwl-toc-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.08rem;
  width: 100%;
  text-align: left;
  font: inherit;
  cursor: pointer;
  appearance: none;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.45rem 0.45rem 0.5rem;
  background: rgba(15, 23, 42, 0.35);
  color: inherit;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.wwl-toc-btn:hover {
  border-color: rgba(56, 189, 248, 0.2);
  background: rgba(15, 23, 42, 0.55);
}

.wwl-toc-btn.is-active {
  border-color: rgba(74, 222, 128, 0.35);
  background: rgba(15, 23, 42, 0.7);
}

.wwl-toc-btn.is-active .wwl-toc-name {
  color: #bbf7d0;
}

.wwl-toc-name {
  font-size: 0.72rem;
  font-weight: 800;
  color: #86efac;
  line-height: 1.25;
}

.wwl-toc-role {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #64748b;
}

@media (max-width: 1023px) {
  .wwl-toc {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 0.4rem;
    padding: 0.65rem 0.65rem 0.7rem;
  }

  .wwl-toc-h {
    width: 100%;
    margin-bottom: 0.15rem;
  }

  .wwl-toc-btn {
    flex: 1 1 auto;
    min-width: calc(50% - 0.25rem);
  }
}

.wwl-stack {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  min-width: 0;
}

.wwl-card-top {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 0.85rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.08);
}

.wwl-shot {
  flex-shrink: 0;
  padding: 0.35rem;
  border-radius: 0.5rem;
  background: linear-gradient(145deg, rgba(255, 251, 235, 0.06) 0%, rgba(15, 23, 42, 0.75) 100%);
  border: 1px solid rgba(74, 222, 128, 0.15);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.wwl-thumb {
  display: block;
  width: 10rem;
  max-width: 38vw;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 0.35rem;
  background: rgba(15, 23, 42, 0.6);
}

.wwl-card-head {
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
}

.wwl-role {
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #86efac;
  margin-bottom: 0.35rem;
}

.wwl-name {
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: #f8fafc;
}

.wwl-tagline {
  margin: 0 0 0.4rem;
  font-size: 0.88rem;
  color: #a5f3fc;
  font-weight: 700;
}

.wwl-blurb {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--color-muted);
}

</style>

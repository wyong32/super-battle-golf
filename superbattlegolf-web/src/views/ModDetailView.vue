<template>
  <div class="page md">
    <template v-if="mod">
      <div class="container md-wrap">
        <nav class="md-crumb" aria-label="Breadcrumb">
          <a :href="appHref('/mods')">Mods</a>
          <span aria-hidden="true"> / </span>
          <span>{{ mod.title }}</span>
        </nav>

        <header class="md-head">
          <h1 id="md-title" class="md-title">
            <span class="md-h1-game">Super Battle Golf mod</span><span class="md-h1-sep"> — </span><span class="md-h1-article">{{ mod.title }}</span>
          </h1>
          <p class="md-deck">{{ mod.description }}</p>
          <time class="md-date" :datetime="mod.publishDate">Updated {{ formatDate(mod.publishDate) }}</time>
        </header>

        <div class="md-split">
          <div class="md-main mod-prose" v-html="mod.detailsHtml" />
          <aside class="md-aside" aria-label="Article sidebar">
            <figure class="md-figure">
              <img :src="mod.imageSrc" :alt="mod.imageAlt" width="800" height="420" loading="lazy" />
            </figure>
            <div v-if="mod.tags?.length" class="md-tags">
              <span class="md-tags-label">Tags</span>
              <ul class="md-tag-list">
                <li v-for="tag in mod.tags" :key="tag">{{ tag }}</li>
              </ul>
            </div>
            <a :href="appHref('/mods')" class="md-all">← All mods</a>
          </aside>
        </div>
      </div>
    </template>

    <div v-else class="container md-missing">
      <h1 class="md-missing-title">Super Battle Golf mod — article not found</h1>
      <p>Browse <a :href="appHref('/mods')">Super Battle Golf mods</a> for all articles.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import mods from '../data/mods.js'
import { appHref } from '../utils/appHref.js'

const route = useRoute()
const mod = computed(() => mods.find((m) => m.addressBar === route.params.slug))

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(iso))
  } catch {
    return iso
  }
}
</script>

<style scoped>
.page {
  padding: 1.5rem 0 3.5rem;
}

.md-crumb {
  font-size: 0.85rem;
  font-weight: 700;
  color: #94a3b8;
  margin-bottom: 0.85rem;
}

.md-crumb a {
  color: #e9d5ff;
  text-decoration: none;
}

.md-crumb a:hover {
  text-decoration: underline;
}

.md-head {
  margin-bottom: 1.35rem;
  padding-bottom: 1.15rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  max-width: 48rem;
}

.md-title {
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: clamp(1.45rem, 3vw, 1.9rem);
  font-weight: 800;
  line-height: 1.15;
  color: #f8fafc;
}

.md-h1-game {
  color: #e9d5ff;
  font-weight: 800;
}

.md-h1-sep {
  font-weight: 600;
  color: #64748b;
}

.md-h1-article {
  color: #f8fafc;
}

.md-deck {
  margin: 0 0 0.5rem;
  font-size: 0.98rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.md-date {
  font-size: 0.82rem;
  font-weight: 800;
  color: #f472b6;
}

.md-split {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .md-split {
    grid-template-columns: 1fr minmax(0, 17.5rem);
    align-items: start;
    gap: 2rem;
  }
}

.md-main {
  padding: 1.05rem 1.15rem 1.3rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(244, 114, 182, 0.2);
  background: rgba(14, 12, 28, 0.65);
}

.mod-prose :deep(p) {
  margin-bottom: 0.9rem;
  color: var(--color-muted);
  line-height: 1.65;
  font-size: 0.94rem;
}

.mod-prose :deep(h3) {
  font-size: 1.05rem;
  margin: 1.15rem 0 0.45rem;
  font-family: var(--font-heading);
  font-weight: 800;
  color: #f1f5f9;
}

.mod-prose :deep(h4) {
  font-size: 0.98rem;
  margin: 0.85rem 0 0.35rem;
  font-family: var(--font-heading);
  font-weight: 800;
  color: #e2e8f0;
}

.mod-prose :deep(code) {
  font-size: 0.84em;
  padding: 0.12rem 0.35rem;
  border-radius: 0.3rem;
  background: rgba(15, 23, 42, 0.75);
  color: #fde68a;
  border: 1px solid rgba(148, 163, 184, 0.25);
}

.mod-prose :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
  margin: 0.5rem 0 1rem;
}

.mod-prose :deep(th),
.mod-prose :deep(td) {
  border: 1px solid rgba(148, 163, 184, 0.28);
  padding: 0.45rem 0.55rem;
  text-align: left;
  vertical-align: top;
}

.mod-prose :deep(th) {
  background: rgba(15, 23, 42, 0.55);
  color: #f1f5f9;
  font-weight: 800;
}

.mod-prose :deep(ul) {
  color: var(--color-muted);
  margin-bottom: 0.9rem;
  padding-left: 1.1rem;
  line-height: 1.55;
  font-size: 0.9rem;
}

.mod-prose :deep(strong) {
  color: var(--color-text);
}

.mod-prose :deep(a) {
  font-weight: 800;
  color: #f9a8d4;
}

.md-figure {
  margin: 0 0 1rem;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(192, 132, 252, 0.25);
  background: rgba(18, 14, 36, 0.5);
}

.md-figure img {
  width: 100%;
  height: auto;
  display: block;
}

.md-tags {
  margin-bottom: 1rem;
  padding: 0.75rem 0.85rem;
  border-radius: 0.65rem;
  border: 1px solid rgba(244, 114, 182, 0.2);
  background: rgba(28, 12, 28, 0.35);
}

.md-tags-label {
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 0.45rem;
}

.md-tag-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.md-tag-list li {
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  background: rgba(244, 114, 182, 0.12);
  color: #f9a8d4;
  border: 1px solid rgba(244, 114, 182, 0.28);
}

.md-all {
  font-size: 0.85rem;
  font-weight: 800;
  color: #f472b6;
  text-decoration: none;
}

.md-all:hover {
  text-decoration: underline;
}

.md-missing {
  padding-top: 2rem;
}

.md-missing-title {
  font-size: 1.5rem;
}
</style>

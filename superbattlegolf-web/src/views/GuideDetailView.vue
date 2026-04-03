<template>
  <div class="page gd">
    <template v-if="guide">
      <div class="container gd-wrap">
        <nav class="gd-crumb" aria-label="Breadcrumb">
          <a :href="appHref('/guides')">Guides</a>
          <span aria-hidden="true"> / </span>
          <span>{{ guide.title }}</span>
        </nav>

        <header class="gd-head">
          <h1 id="gd-title" class="gd-title">
            <span class="gd-h1-game">Super Battle Golf guide</span><span class="gd-h1-sep"> — </span><span class="gd-h1-article">{{ guide.title }}</span>
          </h1>
          <p class="gd-deck">{{ guide.description }}</p>
          <time class="gd-date" :datetime="guide.publishDate">Published {{ formatDate(guide.publishDate) }}</time>
        </header>

        <div class="gd-split">
          <div class="gd-main guide-prose" v-html="guide.detailsHtml" />
          <aside class="gd-aside" aria-label="Article sidebar">
            <figure class="gd-figure">
              <img :src="guide.imageSrc" :alt="guide.imageAlt" width="640" height="360" loading="lazy" />
            </figure>
            <div v-if="guide.tags?.length" class="gd-tags">
              <span class="gd-tags-label">Tags</span>
              <ul class="gd-tag-list">
                <li v-for="tag in guide.tags" :key="tag">{{ tag }}</li>
              </ul>
            </div>
            <a :href="appHref('/guides')" class="gd-all">← All guides</a>
          </aside>
        </div>
      </div>
    </template>

    <div v-else class="container gd-missing">
      <h1 class="gd-missing-title">Super Battle Golf guide — not found</h1>
      <p>The URL may be outdated. Return to the <a :href="appHref('/guides')">Super Battle Golf guides</a>.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import guides from '../data/guides.js'
import { appHref } from '../utils/appHref.js'

const route = useRoute()
const guide = computed(() => guides.find((g) => g.addressBar === route.params.slug))

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

.gd-crumb {
  font-size: 0.85rem;
  font-weight: 700;
  color: #94a3b8;
  margin-bottom: 0.85rem;
}

.gd-crumb a {
  color: #7dd3fc;
  text-decoration: none;
}

.gd-crumb a:hover {
  text-decoration: underline;
}

.gd-head {
  margin-bottom: 1.35rem;
  padding-bottom: 1.15rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  max-width: 48rem;
}

.gd-title {
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: clamp(1.45rem, 3vw, 1.9rem);
  font-weight: 800;
  line-height: 1.15;
  color: #f8fafc;
}

.gd-h1-game {
  color: #7dd3fc;
  font-weight: 800;
}

.gd-h1-sep {
  font-weight: 600;
  color: #64748b;
}

.gd-h1-article {
  color: #f8fafc;
}

.gd-deck {
  margin: 0 0 0.5rem;
  font-size: 0.98rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.gd-date {
  font-size: 0.82rem;
  font-weight: 800;
  color: #fde047;
}

.gd-split {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .gd-split {
    grid-template-columns: 1fr minmax(0, 17.5rem);
    align-items: start;
    gap: 2rem;
  }
}

.gd-main {
  padding: 1.05rem 1.15rem 1.3rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(56, 189, 248, 0.18);
  background: rgba(10, 18, 34, 0.65);
}

.guide-prose :deep(p) {
  margin-bottom: 0.9rem;
  color: var(--color-muted);
  line-height: 1.65;
  font-size: 0.94rem;
}

.guide-prose :deep(h3) {
  font-size: 1.05rem;
  margin: 1.15rem 0 0.45rem;
  font-family: var(--font-heading);
  font-weight: 800;
  color: #f1f5f9;
}

.guide-prose :deep(ul) {
  color: var(--color-muted);
  margin-bottom: 0.9rem;
  padding-left: 1.1rem;
  line-height: 1.55;
  font-size: 0.9rem;
}

.guide-prose :deep(strong) {
  color: var(--color-text);
}

.guide-prose :deep(a) {
  font-weight: 800;
  color: #7dd3fc;
}

.guide-prose :deep(.guide-fig) {
  margin: 1rem 0 1.15rem;
}

.guide-prose :deep(.guide-fig img) {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.5);
}

.guide-prose :deep(.guide-fig figcaption) {
  margin-top: 0.45rem;
  font-size: 0.8rem;
  line-height: 1.45;
  color: #94a3b8;
}

.gd-figure {
  margin: 0 0 1rem;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.15);
  background: rgba(15, 23, 42, 0.6);
}

.gd-figure img {
  width: 100%;
  height: auto;
  display: block;
}

.gd-tags {
  margin-bottom: 1rem;
  padding: 0.75rem 0.85rem;
  border-radius: 0.65rem;
  border: 1px solid rgba(74, 222, 128, 0.15);
  background: rgba(12, 28, 24, 0.35);
}

.gd-tags-label {
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 0.45rem;
}

.gd-tag-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.gd-tag-list li {
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  background: rgba(56, 189, 248, 0.12);
  color: #a5f3fc;
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.gd-all {
  font-size: 0.85rem;
  font-weight: 800;
  color: #4ade80;
  text-decoration: none;
}

.gd-all:hover {
  text-decoration: underline;
}

.gd-missing {
  padding-top: 2rem;
}

.gd-missing-title {
  font-size: 1.5rem;
}
</style>

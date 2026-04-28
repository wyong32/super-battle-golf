<template>
  <div class="page atx">
    <template v-if="blockedHomeOnly">
      <div class="container atx-blocked">
        <nav class="atx-crumb" aria-label="Breadcrumb">
          <a :href="appHref('/')">Home</a>
          <span class="atx-crumb-sep" aria-hidden="true">/</span>
          <a :href="appHref('/advanced')">Advanced techniques</a>
          <span class="atx-crumb-sep" aria-hidden="true">/</span>
          <span class="atx-crumb-here">{{ shortHeadline }}</span>
        </nav>
        <h1 class="atx-blocked-title">{{ tip.title }}</h1>
        <p class="atx-blocked-deck">
          This topic has no long-form advanced article yet — use the link below for the matching wiki entry, or return to
          <a :href="appHref('/advanced')">Advanced techniques</a>.
        </p>
        <div class="atx-blocked-actions">
          <a v-if="tip.linkOut" :href="appHref(tip.linkOut.href)" class="atx-blocked-btn atx-blocked-btn--primary">{{
            tip.linkOut.label
          }}</a>
          <a :href="appHref('/advanced')" class="atx-blocked-btn">Advanced hub</a>
        </div>
      </div>
    </template>

    <template v-else-if="tip">
      <header class="atx-hero">
        <div class="container">
          <nav class="atx-crumb" aria-label="Breadcrumb">
            <a :href="appHref('/')">Home</a>
            <span class="atx-crumb-sep" aria-hidden="true">/</span>
            <a :href="appHref('/advanced')">Advanced techniques</a>
            <span class="atx-crumb-sep" aria-hidden="true">/</span>
            <span class="atx-crumb-here">{{ shortHeadline }}</span>
          </nav>

          <div class="atx-hero-grid">
            <div class="atx-hero-copy">
              <p class="atx-eyebrow">Advanced technique</p>
              <h1 id="atx-title" class="atx-h1">{{ tip.title }}</h1>
              <p class="atx-deck">{{ tip.description }}</p>
              <ul class="atx-meta" aria-label="Article meta">
                <li>
                  <span class="atx-meta-k">Published</span>
                  <time class="atx-meta-v" :datetime="tip.publishDate">{{ formatDate(tip.publishDate) }}</time>
                </li>
                <li v-if="tip.tags?.length">
                  <span class="atx-meta-k">Tags</span>
                  <span class="atx-meta-tags">
                    <span v-for="tag in tip.tags" :key="tag" class="atx-tag">{{ tag }}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div class="atx-hero-media">
              <div v-if="heroMedia?.type === 'iframe'" class="atx-video-shell">
                <iframe
                  :src="heroMedia.src"
                  :title="heroMedia.title"
                  class="atx-video-frame"
                  width="560"
                  height="315"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  referrerpolicy="strict-origin-when-cross-origin"
                  loading="eager"
                />
              </div>
              <figure v-else-if="heroMedia?.type === 'image'" class="atx-fallback-fig">
                <img :src="heroMedia.src" :alt="heroMedia.alt" width="960" height="540" loading="eager" />
              </figure>
            </div>
          </div>
        </div>
      </header>

      <div class="container atx-body">
        <article class="atx-prose" aria-labelledby="atx-title" v-html="tip.detailsHtml" />
      </div>

      <div class="container atx-bottom">
        <a :href="appHref('/advanced')" class="atx-backhome">
          <span class="atx-backhome-arrow" aria-hidden="true">←</span>
          All Advanced techniques
        </a>
        <a
          v-if="hasMatchingGuide"
          :href="appHref('/guides/' + tip.addressBar)"
          class="atx-guide-link"
        >Open long-form guide layout →</a>
      </div>
    </template>

    <div v-else class="container atx-miss">
      <h1 class="atx-miss-title">Advanced technique not found</h1>
      <p>
        <a :href="appHref('/advanced')">Return to Advanced techniques</a>
        hub.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import advancedTips from '../data/advancedTips.js'
import guides from '../data/guides.js'
import { appHref } from '../utils/appHref.js'

const route = useRoute()

const tip = computed(() => {
  const slug = typeof route.params.slug === 'string' ? route.params.slug : ''
  return advancedTips.find((t) => t.addressBar === slug) ?? null
})

const blockedHomeOnly = computed(() => Boolean(tip.value && tip.value.hasDetailPage === false))

const hasMatchingGuide = computed(() => {
  const bar = tip.value?.addressBar
  return Boolean(bar && guides.some((g) => g.addressBar === bar))
})

const shortHeadline = computed(() => {
  const t = tip.value?.title || ''
  return t.length > 42 ? `${t.slice(0, 40)}…` : t
})

/** 详情顶区：优先 home 嵌入视频，否则封面图 */
const heroMedia = computed(() => {
  const t = tip.value
  if (!t) return null
  if (t.home?.embedSrc) {
    return {
      type: 'iframe',
      src: t.home.embedSrc,
      title: t.home.embedTitle || t.title,
    }
  }
  if (t.imageSrc) {
    return {
      type: 'image',
      src: t.imageSrc,
      alt: t.imageAlt || '',
    }
  }
  return null
})

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
  padding: 0 0 3.5rem;
}

.atx-hero {
  padding: 1.5rem 0 2.25rem;
  margin-bottom: 0;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.92) 100%),
    radial-gradient(ellipse 100% 80% at 50% 0%, rgba(99, 102, 241, 0.12), transparent 55%);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.atx-blocked {
  padding: 1.75rem 0 2.5rem;
  max-width: 40rem;
}

.atx-blocked-title {
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 2.5vw, 1.55rem);
  font-weight: 900;
  color: #f8fafc;
  line-height: 1.2;
}

.atx-blocked-deck {
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #cbd5e1;
}

.atx-blocked-deck a {
  color: #7dd3fc;
  font-weight: 700;
}

.atx-blocked-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.65rem;
}

.atx-blocked-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.9rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 800;
  text-decoration: none;
  border: 2px solid rgba(148, 163, 184, 0.35);
  color: #e2e8f0;
  background: rgba(15, 23, 42, 0.45);
}

.atx-blocked-btn:hover {
  border-color: rgba(253, 224, 71, 0.4);
}

.atx-blocked-btn--primary {
  border-color: rgba(253, 224, 71, 0.55);
  background: rgba(253, 224, 71, 0.12);
  color: #fef9c3;
}

.atx-crumb {
  font-size: 0.78rem;
  font-weight: 700;
  color: #94a3b8;
  margin-bottom: 1.25rem;
}

.atx-crumb a {
  color: #7dd3fc;
  text-decoration: none;
}

.atx-crumb a:hover {
  text-decoration: underline;
}

.atx-crumb-sep {
  margin: 0 0.35rem;
  opacity: 0.65;
}

.atx-crumb-here {
  color: #e2e8f0;
}

.atx-hero-grid {
  display: grid;
  gap: 1.5rem;
  align-items: start;
}

@media (min-width: 900px) {
  .atx-hero-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
    gap: 2rem 2.5rem;
    align-items: center;
  }
}

.atx-eyebrow {
  margin: 0 0 0.4rem;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fde047;
}

.atx-h1 {
  margin: 0 0 0.65rem;
  font-family: var(--font-heading);
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #f8fafc;
}

.atx-deck {
  margin: 0 0 1.1rem;
  max-width: 40rem;
  font-size: 0.94rem;
  line-height: 1.6;
  color: #cbd5e1;
}

.atx-meta {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (min-width: 520px) {
  .atx-meta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.65rem 1.25rem;
  }
}

.atx-meta li {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.5rem;
}

.atx-meta-k {
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
}

.atx-meta-v {
  font-size: 0.82rem;
  font-weight: 800;
  color: #c4b5fd;
}

.atx-meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.atx-tag {
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 800;
  color: #ecfccb;
  background: rgba(74, 222, 128, 0.12);
  border: 1px solid rgba(74, 222, 128, 0.28);
}

.atx-hero-media {
  min-width: 0;
}

.atx-video-shell {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #0f172a;
  border: 1px solid rgba(148, 163, 184, 0.22);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.atx-video-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.atx-fallback-fig {
  margin: 0;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.22);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.atx-fallback-fig img {
  display: block;
  width: 100%;
  height: auto;
}

.atx-body {
  padding-top: 2rem;
  padding-bottom: 0;
}

.atx-prose {
  margin: 0;
  padding: 1.5rem 0 0;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
}

.atx-prose :deep(p) {
  margin-bottom: 0.9rem;
  color: var(--color-muted);
  line-height: 1.68;
  font-size: 0.94rem;
}

.atx-prose :deep(h3) {
  font-size: 1.08rem;
  margin: 1.35rem 0 0.55rem;
  font-family: var(--font-heading);
  font-weight: 800;
  color: #f1f5f9;
}

.atx-prose :deep(h3:first-child) {
  margin-top: 0;
}

.atx-prose :deep(ul) {
  color: var(--color-muted);
  margin-bottom: 0.9rem;
  padding-left: 1.15rem;
  line-height: 1.58;
  font-size: 0.9rem;
}

.atx-prose :deep(strong) {
  color: var(--color-text);
}

.atx-prose :deep(a) {
  font-weight: 800;
  color: #7dd3fc;
}

.atx-prose :deep(.guide-fig) {
  margin: 1rem 0 1.2rem;
}

.atx-prose :deep(.guide-fig img) {
  display: block;
  max-width: 50%;
  height: auto;
  border-radius: 0.45rem;
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(15, 23, 42, 0.5);
}

.atx-prose :deep(.guide-fig figcaption) {
  margin-top: 0.4rem;
  font-size: 0.78rem;
  line-height: 1.45;
  color: #94a3b8;
}

.atx-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.25rem;
  margin-top: 2.25rem;
  padding-top: 1.5rem;
  border-top: 1px dashed rgba(148, 163, 184, 0.2);
}

.atx-backhome {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 0.88rem;
  color: #fde047;
  text-decoration: none;
}

.atx-backhome:hover {
  text-decoration: underline;
}

.atx-backhome-arrow {
  font-size: 1.05rem;
}

.atx-guide-link {
  font-size: 0.82rem;
  font-weight: 800;
  color: #7dd3fc;
  text-decoration: none;
}

.atx-guide-link:hover {
  text-decoration: underline;
}

.atx-miss {
  padding: 2.5rem 0;
}

.atx-miss-title {
  font-size: 1.45rem;
  margin-bottom: 0.5rem;
}
</style>

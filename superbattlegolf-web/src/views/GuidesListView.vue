<template>
  <div class="page gl">
    <PageHero eyebrow="Super Battle Golf · Long reads" title="Super Battle Golf guides" heading-id="gl-title">
      <p class="gl-lead">
        These <strong>Super Battle Golf</strong> guides are long-form articles. Facts follow Steam and Brimstone’s press kit; tactics are labeled when they are community opinion.
      </p>
    </PageHero>

    <section class="gl-list-section" aria-label="Guide list">
      <div class="container">
        <p v-if="!guides.length" class="gl-empty">
          No long-form guides here yet. For hole-in-one lines and other deep tactics, see the
          <a :href="appHref('/advanced')">Advanced techniques hub</a>.
        </p>
        <div v-else class="gl-grid">
          <a
            v-for="g in guides"
            :key="g.id"
            :href="appHref(`/guides/${g.addressBar}`)"
            class="gl-card"
          >
            <div class="gl-card-media">
              <img :src="g.imageSrc" :alt="g.imageAlt" width="320" height="180" loading="lazy" />
            </div>
            <div class="gl-card-body">
              <time class="gl-card-date" :datetime="g.publishDate">{{ formatDate(g.publishDate) }}</time>
              <h2 class="gl-card-title">{{ g.title }}</h2>
              <p class="gl-card-desc">{{ g.description }}</p>
              <span class="gl-card-cta">Read <span aria-hidden="true">→</span></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import guides from '../data/guides.js'
import { appHref } from '../utils/appHref.js'

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(iso))
  } catch {
    return iso
  }
}
</script>

<style scoped>
.page {
  padding: 0 0 3.5rem;
}

.gl-lead {
  margin: 0;
  max-width: 40rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.gl-list-section {
  padding-top: 1.35rem;
}

.gl-empty {
  margin: 0;
  max-width: 40rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.gl-empty a {
  font-weight: 800;
  color: #7dd3fc;
  text-decoration: none;
}

.gl-empty a:hover {
  text-decoration: underline;
}

.gl-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}

@media (min-width: 768px) {
  .gl-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gl-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

.gl-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(12, 22, 38, 0.55);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
}

.gl-card:hover {
  border-color: rgba(74, 222, 128, 0.35);
  transform: translateY(-2px);
}

.gl-card-media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.9);
}

.gl-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gl-card-body {
  padding: 0.65rem 0.75rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.gl-card-date {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #64748b;
}

.gl-card-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.3;
  color: #f8fafc;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.gl-card-desc {
  margin: 0;
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.gl-card-cta {
  margin-top: 0.2rem;
  font-size: 0.68rem;
  font-weight: 800;
  color: #4ade80;
}
</style>

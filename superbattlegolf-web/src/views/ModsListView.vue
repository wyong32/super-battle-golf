<template>
  <div class="page ml">
    <PageHero eyebrow="Companion articles · not in-game installs" title="Super Battle Golf mods" heading-id="ml-title">
      <p class="ml-lead">
        This section covers <strong>Super Battle Golf mod</strong> reality on PC: Steam Workshop expectations, file layout, and companion setup articles — not in-game mod installs. Steam does not list Workshop for this title; pages here focus on store facts, EULA context, and safe PC tuning — no unofficial downloads.
      </p>
      <div class="ml-chips" aria-hidden="true">
        <span class="ml-chip">PC</span>
        <span class="ml-chip ml-chip--alt">Steam</span>
      </div>
    </PageHero>

    <section class="ml-list-section" aria-label="Super Battle Golf mod articles">
      <div class="container">
        <ul class="mod-list">
          <li v-for="(m, index) in mods" :key="m.id">
            <a :href="appHref(`/mods/${m.addressBar}`)" class="mod-row">
              <span class="mod-rail" aria-hidden="true">
                <span class="mod-dot" />
              </span>
              <div class="mod-thumb-wrap">
                <img :src="m.imageSrc" :alt="m.imageAlt" width="120" height="120" loading="lazy" />
              </div>
              <div class="mod-body">
                <div class="mod-meta">
                  <span class="mod-code">ART-{{ String(index + 1).padStart(2, '0') }}</span>
                  <time :datetime="m.publishDate">{{ formatDate(m.publishDate) }}</time>
                </div>
                <h2 class="mod-title">{{ m.title }}</h2>
                <p class="mod-desc">{{ m.description }}</p>
                <span class="mod-cta">Open article <span aria-hidden="true">→</span></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import mods from '../data/mods.js'
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

.ml-lead {
  margin: 0 0 0.85rem;
  max-width: 44rem;
  font-size: 0.95rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.ml-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.ml-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.18rem 0.55rem;
  border-radius: 0.35rem;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(192, 132, 252, 0.25);
  color: #e9d5ff;
  border: 1px solid rgba(192, 132, 252, 0.4);
}

.ml-chip--alt {
  background: rgba(56, 189, 248, 0.2);
  color: #a5f3fc;
  border-color: rgba(56, 189, 248, 0.35);
}

.ml-list-section {
  padding-top: 1.5rem;
}

.mod-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mod-row {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0.85rem 1rem;
  align-items: center;
  padding: 0.9rem 1rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(192, 132, 252, 0.22);
  background: rgba(14, 18, 36, 0.72);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    transform 0.12s ease;
}

.mod-row:hover {
  border-color: rgba(244, 114, 182, 0.45);
  background: rgba(22, 18, 42, 0.88);
  transform: translateY(-1px);
}

@media (max-width: 767px) {
  .mod-row {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .mod-rail {
    display: none;
  }

  .mod-thumb-wrap {
    margin: 0 auto;
  }
}

.mod-rail {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mod-dot {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fef08a, #fb923c);
  border: 2px solid #0f172a;
  box-shadow: 0 0 0 2px rgba(192, 132, 252, 0.35);
}

.mod-thumb-wrap {
  flex-shrink: 0;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 0.55rem;
  overflow: hidden;
  border: 2px solid rgba(15, 23, 42, 0.9);
  box-shadow: 3px 3px 0 rgba(253, 224, 71, 0.2);
}

.mod-thumb-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mod-body {
  min-width: 0;
  text-align: left;
}

.mod-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  margin-bottom: 0.3rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #a5f3fc;
}

.mod-code {
  padding: 0.08rem 0.4rem;
  border-radius: 0.25rem;
  background: #0f172a;
  color: #fde047;
}

.mod-title {
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  font-weight: 800;
  color: #fffbeb;
  line-height: 1.25;
}

.mod-desc {
  margin: 0 0 0.4rem;
  color: var(--color-muted);
  font-size: 0.88rem;
  line-height: 1.5;
}

.mod-cta {
  font-size: 0.8rem;
  font-weight: 900;
  color: #f472b6;
}
</style>

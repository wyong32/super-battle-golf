<template>
  <div class="page wcl wiki-page">
    <PageHero eyebrow="Super Battle Golf · Wardrobe" title="Achievement cosmetics" heading-id="wcl-title" :show-bottom-rule="false">
      <p class="wcl-lead">
        These <strong>unlockable cosmetics</strong> tie to Steam achievements — eyes, heads, hats, clubs, golf balls, and more. Reference shots are mirrored from a community guide; copy is a fan summary — trust the in-game wardrobe and your build after patches.
      </p>
    </PageHero>

    <div class="container wcl-body">
      <nav class="wiki-crumb" aria-label="Breadcrumb">
        <a :href="appHref('/wiki')">Wiki</a>
        <span class="wiki-crumb-sep" aria-hidden="true">/</span>
        <span class="wiki-crumb-here">Achievement cosmetics</span>
      </nav>

      <div class="wcl-stack wiki-reading wiki-reading--wide">
        <article
          v-for="c in cosmetics"
          :key="c.slug"
          class="wcl-card wiki-entry wiki-entry--cosmetics"
          :data-section="`cosmetic-${c.slug}`"
          tabindex="-1"
        >
          <div class="wcl-card-top">
            <div class="wcl-shot">
            <img
              class="wcl-thumb"
              :src="c.image"
              :alt="c.title"
              width="128"
              height="128"
              loading="lazy"
              decoding="async"
            />
            </div>
            <header class="wcl-card-head">
            <span class="wcl-badge">{{ c.category }}</span>
            <h2 class="wcl-title">{{ c.title }}</h2>
            <p class="wcl-achievement">
              <span class="wcl-achievement-label">Achievement</span>
              {{ c.achievement }}
            </p>
            <p class="wcl-blurb">{{ c.listBlurb }}</p>
            </header>
          </div>
          <div class="wcl-prose wiki-prose" v-html="c.detailsHtml" />
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import { appHref } from '../../utils/appHref.js'
import cosmetics from '../../data/wiki/cosmetics.js'
</script>

<style scoped>
.page {
  padding: 0;
}

.wcl-lead {
  margin: 0;
  max-width: 46rem;
  font-size: 0.92rem;
  line-height: 1.58;
  color: rgba(196, 219, 212, 0.92);
}

.wcl-lead strong {
  color: #fef08a;
}

.wcl-body {
  padding-top: 1rem;
}

.wcl-stack {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 0;
}

.wcl-card-top {
  display: flex;
  gap: 1.1rem;
  align-items: flex-start;
  margin-bottom: 0.85rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.08);
}

.wcl-shot {
  flex-shrink: 0;
  padding: 0.4rem;
  border-radius: 0.55rem;
  background: linear-gradient(165deg, rgba(255, 251, 235, 0.07) 0%, rgba(15, 23, 42, 0.75) 100%);
  border: 1px solid rgba(251, 113, 133, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.wcl-thumb {
  display: block;
  width: 5.25rem;
  height: 5.25rem;
  object-fit: contain;
  border-radius: 0.4rem;
  background: rgba(15, 23, 42, 0.5);
}

.wcl-card-head {
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
}

.wcl-badge {
  display: inline-block;
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(251, 113, 133, 0.95);
  padding: 0.2rem 0.45rem;
  border-radius: 0.35rem;
  background: rgba(251, 113, 133, 0.1);
}

.wcl-title {
  margin: 0.35rem 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  color: #f8fafc;
}

.wcl-achievement {
  margin: 0 0 0.5rem;
  font-size: 0.84rem;
  line-height: 1.45;
  color: #e9d5ff;
  font-weight: 700;
}

.wcl-achievement-label {
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c4b5fd;
  margin-bottom: 0.15rem;
}

.wcl-blurb {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--color-muted);
}

</style>

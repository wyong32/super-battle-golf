<template>
  <div class="sp wiki-page">
    <PageHero
      :eyebrow="eyebrow"
      :title="title"
      :heading-id="headingId"
      :show-bottom-rule="false"
    >
      <p v-if="lead" class="sp-lead">{{ lead }}</p>
    </PageHero>

    <div class="container sp-body">
      <nav class="wiki-crumb" aria-label="Breadcrumb">
        <a :href="appHref('/')">Home</a>
        <span class="wiki-crumb-sep" aria-hidden="true">/</span>
        <span class="wiki-crumb-here">{{ breadcrumbCurrent }}</span>
      </nav>

      <article class="sp-article wiki-prose">
        <slot />
      </article>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import { appHref } from '../../utils/appHref.js'

defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  headingId: { type: String, required: true },
  breadcrumbCurrent: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>

<style scoped>
.sp {
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
}

.sp-lead {
  margin: 0;
  max-width: 44rem;
  font-size: 0.92rem;
  line-height: 1.58;
  color: rgba(196, 219, 212, 0.92);
}

.sp-body {
  padding-top: 1rem;
}

.sp-article {
  max-width: 46rem;
  padding-bottom: 1rem;
}

.sp-article :deep(h2) {
  margin: 1.35rem 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 800;
  font-family: var(--font-heading);
  color: rgba(236, 253, 245, 0.96);
}

.sp-article :deep(h2:first-child) {
  margin-top: 0;
}

.sp-article :deep(p),
.sp-article :deep(ul) {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.sp-article :deep(ul) {
  padding-left: 1.2rem;
}

.sp-article :deep(li) {
  margin-bottom: 0.35rem;
}

.sp-article :deep(strong) {
  color: rgba(226, 232, 240, 0.95);
}

.sp-article :deep(a) {
  font-weight: 800;
  color: var(--color-secondary);
  text-underline-offset: 2px;
}

.sp-article :deep(a:hover) {
  color: #fde047;
}
</style>

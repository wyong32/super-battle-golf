<template>
  <section class="ph" :class="{ 'ph--plain': !showBottomRule }" :aria-labelledby="headingId">
    <div class="container">
      <div class="ph-row">
        <div class="ph-accent" aria-hidden="true" />
        <div class="ph-copy">
          <p v-if="eyebrow" class="ph-eyebrow">{{ eyebrow }}</p>
          <h1 :id="headingId" class="ph-title">{{ title }}</h1>
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  headingId: { type: String, default: 'page-hero-title' },
  showBottomRule: { type: Boolean, default: true },
})
</script>

<style scoped>
.ph {
  padding: 1.65rem 0 1.45rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.ph--plain {
  border-bottom: none;
  padding-bottom: 0.25rem;
}

.ph-row {
  display: flex;
  align-items: stretch;
  gap: 1.15rem;
}

.ph-accent {
  flex-shrink: 0;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(180deg, #fde047 0%, #4ade80 42%, #38bdf8 100%);
  opacity: 0.92;
}

.ph-copy {
  min-width: 0;
  padding-bottom: 0.1rem;
}

.ph-eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(148, 163, 184, 0.95);
}

.ph-title {
  margin: 0 0 0.55rem;
  padding: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #f8fafc;
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
  -webkit-text-fill-color: #f8fafc;
  filter: none;
}
</style>

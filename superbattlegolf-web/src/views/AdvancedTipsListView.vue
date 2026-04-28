<template>
  <div class="page atl">
    <PageHero
      eyebrow="Super Battle Golf · Tactics & replays"
      title="Advanced techniques"
      heading-id="atl-title"
      :show-bottom-rule="false"
    >
      <p class="atl-lead">
        Replay desk — embedded clips, shotcaller bullets, and links to full walkthroughs when published. Fan-maintained; re-test lines after patches.
      </p>
    </PageHero>

    <section
      class="adv-section adv-broadcast adv-broadcast--no-head"
      aria-label="Advanced techniques replay desk"
      data-section="adv-heading"
    >
      <div class="adv-broadcast__sprocket adv-broadcast__sprocket--top" aria-hidden="true" />
      <div class="container adv-broadcast__inner">
        <div class="adv-spots" role="list">
          <article
            v-for="(topic, advIdx) in advancedTipsHome"
            :key="topic.addressBar"
            class="adv-spot"
            :class="['adv-spot--tone' + (advIdx % 2), advIdx % 2 === 1 ? 'adv-spot--muted' : '', advIdx % 2 === 1 ? 'adv-spot--mirror' : '']"
            role="listitem"
          >
            <div class="adv-spot__screen-col">
              <span class="adv-spot__tape" aria-hidden="true">{{ topic.home.replayLabel }}</span>
              <div class="adv-spot__bezel">
                <div class="adv-spot__crt" :class="{ 'adv-spot__crt--still': !topic.home.embedSrc }">
                  <iframe
                    v-if="topic.home.embedSrc"
                    :src="topic.home.embedSrc"
                    :title="topic.home.embedTitle"
                    width="560"
                    height="315"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    referrerpolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                  <img
                    v-else-if="topic.imageSrc"
                    :src="topic.imageSrc"
                    :alt="topic.imageAlt || ''"
                    loading="lazy"
                    class="adv-spot__crt-still"
                  />
                </div>
                <span class="adv-spot__ch" aria-hidden="true">REC {{ String(advIdx + 1).padStart(2, '0') }}</span>
              </div>
            </div>

            <div class="adv-spot__desk">
              <div class="adv-spot__desk-top">
                <span class="adv-spot__badge">{{ topic.home.badge }}</span>
                <span class="adv-spot__icon" aria-hidden="true" v-html="advSpotDeskIconSvg" />
              </div>
              <h2 class="adv-spot__heading">
                <a
                  v-if="topic.hasDetailPage !== false"
                  :href="appHref(`/advanced/${topic.addressBar}`)"
                  class="adv-spot__heading-link"
                >{{ topic.title }}</a>
                <span v-else class="adv-spot__heading-text">{{ topic.title }}</span>
              </h2>
              <ul class="adv-spot__bullets">
                <li v-for="(line, i) in topic.home.homeBullets" :key="i">{{ line }}</li>
              </ul>
              <p class="adv-spot__video-hint" role="note">
                <span class="adv-spot__video-hint-k">Video</span>
                <span class="adv-spot__video-hint-main">{{
                  advIdx % 2 === 1
                    ? 'Full walkthrough in the player on your right.'
                    : 'Full walkthrough in the player on your left.'
                }}</span>
                <span class="adv-spot__video-hint-sub">
                  Wide screens: monitor beside these notes; narrow screens: the player may stack above or below.
                </span>
              </p>
              <a
                v-if="topic.hasDetailPage !== false"
                :href="appHref(`/advanced/${topic.addressBar}`)"
                class="adv-spot__cta"
              >
                <span class="adv-spot__cta-face">{{ advSpotCtaLabel }} →</span>
              </a>
            </div>
          </article>
        </div>
      </div>
      <div class="adv-broadcast__sprocket adv-broadcast__sprocket--bottom" aria-hidden="true" />
    </section>
  </div>
</template>

<script setup>
import advancedTips from '../data/advancedTips.js'
import PageHero from '../components/PageHero.vue'
import { appHref } from '../utils/appHref.js'

const advancedTipsHome = advancedTips.filter((t) => t.home)

const advSpotDeskIconSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M17 5l-1.5 1.5M8.5 17.5L7 19M17 19l-1.5-1.5M8.5 6.5L7 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`

const advSpotCtaLabel = 'Full walkthrough'
</script>

<style scoped>
.page {
  padding: 0 0 3.5rem;
}

.atl-lead {
  margin: 0;
  max-width: 44rem;
  font-size: 0.95rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.adv-section.adv-broadcast {
  position: relative;
  padding: 2.5rem 0 3.25rem;
  border-top: 3px dashed rgba(253, 224, 71, 0.28);
}

.adv-broadcast--no-head {
  padding-top: 0.5rem;
  border-top: none;
}

.adv-broadcast__inner {
  position: relative;
  z-index: 1;
}

.adv-broadcast__sprocket {
  pointer-events: none;
  height: 13px;
  max-width: min(100%, 72rem);
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--container-pad, 1rem);
  background:
    repeating-linear-gradient(
      90deg,
      rgba(12, 18, 32, 0.95) 0,
      rgba(12, 18, 32, 0.95) 9px,
      transparent 9px,
      transparent 21px
    ),
    radial-gradient(circle at 10px 50%, rgba(253, 224, 71, 0.4) 0 2.5px, transparent 3px);
  background-size: 100% 100%, 21px 13px;
  opacity: 0.9;
}

.adv-broadcast__sprocket--top {
  margin-bottom: 1.5rem;
}

.adv-broadcast__sprocket--bottom {
  margin-top: 2rem;
}

.adv-spots {
  display: flex;
  flex-direction: column;
  gap: clamp(1.85rem, 4.5vw, 2.65rem);
  margin: 0;
  padding: 0;
  list-style: none;
}

.adv-spot {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.15rem;
  align-items: start;
}

@media (min-width: 960px) {
  .adv-spot {
    grid-template-columns: minmax(0, 1.06fr) minmax(0, 0.94fr);
    gap: 1.5rem;
    align-items: center;
  }

  .adv-spot--mirror {
    grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
  }

  .adv-spot--mirror .adv-spot__screen-col {
    order: 2;
  }

  .adv-spot--mirror .adv-spot__desk {
    order: 1;
  }
}

.adv-spot__screen-col {
  position: relative;
  padding-top: 1rem;
}

.adv-spot__tape {
  position: absolute;
  top: 0;
  left: 0.75rem;
  z-index: 2;
  padding: 0.32rem 0.75rem;
  font-size: 0.56rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #1c1917;
  background: #fde047;
  border: 2px solid #1c1917;
  box-shadow:
    3px 3px 0 #1c1917,
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transform: rotate(-6deg);
}

.adv-spot--mirror .adv-spot__tape {
  left: auto;
  right: 0.75rem;
  transform: rotate(6deg);
}

.adv-spot--tone1 .adv-spot__tape {
  background: #86efac;
}

.adv-spot__bezel {
  position: relative;
  padding: 11px 11px 34px;
  border-radius: 10px;
  background: linear-gradient(165deg, #3f3f46 0%, #27272a 35%, #18181b 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    inset 0 -3px 6px rgba(0, 0, 0, 0.45),
    0 10px 0 #0a0a0b,
    0 18px 32px rgba(0, 0, 0, 0.5);
  transform: rotate(-1deg);
  transition: transform 0.2s ease;
}

.adv-spot--mirror .adv-spot__bezel {
  transform: rotate(1deg);
}

.adv-spot:hover .adv-spot__bezel {
  transform: rotate(-0.3deg) translateY(-2px);
}

.adv-spot--mirror:hover .adv-spot__bezel {
  transform: rotate(0.3deg) translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .adv-spot__bezel,
  .adv-spot:hover .adv-spot__bezel,
  .adv-spot--mirror:hover .adv-spot__bezel {
    transform: none;
  }
}

.adv-spot--muted .adv-spot__bezel {
  border: 2px dashed rgba(148, 163, 184, 0.45);
}

.adv-spot__crt {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 3px;
  overflow: hidden;
  background: #020617;
  box-shadow:
    inset 0 0 0 2px #000,
    inset 0 0 60px rgba(34, 197, 94, 0.07);
}

.adv-spot__crt::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.13) 2px,
    rgba(0, 0, 0, 0.13) 3px
  );
  mix-blend-mode: multiply;
  opacity: 0.85;
}

.adv-spot__crt iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.adv-spot__crt-still {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.adv-spot__heading-text {
  display: inline;
  font: inherit;
  color: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
}

.adv-spot__ch {
  position: absolute;
  bottom: 9px;
  left: 50%;
  transform: translateX(-50%);
  font-family: ui-monospace, 'Cascadia Code', monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: rgba(74, 222, 128, 0.8);
  text-shadow: 0 0 14px rgba(74, 222, 128, 0.45);
}

.adv-spot__desk {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1.2rem 1.3rem 1.4rem;
  background:
    linear-gradient(125deg, rgba(20, 83, 45, 0.22) 0%, transparent 42%),
    linear-gradient(168deg, rgba(15, 23, 42, 0.96) 0%, rgba(8, 12, 24, 0.98) 100%);
  border: 3px solid rgba(253, 224, 71, 0.38);
  border-radius: 8px 20px 18px 10px;
  box-shadow: 0 8px 0 rgba(15, 23, 42, 0.65);
}

.adv-spot--mirror .adv-spot__desk {
  border-radius: 20px 8px 10px 18px;
}

.adv-spot--muted .adv-spot__desk {
  border-style: dashed;
  opacity: 0.97;
}

.adv-spot__desk-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.adv-spot__badge {
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.28rem 0.55rem;
  border: 2px solid #1e1b4b;
  box-shadow: 2px 2px 0 #1e1b4b;
  color: #1e1b4b;
  background: #e9d5ff;
}

.adv-spot--tone1 .adv-spot__badge {
  color: #022c22;
  background: #6ee7b7;
  border-color: #022c22;
  box-shadow: 2px 2px 0 #022c22;
}

.adv-spot__icon :deep(svg) {
  width: 2rem;
  height: 2rem;
  color: #fde047;
  filter: drop-shadow(0 2px 0 #14532d);
}

.adv-spot--tone1 .adv-spot__icon :deep(svg) {
  color: #86efac;
  filter: drop-shadow(0 2px 0 #022c22);
}

.adv-spot__heading {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.02rem, 2.1vw, 1.28rem);
  font-weight: 900;
  line-height: 1.18;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fefce8;
}

.adv-spot__heading-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease;
}

.adv-spot__heading-link:hover {
  color: #fde047;
  text-decoration: none;
}

.adv-spot__bullets {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.adv-spot__bullets li {
  position: relative;
  padding-left: 1.1rem;
  font-size: 0.85rem;
  line-height: 1.52;
  color: rgba(226, 232, 240, 0.94);
}

.adv-spot__bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.48em;
  width: 6px;
  height: 6px;
  background: #fde047;
  border: 1px solid #14532d;
  transform: rotate(45deg);
}

.adv-spot--tone1 .adv-spot__bullets li::before {
  background: #6ee7b7;
  border-color: #022c22;
}

.adv-spot__video-hint {
  margin: 0.35rem 0 0;
  padding: 0.55rem 0.65rem;
  border-radius: 0.4rem;
  border: 1px dashed rgba(253, 224, 71, 0.35);
  background: rgba(30, 27, 14, 0.35);
  font-size: 0.78rem;
  line-height: 1.45;
  color: rgba(226, 232, 240, 0.9);
}

.adv-spot--tone1 .adv-spot__video-hint {
  border-color: rgba(134, 239, 172, 0.35);
  background: rgba(6, 40, 32, 0.25);
}

.adv-spot__video-hint-k {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fde047;
}

.adv-spot--tone1 .adv-spot__video-hint-k {
  color: #86efac;
}

.adv-spot__video-hint-main {
  display: block;
  font-size: 0.78rem;
  line-height: 1.45;
  color: rgba(226, 232, 240, 0.92);
}

.adv-spot__video-hint-sub {
  display: block;
  margin-top: 0.4rem;
  font-size: 0.66rem;
  line-height: 1.45;
  color: rgba(148, 163, 184, 0.95);
}

.adv-spot__cta {
  align-self: flex-start;
  margin-top: 0.2rem;
  text-decoration: none;
}

.adv-spot__cta-face {
  display: inline-block;
  padding: 0.48rem 1rem 0.42rem;
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: #0f172a;
  background: linear-gradient(180deg, #fcd34d 0%, #ea580c 100%);
  border: 3px solid #0f172a;
  border-radius: 6px;
  box-shadow: 0 5px 0 #0f172a;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
}

.adv-spot__cta:hover .adv-spot__cta-face {
  transform: translateY(3px);
  box-shadow: 0 2px 0 #0f172a;
}

@media (prefers-reduced-motion: reduce) {
  .adv-spot__cta:hover .adv-spot__cta-face {
    transform: none;
  }
}

.adv-spot__cta:focus-visible {
  outline: 2px solid #fde047;
  outline-offset: 3px;
}
</style>

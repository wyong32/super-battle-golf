<template>
  <footer class="ftr" role="contentinfo">
    <div class="ftr-wavy" aria-hidden="true" />
    <div class="container ftr-inner">
      <div class="ftr-row">
        <div class="ftr-intro">
          <a :href="appHref('/')" class="ftr-brand" aria-label="Super Battle Golf Guide home">
            <img src="/images/logo.png" alt="Super Battle Golf Guide" class="ftr-logo-image">
            <span class="ftr-logo-mark">Super Battle Golf</span>
          </a>
          <p class="ftr-desc">
            Unofficial player hub for the Steam PC version — wiki topics, guides, mods, platform notes, and troubleshooting. Independent fan project: not affiliated with
            Brimstone, Oro Interactive, or Valve. Game names and trademarks belong to their respective owners.
          </p>
        </div>
        <div class="ftr-grid">
          <div class="ftr-col">
            <p class="ftr-heading">Quick links</p>
            <ul class="ftr-links">
              <li><a :href="appHref('/getting-started')">Getting Started</a></li>
              <li><a :href="appHref('/wiki')">Wiki</a></li>
              <li><a :href="appHref('/guides')">Guides</a></li>
              <li><a :href="appHref('/mods')">Mods</a></li>
              <li><a :href="appHref('/platforms')">Platforms</a></li>
              <li><a :href="appHref('/support')">Support</a></li>
            </ul>
          </div>
          <div class="ftr-col">
            <p class="ftr-heading">Legal</p>
            <ul class="ftr-links">
              <li><a :href="appHref('/privacy-policy')" rel="nofollow">Privacy Policy</a></li>
              <li><a :href="appHref('/terms-of-service')" rel="nofollow">Terms of Service</a></li>
              <li><a :href="appHref('/copyright')" rel="nofollow">Copyright</a></li>
              <li><a :href="appHref('/about-us')" rel="nofollow">About Us</a></li>
              <li><a :href="appHref('/contact-us')" rel="nofollow">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p class="ftr-copy">© {{ year }} · Unofficial Super Battle Golf player guide</p>
    </div>
  </footer>
</template>

<script setup>
import { appHref } from '../utils/appHref.js'

const year = new Date().getFullYear()
</script>

<style scoped>
.ftr {
  position: relative;
  margin-top: auto;
  padding: 0 0 2rem;
  background: linear-gradient(180deg, transparent, rgba(8, 14, 26, 0.92));
}

.ftr-wavy {
  height: 14px;
  margin-bottom: 1.25rem;
  background: repeating-linear-gradient(
    90deg,
    #fde047 0 18px,
    #4ade80 18px 36px,
    #38bdf8 36px 54px,
    #fb7185 54px 72px
  );
  opacity: 0.85;
  mask-image: radial-gradient(circle at 10px 50%, transparent 6px, black 7px);
  mask-size: 18px 14px;
  -webkit-mask-image: radial-gradient(circle at 10px 50%, transparent 6px, black 7px);
  -webkit-mask-size: 18px 14px;
}

.ftr-inner {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.ftr-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1.25rem 2rem;
}

.ftr-intro {
  flex: 1 1 16rem;
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 1rem 1.15rem 1.1rem;
  border-radius: 1.25rem 0.5rem 1.35rem 0.65rem;
  border: 3px dashed rgba(253, 224, 71, 0.5);
  background: rgba(21, 36, 58, 0.72);
  box-shadow: 0 6px 0 rgba(15, 23, 42, 0.5);
  transform: rotate(-0.35deg);
}

@media (prefers-reduced-motion: reduce) {
  .ftr-intro {
    transform: none;
  }
}

.ftr-desc {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.ftr-brand {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex: 0 1 auto;
  min-width: min(100%, 12rem);
  font-family: var(--font-heading);
  font-weight: 800;
  line-height: 1.15;
  text-decoration: none;
  cursor: pointer;
  padding: 0.35rem 0;
  transition: filter 0.2s ease, transform 0.2s ease;
}

.ftr-logo-image {
  width: 65px;
  height: auto;
  object-fit: contain;
}

.ftr-logo-mark {
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  background: linear-gradient(95deg, #fef9c3, #fde047 35%, #4ade80 72%, #7dd3fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 0 rgba(15, 23, 42, 0.85));
}

.ftr-logo-tail {
  font-size: 1.05rem;
  color: #fffbeb;
  text-shadow: 0 2px 0 #0f766e;
}

.ftr-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  flex: 1 1 280px;
  min-width: 0;
}

@media (min-width: 768px) {
  .ftr-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ftr-brand {
    white-space: nowrap;
  }
}

@media (min-width: 1024px) {
  .ftr-row {
    flex-wrap: nowrap;
    align-items: stretch;
  }

  .ftr-intro {
    flex: 0 1 24rem;
    max-width: none;
  }
}

.ftr-heading {
  font-family: var(--font-heading);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-sun);
  margin: 0 0 0.45rem;
  text-shadow: 0 1px 0 rgba(15, 23, 42, 0.6);
}

.ftr-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ftr-links li {
  margin-bottom: 0.35rem;
}

.ftr-links a {
  font-weight: 800;
  cursor: pointer;
  color: #a5f3fc;
}

.ftr-links a:hover {
  color: #fef08a;
}

.ftr-copy {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-muted);
}
</style>

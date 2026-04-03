<template>
  <div class="home">
    <!-- Hero：核心关键词与 CTA -->
    <section class="hero-section" aria-labelledby="hero-heading">
      <div class="container">
        <div class="hero-panel">
          <div class="hero-panel-glow" aria-hidden="true" />
          <div class="hero-panel-inner">
            <p class="hero-eyebrow">Unofficial player guide · Steam PC</p>
            <h1 id="hero-heading" class="hero-h1">
              Super Battle Golf — wiki, guides, mods &amp; Steam help
            </h1>
            <h2 class="hero-h2">
              Unofficial Super Battle Golf player hub: courses, scoring, all ten items, multiplayer setup, mods &amp; PC companion articles, and troubleshooting — aligned with Steam, Brimstone’s press kit, and cited third-party guides where noted.
            </h2>
            <div class="hero-meta" role="group" aria-label="Steam store highlights">
              <p class="hero-meta-caption">
                Figures below match the public Steam store listing — always confirm in the Steam client or
                <a
                  href="https://store.steampowered.com/app/4069520/"
                  class="hero-meta-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >store page</a>.
              </p>
              <ul class="hero-meta-chips">
                <li class="hero-meta-chip">27 holes</li>
                <li class="hero-meta-chip">1–8 players online</li>
                <li class="hero-meta-chip">34 Steam achievements</li>
                <li class="hero-meta-chip">Windows PC</li>
              </ul>
            </div>
            <form class="hero-search" role="search" aria-label="Site search" @submit.prevent="onSearchSubmit">
              <label class="hero-search-label" for="site-search">Search Super Battle Golf wiki, guides, and mods</label>
              <div class="hero-search-row">
                <input
                  id="site-search"
                  v-model.trim="searchQuery"
                  type="search"
                  class="hero-search-input"
                  placeholder="Wiki topics, guides, Steam, items…"
                  autocomplete="off"
                />
                <button type="submit" class="hero-search-btn">Search</button>
              </div>
            </form>
            <div class="hero-cta">
              <a :href="appHref('/getting-started')" class="btn btn--primary">Getting Started Guide</a>
              <a
                href="https://store.steampowered.com/newshub/app/4069520/"
                class="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Latest Patch Notes
              </a>
              <a
                href="https://store.steampowered.com/app/4069520/"
                class="btn btn--steam"
                target="_blank"
                rel="noopener noreferrer"
              >
                Steam store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links 网格 -->
    <section class="quick-section" aria-labelledby="quick-heading">
      <div class="container">
        <div class="quick-content">
          <h2 id="quick-heading" class="section-title section-title--compact">Quick links</h2>
          <p class="section-lead section-lead--tight">
            Super Battle Golf wiki, guides, mods, platforms, and support — one tap each.
          </p>
          <div class="quick-grid">
            <a
              v-for="card in quickCards"
              :key="card.to"
              :href="appHref(card.to)"
              class="quick-card"
              :class="'quick-card--v' + card.variant"
            >
              <span class="quick-icon" aria-hidden="true" v-html="card.icon" />
              <span class="quick-label">{{ card.label }}</span>
              <span class="quick-desc">{{ card.desc }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced techniques — broadcast replay booth: CRT stack + shotcaller desk -->
    <section class="adv-section adv-broadcast" aria-labelledby="adv-heading" data-section="adv-heading">
      <div class="adv-broadcast__sprocket adv-broadcast__sprocket--top" aria-hidden="true" />
      <div class="container adv-broadcast__inner">
        <header class="adv-broadcast__head">
          <div class="adv-broadcast__live" aria-hidden="true">
            <span class="adv-broadcast__live-dot" />
            <span class="adv-broadcast__live-txt">On course</span>
          </div>
          <h2 id="adv-heading" class="adv-broadcast__title">Advanced techniques</h2>
          <p class="adv-broadcast__deck">
            Replay desk — each strip is a monitor feed plus shotcaller notes. Full walkthroughs and screenshots live on each advanced technique page; we will splice in more feeds as
            articles ship.
          </p>
        </header>

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
                <div class="adv-spot__crt">
                  <iframe
                    :src="topic.home.embedSrc"
                    :title="topic.home.embedTitle"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    referrerpolicy="strict-origin-when-cross-origin"
                    loading="lazy"
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
              <h3 class="adv-spot__heading">
                <a
                  :href="appHref(`/advanced/${topic.addressBar}`)"
                  class="adv-spot__heading-link"
                >{{ topic.title }}</a>
              </h3>
              <ul class="adv-spot__bullets">
                <li v-for="(line, i) in topic.home.homeBullets" :key="i">{{ line }}</li>
              </ul>
              <a
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

    <!-- Featured guides (hidden when no guide articles) -->
    <section v-if="trendingGuides.length" class="trend-section" aria-labelledby="trend-heading">
      <div class="container">
        <div class="trend-content">
          <h2 id="trend-heading" class="section-title">Featured Super Battle Golf Guides</h2>
          <div class="trend-list">
            <article
              v-for="(g, idx) in trendingGuides"
              :key="g.id"
              class="trend-row"
              :class="'trend-row--tone' + (idx % 3)"
            >
              <a :href="appHref(`/guides/${g.addressBar}`)" class="trend-media">
                <img :src="g.imageSrc" :alt="g.imageAlt" width="200" height="200" loading="lazy" />
              </a>
              <div class="trend-body">
                <h3 class="trend-title">
                  <a :href="appHref(`/guides/${g.addressBar}`)">{{ g.title }}</a>
                </h3>
                <p class="trend-desc">{{ g.description }}</p>
                <time class="trend-date" :datetime="g.publishDate">{{ formatDate(g.publishDate) }}</time>
              </div>
            </article>
          </div>
          <a :href="appHref('/guides')" class="text-link">View all guides →</a>
        </div>
      </div>
    </section>

    <!-- 技术与社区矩阵 -->
    <section class="meta-section" aria-labelledby="meta-heading">
      <div class="container">
        <div class="meta-content">
          <h2 id="meta-heading" class="section-title">Super Battle Golf Quick Facts &amp; Support</h2>
          <div class="meta-split">
            <div class="meta-panel">
              <h3 class="meta-sub">Game details (Steam &amp; press kit)</h3>
              <ul class="fact-list">
                <li><strong>Release:</strong> Feb 19, 2026 — Windows PC on Steam.</li>
                <li><strong>Players:</strong> 1–8 simultaneous online; solo includes point-based scoring.</li>
                <li><strong>Content:</strong> 27 holes, 34 Steam achievements, cloud &amp; family sharing.</li>
                <li><strong>Studios:</strong> Developer Brimstone · Publisher Oro Interactive.</li>
                <li><strong>MSRP:</strong> Press kit cites $7.99 (regional Steam pricing varies).</li>
                <li><strong>Reviews:</strong> Steam sits in the “Very Positive” band — open the store for live percentages.</li>
              </ul>
              <a :href="appHref('/platforms')" class="text-link">Platform &amp; PC specs →</a>
            </div>
            <div class="meta-panel">
              <h3 class="meta-sub">Common issues</h3>
              <p class="meta-copy">Steam verify, drivers, overlays, and network — see Support for the full checklist.</p>
              <ul class="error-links">
                <li>
                  <a :href="appHref('/support#crash')">Crash on launch — GPU drivers &amp; file verify</a>
                </li>
                <li>
                  <a :href="appHref('/support#lag')">Multiplayer lag &amp; rubber-banding</a>
                </li>
                <li>
                  <a :href="appHref('/support#servers')">Cannot join friends / server time-outs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-shell">
          <header class="about-head">
            <h2 id="about-heading" class="about-heading">About this site</h2>
            <p class="about-kicker">
              Fan-maintained Super Battle Golf guide · Not affiliated with Brimstone, Oro Interactive, or Valve
            </p>
          </header>

          <div class="about-columns">
            <div class="about-main">
              <section class="about-block" aria-labelledby="about-editorial">
                <h3 id="about-editorial" class="about-block-title">What we publish</h3>
                <p class="about-block-text">
                  Short articles that explain how the game works on PC, link to the Steam store and news hub, and call out when information comes from a press kit or
                  third-party guide. Patches can change balance and UI — we treat store pages and in-game text as the final word for anything that affects your account or purchase.
                </p>
              </section>
              <section class="about-block" aria-labelledby="about-game">
                <h3 id="about-game" class="about-block-title">About the game</h3>
                <p class="about-block-text">
                  Super Battle Golf is simultaneous multiplayer golf with items and hazards. The Steam listing highlights up to eight players online, voice chat, and many holes to play through.
                  If console versions are announced, we will only add them to
                  <a :href="appHref('/platforms')">Platforms</a>
                  after an official channel says so.
                </p>
              </section>
            </div>

            <aside class="about-aside" aria-labelledby="about-sources-title">
              <h3 id="about-sources-title" class="about-aside-title">Sources</h3>
              <ul class="about-aside-list">
                <li>
                  <a href="https://store.steampowered.com/app/4069520/" target="_blank" rel="noopener noreferrer">Steam — Super Battle Golf (4069520)</a>
                </li>
                <li>
                  <a href="https://store.steampowered.com/newshub/app/4069520/" target="_blank" rel="noopener noreferrer">Steam — News &amp; updates</a>
                </li>
                <li>
                  <a href="https://brimstone.games/superbattlegolfpresskit" target="_blank" rel="noopener noreferrer">Brimstone — Press kit</a>
                </li>
              </ul>
              <p class="about-aside-note">
                Item tables and similar summaries credit named outlets on the pages where they appear.
              </p>
              <div class="about-aside-links">
                <a :href="appHref('/wiki')" class="about-aside-pill">Wiki</a>
                <a :href="appHref('/support')" class="about-aside-pill">Support</a>
              </div>
            </aside>
          </div>

          <div class="about-footbox" role="note">
            <p class="about-footbox-title">Not offered here</p>
            <p class="about-footbox-text">
              No unofficial game downloads, no install guides for platforms that are not on the store page, and no “permanent meta” claims that ignore patches.
              For specs and crashes, use <a :href="appHref('/platforms')">Platforms</a> and <a :href="appHref('/support')">Support</a>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section" aria-labelledby="faq-heading">
      <div class="container">
        <div class="faq-content">
          <h2 id="faq-heading" class="section-title">Frequently Asked Questions</h2>
          <dl class="faq-list">
            <div v-for="item in faqItems" :key="item.q" class="faq-item">
              <dt class="faq-q">{{ item.q }}</dt>
              <dd class="faq-a">{{ item.a }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import advancedTips from '../data/advancedTips.js'
import guides from '../data/guides.js'
import { appHref } from '../utils/appHref.js'

const router = useRouter()
const searchQuery = ref('')

const trendingGuides = (() => {
  const home = guides.filter((g) => g.isHome)
  return (home.length ? home : guides).slice(0, 3)
})()

/** 带 home 的条目才上转播条；列表奇偶控制 tone / muted */
const advancedTipsHome = advancedTips.filter((t) => t.home)

/** 转播桌板固定图标（与进阶主题一致） */
const advSpotDeskIconSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M17 5l-1.5 1.5M8.5 17.5L7 19M17 19l-1.5-1.5M8.5 6.5L7 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`

/** 转播区底部按钮固定文案 */
const advSpotCtaLabel = 'Full walkthrough'

const quickCards = [
  {
    to: '/getting-started',
    label: 'Getting Started',
    desc: 'Steam install, controls, first matches',
    variant: 0,
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor"/></svg>`,
  },
  {
    to: '/wiki',
    label: 'Wiki',
    desc: 'Topic hub: items, maps, cosmetics, achievements',
    variant: 1,
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5C9.5 4 6 4 4 5.5V20c2-1.5 5.5-1.5 8 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 6.5c2.5-2.5 6-2.5 8-1V20c-2-1.5-5.5-1.5-8 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    to: '/guides',
    label: 'Guides',
    desc: 'Long-form articles when published',
    variant: 2,
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2v6h6M8 13h8M8 17h6M8 9h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    to: '/mods',
    label: 'Mods',
    desc: 'Super Battle Golf mod and PC companion articles',
    variant: 3,
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h4M10 7h10M4 12h10M16 12h4M4 17h6M12 17h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="7" r="2" fill="currentColor"/><circle cx="14" cy="12" r="2" fill="currentColor"/><circle cx="9" cy="17" r="2" fill="currentColor"/></svg>`,
  },
  {
    to: '/platforms',
    label: 'Platforms',
    desc: 'PC requirements, Steam, controllers',
    variant: 4,
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    to: '/support',
    label: 'Support',
    desc: 'Crashes, lag, official links',
    variant: 5,
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 018.5-8.5 8.38 8.38 0 013.8.9z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
]

const faqItems = [
  {
    q: 'Is Super Battle Golf traditional stroke-play golf?',
    a: 'No. Steam markets it as simultaneous golf: everyone plays at the same time while swinging, shooting items, and sabotaging on the way to the hole.',
  },
  {
    q: 'Is there an Xbox, PlayStation, or Switch version?',
    a: 'Not on the Steam store or Brimstone press kit as of the documented PC launch — only Windows PC is listed. Rumors about console ports need an official Oro / Brimstone announcement.',
  },
  {
    q: 'Where do the ten item descriptions come from?',
    a: 'We summarize Destructoid’s item guide (credited to Oro art) and remind players that patches can rebalance gear — always trust in-game tooltips first.',
  },
  {
    q: 'Does this site host official patch notes?',
    a: 'We link to Valve’s Steam news hub for the game (app 4069520). Our articles may recap highlights but should not replace the original posts.',
  },
  {
    q: 'Can I run it on Mac or a low-spec PC?',
    a: 'There is no macOS SKU on Steam; Mac users rely on Windows installs or streaming. Minimum PC specs list GTX 950-class GPUs and 8 GB RAM — see Support for tuning ideas.',
  },
]

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(iso))
  } catch {
    return iso
  }
}

function onSearchSubmit() {
  const q = searchQuery.value.trim()
  router.push({ path: '/search', query: q ? { q } : {} })
}
</script>

<style scoped>
.home {
  padding-bottom: 3.5rem;
}

.hero-section {
  padding: 2.5rem 0 2.25rem;
}

.hero-panel {
  position: relative;
  border-radius: 1.35rem;
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: linear-gradient(165deg, rgba(18, 32, 54, 0.94) 0%, rgba(10, 18, 32, 0.96) 100%);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 24px 48px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.hero-panel-glow {
  pointer-events: none;
  position: absolute;
  inset: -40% -20% auto auto;
  width: min(28rem, 90vw);
  height: min(22rem, 55vw);
  background:
    radial-gradient(circle at 30% 40%, rgba(74, 222, 128, 0.18), transparent 55%),
    radial-gradient(circle at 70% 60%, rgba(56, 189, 248, 0.14), transparent 50%),
    radial-gradient(circle at 50% 80%, rgba(253, 224, 71, 0.08), transparent 45%);
  filter: blur(2px);
}

.hero-panel-inner {
  position: relative;
  z-index: 1;
  padding: clamp(1.35rem, 4vw, 2rem) clamp(1.25rem, 4vw, 2.15rem) clamp(1.5rem, 4vw, 2.1rem);
}

.hero-meta {
  margin-bottom: 1.35rem;
}

.hero-meta-caption {
  margin: 0 0 0.65rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(203, 213, 225, 0.88);
}

.hero-meta-link {
  color: #7dd3fc;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.hero-meta-link:hover {
  color: #fde047;
}

.hero-meta-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.hero-meta-chip {
  margin: 0;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ecfdf5;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(74, 222, 128, 0.35);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05) inset;
}

.hero-eyebrow {
  display: inline-block;
  margin-bottom: 0.65rem;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0f172a;
  background: linear-gradient(90deg, #fb7185, #fde047);
  box-shadow: 0 3px 0 rgba(15, 23, 42, 0.75);
}

.hero-h1 {
  font-size: clamp(1.95rem, 4.5vw, 3rem);
  margin-bottom: 0.65rem;
  line-height: 1.08;
}

.hero-h2 {
  font-size: clamp(1.05rem, 2.2vw, 1.3rem);
  font-family: var(--font-body);
  font-weight: 700;
  color: #d1fae5;
  margin-bottom: 1.15rem;
  text-shadow: 0 2px 0 rgba(15, 23, 42, 0.45);
}

.hero-search-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 800;
  font-family: var(--font-heading);
  margin-bottom: 0.35rem;
  color: #fef9c3;
}

.hero-search-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.hero-search-input {
  flex: 1 1 220px;
  min-height: 3.15rem;
  padding: 0 1rem;
  border-radius: 999px;
  border: 3px solid #0f172a;
  background: rgba(8, 14, 26, 0.92);
  color: var(--color-text);
  font-size: 1rem;
  outline: none;
  box-shadow: 0 5px 0 rgba(15, 23, 42, 0.55);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.hero-search-input:focus {
  border-color: #4ade80;
  transform: translateY(-1px);
}

.hero-search-btn {
  min-height: 3.15rem;
  padding: 0 1.35rem;
  border-radius: 999px;
  border: 3px solid #0f172a;
  font-weight: 900;
  font-family: var(--font-heading);
  cursor: pointer;
  background: linear-gradient(135deg, #f472b6, #a78bfa);
  color: #0f172a;
  box-shadow: 0 5px 0 rgba(15, 23, 42, 0.65);
  transition: filter 0.2s ease, transform 0.2s ease;
}

.hero-search-btn:hover {
  filter: brightness(1.06);
  transform: translateY(-2px);
}

.hero-search-btn:focus-visible {
  outline: 3px solid #fde047;
  outline-offset: 2px;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.65rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.05rem;
  padding: 0 1.4rem;
  border-radius: 999px;
  font-weight: 900;
  font-family: var(--font-heading);
  text-decoration: none;
  cursor: pointer;
  border: 3px solid #0f172a;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.btn:hover {
  text-decoration: none;
  transform: translateY(-3px) rotate(-1deg);
}

.btn--primary {
  background: linear-gradient(180deg, #bbf7d0, #4ade80);
  color: #052e16;
  box-shadow: 0 6px 0 rgba(15, 23, 42, 0.65);
}

.btn--primary:hover {
  filter: brightness(1.04);
}

.btn--secondary {
  background: linear-gradient(180deg, #bae6fd, #38bdf8);
  color: #082f49;
  box-shadow: 0 6px 0 rgba(15, 23, 42, 0.65);
}

.btn--steam {
  background: linear-gradient(180deg, #94a3b8, #64748b);
  color: #f8fafc;
  box-shadow: 0 6px 0 rgba(15, 23, 42, 0.65);
}

.btn--steam:hover {
  filter: brightness(1.08);
}

.quick-section {
  padding: 2.75rem 0;
}

.quick-content {
  border-top: 4px dotted rgba(251, 113, 133, 0.35);
  padding-top: 2.5rem;
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2.15rem);
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
  font-weight: 900;
  letter-spacing: -0.02em;
  background: linear-gradient(95deg, #fef9c3, #fde047 30%, #4ade80 62%, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 0 rgba(15, 23, 42, 0.85));
}

.section-title--compact {
  font-size: clamp(1.35rem, 2.6vw, 1.75rem);
  margin-bottom: 0.35rem;
}

.section-lead {
  color: var(--color-muted);
  margin-bottom: 1.75rem;
  font-size: 1.02rem;
}

.section-lead--tight {
  margin-bottom: 1.35rem;
  font-size: 0.98rem;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 1rem;
}

.quick-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.2rem 1.1rem 1.25rem;
  border-radius: 1.15rem;
  border: 3px solid;
  background: rgba(18, 32, 52, 0.82);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  box-shadow: 0 8px 0 rgba(15, 23, 42, 0.5);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.quick-card:hover {
  text-decoration: none;
  transform: translateY(-4px) rotate(0.5deg);
  box-shadow: 0 12px 0 rgba(15, 23, 42, 0.45);
}

.quick-card--v0 {
  border-color: #4ade80;
  transform: rotate(-1.2deg);
}

.quick-card--v1 {
  border-color: #38bdf8;
  transform: rotate(0.8deg);
}

.quick-card--v2 {
  border-color: #fde047;
  transform: rotate(-0.6deg);
}

.quick-card--v3 {
  border-color: #c084fc;
  transform: rotate(1deg);
}

.quick-card--v4 {
  border-color: #fb923c;
  transform: rotate(-0.9deg);
}

.quick-card--v5 {
  border-color: #5eead4;
  transform: rotate(-0.4deg);
}

.quick-card:hover.quick-card--v0,
.quick-card:hover.quick-card--v1,
.quick-card:hover.quick-card--v2,
.quick-card:hover.quick-card--v3,
.quick-card:hover.quick-card--v4,
.quick-card:hover.quick-card--v5 {
  transform: translateY(-5px) rotate(0deg);
}

.quick-icon :deep(svg) {
  width: 2.15rem;
  height: 2.15rem;
  color: #fef08a;
  filter: drop-shadow(0 2px 0 rgba(15, 23, 42, 0.6));
}

.quick-label {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 1.08rem;
  color: #fffbeb;
  text-shadow: 0 2px 0 rgba(6, 78, 59, 0.35);
}

.quick-desc {
  font-size: 0.9rem;
  color: var(--color-muted);
}

/* —— Advanced play: golf broadcast / replay booth (not a generic card grid) —— */
.adv-section.adv-broadcast {
  position: relative;
  padding: 2.5rem 0 3.25rem;
  border-top: 3px dashed rgba(253, 224, 71, 0.28);
}

.adv-broadcast__inner {
  position: relative;
  z-index: 1;
}

/* Film strip perforations */
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

.adv-broadcast__head {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2.1rem;
  padding-left: 1rem;
  border-left: 5px solid #fde047;
}

@media (min-width: 640px) {
  .adv-broadcast__head {
    max-width: 38rem;
  }
}

.adv-broadcast__live {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: fit-content;
  padding: 0.22rem 0.65rem 0.22rem 0.5rem;
  border-radius: 4px;
  background: #450a0a;
  border: 2px solid #dc2626;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.35);
}

.adv-broadcast__live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ef4444;
  box-shadow: 0 0 10px #f87171;
  animation: adv-live-pulse 1.35s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .adv-broadcast__live-dot {
    animation: none;
  }
}

@keyframes adv-live-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.88);
  }
}

.adv-broadcast__live-txt {
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fecaca;
}

.adv-broadcast__title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.65rem, 4.2vw, 2.4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #fefce8;
  text-shadow:
    3px 3px 0 #14532d,
    6px 6px 0 rgba(20, 83, 45, 0.35);
}

.adv-broadcast__deck {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(196, 219, 212, 0.93);
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

/* Gaffer tape label */
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

/* Shotcaller script desk */
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

.trend-section {
  padding: 2.75rem 0;
}

.trend-content {
  border-top: 4px dotted rgba(56, 189, 248, 0.35);
  padding-top: 2.5rem;
}

.trend-list {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  margin-bottom: 1rem;
}

.trend-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem 1.05rem;
  border-radius: 1.25rem;
  border: 3px solid;
  background: rgba(16, 28, 48, 0.78);
  box-shadow: 0 8px 0 rgba(15, 23, 42, 0.48);
  transition: transform 0.2s ease;
}

.trend-row:hover {
  transform: translateY(-2px);
}

.trend-row--tone0 {
  border-color: rgba(74, 222, 128, 0.85);
}

.trend-row--tone1 {
  border-color: rgba(56, 189, 248, 0.85);
}

.trend-row--tone2 {
  border-color: rgba(251, 113, 133, 0.85);
}

@media (min-width: 768px) {
  .trend-row {
    grid-template-columns: 200px 1fr;
    align-items: start;
  }
}

.trend-media {
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid #0f172a;
  box-shadow: 4px 4px 0 rgba(253, 224, 71, 0.35);
}

.trend-media img {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
}

.trend-title {
  font-size: 1.15rem;
  margin-bottom: 0.35rem;
}

.trend-title a {
  color: #fffbeb;
  text-decoration: none;
  cursor: pointer;
  text-shadow: 0 2px 0 rgba(15, 23, 42, 0.35);
}

.trend-title a:hover {
  color: #fde047;
  text-decoration: none;
}

.trend-desc {
  color: var(--color-muted);
  margin-bottom: 0.5rem;
}

.trend-date {
  font-size: 0.85rem;
  font-weight: 800;
  color: #a5f3fc;
}

.text-link {
  display: inline-block;
  font-weight: 900;
  font-family: var(--font-heading);
  margin-top: 0.5rem;
  cursor: pointer;
  color: #f472b6;
}

.meta-section {
  padding: 2.75rem 0;
}

.meta-content {
  border-top: 4px dotted rgba(253, 224, 71, 0.35);
  padding-top: 2.5rem;
}

.meta-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

@media (min-width: 1024px) {
  .meta-split {
    grid-template-columns: 1.4fr 1fr;
  }
}

.meta-sub {
  font-size: 1.12rem;
  margin-bottom: 0.75rem;
  font-family: var(--font-heading);
  font-weight: 900;
  color: #fef9c3;
  text-shadow: 0 2px 0 rgba(15, 23, 42, 0.45);
}

.meta-copy {
  color: var(--color-muted);
}

.fact-list {
  margin: 0 0 1rem;
  padding-left: 1.15rem;
  color: var(--color-muted);
  line-height: 1.55;
}

.fact-list li {
  margin-bottom: 0.45rem;
}

.fact-list strong {
  color: #fef9c3;
}

.error-links {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0;
}

.error-links li {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  border-left: 4px solid #fb7185;
}

.error-links a {
  font-weight: 800;
  cursor: pointer;
}

.about-section {
  padding: 2.75rem 0;
  border-top: 4px dotted rgba(192, 132, 252, 0.28);
}

.about-shell {
  padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1.25rem, 3vw, 2rem);
  border-radius: 1.25rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(12, 22, 38, 0.72);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
}

.about-head {
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.about-heading {
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: clamp(1.4rem, 2.8vw, 1.85rem);
  letter-spacing: -0.02em;
  color: #f8fafc;
}

.about-kicker {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.about-columns {
  display: grid;
  gap: 1.75rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .about-columns {
    grid-template-columns: 1fr minmax(240px, 280px);
    align-items: start;
    gap: 2rem;
  }
}

.about-main {
  min-width: 0;
}

.about-block + .about-block {
  margin-top: 1.35rem;
}

.about-block-title {
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #a5f3fc;
}

.about-block-text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.about-block-text :deep(a) {
  font-weight: 700;
  color: #86efac;
}

.about-aside {
  padding: 1.15rem 1.2rem 1.25rem;
  border-radius: 1rem;
  background: rgba(8, 14, 26, 0.72);
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.about-aside-title {
  margin: 0 0 0.65rem;
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fef9c3;
}

.about-aside-list {
  margin: 0 0 0.85rem;
  padding: 0;
  list-style: none;
}

.about-aside-list li {
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.about-aside-list li:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.about-aside-list a {
  font-size: 0.9rem;
  font-weight: 700;
  color: #7dd3fc;
  text-decoration: none;
}

.about-aside-list a:hover {
  color: #fde047;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.about-aside-note {
  margin: 0 0 1rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(148, 163, 184, 0.95);
}

.about-aside-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.about-aside-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 800;
  text-decoration: none;
  color: #0f172a;
  background: linear-gradient(135deg, #bbf7d0, #4ade80);
  border: 1px solid rgba(15, 23, 42, 0.35);
}

.about-aside-pill:hover {
  filter: brightness(1.06);
  text-decoration: none;
}

.about-footbox {
  padding: 1rem 1.1rem 1.05rem;
  border-radius: 0.85rem;
  border-left: 4px solid rgba(251, 113, 133, 0.75);
  background: rgba(15, 23, 42, 0.45);
}

.about-footbox-title {
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 0.85rem;
  color: #fecdd3;
}

.about-footbox-text {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.about-footbox-text :deep(a) {
  font-weight: 800;
  color: #7dd3fc;
}

.faq-section {
  padding: 2.75rem 0 1rem;
}

.faq-content {
  border-top: 4px dotted rgba(74, 222, 128, 0.35);
  padding-top: 2.5rem;
}

.faq-list {
  margin: 0;
}

.faq-item {
  margin-bottom: 1.15rem;
  padding: 1rem 1.15rem;
  border-radius: 1rem;
  border: 3px solid rgba(56, 189, 248, 0.35);
  background: rgba(14, 24, 42, 0.72);
  box-shadow: 0 6px 0 rgba(15, 23, 42, 0.45);
}

.faq-q {
  font-family: var(--font-heading);
  font-weight: 900;
  margin-bottom: 0.35rem;
  color: #fef9c3;
}

.faq-a {
  margin: 0;
  color: var(--color-muted);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

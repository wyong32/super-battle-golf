<template>
  <div class="page plat">
    <PageHero eyebrow="Super Battle Golf · PC" title="Super Battle Golf platforms &amp; PC requirements" heading-id="plat-title">
      <p class="plat-lead">
        Where <strong>Super Battle Golf</strong> runs today: Brimstone’s press kit lists <strong>PC</strong>; the Steam store shows a <strong>Windows</strong> build. No PlayStation, Xbox, or Switch SKU appears in those sources — treat fan-site port claims as unverified until Oro or Brimstone announces them.
      </p>
    </PageHero>

    <div class="container plat-shell">
      <aside class="plat-toc-wrap" aria-label="On this page">
        <nav class="plat-toc">
          <p class="plat-toc-h">Jump</p>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'matrix' }"
            :aria-current="activeSection === 'matrix' ? 'location' : undefined"
            @click="scrollTo('matrix')"
          >
            <span class="plat-toc-num">01</span>
            <span class="plat-toc-label">Platform matrix</span>
          </button>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'features' }"
            :aria-current="activeSection === 'features' ? 'location' : undefined"
            @click="scrollTo('features')"
          >
            <span class="plat-toc-num">02</span>
            <span class="plat-toc-label">Store features</span>
          </button>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'cross' }"
            :aria-current="activeSection === 'cross' ? 'location' : undefined"
            @click="scrollTo('cross')"
          >
            <span class="plat-toc-num">03</span>
            <span class="plat-toc-label">Cross-play</span>
          </button>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'specs' }"
            :aria-current="activeSection === 'specs' ? 'location' : undefined"
            @click="scrollTo('specs')"
          >
            <span class="plat-toc-num">04</span>
            <span class="plat-toc-label">System specs</span>
          </button>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'deck' }"
            :aria-current="activeSection === 'deck' ? 'location' : undefined"
            @click="scrollTo('deck')"
          >
            <span class="plat-toc-num">05</span>
            <span class="plat-toc-label">Deck &amp; Linux</span>
          </button>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'display' }"
            :aria-current="activeSection === 'display' ? 'location' : undefined"
            @click="scrollTo('display')"
          >
            <span class="plat-toc-num">06</span>
            <span class="plat-toc-label">Display &amp; capture</span>
          </button>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'net' }"
            :aria-current="activeSection === 'net' ? 'location' : undefined"
            @click="scrollTo('net')"
          >
            <span class="plat-toc-num">07</span>
            <span class="plat-toc-label">Network &amp; voice</span>
          </button>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'searches' }"
            :aria-current="activeSection === 'searches' ? 'location' : undefined"
            @click="scrollTo('searches')"
          >
            <span class="plat-toc-num">08</span>
            <span class="plat-toc-label">PS5, Xbox &amp; stats</span>
          </button>
          <button
            type="button"
            class="plat-toc-row"
            :class="{ 'is-active': activeSection === 'refs' }"
            :aria-current="activeSection === 'refs' ? 'location' : undefined"
            @click="scrollTo('refs')"
          >
            <span class="plat-toc-num">09</span>
            <span class="plat-toc-label">References</span>
          </button>
        </nav>
      </aside>

      <div class="plat-main">
        <section class="plat-panel" data-section="matrix" aria-labelledby="plat-matrix-title">
          <h2 id="plat-matrix-title" class="plat-h2">
            <span class="plat-h2-num">01</span>
            Super Battle Golf on PC, Steam, Mac &amp; consoles
          </h2>
          <p class="plat-intro">Where <strong>Super Battle Golf</strong> is officially sold and where it is not — including questions about console SKUs.</p>
          <div class="plat-matrix">
            <article class="plat-card plat-card--win">
              <div class="plat-card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="6" width="22" height="14" rx="2" stroke="currentColor" stroke-width="1.8" />
                  <path d="M10 24h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <path d="M16 20v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                </svg>
              </div>
              <h3 class="plat-card-h">Windows · Super Battle Golf on Steam</h3>
              <p class="plat-card-p">
                Primary <strong>Super Battle Golf Steam</strong> release — achievements, cloud saves, family sharing. Full feature list on
                <a href="https://store.steampowered.com/app/4069520/" target="_blank" rel="noopener noreferrer">Steam</a>.
              </p>
            </article>
            <article class="plat-card plat-card--deck">
              <div class="plat-card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="5" width="16" height="22" rx="3" stroke="currentColor" stroke-width="1.8" />
                  <path d="M11 9h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
                  <circle cx="16" cy="24" r="1.5" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              <h3 class="plat-card-h">Steam Deck &amp; Linux</h3>
              <p class="plat-card-p">
                Runs through Proton; Verified / Playable badges can flip after one patch. Check Deck community reports and
                <a href="https://www.protondb.com/" target="_blank" rel="noopener noreferrer">ProtonDB</a>.
              </p>
            </article>
            <article class="plat-card plat-card--mac">
              <div class="plat-card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 22c1.5 3 4 4 7 4s5.5-1 7-4c-2-1-3-3-3-5.5 0-2.5 1.5-4 3-5-1.5-2-4-3.5-7-3.5-3 0-5.5 1.5-7 3.5 1.5 1 3 2.5 3 5 0 2.5-1 4.5-3 5.5z"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <path d="M16 8v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
              <h3 class="plat-card-h">macOS</h3>
              <p class="plat-card-p">
                No native macOS listing on the Steam page we cite. Intel: Boot Camp; Apple Silicon: streaming or VMs — see
                <a :href="appHref('/support')">Support</a> for troubleshooting and links.
              </p>
            </article>
            <article class="plat-card plat-card--no">
              <div class="plat-card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="8" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8" opacity="0.5" />
                  <path d="M10 22l12-12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </div>
              <h3 class="plat-card-h">Consoles — PS5, Xbox, Switch</h3>
              <p class="plat-card-p">
                No <strong>Super Battle Golf PS5</strong> or <strong>Super Battle Golf Xbox</strong> listing on Steam or the press kit we mirror. Ignore SEO pages that imply console ports without a first-party store link.
              </p>
            </article>
          </div>
        </section>

        <section class="plat-panel plat-panel--split" data-section="features" aria-labelledby="plat-features-title">
          <div class="plat-split-inner">
            <div>
              <h2 id="plat-features-title" class="plat-h2">
                <span class="plat-h2-num">02</span>
                What Steam highlights
              </h2>
              <p class="plat-intro">Paraphrased from the public store — always re-read Valve’s page after patches.</p>
              <ul class="plat-checklist">
                <li>Online play for up to <strong>8</strong> players at once</li>
                <li><strong>27</strong> holes — sand, water, vegetation, mines</li>
                <li>Items, multi-seat golf carts, cosmetics</li>
                <li>Voice chat; private and public servers</li>
                <li><strong>34</strong> achievements; Steam Cloud; Family Sharing</li>
              </ul>
            </div>
            <aside class="plat-rail" aria-label="Related on this site">
              <h3 class="plat-rail-h">On this site</h3>
              <a :href="appHref('/getting-started')" class="plat-rail-link">Getting started · Controls</a>
              <a :href="appHref('/mods/steam-workshop-and-mod-reality')" class="plat-rail-link">Workshop &amp; game files</a>
              <a :href="appHref('/wiki/weapons')" class="plat-rail-link">Wiki · Weapons list</a>
              <a :href="appHref('/wiki/maps')" class="plat-rail-link">Wiki · Maps</a>
            </aside>
          </div>
        </section>

        <section class="plat-panel plat-panel--narrow" data-section="cross" aria-labelledby="cross-title">
          <h2 id="cross-title" class="plat-h2">
            <span class="plat-h2-num">03</span>
            Is Super Battle Golf cross-platform or crossplay?
          </h2>
          <p class="plat-body">
            For <strong>Super Battle Golf crossplay</strong> today, only the <strong>Windows Steam</strong> client is documented on the pages we cite — <strong>console cross-play is out of scope</strong> until first-party stores list other SKUs. Use Steam invites, public/private servers, and in-game voice as Valve lists.
          </p>
          <p class="plat-body plat-body--muted">
            If a blog mentions ranked or “battle royale” branded modes, compare the date to
            <a href="https://store.steampowered.com/newshub/app/4069520" target="_blank" rel="noopener noreferrer">Steam news</a>
            — we do not treat unconfirmed mode names as facts.
          </p>
        </section>

        <section class="plat-panel" data-section="specs" aria-labelledby="req-title">
          <h2 id="req-title" class="plat-h2">
            <span class="plat-h2-num">04</span>
            PC system requirements
          </h2>
          <p class="plat-intro">
            Quoted from Valve’s store page for app <strong>4069520</strong>. Third-party requirement sites often duplicate the minimum row as “recommended” — that is <em>not</em> what the live Steam page shows.
          </p>
          <div class="req-two">
            <div class="req-block">
              <h3 class="req-block-title">Minimum</h3>
              <dl class="req-dl">
                <div class="req-row"><dt>OS</dt><dd>Windows 10 (64-bit)</dd></div>
                <div class="req-row"><dt>CPU</dt><dd>Ryxen 3 3100 or equivalent (Steam spelling → Ryzen 3 3100 class)</dd></div>
                <div class="req-row"><dt>Memory</dt><dd>8 GB RAM</dd></div>
                <div class="req-row"><dt>Graphics</dt><dd>GTX 950 4 GB or equivalent</dd></div>
                <div class="req-row"><dt>DirectX</dt><dd>Version 11</dd></div>
                <div class="req-row"><dt>Network</dt><dd>Broadband Internet connection</dd></div>
                <div class="req-row"><dt>Storage</dt><dd>1 GB available space</dd></div>
                <div class="req-row"><dt>Sound</dt><dd>Yes</dd></div>
                <div class="req-row req-row--full"><dt>Notes</dt><dd>Requires a 64-bit processor and operating system (Steam)</dd></div>
              </dl>
            </div>
            <div class="req-block">
              <h3 class="req-block-title">Recommended (Steam)</h3>
              <p class="req-steam-only">
                Under <em>Recommended</em>, Valve currently lists only:
              </p>
              <dl class="req-dl req-dl--short">
                <div class="req-row req-row--full"><dt>System</dt><dd>Requires a 64-bit processor and operating system</dd></div>
              </dl>
              <div class="req-comfort">
                <h4 class="req-comfort-title">Comfort tier (unofficial)</h4>
                <p class="req-comfort-p">
                  For <strong>8-player chaos, streaming, or recording</strong>, many players voluntarily exceed the minimum — for example:
                </p>
                <ul class="req-comfort-ul">
                  <li><strong>RAM:</strong> 16 GB</li>
                  <li><strong>GPU:</strong> GTX 1060 6 GB / RX 580 8 GB or newer</li>
                  <li><strong>Storage:</strong> SSD for OS + library</li>
                  <li><strong>CPU:</strong> Recent quad-core if encoding while playing</li>
                </ul>
                <p class="req-comfort-foot">Editorial suggestions only — not Valve or Brimstone specs.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="plat-panel plat-panel--band" data-section="deck" aria-labelledby="deck-title">
          <h2 id="deck-title" class="plat-h2">
            <span class="plat-h2-num">05</span>
            Super Battle Golf on Steam Deck, Linux &amp; Proton
          </h2>
          <p class="plat-body">
            No separate Deck SKU — compatibility is Proton. Retest after Proton Experimental or game updates. On desktop Linux, align Steam Input with
            <a :href="appHref('/getting-started')">Getting started</a>.
          </p>
        </section>

        <section class="plat-panel" data-section="display" aria-labelledby="av-title">
          <h2 id="av-title" class="plat-h2">
            <span class="plat-h2-num">06</span>
            Display, capture &amp; overlays
          </h2>
          <p class="plat-body">
            V-Sync or an FPS cap can steady the camera. Discord / OBS overlays occasionally conflict with 3D titles — disable temporarily, update GPU drivers, then use Steam <strong>Verify integrity of game files</strong>. Remote play adds latency; wired Ethernet on the host helps.
          </p>
        </section>

        <section class="plat-panel" data-section="net" aria-labelledby="net-title">
          <h2 id="net-title" class="plat-h2">
            <span class="plat-h2-num">07</span>
            Networking &amp; voice
          </h2>
          <p class="plat-body">
            Steam lists broadband for online play. For NAT issues, try Steam invites, same game build for the whole party, and check
            <a href="https://store.steampowered.com/newshub/app/4069520" target="_blank" rel="noopener noreferrer">Steam news</a>
            after outages.
          </p>
        </section>

        <section class="plat-panel plat-panel--seo" data-section="searches" aria-labelledby="plat-seo-ps5">
          <h2 id="plat-seo-ps5" class="plat-h2">
            <span class="plat-h2-num">08</span>
            Super Battle Golf on PS5 &amp; Xbox — what the store shows
          </h2>
          <p class="plat-body">
            Searches like <strong>is Super Battle Golf on Xbox</strong> or <strong>Super Battle Golf console</strong> are common. The official materials we mirror still point to <strong>PC (Windows) via Steam</strong> — not a separate PlayStation or Xbox product page. If that changes, Valve or platform holders will publish new store entries first.
          </p>

          <h2 id="plat-seo-players" class="plat-topic-h2">Super Battle Golf player count &amp; max players</h2>
          <p class="plat-body">
            Valve advertises online play for up to <strong>eight</strong> players. Third-party “<strong>Super Battle Golf player count</strong>” or CCU charts (for example
            <a href="https://steamcharts.com/app/4069520" target="_blank" rel="noopener noreferrer">Steam Charts</a>
            or
            <a href="https://steamdb.info/app/4069520/graphs/" target="_blank" rel="noopener noreferrer">SteamDB</a>)
            fluctuate with time zones and sales — they measure Steam concurrency, not a guaranteed lobby size for your session.
          </p>

          <h2 id="plat-seo-steamkey" class="plat-topic-h2">Super Battle Golf Steam key, SteamDB &amp; community</h2>
          <p class="plat-body">
            Prefer buying or gifting through
            <a href="https://store.steampowered.com/app/4069520/" target="_blank" rel="noopener noreferrer">Steam</a>
            for a legitimate <strong>Super Battle Golf</strong> license. <strong>SteamDB</strong> and <strong>Steam Charts</strong> are useful for patch history and player graphs;
            <a href="https://www.reddit.com/search/?q=super%20battle%20golf" target="_blank" rel="noopener noreferrer">Reddit</a>
            threads are player opinions, not patch notes — verify against
            <a href="https://store.steampowered.com/newshub/app/4069520" target="_blank" rel="noopener noreferrer">Steam news</a>.
          </p>
        </section>

        <section class="plat-panel plat-panel--refs" data-section="refs" aria-labelledby="links-title">
          <h2 id="links-title" class="plat-h2">
            <span class="plat-h2-num">09</span>
            Official references
          </h2>
          <ul class="plat-linklist">
            <li><a href="https://store.steampowered.com/app/4069520/" target="_blank" rel="noopener noreferrer">Steam — Super Battle Golf</a></li>
            <li><a href="https://brimstone.games/superbattlegolfpresskit" target="_blank" rel="noopener noreferrer">Brimstone press kit</a></li>
            <li><a href="https://store.steampowered.com/newshub/app/4069520" target="_blank" rel="noopener noreferrer">Steam news hub</a></li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import { appHref } from '../utils/appHref.js'
import { scrollToSection, useScrollSpySections } from '../utils/sectionScroll.js'

const platKeys = ['matrix', 'features', 'cross', 'specs', 'deck', 'display', 'net', 'searches', 'refs']
const { activeKey: activeSection } = useScrollSpySections(platKeys)

function scrollTo(key) {
  scrollToSection(key)
}
</script>

<style scoped>
.page {
  padding: 0 0 3.5rem;
}

.plat-lead {
  margin: 0;
  max-width: 50rem;
  font-size: 0.95rem;
  line-height: 1.62;
  color: var(--color-muted);
}

.plat-lead strong {
  color: #e2e8f0;
}

.plat-shell {
  display: grid;
  gap: 1.5rem 2rem;
  padding-top: 1.5rem;
}

@media (min-width: 1024px) {
  .plat-shell {
    grid-template-columns: 13.25rem 1fr;
    align-items: start;
  }
}

.plat-toc-wrap {
  display: none;
}

@media (min-width: 1024px) {
  .plat-toc-wrap {
    display: block;
    position: sticky;
    top: 5.5rem;
  }
}

.plat-toc {
  margin: 0;
  padding: 0.65rem 0.55rem 0.75rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(56, 189, 248, 0.18);
  background:
    linear-gradient(160deg, rgba(14, 36, 58, 0.55) 0%, rgba(8, 14, 26, 0.72) 100%);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.03) inset,
    0 12px 32px rgba(0, 0, 0, 0.22);
}

.plat-toc-h {
  margin: 0 0 0.5rem;
  padding: 0 0.4rem;
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(56, 189, 248, 0.55);
}

.plat-toc-row {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 0.2rem;
  padding: 0.42rem 0.45rem 0.45rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  text-align: left;
  font: inherit;
  cursor: pointer;
  appearance: none;
  transition:
    background 0.14s ease,
    border-color 0.14s ease;
}

.plat-toc-row:last-child {
  margin-bottom: 0;
}

.plat-toc-row:hover {
  background: rgba(15, 23, 42, 0.45);
  border-color: rgba(56, 189, 248, 0.12);
}

.plat-toc-num {
  flex-shrink: 0;
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  color: rgba(74, 222, 128, 0.65);
  min-width: 1.35rem;
}

.plat-toc-row:hover .plat-toc-num {
  color: #4ade80;
}

.plat-toc-row.is-active {
  background: rgba(15, 23, 42, 0.55);
  border-color: rgba(74, 222, 128, 0.22);
}

.plat-toc-row.is-active .plat-toc-num {
  color: #4ade80;
}

.plat-toc-row.is-active .plat-toc-label {
  color: #f1f5f9;
}

.plat-toc-label {
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.3;
  color: #cbd5e1;
}

.plat-main {
  min-width: 0;
}

.plat-panel {
  scroll-margin-top: 5.25rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

.plat-panel:last-child {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

.plat-panel--band {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding: 1.25rem 1rem 1.5rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(56, 189, 248, 0.12);
  background: linear-gradient(135deg, rgba(12, 26, 48, 0.55) 0%, rgba(8, 14, 26, 0.4) 100%);
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

.plat-panel--refs {
  padding-bottom: 0;
}

.plat-h2 {
  margin: 0 0 0.65rem;
  font-family: var(--font-heading);
  font-size: clamp(1.15rem, 2.2vw, 1.45rem);
  font-weight: 800;
  color: #f8fafc;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.plat-h2-num {
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: #38bdf8;
  opacity: 0.85;
}

.plat-topic-h2 {
  margin: 1.35rem 0 0.5rem;
  font-family: var(--font-heading);
  font-size: clamp(1.02rem, 2vw, 1.2rem);
  font-weight: 800;
  line-height: 1.25;
  color: #e0f2fe;
}

.plat-panel--seo .plat-body + .plat-topic-h2 {
  margin-top: 1.5rem;
}

.plat-intro {
  margin: 0 0 1rem;
  max-width: 44rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.plat-body {
  margin: 0 0 0.75rem;
  max-width: 44rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.plat-body:last-child {
  margin-bottom: 0;
}

.plat-body--muted {
  font-size: 0.85rem;
  opacity: 0.92;
}

.plat-body a {
  font-weight: 800;
  color: #7dd3fc;
}

.plat-matrix {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .plat-matrix {
    grid-template-columns: repeat(2, 1fr);
  }
}

.plat-card {
  padding: 1rem 1.05rem 1.1rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(10, 18, 34, 0.55);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.plat-card-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #94a3b8;
}

.plat-card--win .plat-card-icon {
  color: #4ade80;
}
.plat-card--deck .plat-card-icon {
  color: #38bdf8;
}
.plat-card--mac .plat-card-icon {
  color: #fde047;
}
.plat-card--no .plat-card-icon {
  color: #fb7185;
}

.plat-card-h {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 800;
  font-family: var(--font-heading);
  color: #f1f5f9;
}

.plat-card-p {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.plat-card-p a {
  font-weight: 800;
  color: #7dd3fc;
}

.plat-panel--split .plat-split-inner {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .plat-panel--split .plat-split-inner {
    grid-template-columns: 1fr minmax(0, 14rem);
    align-items: start;
  }
}

.plat-checklist {
  margin: 0;
  padding-left: 1.15rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.plat-checklist li {
  margin-bottom: 0.35rem;
}

.plat-rail {
  padding: 1rem 0.95rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(192, 132, 252, 0.2);
  background: rgba(18, 14, 36, 0.4);
}

.plat-rail-h {
  margin: 0 0 0.55rem;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #e9d5ff;
}

.plat-rail-link {
  display: block;
  font-size: 0.82rem;
  font-weight: 700;
  color: #f9a8d4;
  text-decoration: none;
  padding: 0.3rem 0;
}

.plat-rail-link:hover {
  text-decoration: underline;
}

.plat-panel--narrow .plat-body {
  max-width: 40rem;
}

.req-two {
  display: grid;
  gap: 1.25rem;
  margin-top: 0.5rem;
}

@media (min-width: 1024px) {
  .req-two {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.req-block-title {
  margin: 0 0 0.65rem;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 800;
  color: #fde047;
}

.req-steam-only {
  margin: 0 0 0.65rem;
  font-size: 0.86rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.req-dl {
  margin: 0 0 1rem;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(56, 189, 248, 0.2);
  background: rgba(8, 14, 26, 0.55);
}

.req-dl--short {
  margin-bottom: 0.75rem;
}

.req-row {
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  gap: 0.5rem 1rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
  font-size: 0.86rem;
}

.req-row:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.req-row--full {
  grid-template-columns: 1fr;
}

.req-row--full dt {
  margin-bottom: 0.15rem;
}

.req-row dt {
  margin: 0;
  font-weight: 800;
  color: #a5f3fc;
}

.req-row dd {
  margin: 0;
  color: var(--color-muted);
}

.req-comfort {
  padding: 0.85rem 0.95rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(251, 191, 36, 0.22);
  background: rgba(30, 22, 8, 0.32);
}

.req-comfort-title {
  margin: 0 0 0.45rem;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fde68a;
}

.req-comfort-p {
  margin: 0 0 0.5rem;
  font-size: 0.84rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.req-comfort-ul {
  margin: 0 0 0.5rem;
  padding-left: 1.1rem;
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.req-comfort-ul li {
  margin-bottom: 0.3rem;
}

.req-comfort-foot {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.45;
  color: #94a3b8;
  font-style: italic;
}

.plat-linklist {
  margin: 0;
  padding-left: 1.15rem;
  font-size: 0.92rem;
  line-height: 1.65;
}

.plat-linklist a {
  font-weight: 800;
  color: #7dd3fc;
}
</style>

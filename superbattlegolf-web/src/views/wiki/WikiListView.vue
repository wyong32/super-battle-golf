<template>
  <div class="page wh wiki-page">
    <PageHero eyebrow="Fan-maintained reference" title="Super Battle Golf Wiki" heading-id="wh-title">
      <p class="wh-lead">
        This <strong>Super Battle Golf Wiki</strong> hub links four single-page lists — weapons, maps &amp; courses, achievement cosmetics, and Steam achievements. Each topic lives on its own route with no extra detail URLs. Use the home search to jump straight to an entry (opens the list and scrolls — no <code class="wh-code">#</code> in the address bar).
      </p>
    </PageHero>

    <section class="wh-grid-wrap" aria-label="Wiki categories">
      <div class="container">
        <h2 class="wh-cards-title">Open a list</h2>
        <div class="wh-cards">
          <a v-for="(s, i) in sections" :key="s.id" :href="appHref(s.to)" class="wh-card">
            <span class="wh-card-num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="wh-card-body">
            <span class="whi" aria-hidden="true">
              <!-- weapons -->
              <svg
                v-if="s.iconId === 'weapons'"
                class="whi-svg"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 26 L14 10 M10 28 L18 12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M26 6 L18 22 M22 4 L14 20"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  opacity="0.85"
                />
                <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.35" />
              </svg>
              <!-- maps -->
              <svg
                v-else-if="s.iconId === 'maps'"
                class="whi-svg"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 28 V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path
                  d="M10 10 L10 4 L22 8 L10 12 Z"
                  fill="currentColor"
                  opacity="0.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <circle cx="10" cy="28" r="2" fill="currentColor" opacity="0.5" />
              </svg>
              <!-- cosmetics -->
              <svg
                v-else-if="s.iconId === 'cosmetics'"
                class="whi-svg"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14 Q16 6 24 14 L22 24 H10 Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                  fill="currentColor"
                  fill-opacity="0.12"
                />
                <path d="M16 4 L17 8 L21 9 L17 10 L16 14 L15 10 L11 9 L15 8 Z" fill="currentColor" opacity="0.55" />
              </svg>
              <!-- achievements -->
              <svg
                v-else-if="s.iconId === 'achievements'"
                class="whi-svg"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="12" r="6" stroke="currentColor" stroke-width="2" />
                <path
                  d="M10 18 L10 26 L16 22 L22 26 L22 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                  fill="currentColor"
                  fill-opacity="0.15"
                />
              </svg>
            </span>
            <span class="wh-card-kicker">{{ s.kicker }}</span>
            <h3 class="wh-card-title">{{ s.title }}</h3>
            <p class="wh-card-desc">{{ s.description }}</p>
            <span class="wh-card-cta">Open list <span aria-hidden="true">→</span></span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="wh-searches" aria-label="Popular Super Battle Golf searches">
      <div class="container">
        <p class="wh-searches-kicker">High-intent topics</p>

        <h2 class="wh-search-h2">Is Super Battle Golf on Xbox, PS5, or console?</h2>
        <p class="wh-search-p">
          The official Steam store and Brimstone press materials we cite list <strong>Windows PC</strong> — not a separate
          <strong>Super Battle Golf PS5</strong> or <strong>Super Battle Golf Xbox</strong> SKU. Treat “console edition” pages without a first-party store link as unverified. Full matrix:
          <a :href="appHref('/platforms')">Super Battle Golf platforms</a>.
        </p>

        <h2 class="wh-search-h2">Is Super Battle Golf cross-platform or crossplay?</h2>
        <p class="wh-search-p">
          Documented builds center on <strong>Steam on Windows</strong>. Questions like <strong>is Super Battle Golf crossplay</strong> or
          <strong>is Super Battle Golf cross platform</strong> with consoles are only answered when Oro / Brimstone announce ports — see our
          <a :href="appHref('/platforms')">cross-platform section</a> for the PC-only picture today.
        </p>

        <h2 class="wh-search-h2">Super Battle Golf player count, max players &amp; lobby size</h2>
        <p class="wh-search-p">
          Valve’s store copy advertises online sessions for up to <strong>eight</strong> players. If you are comparing
          <strong>Super Battle Golf max players</strong> to another party game, confirm the number in-game after patches — not every blog uses the same wording as Steam.
        </p>

        <h2 class="wh-search-h2">Super Battle Golf mods &amp; Super Battle Golf mod support</h2>
        <p class="wh-search-p">
          Steam does not list Workshop for this app ID. Our <a :href="appHref('/mods')">Super Battle Golf mods</a> hub explains file reality, EULA context, and companion PC articles — not unofficial downloads.
        </p>

        <h2 class="wh-search-h2">Super Battle Golf cosmetics &amp; all cosmetics</h2>
        <p class="wh-search-p">
          Hats, clubs, balls, and other wardrobe pieces unlock through play. Our
          <a :href="appHref('/wiki/cosmetics')">achievement cosmetics</a> list maps each item to its Steam achievement (with reference images) and how fans usually earn it; pair it with
          <a :href="appHref('/getting-started')">Getting started · cosmetics</a> for how unlocks show up in the client.
        </p>

        <h2 class="wh-search-h2">Super Battle Golf achievements</h2>
        <p class="wh-search-p">
          All <strong>34</strong> milestones with Steam-sourced text live on our
          <a :href="appHref('/wiki/achievements')">Super Battle Golf achievements</a> list (global % drifts over time).
        </p>

        <h2 class="wh-search-h2">Super Battle Golf on Steam — keys, SteamDB, Steam Charts &amp; Reddit</h2>
        <p class="wh-search-p">
          Buy or redeem a <strong>Super Battle Golf</strong> license through
          <a href="https://store.steampowered.com/app/4069520/" target="_blank" rel="noopener noreferrer">Steam</a>
          — avoid gray-market “<strong>Super Battle Golf key</strong>” resellers you do not trust. For CCU history, see
          <a href="https://steamdb.info/app/4069520/graphs/" target="_blank" rel="noopener noreferrer">SteamDB</a>
          and
          <a href="https://steamcharts.com/app/4069520" target="_blank" rel="noopener noreferrer">Steam Charts</a>;
          discussion threads live on
          <a href="https://steamcommunity.com/app/4069520" target="_blank" rel="noopener noreferrer">Steam Community</a>
          and
          <a href="https://www.reddit.com/search/?q=super%20battle%20golf" target="_blank" rel="noopener noreferrer">Reddit search</a>
          (fan content — not official support).
        </p>

        <h2 class="wh-search-h2">Super Battle Golf on Mac</h2>
        <p class="wh-search-p">
          There is no native macOS depot on the Steam page we mirror. For Apple Silicon, Boot Camp, and streaming tradeoffs, see our
          <a :href="appHref('/platforms')">Platforms</a> page (macOS &amp; PC matrix).
        </p>

        <h2 class="wh-search-h2">Super golf battle, superbattlegolf &amp; spellings</h2>
        <p class="wh-search-p">
          Search engines also see typos such as <strong>super golf battle</strong>, <strong>superbattlegolf</strong>, or
          <strong>super battle golf</strong> with spacing dropped — they usually mean the same Steam title
          <strong>Super Battle Golf</strong> (app <strong>4069520</strong>).
        </p>
      </div>
    </section>

    <section class="wh-faq" aria-labelledby="wh-faq-title">
      <div class="container">
        <h2 id="wh-faq-title" class="wh-faq-title">FAQ</h2>
        <p class="wh-faq-intro">
          Short answers about this <strong>Super Battle Golf Wiki</strong> — how lists are structured and how to use them alongside a live Steam build.
        </p>
        <dl class="wh-faq-list">
          <div class="wh-faq-item">
            <dt class="wh-faq-q">Is this an official wiki or manual?</dt>
            <dd class="wh-faq-a">
              No. This site is independent fan documentation. For authoritative release facts, use
              <a href="https://store.steampowered.com/app/4069520/" target="_blank" rel="noopener noreferrer">Steam</a>
              and
              <a href="https://brimstone.games/superbattlegolfpresskit" target="_blank" rel="noopener noreferrer">Brimstone’s press kit</a>.
            </dd>
          </div>
          <div class="wh-faq-item">
            <dt class="wh-faq-q">Why don’t list links use # anchors?</dt>
            <dd class="wh-faq-a">
              Hash URLs stay in the address bar and are awkward to share. In-list jumps use
              <code class="wh-code wh-code--inline">data-section</code>
              plus smooth scroll; the home search can open a list with a temporary
              <code class="wh-code wh-code--inline">?focus=</code>
              query that clears after scrolling.
            </dd>
          </div>
          <div class="wh-faq-item">
            <dt class="wh-faq-q">Weapon stats or achievements look wrong — which source wins?</dt>
            <dd class="wh-faq-a">
              The running game client and Steam’s live pages beat any static article. After patches, re-check tooltips, the in-game UI, and
              <a href="https://steamcommunity.com/stats/4069520/achievements" target="_blank" rel="noopener noreferrer">Steam Community achievements</a>
              before treating wiki text as exact.
            </dd>
          </div>
          <div class="wh-faq-item">
            <dt class="wh-faq-q">Does the maps page list every course in the game?</dt>
            <dd class="wh-faq-a">
              It walks <strong>all 27 launch holes</strong> (nine per biome) with compact shot tips. Course names in the client may differ from these headings — treat the biome + hole index as the anchor, then confirm geometry in play.
            </dd>
          </div>
          <div class="wh-faq-item">
            <dt class="wh-faq-q">Where should a new player start?</dt>
            <dd class="wh-faq-a">
              Use
              <a :href="appHref('/getting-started')">Getting started</a>
              for controls and flow, then open
              <a :href="appHref('/wiki/weapons')">Weapons</a>
              or
              <a :href="appHref('/wiki/maps')">Courses</a>
              in another tab.
              <a :href="appHref('/platforms')">Platforms</a>
              covers Windows / Deck expectations before install.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import { appHref } from '../../utils/appHref.js'

const sections = [
  {
    id: 1,
    iconId: 'weapons',
    to: '/wiki/weapons',
    title: 'Weapons & items',
    kicker: '10 loadout tools',
    description:
      'Every offensive, defensive, and mobility pick-up described on the course — with tactics and patch disclaimers.',
  },
  {
    id: 2,
    iconId: 'maps',
    to: '/wiki/maps',
    title: 'Maps & courses',
    kicker: 'Biomes & tactics',
    description:
      'Grasslands, Desert, Wildweather — notable named layouts and how to read each biome.',
  },
  {
    id: 3,
    iconId: 'cosmetics',
    to: '/wiki/cosmetics',
    title: 'Achievement cosmetics',
    kicker: '64 wardrobe unlocks',
    description:
      'Heads, hats, eyewear, outfits, clubs, and golf balls tied to achievements — reference art plus unlock notes; no extra detail URLs.',
  },
  {
    id: 4,
    iconId: 'achievements',
    to: '/wiki/achievements',
    title: 'Steam achievements',
    kicker: '34 milestones',
    description:
      'Names, descriptions, and global completion data sourced from Valve’s Steam Community stats page.',
  },
]
</script>

<style scoped>
.page {
  padding: 0;
}

.wh-lead {
  margin: 0;
  max-width: 44rem;
  font-size: 0.95rem;
  line-height: 1.62;
  color: var(--color-muted);
}

.wh-lead strong {
  color: #e2e8f0;
}

.wh-code {
  font-size: 0.82em;
  padding: 0.08em 0.28em;
  border-radius: 0.25rem;
  background: rgba(15, 23, 42, 0.65);
  color: #a5f3fc;
}

.wh-code--inline {
  font-size: 0.88em;
}

.wh-grid-wrap {
  padding: 1.75rem 0 0;
}

.wh-cards-title {
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: clamp(0.8rem, 1.5vw, 0.88rem);
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(100, 116, 139, 0.9);
}

.wh-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
}

@media (min-width: 768px) {
  .wh-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.15rem 1.25rem;
  }
}

@media (min-width: 1024px) {
  .wh-cards {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.2rem;
  }
}

.wh-card {
  --wh-strip: var(--color-primary);
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
  min-height: 100%;
  padding: 0;
  border-radius: 0.75rem;
  border: none;
  background: linear-gradient(135deg, rgba(16, 26, 44, 0.88) 0%, rgba(10, 18, 32, 0.82) 100%);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  box-shadow:
    inset 0 1px 0 rgba(255, 251, 235, 0.05),
    0 2px 0 rgba(0, 0, 0, 0.35);
  transition:
    transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.2s ease;
}

.wh-card:nth-child(2) {
  --wh-strip: var(--color-secondary);
}

.wh-card:nth-child(3) {
  --wh-strip: #fb923c;
}

.wh-card:nth-child(4) {
  --wh-strip: #fde047;
}

.wh-card::before {
  content: '';
  width: 4px;
  flex-shrink: 0;
  background: var(--wh-strip);
  opacity: 0.9;
}

@media (prefers-reduced-motion: no-preference) {
  .wh-card:hover {
    transform: translateY(-3px);
    box-shadow:
      inset 0 1px 0 rgba(255, 251, 235, 0.07),
      0 18px 40px rgba(0, 0, 0, 0.3);
  }
}

.wh-card-num {
  flex-shrink: 0;
  width: 2.65rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1.1rem 0 0;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: rgba(148, 163, 184, 0.45);
  line-height: 1;
}

.wh-card-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.05rem 1.15rem 1.2rem 0.35rem;
}

.wh-card:hover .whi {
  color: var(--wh-strip);
}

.whi {
  display: inline-flex;
  color: rgba(125, 211, 252, 0.92);
  margin-bottom: 0.45rem;
}

.whi-svg {
  width: 2.1rem;
  height: 2.1rem;
}

.wh-card-kicker {
  font-size: 0.6rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(74, 222, 128, 0.85);
  margin-bottom: 0.4rem;
}

.wh-card-title {
  margin: 0 0 0.5rem;
  font-family: var(--font-heading);
  font-size: clamp(1.05rem, 2.4vw, 1.22rem);
  font-weight: 800;
  line-height: 1.2;
  color: #f8fafc;
}

.wh-card-desc {
  margin: 0 0 0.85rem;
  font-size: 0.84rem;
  line-height: 1.58;
  color: var(--color-muted);
  flex: 1;
}

.wh-card-cta {
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-secondary);
}

.wh-searches {
  padding: 2rem 0 0;
}

.wh-searches .container,
.wh-faq .container {
  max-width: 52rem;
}

.wh-searches-kicker {
  margin: 0 0 1rem;
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #64748b;
}

.wh-search-h2 {
  margin: 1.35rem 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 1.02rem;
  font-weight: 800;
  line-height: 1.3;
  color: #e2e8f0;
}

.wh-search-h2:first-of-type {
  margin-top: 0;
}

.wh-search-p {
  margin: 0 0 0.15rem;
  max-width: 46rem;
  font-size: 0.86rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.wh-search-p :deep(a),
.wh-search-p a {
  font-weight: 800;
  color: #7dd3fc;
  text-decoration: none;
}

.wh-search-p :deep(a):hover,
.wh-search-p a:hover {
  text-decoration: underline;
}

.wh-search-p strong {
  color: #cbd5e1;
}

.wh-faq {
  padding: 2.25rem 0 0;
}

.wh-faq-title {
  margin: 0 0 0.5rem;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  color: #f8fafc;
}

.wh-faq-intro {
  margin: 0 0 1.25rem;
  max-width: 40rem;
  font-size: 0.88rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.wh-faq-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.wh-faq-item {
  margin: 0;
  padding: 0.9rem 1rem 1rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(8, 14, 26, 0.4);
}

.wh-faq-q {
  margin: 0 0 0.45rem;
  font-size: 0.88rem;
  font-weight: 800;
  font-family: var(--font-heading);
  color: #e2e8f0;
  line-height: 1.35;
}

.wh-faq-a {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.wh-faq-a :deep(a) {
  font-weight: 800;
  color: #7dd3fc;
  text-decoration: none;
}

.wh-faq-a :deep(a):hover {
  text-decoration: underline;
}

.wh-faq-a :deep(strong) {
  color: #cbd5e1;
}

.wh-faq-a :deep(.wh-code) {
  font-size: 0.8em;
}
</style>

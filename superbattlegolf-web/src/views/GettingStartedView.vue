<template>
  <div class="page gs">
    <PageHero eyebrow="On-site guide · Steam PC" title="Super Battle Golf — Getting Started" heading-id="gs-hero-title">
      <div class="gs-hero-prose">
        <p class="gs-hero-lead">
          <strong>Super Battle Golf</strong> is built as a loud, simultaneous golf lobby: up to eight players online on the same course, swinging while items, carts, and hazards get in everyone’s way.
          Brimstone develops it and Oro Interactive publishes it — this page is a fan summary, not an official manual.
        </p>
        <p class="gs-hero-lead gs-hero-lead--2">
          The <a :href="appHref('/wiki')">wiki</a>
          lines up core facts with the Steam listing and Brimstone’s press kit. Other beginner articles on the web (including community wikis) can still have useful tips but often show <strong>wrong default keys</strong> or <strong>modes that are not on your build</strong> after a patch — always trust the client first.
        </p>
        <p class="gs-hero-lead gs-hero-lead--2">
          Skim the cards under the title, then use <strong>Sections</strong> on the left (or below on phones) to jump — the first block is a short video overview. Nothing here replaces in-game tooltips, rebinding screens, or patch notes.
        </p>
      </div>
      <div class="gs-hero-rule" aria-hidden="true" />
      <div class="gs-hero-strip" aria-label="What each section covers">
        <div class="gs-hero-card">
          <span class="gs-hero-card-num">01</span>
          <p class="gs-hero-card-title">Controls</p>
          <p class="gs-hero-card-blurb">Table plus notes on keys you will see in walkthroughs — every bind must match <strong>Settings → Controls</strong> on your PC.</p>
        </div>
        <div class="gs-hero-card">
          <span class="gs-hero-card-num">02</span>
          <p class="gs-hero-card-title">Match flow</p>
          <p class="gs-hero-card-blurb">Scoring ideas, items from briefcases, carts, and habits that help when everyone plays at once.</p>
        </div>
        <div class="gs-hero-card">
          <span class="gs-hero-card-num">03</span>
          <p class="gs-hero-card-title">Cosmetics</p>
          <p class="gs-hero-card-blurb">Hats to emotes as advertised on Steam — how unlock pacing is actually surfaced inside the game.</p>
        </div>
      </div>
    </PageHero>

    <div class="container gs-layout">
      <aside class="gs-toc-wrap" aria-label="On this page">
        <nav class="gs-toc" aria-label="Page sections">
          <p class="gs-toc-heading">Sections</p>
          <button
            type="button"
            class="gs-toc-row"
            :class="{ 'is-active': activeSection === 'trailer' }"
            :aria-current="activeSection === 'trailer' ? 'location' : undefined"
            @click="scrollTo('trailer')"
          >
            <span class="gs-toc-num">01</span>
            <span class="gs-toc-text">
              <span class="gs-toc-title">Game in a minute</span>
              <span class="gs-toc-sub">Trailer &amp; pitch</span>
            </span>
          </button>
          <button
            type="button"
            class="gs-toc-row"
            :class="{ 'is-active': activeSection === 'controls' }"
            :aria-current="activeSection === 'controls' ? 'location' : undefined"
            @click="scrollTo('controls')"
          >
            <span class="gs-toc-num">02</span>
            <span class="gs-toc-text">
              <span class="gs-toc-title">Controls 101</span>
              <span class="gs-toc-sub">Inputs reference</span>
            </span>
          </button>
          <button
            type="button"
            class="gs-toc-row"
            :class="{ 'is-active': activeSection === 'first-match' }"
            :aria-current="activeSection === 'first-match' ? 'location' : undefined"
            @click="scrollTo('first-match')"
          >
            <span class="gs-toc-num">03</span>
            <span class="gs-toc-text">
              <span class="gs-toc-title">Your first match</span>
              <span class="gs-toc-sub">Flow vs stroke golf</span>
            </span>
          </button>
          <button
            type="button"
            class="gs-toc-row"
            :class="{ 'is-active': activeSection === 'currency' }"
            :aria-current="activeSection === 'currency' ? 'location' : undefined"
            @click="scrollTo('currency')"
          >
            <span class="gs-toc-num">04</span>
            <span class="gs-toc-text">
              <span class="gs-toc-title">Cosmetics</span>
              <span class="gs-toc-sub">Progression</span>
            </span>
          </button>
        </nav>
      </aside>

      <div class="gs-panels">
        <section class="gs-spotlight" data-section="trailer" aria-labelledby="gs-trailer-title">
          <div class="gs-spotlight-head">
            <span class="gs-spotlight-num" aria-hidden="true">01</span>
            <div>
              <h2 id="gs-trailer-title" class="gs-spotlight-title">What you’re jumping into</h2>
              <p class="gs-spotlight-prose">
                <strong>Super Battle Golf</strong> is party golf turned up: everyone on the course at once, briefcase loot, carts, and hazards fighting for the same hole.
                If you have never seen it move, two minutes of trailer beats a wall of text — you get the tone, the chaos, and roughly how busy the screen gets with a full lobby.
              </p>
              <p class="gs-spotlight-prose">
                After the clip, the sections below walk <strong>controls</strong> (always verify in your own client), <strong>match flow</strong> for first rounds, and <strong>cosmetics</strong> as Steam describes them.
              </p>
            </div>
          </div>
          <div class="gs-spotlight-video">
            <div class="gs-spotlight-ratio">
              <iframe
                src="https://www.youtube-nocookie.com/embed/SgLRJTf6P_Q"
                title="Super Battle Golf — Official Launch Trailer (IGN on YouTube)"
                width="560"
                height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                referrerpolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a
              class="gs-spotlight-yt"
              href="https://www.youtube.com/watch?v=SgLRJTf6P_Q"
              target="_blank"
              rel="noopener noreferrer"
            >YouTube — same trailer</a>
          </div>
        </section>

        <section class="gs-panel" data-section="controls" aria-labelledby="controls-title">
          <div class="gs-panel-head">
            <span class="gs-panel-num" aria-hidden="true">02</span>
            <div>
              <h2 id="controls-title" class="gs-panel-title">Controls 101</h2>
              <p class="gs-panel-intro">
                Aiming is usually mouse or right stick; power often comes from a timed press or hold. Beyond that, every PC build can ship different defaults, and patches can rename actions.
                Open <strong>Settings → Controls</strong> and scroll the full list — especially anything labeled dive, item, interact, emote, or vehicle.
              </p>
            </div>
          </div>
          <p class="gs-callout">
            <strong>Why this differs from some web guides:</strong> Community beginner pages (for example long “complete control” tables on fan wikis) are written for a snapshot in time.
            They may list keys such as Ctrl for dodging, middle mouse for shot angle, or F to drop items — those can be right for one patch and wrong for the next. Treat any online chart as a <em>hint</em>, not the source of truth.
          </p>
          <h3 class="gs-subhead">Baseline reference (verify everything)</h3>
          <p class="gs-panel-note">Safe patterns most players expect; your actual binds may differ.</p>
          <div class="gs-table-wrap">
            <table class="data-table">
              <caption class="visually-hidden">
                Reference control mapping for keyboard, mouse, and Xbox-style gamepad
              </caption>
              <thead>
                <tr>
                  <th scope="col">Action</th>
                  <th scope="col">Keyboard &amp; mouse</th>
                  <th scope="col">Gamepad (typical)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Move</th>
                  <td>W A S D</td>
                  <td>Left stick</td>
                </tr>
                <tr>
                  <th scope="row">Camera</th>
                  <td>Mouse</td>
                  <td>Right stick</td>
                </tr>
                <tr>
                  <th scope="row">Swing / shot power</th>
                  <td>Hold and release (often left click — verify)</td>
                  <td>Face button hold / release (verify)</td>
                </tr>
                <tr>
                  <th scope="row">Shot angle / arc</th>
                  <td>Scroll, middle click, or dedicated binds (verify)</td>
                  <td>Bumpers, triggers, or D-pad (verify)</td>
                </tr>
                <tr>
                  <th scope="row">Use / fire item</th>
                  <td>Right click, side mouse, or number row (verify)</td>
                  <td>Shoulder or face buttons (verify)</td>
                </tr>
                <tr>
                  <th scope="row">Dive / dodge / evade</th>
                  <td>Often <strong>Ctrl</strong> in walkthroughs — confirm bind name in settings</td>
                  <td>Button labeled in UI (verify)</td>
                </tr>
                <tr>
                  <th scope="row">Drop / swap item</th>
                  <td>Often <strong>F</strong> in guides — confirm “drop” bind</td>
                  <td>Per layout (verify)</td>
                </tr>
                <tr>
                  <th scope="row">Interact / enter cart</th>
                  <td>Often <strong>E</strong> — verify “interact”</td>
                  <td>Face button (verify)</td>
                </tr>
                <tr>
                  <th scope="row">Sprint / move modifiers</th>
                  <td>Shift / Alt-style slow walk in some guides (verify)</td>
                  <td>Stick click or triggers (verify)</td>
                </tr>
                <tr>
                  <th scope="row">Emote / dance</th>
                  <td>Dedicated key in settings (verify)</td>
                  <td>D-pad or menu (verify)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="gs-panel-foot">
            Playing on Steam with odd controllers? Use <strong>Steam Input</strong> templates for gyro, touch pads, or generic pads — still double-check the in-game action names afterward.
          </p>
        </section>

        <section class="gs-panel" data-section="first-match" aria-labelledby="first-title">
          <div class="gs-panel-head">
            <span class="gs-panel-num" aria-hidden="true">03</span>
            <div>
              <h2 id="first-title" class="gs-panel-title">Your first match — battle golf vs traditional golf</h2>
              <p class="gs-panel-intro">
                Steam markets the game as online <strong>1–8 player</strong> golf where <strong>everyone plays at the same time</strong>: you still aim and swing, but carts, items, and interference happen in parallel — not polite alternating turns.
                Solo play is described with <strong>point-based scoring</strong>; multiplayer is about finishing, tempo, and surviving the scrap.
              </p>
            </div>
          </div>
          <p class="gs-callout">
            <strong>Modes on the store page</strong> are listed as <strong>Single-player</strong>, <strong>Online PvP</strong>, and <strong>Online Co-op</strong>.
            If you read elsewhere about extra mode names (battle royale-style labels, ranked ladders, etc.), treat those as community language or outdated copy until you see the same wording inside the live client.
          </p>
          <h3 class="gs-subhead">Scoring snapshot</h3>
          <p class="gs-panel-note">Exact weights change with rulesets — read the post-round summary in-game.</p>
          <ul class="gs-bullets">
            <li><strong>Finish order</strong> — higher placement usually pays more than limping in last.</li>
            <li><strong>Stroke efficiency</strong> — fewer quality shots often beats spraying power everywhere.</li>
            <li><strong>Disruption</strong> — stunning or denying opponents can swing momentum when everyone is on the clock at once.</li>
            <li><strong>Solo</strong> — point-based flow on your own; still use the in-game score explainer after each hole.</li>
          </ul>
          <h3 class="gs-subhead">Items, carts, and pickups</h3>
          <ul class="gs-bullets">
            <li>
              <strong>Purple briefcases</strong> on the course roll random gear; inventory space is limited, so cycling bad tools for good ones matters (see our
              <a :href="appHref('/wiki/weapons')">weapons list (wiki)</a>
              and the broader
              <a :href="appHref('/wiki')">wiki hub</a>
              — media-sourced, patch-sensitive).
            </li>
            <li>
              <strong>Golf carts</strong> are a Steam-listed feature (multi-seat chaos). They are fast cover and a stun vector — do not assume a free ride if another squad wants the wheel.
            </li>
            <li>
              <strong>Hazards</strong> such as sand, water, vegetation, and explosives-style traps show up across the <strong>27 holes</strong> advertised on the store — learn each layout’s tells instead of memorizing a single route.
            </li>
          </ul>
          <h3 class="gs-subhead">Habits that help in simultaneous golf</h3>
          <ul class="gs-bullets">
            <li>Keep moving between shots; standing still makes you an easy item target.</li>
            <li>Learn one defensive tool (shielding, dodge, or displacement) and one offensive tool — swap when the briefcase RNG cooperates.</li>
            <li>Watch the minimap or checkpoint-style markers if the course uses respawn points after big falls — missing a safe flag can send you backward.</li>
            <li>Voice chat and public/private servers are part of the Steam feature pitch — mute or party up if open mics are too loud.</li>
            <li>After a patch, skim patch notes and re-test swing timing; power curves are a common tuning target.</li>
          </ul>
          <h2 class="gs-kw-h2">How many people can play Super Battle Golf?</h2>
          <p class="gs-panel-body">
            The Steam store lists online play for up to <strong>eight</strong> players in one session — that is the practical
            <strong>Super Battle Golf max players</strong> figure for PC lobbies. Party size, private servers, and region ping still matter; always confirm the headcount your build actually allows before you queue.
          </p>
        </section>

        <section class="gs-panel" data-section="currency" aria-labelledby="currency-title">
          <div class="gs-panel-head">
            <span class="gs-panel-num" aria-hidden="true">04</span>
            <div>
              <h2 id="currency-title" class="gs-panel-title">Super Battle Golf cosmetics — unlocks &amp; progression</h2>
              <p class="gs-panel-intro">
                Players searching <strong>Super Battle Golf cosmetics</strong> or “<strong>Super Battle Golf all cosmetics</strong>” are usually chasing hats, glasses, hair, club props, dances, and emotes promised on the Steam page. None of that replaces checking the in-game wardrobe, shop, or progression trackers — those UIs show what you actually own after each patch.
              </p>
            </div>
          </div>
          <h3 class="gs-subhead">What “cosmetics” usually means here</h3>
          <ul class="gs-bullets">
            <li><strong>Silhouette &amp; face</strong> — hair, face paint, eyewear, headgear.</li>
            <li><strong>Loadout flair</strong> — club shapes and props that read clearly in third person.</li>
            <li><strong>Social animations</strong> — emotes and dances called out on the store page for post-hole celebrations.</li>
          </ul>
          <h3 class="gs-subhead">How to track unlocks</h3>
          <p class="gs-panel-body">
            After your first few rounds, open every cosmetics submenu once. Note which currencies or challenges the client surfaces — some systems hide behind seasonal events or achievements (the store advertises <strong>34 Steam achievements</strong> as a parallel track).
            If two sources disagree, the live client wins.
          </p>
          <p class="gs-panel-linkout">
            For global unlock snapshots and full descriptions, see
            <a :href="appHref('/wiki/achievements')">Steam achievements on the wiki</a>
            — wardrobes, shops, and challenge UIs still come from the live client after each patch.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import { appHref } from '../utils/appHref.js'
import { scrollToSection, useScrollSpySections } from '../utils/sectionScroll.js'

const gsSectionKeys = ['trailer', 'controls', 'first-match', 'currency']
const { activeKey: activeSection } = useScrollSpySections(gsSectionKeys)

function scrollTo(key) {
  scrollToSection(key)
}
</script>

<style scoped>
.page {
  padding: 0 0 3.5rem;
}

/* Trailer block: same section rhythm as panels + scroll anchor */
.gs-spotlight {
  padding: clamp(1.15rem, 3vw, 1.5rem) clamp(1.1rem, 3vw, 1.45rem);
  border-radius: 1.1rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(12, 22, 38, 0.55);
  scroll-margin-top: 5.5rem;
  margin-bottom: 0.25rem;
}

.gs-spotlight-head {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.gs-spotlight-num {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 1.65rem;
  line-height: 1;
  color: rgba(56, 189, 248, 0.35);
}

.gs-spotlight-title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  font-family: var(--font-heading);
  font-weight: 900;
  color: #f8fafc;
}

.gs-spotlight-prose {
  margin: 0 0 0.65rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.gs-spotlight-prose:last-of-type {
  margin-bottom: 0;
}

.gs-spotlight-prose strong {
  color: #e2e8f0;
}

.gs-spotlight-video {
  max-width: 36rem;
}

.gs-spotlight-ratio {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 0.65rem;
  overflow: hidden;
  background: #020617;
  border: 1px solid rgba(30, 41, 59, 0.6);
}

.gs-spotlight-ratio iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.gs-spotlight-yt {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 800;
  color: #7dd3fc;
  text-decoration: none;
}

.gs-spotlight-yt:hover {
  text-decoration: underline;
}

/* —— Hero body (title/eyebrow on PageHero) —— */
.gs-hero-prose {
  margin-bottom: 1rem;
}

.gs-hero-lead {
  margin: 0 0 0.65rem;
  font-size: 0.98rem;
  line-height: 1.62;
  color: var(--color-muted);
}

.gs-hero-lead:last-child {
  margin-bottom: 0;
}

.gs-hero-lead--2 {
  font-size: 0.9rem;
  line-height: 1.58;
  color: rgba(196, 219, 212, 0.92);
}

.gs-hero-rule {
  height: 1px;
  margin: 0 0 1rem;
  border: 0;
  background: linear-gradient(
    90deg,
    rgba(74, 222, 128, 0.35) 0%,
    rgba(56, 189, 248, 0.25) 45%,
    transparent 100%
  );
}

.gs-hero-strip {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.65rem;
}

@media (min-width: 768px) {
  .gs-hero-strip {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
}

.gs-hero-card {
  position: relative;
  margin: 0;
  padding: 0.7rem 0.75rem 0.8rem;
  border-radius: 0.65rem;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(6, 14, 28, 0.42);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03) inset;
}

.gs-hero-card-num {
  display: block;
  margin-bottom: 0.3rem;
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  color: rgba(56, 189, 248, 0.55);
}

.gs-hero-card-title {
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.88rem;
  color: #f1f5f9;
}

.gs-hero-card-blurb {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.5;
  color: rgba(148, 163, 184, 0.95);
}

.gs-hero-card-blurb strong {
  color: #a5f3fc;
  font-weight: 700;
}

/* —— Layout: TOC + panels —— */
.gs-layout {
  display: grid;
  gap: 1.75rem;
  padding-top: 1.25rem;
}

@media (min-width: 1024px) {
  .gs-layout {
    grid-template-columns: 14.5rem 1fr;
    gap: 2.25rem;
    align-items: start;
  }

  .gs-toc-wrap {
    position: sticky;
    top: 5.75rem;
  }
}

.gs-toc {
  margin: 0;
  padding: 0.85rem 0.75rem 0.9rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(8, 14, 26, 0.45);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset;
}

.gs-toc-heading {
  margin: 0 0 0.65rem;
  padding: 0 0.35rem;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #64748b;
}

.gs-toc-row {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  margin-bottom: 0.35rem;
  padding: 0.55rem 0.45rem 0.6rem 0.5rem;
  border-radius: 0.55rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid transparent;
  width: 100%;
  text-align: left;
  font: inherit;
  cursor: pointer;
  background: transparent;
  appearance: none;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.gs-toc-row:last-child {
  margin-bottom: 0;
}

.gs-toc-row:hover {
  background: rgba(30, 41, 59, 0.55);
  border-color: rgba(56, 189, 248, 0.15);
  text-decoration: none;
}

.gs-toc-row.is-active {
  background: rgba(30, 41, 59, 0.65);
  border-color: rgba(74, 222, 128, 0.28);
}

.gs-toc-row.is-active .gs-toc-num {
  color: #4ade80;
}

.gs-toc-row.is-active .gs-toc-title {
  color: #f8fafc;
}

.gs-toc-num {
  flex-shrink: 0;
  width: 1.65rem;
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 0.7rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: rgba(56, 189, 248, 0.45);
  padding-top: 0.12rem;
}

.gs-toc-row:hover .gs-toc-num {
  color: rgba(74, 222, 128, 0.85);
}

.gs-toc-text {
  display: flex;
  flex-direction: column;
  gap: 0.08rem;
  min-width: 0;
}

.gs-toc-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.8rem;
  line-height: 1.25;
  color: #e2e8f0;
}

.gs-toc-sub {
  font-size: 0.65rem;
  line-height: 1.3;
  letter-spacing: 0.03em;
  color: #64748b;
}

@media (max-width: 1023px) {
  .gs-toc-wrap {
    margin: 0 -0.15rem;
  }

  .gs-toc {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 0.4rem;
    padding: 0.65rem 0.65rem 0.7rem;
  }

  .gs-toc-heading {
    width: 100%;
    margin-bottom: 0.35rem;
  }

  .gs-toc-row {
    flex: 1 1 auto;
    min-width: calc(50% - 0.2rem);
    margin: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.55rem 0.4rem;
    gap: 0.35rem;
  }

  .gs-toc-num {
    padding-top: 0;
  }

  .gs-toc-text {
    align-items: center;
  }
}

/* —— Content panels —— */
.gs-panels {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.gs-panel {
  padding: clamp(1.15rem, 3vw, 1.5rem) clamp(1.1rem, 3vw, 1.45rem);
  border-radius: 1.1rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(12, 22, 38, 0.55);
  scroll-margin-top: 5.5rem;
}

.gs-panel-head {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.gs-panel-num {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 1.65rem;
  line-height: 1;
  color: rgba(56, 189, 248, 0.35);
}

.gs-panel-title {
  margin: 0 0 0.4rem;
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  font-family: var(--font-heading);
  font-weight: 900;
  color: #f8fafc;
}

.gs-panel-intro {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.gs-callout {
  margin: 0 0 1rem;
  padding: 0.75rem 0.9rem 0.8rem;
  border-radius: 0.65rem;
  border: 1px solid rgba(251, 191, 36, 0.22);
  background: rgba(30, 20, 8, 0.35);
  font-size: 0.86rem;
  line-height: 1.55;
  color: rgba(226, 232, 240, 0.95);
}

.gs-callout strong {
  color: #fde68a;
}

.gs-subhead {
  margin: 1.15rem 0 0.4rem;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: #a5f3fc;
}

.gs-kw-h2 {
  margin: 1.5rem 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.3;
  color: #f8fafc;
}

.gs-panel-note {
  margin: 0 0 0.5rem;
  font-size: 0.78rem;
  line-height: 1.45;
  color: rgba(148, 163, 184, 0.95);
  font-style: italic;
}

.gs-panel-body {
  margin: 0 0 0.85rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.gs-bullets {
  margin: 0 0 0.85rem;
  padding-left: 1.15rem;
  font-size: 0.9rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.gs-bullets:last-child {
  margin-bottom: 0;
}

.gs-bullets li {
  margin-bottom: 0.4rem;
}

.gs-bullets li:last-child {
  margin-bottom: 0;
}

.gs-bullets strong {
  color: #e2e8f0;
}

.gs-bullets :deep(a) {
  font-weight: 800;
  color: #7dd3fc;
}

.gs-table-wrap {
  overflow-x: auto;
  margin: 0 0 0.75rem;
  border-radius: 0.65rem;
  border: 1px solid rgba(148, 163, 184, 0.15);
}

.data-table {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.data-table th,
.data-table td {
  border: 1px solid rgba(148, 163, 184, 0.12);
  padding: 0.55rem 0.65rem;
  vertical-align: top;
  text-align: left;
}

.data-table thead th {
  background: rgba(56, 189, 248, 0.08);
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #a5f3fc;
}

.data-table tbody th {
  font-weight: 800;
  color: #e2e8f0;
}

.gs-panel-foot {
  margin: 0.85rem 0 0;
  font-size: 0.85rem;
  color: var(--color-muted);
}

.gs-panel-linkout {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.gs-panel-linkout :deep(a) {
  font-weight: 800;
  color: #7dd3fc;
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

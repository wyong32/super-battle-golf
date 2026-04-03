<template>
  <div class="page sup">
    <PageHero eyebrow="Super Battle Golf · Help" title="Super Battle Golf support &amp; technical help" heading-id="sup-title">
      <p class="sup-lead">
        <strong>Super Battle Golf</strong> on PC — focused steps for the Steam build: verification, drivers, overlays, and network. For purchase or library issues, use
        <a href="https://help.steampowered.com/en/wizard/HelpWithGame/?appid=4069520" target="_blank" rel="noopener noreferrer">Steam Support’s game wizard</a>
        (sign-in may be required for some options).
      </p>
    </PageHero>

    <div class="container sup-keywords">
      <h2 class="sup-kw-h2">Super Battle Golf not launching, crashes &amp; performance</h2>
      <p class="sup-kw-p">
        If <strong>Super Battle Golf</strong> will not start, freezes, or stutters in an eight-player lobby, work through the official Steam wizard first, then the steps below — overlays, drivers, and verify integrity fix more issues than reinstalling blindly.
      </p>
    </div>

    <div class="container sup-body">
      <section class="sup-quick" aria-label="Quick links">
        <a
          class="sup-qcard"
          href="https://help.steampowered.com/en/wizard/HelpWithGame/?appid=4069520"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sup-qcard-k">Steam</span>
          <span class="sup-qcard-t">Official game help wizard</span>
          <span class="sup-qcard-d">OS issues, missing library entry, retail keys…</span>
        </a>
        <a class="sup-qcard" href="https://steamcommunity.com/app/4069520/discussions/" target="_blank" rel="noopener noreferrer">
          <span class="sup-qcard-k">Community</span>
          <span class="sup-qcard-t">Steam discussions</span>
          <span class="sup-qcard-d">Player threads and workarounds after patches</span>
        </a>
        <a class="sup-qcard" href="https://discord.gg/brimstone" target="_blank" rel="noopener noreferrer">
          <span class="sup-qcard-k">Live</span>
          <span class="sup-qcard-t">Brimstone Discord</span>
          <span class="sup-qcard-d">Announcements and player help channels</span>
        </a>
      </section>

      <section id="first-steps" class="sup-section" aria-labelledby="first-title">
        <h2 id="first-title" class="sup-h2">Before you reinstall</h2>
        <ol class="sup-steps">
          <li>
            <strong>Restart Steam</strong> and Windows — clears stuck downloads and driver states.
          </li>
          <li>
            <strong>Verify game files:</strong> Steam Library → Super Battle Golf → Properties → Installed Files → Verify integrity of game files. (Valve documents this flow across Steam help articles.)
          </li>
          <li>
            <strong>Update GPU drivers</strong> from NVIDIA / AMD / Intel — not only Windows Update.
          </li>
          <li>
            <strong>Disable overlays</strong> temporarily (Discord overlay, MSI Afterburner / RTSS, etc.), then launch again.
          </li>
          <li>
            <strong>Rule out antivirus false positives</strong> — add the Steam library folder or game exe as an exclusion if your AV quarantines builds after patches.
          </li>
          <li>
            If downloads are corrupt: Steam → Settings → Downloads → <strong>Clear Download Cache</strong> (you will re-login).
          </li>
        </ol>
      </section>

      <div class="sup-grid">
        <section id="crash" class="sup-card" aria-labelledby="err-title">
          <h2 id="err-title" class="sup-h2">Crashes &amp; black screen</h2>
          <ul class="sup-ul">
            <li>Try <strong>windowed</strong> or <strong>borderless</strong> if fullscreen fails on first launch.</li>
            <li>Disable Windows “Fullscreen optimizations” for the game exe (Properties → Compatibility) as a test.</li>
            <li>Close RGB / macro software that hooks into games.</li>
            <li>Do not run as Administrator unless support explicitly says so — it can break Steam launches.</li>
          </ul>
        </section>

        <section id="lag" class="sup-card" aria-labelledby="lag-title">
          <h2 id="lag-title" class="sup-h2">Lag &amp; rubber-banding</h2>
          <ul class="sup-ul">
            <li><strong>Wired Ethernet</strong> beats Wi-Fi for simultaneous multiplayer.</li>
            <li>Pause cloud backups, torrents, and large uploads during matches.</li>
            <li>Pick a host region everyone can reach; cross-continent parties add latency.</li>
          </ul>
        </section>

        <section id="servers" class="sup-card" aria-labelledby="srv-title">
          <h2 id="srv-title" class="sup-h2">Invites &amp; servers</h2>
          <ul class="sup-ul">
            <li>After a patch, <strong>version mismatch</strong> can block joins — restart Steam on every PC.</li>
            <li>Strict NAT: enable UPnP on the router or try Steam relay; DMZ is a last resort.</li>
            <li>Check
              <a href="https://store.steampowered.com/newshub/app/4069520" target="_blank" rel="noopener noreferrer">Steam news</a>
              and Discord for outages before opening a ticket.
            </li>
          </ul>
        </section>

        <section id="input" class="sup-card" aria-labelledby="in-title">
          <h2 id="in-title" class="sup-h2">Controllers &amp; input</h2>
          <ul class="sup-ul">
            <li>Configure pads in the Steam client (Steam Input) and match in-game binds from <a :href="appHref('/getting-started')">Getting started</a>.</li>
            <li>Steam Deck / Linux: retest after Proton updates; wrong layouts are often a Steam Input profile issue.</li>
          </ul>
        </section>

        <section id="cloud" class="sup-card" aria-labelledby="cl-title">
          <h2 id="cl-title" class="sup-h2">Saves &amp; Steam Cloud</h2>
          <p class="sup-p">
            The store lists <strong>Steam Cloud</strong> for this title. If progress looks wrong on a second PC, confirm Cloud is enabled for the game in Steam properties and that only one session is writing saves at a time.
          </p>
        </section>

        <section id="audio" class="sup-card" aria-labelledby="au-title">
          <h2 id="au-title" class="sup-h2">Voice chat &amp; audio</h2>
          <p class="sup-p">
            Voice chat is part of the advertised feature set. If teammates cannot hear you, check Windows default recording device, per-app volume in Windows Sound settings, and whether the game or Steam overlay muted the mic.
          </p>
        </section>
      </div>

      <section id="system-requirements" class="sup-section sup-section--muted" aria-labelledby="sys-title">
        <h2 id="sys-title" class="sup-h2">Mac &amp; low-spec PCs</h2>
        <p class="sup-p">
          There is <strong>no native macOS</strong> build on the Steam page we cite — use Boot Camp (Intel), streaming, or dual hardware. Apple Silicon users usually stream from a Windows PC.
        </p>
        <p class="sup-p">
          Minimum GPU on Steam is <strong>GTX 950 4 GB</strong> class; integrated graphics may work but struggle in busy 8-player effects. Full tables:
          <a :href="appHref('/platforms')">Platforms &amp; requirements</a>.
        </p>
      </section>

      <section class="sup-section" aria-labelledby="off-title">
        <h2 id="off-title" class="sup-h2">More official &amp; community links</h2>
        <p class="sup-p">
          Press / business: <a href="mailto:contact@brimstone.games">contact@brimstone.games</a> (from Brimstone press materials).
        </p>
        <ul class="sup-links">
          <li><a href="https://x.com/BrimstoneDevs" target="_blank" rel="noopener noreferrer">X — @BrimstoneDevs</a></li>
          <li><a href="https://www.reddit.com/r/SuperBattleGolf/" target="_blank" rel="noopener noreferrer">Reddit — r/SuperBattleGolf</a></li>
          <li><a href="https://store.steampowered.com/app/4069520/" target="_blank" rel="noopener noreferrer">Steam store</a></li>
          <li><a href="https://www.youtube.com/@brimstonedevs" target="_blank" rel="noopener noreferrer">YouTube — Brimstone Devs</a></li>
          <li><a href="https://www.protondb.com/" target="_blank" rel="noopener noreferrer">ProtonDB</a> (Linux / Deck user reports)</li>
          <li><a href="https://help.steampowered.com/en/" target="_blank" rel="noopener noreferrer">Steam Support home</a></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import { appHref } from '../utils/appHref.js'
</script>

<style scoped>
.page {
  padding: 0 0 3rem;
}

.sup-lead {
  margin: 0;
  max-width: 48rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.sup-lead a {
  font-weight: 800;
  color: #7dd3fc;
}

.sup-keywords {
  padding: 0.75rem 0 0;
  max-width: 48rem;
}

.sup-kw-h2 {
  margin: 0 0 0.4rem;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.3;
  color: #f8fafc;
}

.sup-kw-p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.sup-kw-p strong {
  color: #e2e8f0;
}

.sup-body {
  padding-top: 1.5rem;
}

.sup-quick {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .sup-quick {
    grid-template-columns: repeat(3, 1fr);
  }
}

.sup-qcard {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.05rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(56, 189, 248, 0.22);
  background: rgba(10, 22, 38, 0.55);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s ease,
    transform 0.12s ease;
}

.sup-qcard:hover {
  border-color: rgba(74, 222, 128, 0.4);
  transform: translateY(-2px);
}

.sup-qcard-k {
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #4ade80;
}

.sup-qcard-t {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.95rem;
  color: #f8fafc;
}

.sup-qcard-d {
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.sup-section {
  margin-bottom: 2rem;
}

.sup-section--muted {
  padding: 1.1rem 1.15rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(8, 14, 26, 0.35);
}

.sup-h2 {
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 800;
  color: #f1f5f9;
}

.sup-steps {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.sup-steps li {
  margin-bottom: 0.5rem;
}

.sup-steps strong {
  color: #e2e8f0;
}

.sup-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .sup-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.sup-card {
  padding: 1rem 1.1rem 1.15rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(56, 189, 248, 0.15);
  background: rgba(12, 22, 40, 0.5);
}

.sup-ul {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.86rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.sup-ul li {
  margin-bottom: 0.4rem;
}

.sup-ul a {
  font-weight: 800;
  color: #7dd3fc;
}

.sup-p {
  margin: 0 0 0.65rem;
  font-size: 0.86rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.sup-p:last-child {
  margin-bottom: 0;
}

.sup-p :deep(a),
.sup-section :deep(a) {
  font-weight: 800;
  color: #7dd3fc;
}

.sup-links {
  margin: 0.5rem 0 0;
  padding-left: 1.15rem;
  font-size: 0.88rem;
  line-height: 1.65;
}

.sup-links a {
  font-weight: 700;
  color: #a5f3fc;
}
</style>

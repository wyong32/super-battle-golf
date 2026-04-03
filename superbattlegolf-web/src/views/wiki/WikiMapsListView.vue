<template>
  <div class="page wmm wiki-page">
    <PageHero
      eyebrow="Super Battle Golf · Courses"
      title="Maps &amp; courses"
      heading-id="wmm-title"
      :show-bottom-rule="false"
    >
      <p class="wmm-lead">
        <strong>27 holes</strong> across <strong>3 themed courses</strong> — <strong>Coast</strong>, <strong>Forest</strong>, and <strong>Desert</strong> (9 holes each). Par, expert score targets, and tactical notes per hole, plus a terrain physics cheat sheet.
      </p>
    </PageHero>

    <div class="container wmm-body">
      <nav class="wiki-crumb" aria-label="Breadcrumb">
        <a :href="appHref('/wiki')">Wiki</a>
        <span class="wiki-crumb-sep" aria-hidden="true">/</span>
        <span class="wiki-crumb-here">Maps &amp; courses</span>
      </nav>

      <div class="wmm-layout">
        <aside class="wmm-toc-wrap" aria-label="On this page">
          <nav class="wmm-toc wiki-toc-panel">
            <p class="wmm-toc-h wiki-toc-title">On this page</p>
            <button
              v-for="item in tocItems"
              :key="item.key"
              type="button"
              class="wmm-toc-btn"
              :class="{ 'is-active': activeSection === item.key }"
              :aria-current="activeSection === item.key ? 'location' : undefined"
              @click="scrollTo(item.key)"
            >
              <span class="wmm-toc-name">{{ item.label }}</span>
              <span v-if="item.sub" class="wmm-toc-sub">{{ item.sub }}</span>
            </button>
          </nav>
        </aside>

        <div class="wmm-main wiki-reading wiki-reading--wide">
          <section class="wmm-intro wiki-prose" aria-labelledby="wmm-intro-heading">
            <h2 id="wmm-intro-heading" class="wmm-intro-title">Course overview</h2>
            <p class="wmm-intro-body">
              Super Battle Golf has three unique themed courses with nine holes each — 27 holes in total. Every hole has
              distinct physics and tactical demands.
            </p>
          </section>

          <article
            v-for="course in courses"
            :key="course.id"
            class="wmm-course wiki-entry"
            :class="'wmm-rail--' + course.id"
            :data-section="'course-' + course.id"
            tabindex="-1"
          >
            <header class="wmm-course-head">
              <p class="wmm-course-eyebrow">{{ course.name }}</p>
              <h2 class="wmm-course-title">{{ course.tagline }}</h2>
              <p class="wmm-course-feature">{{ course.feature }}</p>
            </header>

            <div
              class="wmm-table-scroll"
              role="region"
              :aria-label="`${course.name} — hole chart`"
              tabindex="0"
            >
              <table class="wmm-table">
                <caption class="wmm-caption">
                  {{ course.name }} — nine holes (par &amp; strategy)
                </caption>
                <thead>
                  <tr>
                    <th scope="col" class="wmm-th wmm-th--hole">#</th>
                    <th scope="col" class="wmm-th wmm-th--name">Hole</th>
                    <th scope="col" class="wmm-th wmm-th--par">Par</th>
                    <th scope="col" class="wmm-th wmm-th--expert">Expert target</th>
                    <th scope="col" class="wmm-th wmm-th--guide">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="hole in course.holes"
                    :key="hole.slug"
                    class="wmm-tr"
                    :data-section="holeSectionKey(course.id, hole.slug)"
                    tabindex="-1"
                  >
                    <th scope="row" class="wmm-td wmm-td--hole">
                      {{ String(hole.order).padStart(2, '0') }}
                    </th>
                    <td class="wmm-td wmm-td--name">{{ hole.name }}</td>
                    <td class="wmm-td wmm-td--par">{{ hole.par }}</td>
                    <td class="wmm-td wmm-td--expert">
                      <span class="wmm-expert" :class="expertClass(hole.expert)">{{ hole.expert }}</span>
                    </td>
                    <td class="wmm-td wmm-td--guide">{{ hole.guide }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article
            class="wmm-physics wiki-entry wmm-rail--physics"
            data-section="physics-guide"
            tabindex="-1"
          >
            <header class="wmm-physics-head">
              <h2 class="wmm-physics-title">Terrain &amp; physics cheat sheet</h2>
              <p class="wmm-physics-lead">
                Reading surfaces beats mashing power — use this when you plan lines shot by shot.
              </p>
            </header>
            <ul class="wmm-physics-list">
              <li v-for="(row, idx) in physicsGuide" :key="idx" class="wmm-physics-item">
                <span class="wmm-physics-term">{{ row.term }}</span>
                <span class="wmm-physics-detail">{{ row.detail }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PageHero from '../../components/PageHero.vue'
import { appHref } from '../../utils/appHref.js'
import courses from '../../data/wiki/maps.js'
import { scrollToSection, useScrollSpySections } from '../../utils/sectionScroll.js'

/** Terrain cheat sheet — page copy, not course records */
const physicsGuide = [
  { term: 'Fairway', detail: 'Smoothest roll; prefer this surface for predictable distance.' },
  { term: 'Rough', detail: 'Darker turf with moderate friction — plan for shorter rollouts.' },
  { term: 'Sand', detail: 'Heavy deceleration; avoid unless you need the ball to stop dead.' },
  {
    term: 'Water',
    detail: 'Ball in the drink voids the stroke — you reset to before the shot with a penalty.',
  },
  {
    term: 'Mushroom (Forest)',
    detail: 'Caps are bouncy launch pads; sides kick unpredictably — approach angles carefully.',
  },
]

const tocItems = computed(() => [
  ...courses.map((c) => ({
    key: `course-${c.id}`,
    label: c.name,
    sub: c.tagline,
  })),
  {
    key: 'physics-guide',
    label: 'Terrain',
    sub: 'Fairway, sand, water…',
  },
])

const sectionKeys = computed(() => tocItems.value.map((t) => t.key))

const { activeKey: activeSection } = useScrollSpySections(sectionKeys)

function scrollTo(key) {
  scrollToSection(key)
}

function holeSectionKey(courseId, holeSlug) {
  return `${courseId}-${holeSlug}`
}

function expertClass(expert) {
  if (expert.includes('Hole-in-One')) return 'wmm-expert--ace'
  if (expert.includes('Albatross')) return 'wmm-expert--alba'
  if (expert.includes('Eagle')) return 'wmm-expert--eagle'
  return 'wmm-expert--birdie'
}
</script>

<style scoped>
.page {
  padding: 0;
}

/* Course rail colors (maps page only; overrides shared .wiki-entry --wiki-rail) */
.wiki-entry.wmm-rail--coast {
  --wiki-rail: #38bdf8;
}

.wiki-entry.wmm-rail--forest {
  --wiki-rail: #4ade80;
}

.wiki-entry.wmm-rail--desert {
  --wiki-rail: #fb923c;
}

.wiki-entry.wmm-rail--physics {
  --wiki-rail: #c4b5fd;
}

.wmm-lead {
  margin: 0;
  max-width: 46rem;
  font-size: 0.92rem;
  line-height: 1.58;
  color: rgba(196, 219, 212, 0.92);
}

.wmm-lead strong {
  color: #fef08a;
}

.wmm-body {
  padding-top: 1rem;
}

.wmm-layout {
  display: grid;
  gap: 1.5rem;
  align-items: start;
  min-width: 0;
}

@media (min-width: 1024px) {
  .wmm-layout {
    grid-template-columns: 13.5rem 1fr;
    gap: 2rem;
  }

  .wmm-toc-wrap {
    position: sticky;
    top: 5.75rem;
  }
}

.wmm-toc {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.wmm-toc-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.06rem;
  width: 100%;
  text-align: left;
  font: inherit;
  cursor: pointer;
  appearance: none;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.45rem 0.5rem 0.5rem;
  background: rgba(15, 23, 42, 0.35);
  color: inherit;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.wmm-toc-btn:hover {
  border-color: rgba(56, 189, 248, 0.22);
  background: rgba(15, 23, 42, 0.55);
}

.wmm-toc-btn.is-active {
  border-color: rgba(56, 189, 248, 0.4);
  background: rgba(15, 23, 42, 0.72);
}

.wmm-toc-btn.is-active .wmm-toc-name {
  color: #bae6fd;
}

.wmm-toc-name {
  font-size: 0.74rem;
  font-weight: 800;
  color: #e2e8f0;
  line-height: 1.25;
}

.wmm-toc-sub {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: none;
  color: #64748b;
  line-height: 1.3;
}

@media (max-width: 1023px) {
  .wmm-toc {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.65rem 0.65rem 0.72rem;
    border-radius: 0.65rem;
    border: 1px solid rgba(56, 189, 248, 0.12);
    background: rgba(10, 18, 32, 0.55);
  }

  .wmm-toc-h {
    width: 100%;
    margin-bottom: 0.2rem;
  }

  .wmm-toc-btn {
    flex: 1 1 auto;
    min-width: calc(33.333% - 0.3rem);
  }
}

.wmm-main {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  min-width: 0;
}

.wmm-intro {
  margin: 0;
  padding: 0 0 0.25rem;
}

.wmm-intro-title {
  margin: 0 0 0.5rem;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 800;
  color: #f8fafc;
  letter-spacing: 0.02em;
}

.wmm-intro-body {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.wmm-course {
  padding-bottom: 1.35rem;
}

.wmm-course-head {
  margin-bottom: 1rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

.wmm-course-eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(125, 211, 252, 0.9);
}

.wmm-course-title {
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 800;
  color: #f8fafc;
}

.wmm-course-feature {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.wmm-table-scroll {
  overflow-x: auto;
  margin: 0 -0.15rem;
  padding: 0 0.15rem;
  border-radius: 0.5rem;
  outline: none;
}

.wmm-table-scroll:focus-visible {
  box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.45);
}

.wmm-table {
  width: 100%;
  min-width: 36rem;
  border-collapse: collapse;
  font-size: 0.8rem;
  line-height: 1.45;
}

.wmm-caption {
  caption-side: top;
  text-align: left;
  font-weight: 800;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(148, 163, 184, 0.85);
  padding: 0 0 0.65rem;
}

.wmm-th {
  text-align: left;
  font-weight: 800;
  color: #e2e8f0;
  padding: 0.5rem 0.55rem;
  border-bottom: 2px solid rgba(56, 189, 248, 0.25);
  background: rgba(15, 23, 42, 0.5);
  white-space: nowrap;
}

.wmm-th--guide {
  min-width: 14rem;
}

.wmm-th--name {
  min-width: 7rem;
}

.wmm-tr {
  transition: background 0.15s ease;
}

@media (prefers-reduced-motion: reduce) {
  .wmm-tr {
    transition: none;
  }
}

.wmm-tr:hover {
  background: rgba(56, 189, 248, 0.04);
}

.wmm-td {
  padding: 0.55rem 0.55rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.08);
  color: rgba(226, 232, 240, 0.95);
  vertical-align: top;
}

.wmm-td--hole {
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  color: #94a3b8;
  width: 2.5rem;
}

.wmm-td--par {
  font-variant-numeric: tabular-nums;
  text-align: center;
  width: 3.25rem;
}

.wmm-td--expert {
  width: 7.5rem;
}

.wmm-td--guide {
  color: rgba(203, 213, 225, 0.92);
  line-height: 1.55;
}

.wmm-expert {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.45rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  white-space: nowrap;
}

.wmm-expert--birdie {
  color: #a5f3fc;
  background: rgba(56, 189, 248, 0.08);
}

.wmm-expert--eagle {
  color: #fde047;
  background: rgba(250, 204, 21, 0.1);
}

.wmm-expert--alba {
  color: #fdba74;
  background: rgba(251, 146, 60, 0.12);
}

.wmm-expert--ace {
  color: #fecdd3;
  background: rgba(244, 63, 94, 0.15);
  border-color: rgba(244, 63, 94, 0.25);
}

.wmm-physics-head {
  margin-bottom: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(196, 181, 253, 0.15);
}

.wmm-physics-title {
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 800;
  color: #f8fafc;
}

.wmm-physics-lead {
  margin: 0;
  font-size: 0.84rem;
  color: var(--color-muted);
  line-height: 1.5;
}

.wmm-physics-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.wmm-physics-item {
  display: grid;
  gap: 0.2rem;
  padding: 0.55rem 0.65rem;
  border-radius: 0.45rem;
  background: rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(196, 181, 253, 0.12);
}

.wmm-physics-term {
  font-size: 0.78rem;
  font-weight: 800;
  color: #ddd6fe;
}

.wmm-physics-detail {
  font-size: 0.82rem;
  line-height: 1.5;
  color: rgba(203, 213, 225, 0.92);
}
</style>

/**
 * 进阶技巧：/advanced/:slug 详情 + 首页转播条。
 * 顺序：文章基础字段 → home（仅首页：胶带、角标、要点、嵌入）→ detailsHtml（置底）。
 * 首页卡片的配色/弱化由 HomeView 按列表奇偶加 class，不在数据里写。
 */
export default [
  {
    /** 数字 ID */
    id: 1,
    /** 标题 */
    title: 'Hole in One — Desert 1 (Showdown) & Coast 8 (Gauntlet)',
    /** 摘要 */
    description:
      'Angles and full-power lines for two holes: Showdown and Gauntlet. Tee spawn matters on Gauntlet.',
    /** 发布日期 ISO */
    publishDate: '2026-02-21',
    /** URL 段 */
    addressBar: 'hole-in-one-showdown-gauntlet',
    /** 封面图 */
    imageSrc: '/images/guides/guide01.jpg',
    /** 封面 alt */
    imageAlt: 'Super Battle Golf — hole-in-one on Showdown and Gauntlet',
    /** 标签 */
    tags: ['Hole in one', 'Achievements', 'Showdown', 'Gauntlet'],
    /** 搜索引擎 TDK */
    seo: {
      title:
        'Super Battle Golf Hole-in-One Advanced: Showdown Desert 1 & Gauntlet Coast 8',
      description:
        'Desert 1 Showdown and Coast 8 Gauntlet hole-in-one tips for Super Battle Golf: aim, power, tee spawns, retries. Fan write-up—verify in your Steam client.',
      keywords:
        'Super Battle Golf, hole in one, Showdown, Gauntlet, Desert 1, Coast 8, achievement, Steam, advanced',
    },
    /** 首页：监视器胶带、桌板角标、要点、嵌入视频 */
    home: {
      replayLabel: 'ACE CAM',
      badge: 'Hole-in-one',
      homeBullets: [
        'Desert 1 — Showdown: start ~51° with the flag centered on your power bar, nudge to 52°, then 100% power. Alternatives that work for many players: 49° @ ~93% or 50° @ 95–96%.',
        'Coast 8 — Gauntlet: most reliable from the far-left side of both tee boxes; center the flag arrow on the transparent aim bar, use 51°, then 100% — try 52° or 93–100% if your spawn differs.',
        'Hold R to retry before the timer if you whiff a setup (may not count for some achievements — see the full walkthrough).',
      ],
      embedSrc: 'https://www.youtube-nocookie.com/embed/SgLRJTf6P_Q',
      embedTitle: 'Super Battle Golf — official launch trailer (reference pace and course chaos)',
    },
    /** 详情正文 */
    detailsHtml: `
      <h3>Overview</h3>
      <p>
        Quick setups for a <strong>hole-in-one</strong> on <strong>Desert 1 — Showdown</strong> and <strong>Coast 8 — Gauntlet</strong>:
        full-power shots with small aim adjustments. Patches can change feel — confirm in your client.
      </p>

      <h3>Desert 1: Showdown</h3>
      <figure class="guide-fig">
        <img src="/images/guides/guide01-01.jpg" width="1024" height="576" loading="lazy" alt="Showdown — course context for the hole-in-one line" />
        <figcaption>Showdown — course reference.</figcaption>
      </figure>

      <h3>Shot setup (Showdown)</h3>
      <p><strong>Step 1 — Initial aim</strong><br />
      Start at <strong>51°</strong>. Line up the flag so it sits in the <u>middle of your power bar</u>.</p>
      <figure class="guide-fig">
        <img src="/images/guides/guide01-02.jpg" width="1024" height="576" loading="lazy" alt="51 degrees: flag centered on power bar" />
        <figcaption>Step 1 — flag centered on the power bar.</figcaption>
      </figure>

      <p><strong>Step 2 — Final adjustment</strong><br />
      Once centered, nudge to <strong>52°</strong>.</p>
      <figure class="guide-fig">
        <img src="/images/guides/guide01-03.jpg" width="1024" height="576" loading="lazy" alt="52 degree final aim adjustment" />
        <figcaption>Step 2 — 52° adjustment.</figcaption>
      </figure>

      <p><strong>Step 3 — Power</strong><br />
      Hit at <strong>100% power</strong>.</p>
      <figure class="guide-fig">
        <img src="/images/guides/guide01-04.jpg" width="1024" height="576" loading="lazy" alt="100 percent power shot" />
        <figcaption>Step 3 — full power.</figcaption>
      </figure>

      <h3>Important notes (Showdown)</h3>
      <ul>
        <li>Some tee boxes can feel slightly inconsistent; retrying the same method usually converges.</li>
        <li>Other combos that can ace: <strong>49° + 93% power</strong> and <strong>50° + 95–96% power</strong> — <strong>100% power</strong> is often easiest to repeat.</li>
        <li><strong>Retry tip:</strong> Hold <strong>R</strong> to retry before the timer starts if you miss — it may not count for the hole-in-one achievement, but you can still finish ahead of other players.</li>
      </ul>

      <h3>Coast 8: Gauntlet</h3>
      <figure class="guide-fig">
        <img src="/images/guides/guide01-05.jpg" width="1024" height="576" loading="lazy" alt="Gauntlet tee box spawn reference" />
        <figcaption>Gauntlet — spawn / tee context (<strong>far left</strong> on both tee boxes).</figcaption>
      </figure>

      <h3>Spawn requirement (Gauntlet)</h3>
      <p>
        Less consistent than Showdown overall. This line is most reliable from the <strong>far left</strong> side of <strong>both</strong> tee boxes; with that spawn, aim carefully for a high success rate.
      </p>

      <h3>Shot setup (Gauntlet)</h3>
      <p><strong>Step 1 — Aim alignment</strong><br />
      Use the transparent white aim bar: place the <u>flag icon arrow in the center</u> of that bar.</p>
      <figure class="guide-fig">
        <img src="/images/guides/guide01-06.jpg" width="1024" height="576" loading="lazy" alt="Flag arrow centered on transparent aim bar" />
        <figcaption>Step 1 — flag arrow centered on the aim bar.</figcaption>
      </figure>

      <p><strong>Step 2 — Angle</strong><br />
      Set <strong>51°</strong>.</p>
      <figure class="guide-fig">
        <img src="/images/guides/guide01-07.jpg" width="1024" height="576" loading="lazy" alt="51 degree angle on Gauntlet" />
        <figcaption>Step 2 — 51°.</figcaption>
      </figure>

      <p><strong>Step 3 — Power</strong><br />
      Fire at <strong>100% power</strong> for repeatable shots.</p>
      <figure class="guide-fig">
        <img src="/images/guides/guide01-08.jpg" width="1024" height="576" loading="lazy" alt="Gauntlet full power shot" />
        <figcaption>Step 3 — 100% power.</figcaption>
      </figure>

      <h3>Notes (Gauntlet)</h3>
      <ul>
        <li><strong>100% power + 51°</strong> and/or <strong>52°</strong> are called out as reliable when you can commit to full bar.</li>
        <li>Variants that also work for some players: <strong>52°</strong> from certain tee positions, or <strong>51°</strong> with <strong>93–100% power</strong> from the left start — try what fits your spawn.</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: 'More advanced techniques',
    description:
      'Roadmap note for deeper tactics — item mind-games, achievement routing, and course-specific risk lines. No step-by-step yet; use the wiki and Getting Started meanwhile.',
    publishDate: '2026-04-02',
    addressBar: 'upcoming-advanced-topics',
    imageSrc: '/images/logo.png',
    imageAlt: 'Super Battle Golf Guide logo',
    tags: ['Roadmap'],
    seo: {
      title: 'More Super Battle Golf Advanced Techniques — Coming Soon | Super Battle Golf Guide',
      description:
        'Placeholder for future advanced technique articles: items, achievements, and course lines. Return to the home Advanced techniques section for the replay desk.',
      keywords: 'Super Battle Golf, advanced, roadmap, techniques, tips',
    },
    home: {
      replayLabel: 'NEXT TEE',
      badge: 'Coming up',
      homeBullets: [
        'Future picks: item mind-games, achievement routing, risky cuts on Forest / Desert — we will drop short teasers on the home replay desk and publish full pages here when each topic is ready.',
      ],
      embedSrc: 'https://www.youtube-nocookie.com/embed/SgLRJTf6P_Q?start=45',
      embedTitle: 'Super Battle Golf — gameplay excerpt while more advanced topics are in progress',
    },
    detailsHtml: `
      <h3>On the way</h3>
      <p>
        We are lining up more <strong>advanced techniques</strong> — item mind-games, achievement routing, and risky cuts on Forest / Desert.
        This page is a stub so the home replay desk and search can link somewhere consistent; check back after major guides ship.
      </p>
      <p>
        Until then, use the <strong>wiki</strong> lists and <strong>Getting Started</strong> for verified controls and mode flow, and re-test any line you read online in your own Steam build after patches.
      </p>
    `,
  },
]

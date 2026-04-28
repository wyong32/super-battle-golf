/**
 * 进阶技巧：首页与 /advanced 列表「转播条」必选；详情页可选。
 * - hasDetailPage: true → /advanced/:addressBar 有独立页，sitemap 收录。
 * - hasDetailPage: false → 暂不开放 /advanced/:slug 长文页；/advanced 列表「转播条」仍可用与第一篇相同的 home 字段（含 embed 视频）。
 *   detailsHtml / seo / image 等照常维护，后续改为 hasDetailPage: true 即可上线详情页。
 * 顺序：基础字段 → home（胶带、角标、要点、embed）→ detailsHtml（详情页启用时使用）。
 */
export default [
  {
    id: 1,
    title: 'Hole in One — Desert 1 (Showdown) & Coast 8 (Gauntlet)',
    description:
      'Angles and full-power lines for two holes: Showdown and Gauntlet. Tee spawn matters on Gauntlet.',
    publishDate: '2026-02-21',
    addressBar: 'hole-in-one-showdown-gauntlet',
    /** 是否有 /advanced/:slug 详情页 */
    hasDetailPage: true,
    imageSrc: '/images/advanced/guide01.jpg',
    imageAlt: 'Super Battle Golf — hole-in-one on Showdown and Gauntlet',
    tags: ['Hole in one', 'Achievements', 'Showdown', 'Gauntlet'],
    seo: {
      title:
        'Super Battle Golf Hole-in-One Advanced: Showdown Desert 1 & Gauntlet Coast 8',
      description:
        'Desert 1 Showdown and Coast 8 Gauntlet hole-in-one tips for Super Battle Golf: aim, power, tee spawns, retries. Fan write-up—verify in your Steam client.',
      keywords:
        'Super Battle Golf, hole in one, Showdown, Gauntlet, Desert 1, Coast 8, achievement, Steam, advanced',
    },
    home: {
      replayLabel: 'ACE CAM',
      badge: 'Hole-in-one',
      homeBullets: [
        'Desert 1 — Showdown: start ~51° with the flag centered on your power bar, nudge to 52°, then 100% power. Alternatives that work for many players: 49° @ ~93% or 50° @ 95–96%.',
        'Coast 8 — Gauntlet: most reliable from the far-left side of both tee boxes; center the flag arrow on the transparent aim bar, use 51°, then 100% — try 52° or 93–100% if your spawn differs.',
        'Hold R to retry before the timer if you whiff a setup (may not count for some achievements — see the full walkthrough).',
      ],
      /** 点击播放前显示的封面（LazyYoutubeEmbed）；不写则用顶层 imageSrc */
      embedPosterSrc: '/images/advanced/guide01.jpg',
      embedSrc: 'https://www.youtube-nocookie.com/embed/OOtOCrwXH2s',
      embedTitle: 'Super Battle Golf — official launch trailer (reference pace and course chaos)',
    },
    detailsHtml: `
      <h3>Overview</h3>
      <p>
        Quick setups for a <strong>hole-in-one</strong> on <strong>Desert 1 — Showdown</strong> and <strong>Coast 8 — Gauntlet</strong>:
        full-power shots with small aim adjustments. Patches can change feel — confirm in your client.
      </p>

      <h3>Desert 1: Showdown</h3>
      <figure class="guide-fig">
        <img src="/images/advanced/guide01-01.jpg" width="1024" height="576" loading="lazy" alt="Showdown — course context for the hole-in-one line" />
        <figcaption>Showdown — course reference.</figcaption>
      </figure>

      <h3>Shot setup (Showdown)</h3>
      <p><strong>Step 1 — Initial aim</strong><br />
      Start at <strong>51°</strong>. Line up the flag so it sits in the <u>middle of your power bar</u>.</p>
      <figure class="guide-fig">
        <img src="/images/advanced/guide01-02.jpg" width="1024" height="576" loading="lazy" alt="51 degrees: flag centered on power bar" />
        <figcaption>Step 1 — flag centered on the power bar.</figcaption>
      </figure>

      <p><strong>Step 2 — Final adjustment</strong><br />
      Once centered, nudge to <strong>52°</strong>.</p>
      <figure class="guide-fig">
        <img src="/images/advanced/guide01-03.jpg" width="1024" height="576" loading="lazy" alt="52 degree final aim adjustment" />
        <figcaption>Step 2 — 52° adjustment.</figcaption>
      </figure>

      <p><strong>Step 3 — Power</strong><br />
      Hit at <strong>100% power</strong>.</p>
      <figure class="guide-fig">
        <img src="/images/advanced/guide01-04.jpg" width="1024" height="576" loading="lazy" alt="100 percent power shot" />
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
        <img src="/images/advanced/guide01-05.jpg" width="1024" height="576" loading="lazy" alt="Gauntlet tee box spawn reference" />
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
        <img src="/images/advanced/guide01-06.jpg" width="1024" height="576" loading="lazy" alt="Flag arrow centered on transparent aim bar" />
        <figcaption>Step 1 — flag arrow centered on the aim bar.</figcaption>
      </figure>

      <p><strong>Step 2 — Angle</strong><br />
      Set <strong>51°</strong>.</p>
      <figure class="guide-fig">
        <img src="/images/advanced/guide01-07.jpg" width="1024" height="576" loading="lazy" alt="51 degree angle on Gauntlet" />
        <figcaption>Step 2 — 51°.</figcaption>
      </figure>

      <p><strong>Step 3 — Power</strong><br />
      Fire at <strong>100% power</strong> for repeatable shots.</p>
      <figure class="guide-fig">
        <img src="/images/advanced/guide01-08.jpg" width="1024" height="576" loading="lazy" alt="Gauntlet full power shot" />
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
    title: 'Safety First (2 Rewards)',
    description:
      'Disarm an opponent’s landmine in a match without triggering it — hold aim, approach carefully, press interact. Unlocks cosmetic rewards.',
    publishDate: '2026-04-03',
    addressBar: 'safety-first-achievement',
    hasDetailPage: false,
    /** 无详情页时首页 CTA 跳转（如 wiki 成就锚点） */
    linkOut: {
      href: '/wiki/achievements?focus=achievement-safety-first',
      label: 'Wiki: Safety First',
    },
    imageSrc: '/images/logo.png',
    imageAlt: 'Super Battle Golf Guide — Safety First achievement notes',
    tags: ['Achievement', 'Safety First', 'Landmine'],
    seo: {
      title: 'Safety First Achievement — Disarm Landmines | Super Battle Golf Guide',
      description:
        'How to disarm an opponent landmine in Super Battle Golf: ALT/RMB aim, mine must be above ground, E to disarm. Tips and reward note — full replay desk on /advanced.',
      keywords:
        'Super Battle Golf, Safety First, achievement, landmine, disarm, ALT, RMB, Steam',
    },
    home: {
      replayLabel: 'DEFUSE FEED',
      badge: 'Achievement',
      homeBullets: [
        'Requirement: disarm an active landmine placed by an opponent in a match — you must disarm it safely, not detonate it.',
        'How: hold ALT or RMB (aim) while approaching; the mine must be above ground; press your interact key (E by default). Done right, it disarms instead of exploding.',
        'Tips: do not sprint at the mine; stay aiming before you interact; buried mines are not interactable; rushing usually blows it up.',
        'Reward: this achievement unlocks clothing items — see the wiki achievements list and in-game wardrobe after you earn it.',
      ],
      embedPosterSrc: '/images/advanced/guide01-01.jpg',
      embedSrc: 'https://www.youtube-nocookie.com/embed/L_iZkO9J7e4',
      embedTitle: 'Super Battle Golf — gameplay reference (items & chaos on course)',
    },
    detailsHtml: `
      <p>
        Placeholder for the future advanced detail page (same fields as other topics — summary and video stay on the <strong>/advanced</strong> replay desk until this long-form block is written).
      </p>
      <p>
        Use the wiki link from the Advanced hub to open the achievement entry for the full Steam card text.
      </p>
    `,
  },
]

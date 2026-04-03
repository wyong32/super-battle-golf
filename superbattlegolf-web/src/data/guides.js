/**
 * 长文「指南」列表。每条指南用于 /guides/:slug 详情。（进阶页数据在 advancedTips.js，需与指南同步时请两处一起改。）
 *
 * 字段说明（单条指南对象）：
 * - id：数字 ID，列表 v-for :key
 * - isHome：是否在首页「Featured guides」展示（无条目时整块隐藏）
 * - title：文章标题（H1 主文案）
 * - description：摘要 / deck，用于列表卡与 meta
 * - publishDate：发布日期 ISO 字符串（YYYY-MM-DD）
 * - addressBar：URL 段，如 hole-in-one-showdown-gauntlet
 * - imageSrc：列表与侧栏封面图路径
 * - imageAlt：封面图 alt
 * - tags：标签字符串数组，侧栏展示
 * - seo：{ title, description, keywords } 覆盖默认 TDK
 * - detailsHtml：正文 HTML（站内插图路径等）
 */
export default [
  {
    /** 列表与详情用唯一 ID */
    id: 1,
    /** 为 true 时进入首页「Featured guides」候选 */
    isHome: true,
    /** 文章主标题 */
    title: 'Hole in One — Desert 1 (Showdown) & Coast 8 (Gauntlet)',
    /** 副标题 / 摘要 */
    description:
      'Angles and full-power lines for two holes: Showdown and Gauntlet. Tee spawn matters on Gauntlet.',
    /** 发布日期 */
    publishDate: '2026-02-21',
    /** URL 片段，与路由 /guides/:slug 一致 */
    addressBar: 'hole-in-one-showdown-gauntlet',
    /** 封面图 */
    imageSrc: '/images/guides/guide01.jpg',
    /** 封面 alt */
    imageAlt: 'Super Battle Golf — hole-in-one on Showdown and Gauntlet',
    /** 标签 */
    tags: ['Hole in one', 'Achievements', 'Showdown', 'Gauntlet'],
    /** 搜索引擎专用标题/描述/关键词（可省略则用 title/description） */
    seo: {
      title:
        'Super Battle Golf Hole-in-One Guide: Showdown Desert 1 & Gauntlet Coast 8 Tips',
      description:
        'Desert 1 Showdown and Coast 8 Gauntlet hole-in-one tips for Super Battle Golf: aim, power, tee spawns, retries. Fan guide—verify in your Steam client.',
      keywords:
        'Super Battle Golf, hole in one, Showdown, Gauntlet, Desert 1, Coast 8, achievement, Steam',
    },
    /** 正文 HTML */
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
]

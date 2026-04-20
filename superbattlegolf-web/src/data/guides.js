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
    id: 1,
    isHome: true,
    title: 'Beginner Guide: Steam PC Essentials (Modes, Items & Etiquette)',
    description:
      'How Super Battle Golf plays on Steam at a glance: simultaneous rounds, angle and power basics, purple briefcase items, retries, and where to read deeper on this site.',
    publishDate: '2026-04-20',
    addressBar: 'beginner-guide-steam-pc',
    imageSrc: '/images/guides/guides01.webp',
    imageAlt: 'Super Battle Golf Guide — site logo over dark branding',
    tags: ['Beginner', 'Steam', 'PC', 'Multiplayer', 'Items', 'Tips'],
    seo: {
      title: 'Super Battle Golf Beginner Guide (Steam PC) — Tips, Items & Modes',
      description:
        'Super Battle Golf beginner guide for Steam PC: simultaneous play, swing basics, ten pickup items, retries, voice etiquette, and links to our wiki. Unofficial—verify in your client.',
      keywords:
        'Super Battle Golf, beginner guide, Steam, PC, tips, multiplayer, items, how to play, Oro Interactive, Brimstone, wiki',
    },
    detailsHtml: `
      <h3>Who this guide is for</h3>
      <p>
        You just installed <strong>Super Battle Golf</strong> on <strong>Steam (Windows PC)</strong>, finished the short onboarding, and want a clear mental model before jumping into public lobbies.
        This article is an <strong>unofficial fan overview</strong> — always trust the in-game UI, patch notes, and
        <a href="https://store.steampowered.com/app/4069520/" target="_blank" rel="noopener noreferrer">the official Steam store page</a>
        over any third-party write-up.
      </p>

      <h3>What makes matches “battle golf”</h3>
      <p>
        Rounds are built around <strong>fast, simultaneous play</strong>: everyone is acting on the course at once, not waiting for a strict turn order like classic turn-based golf sims.
        You still care about <strong>aim angle</strong>, <strong>shot power</strong>, and <strong>hazards</strong> (sand, water, trees, elevation), but you also read opponents — who is lining up a putt, who is charging an item, and where carts are cutting across the fairway.
      </p>
      <p>
        Expect chaos in the best way: the goal is usually to <strong>finish the hole quickly and cleanly</strong> while others try to slow you down with items, collisions, and pressure putts.
      </p>

      <h3>Steam facts worth pinning (check for updates)</h3>
      <ul>
        <li><strong>Players:</strong> Public listings commonly advertise <strong>1–8 players</strong> online — party size and matchmaking rules can change; read the current Steam feature list.</li>
        <li><strong>Courses:</strong> Marketing copy on Steam references <strong>27 holes</strong> across themed courses — use our <a href="/wiki/maps">maps &amp; holes wiki</a> for a hole-by-hole skim.</li>
        <li><strong>Achievements:</strong> Steam tracks dozens of achievements; wording and hidden descriptions are easiest to confirm inside the Steam overlay or library panel.</li>
      </ul>

      <h3>Shot basics: angle, power, and course IQ</h3>
      <p>
        Before you chase trick shots, build three habits:
      </p>
      <ul>
        <li><strong>Pre-shot routine:</strong> Decide whether you are playing for position, a safe par, or a risky birdie — then commit. Hesitation costs more in simultaneous golf than in solo practice.</li>
        <li><strong>Power discipline:</strong> Full-send drives are fun, but sand and water punish greedy lines. When in doubt, favor the fat part of the fairway and live for the next item spawn.</li>
        <li><strong>Camera awareness:</strong> Glance at minimap motion (carts, sprinting players) before releasing power — getting bumped mid-swing is part of the design space.</li>
      </ul>

      <h3>Purple briefcases: items in plain language</h3>
      <p>
        Item pickups appear as <strong>purple briefcases</strong> on the course. Walking over them adds gear to your kit (community guides often mention holding <strong>up to three</strong> items — treat that as a rule of thumb until the in-game tooltip says otherwise after a patch).
      </p>
      <p>
        Items include long-range disruption, mobility tools like <strong>spring boots</strong> and <strong>coffee</strong>, traps, shields, and rare round-swing effects such as the <strong>orbital laser</strong>.
        For concise descriptions of all ten pickups, open our <a href="/wiki/weapons">weapons &amp; items wiki</a>; it mirrors how experienced players talk about loadouts without pretending to be patch notes.
      </p>

      <h3>Retries, pace, and learning faster</h3>
      <p>
        Many players use quick retries to rehearse a line before the hole timer advances — exact behavior for achievements and stats can differ by mode or patch, so if you are hunting a specific unlock, read the achievement text in Steam and test in a controlled lobby with friends.
      </p>
      <p>
        If you are practicing advanced setups (for example hole-in-one lines on specific holes), see the <a href="/advanced">Advanced techniques</a> hub for a curated deep dive that complements this beginner overview.
      </p>

      <h3>Voice chat, sportsmanship, and crashes</h3>
      <ul>
        <li><strong>Voice:</strong> Built-in voice can be great for crews — mute individual players if comms get noisy, and avoid sharing personal info in public lobbies.</li>
        <li><strong>Sportsmanship:</strong> Items are fair game, but targeted harassment is not. If someone is throwing, take notes and use Steam’s reporting tools if needed.</li>
        <li><strong>Tech issues:</strong> Verify files, update GPU drivers, and reboot if you desync. Our <a href="/support">support hub</a> links general PC checks; for account bans or purchases, contact Steam Support, not this fan site.</li>
      </ul>

      <h3>Where to go next on this site</h3>
      <ul>
        <li><a href="/getting-started">Getting started hub</a> — install, first launch, and glossary-style pointers.</li>
        <li><a href="/wiki/achievements">Steam achievements list</a> — names, blurbs, and global stat snapshots sourced from Valve’s public page.</li>
        <li><a href="/wiki/cosmetics">Cosmetics &amp; unlock paths</a> — ties many hats and flair items to their achievements.</li>
      </ul>

      <h3>Editorial note</h3>
      <p>
        <em>
          superbattlegolf.org is independent from Brimstone, Oro Interactive, and Valve.
          If any detail here disagrees with the game after a patch, the live client wins — ping us via the contact page with a screenshot and we will update the article.
        </em>
      </p>
    `,
  },
]

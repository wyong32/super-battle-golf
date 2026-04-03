/**
 * Community walkthrough layer (rare achievements & cosmetics), summarized from player guides.
 * @see https://steamcommunity.com/sharedfiles/filedetails/?id=3671031383
 */

/** @type {Record<string, { rewardCount: number, html: string }>} */
export default {
  'a-cut-above': {
    rewardCount: 3,
    html: `<p><strong>Hole-in-one:</strong> Must be a clean hole-in-one in an official match. Community writeups describe repeatable angles and power on two maps — treat those as player tips, not guarantees after patches.</p>`,
  },
  'behind-you': {
    rewardCount: 4,
    html: `<p>Only knockouts from <strong>directly behind</strong> count — not side or front. Any damage source works: club, ball, rocket, gun, shotgun, explosives, or even a golf cart ram from behind.</p>
<ul class="wal-stea-tips"><li>Pick distracted players lining up shots</li><li>Flank in chaotic lobbies</li><li>Tee-box camping can farm hits</li></ul>`,
  },
  bully: {
    rewardCount: 1,
    html: `<p>Need three opponents <strong>dominated at the same time</strong> — quick successive knockouts when players cluster (green, tee chaos). RPG onto a crowded tee is a consistent setup.</p>`,
  },
  'catlike-reflexes': {
    rewardCount: 3,
    html: `<p>Homing shots must be <strong>actively tracking you</strong> and miss. Strafe, use cover, break line of sight; bait locks then dodge late.</p>`,
  },
  'clowning-around': {
    rewardCount: 3,
    html: `<p>Air Horn must interrupt a swing or item use — time it as they commit. Watch the <strong>red crosshair</strong> for range.</p>`,
  },
  coolheaded: {
    rewardCount: 1,
    html: `<p>9+ hole match: <strong>finish</strong> every hole at par or better cumulative. One bad hole fails the run — prioritize safe play; timer pressure is real in public games.</p>`,
  },
  'couch-potato': {
    rewardCount: 1,
    html: `<p>Pause → move name to <strong>Spectator</strong> → sit the entire hole start-to-finish once. Do not rejoin mid-hole.</p>`,
  },
  'early-bird': {
    rewardCount: 1,
    html: `<p>25 birdies-or-better <strong>across matches</strong> (not one round). Accuracy and course knowledge add up over time.</p>`,
  },
  'frog-legs': {
    rewardCount: 1,
    html: `<p><strong>100&nbsp;m horizontal</strong> distance in one leap (not height). Boots + Coffee + Shotgun: high ground, sprint jump, mid-air 180°, timed shotgun boost. Guide author used <strong>Forest 9 — Terraces</strong>.</p>`,
  },
  goalie: {
    rewardCount: 2,
    html: `<p>50 club knockouts while <strong>you</strong> are on the green — no guns/items for the finishing blow.</p>`,
  },
  gunslinger: {
    rewardCount: 3,
    html: `<p>10 pistol KOs from <strong>≥50&nbsp;m</strong> (use distance readout from your ball). Save the Dueling Pistol, create space, pick stationary targets.</p>`,
  },
  'head-in-the-clouds': {
    rewardCount: 1,
    html: `<p>Driving Range: Jump Boots → Pro Shop roof → top of the giant club handle. Commenters note <strong>Coffee + jump</strong> can stack for easier reach.</p>`,
  },
  'lying-in-wait': {
    rewardCount: 2,
    html: `<p>KO while fully hidden in foliage. <strong>Forest</strong> bushes are the go-to; rocket from cover is reliable.</p>`,
  },
  'never-give-up': {
    rewardCount: 1,
    html: `<p>10+ KOs on <strong>one hole</strong>, still finish. Brutal in public — guide suggests mine self-damage chains; pick long holes; don’t sink early.</p>`,
  },
  'phone-home': {
    rewardCount: 1,
    html: `<p>Orbital must <strong>lock and hit you</strong>. Get first place, create space, then self-target. Coffee / boots / cart help race ahead.</p>`,
  },
  'road-rage': {
    rewardCount: 2,
    html: `<p>50 KOs with the <strong>golf cart</strong> item. Drop in traffic lanes (2nd shots, greens), steal carts when possible.</p>`,
  },
  'safety-first': {
    rewardCount: 2,
    html: `<p>Hold <strong>Alt or RMB (aim)</strong> approaching the mine; mine must be <strong>above ground</strong>; press <strong>E</strong> to disarm. Buried mines can’t be disarmed.</p>`,
  },
  'sweet-moves': {
    rewardCount: 3,
    html: `<p>Reach green before anyone holes out → <strong>T</strong> emote wheel → victory dance <strong>≥3&nbsp;s</strong>. Mobility items help race the green.</p>`,
  },
  'underwater-expedition': {
    rewardCount: 4,
    html: `<p>Cart with <strong>passenger(s)</strong> into <strong>deep water</strong> (drowning depth). Desert void does not count — coastal / forest water does.</p>`,
  },
  'walk-the-plank': {
    rewardCount: 3,
    html: `<p>25 KOs into deep water. Water-border greens and bridges are choke points; club knockbacks are safest; finish downs near the edge.</p>`,
  },
}

/**
 * /mods route = Super Battle Golf mod & PC companion articles (not in-game Workshop installs).
 * Steam store does not list Workshop support for this app ID.
 */
export default [
  {
    id: 1,
    title: 'IssaMod — custom items, tiers & multiplayer (BepInEx)',
    description:
      'IssaMod adds 27 configurable items (gunships, bears, nukes, tether rockets, tiered spawn UI) for Super Battle Golf on PC via BepInEx. Unofficial install & config summary from Thunderstore/readme.',
    publishDate: '2026-04-28',
    addressBar: 'issa-mod',
    imageSrc: '/images/guides/guides01.webp',
    imageAlt: 'Super Battle Golf mod article — IssaMod companion overview',
    tags: ['IssaMod', 'BepInEx', 'Thunderstore', 'PC', 'Multiplayer', 'Items'],
    seo: {
      title: 'Super Battle Golf IssaMod Guide — Install, Tiered Spawns, Items & MP | Mods',
      description:
        'Unofficial IssaMod summary for Super Battle Golf: 27 items, Frozen Fairway notes, Thunderstore install, BepInEx paths, tiered spawn config UI, tables, console commands, compatibility.',
      keywords:
        'Super Battle Golf, IssaMod, IssaPlugin, BepInEx, Thunderstore, r2modman, mod, custom items, spawn config, multiplayer, TeamScusemua',
    },
    detailsHtml: `
<p><strong>IssaMod</strong> adds chaotic, weaponized gameplay through custom items (airstrikes, missiles, weapons, and physics modifiers), world modifiers, and cinematic strike abilities. It adds <strong>27 new items</strong> to Super Battle Golf — from an orbiting gunship you pilot from above, to a pack of angry attack bears. All items drop from standard item boxes and are fully configurable.</p>
<p>For downloads and dependency info, use the <a href="https://thunderstore.io/c/super-battle-golf/p/TeamScusemua/IssaMod/" target="_blank" rel="noopener noreferrer">IssaMod package on Thunderstore</a>. Source code and issues are typically linked from that page (GitHub). This article is an unofficial summary — always read the author’s readme and patch notes before installing.</p>

<h3>Frozen Fairway update (author note)</h3>
<p>Release <strong>v0.0.25</strong> re-enables IssaMod / IssaPlugin up through <strong>Hotfix 4</strong> of the Frozen Fairway update. The mod is very under-tested at this point, so there are likely bugs and strange interactions with the new game mechanics. Custom items also appear in the pause menu, but their spawn weights are not updated properly — the author states this will be addressed in a future update.</p>

<h3>Items (overview)</h3>
<p>The following are the custom items described by the mod author. Names and behaviour can change with updates — treat in-game behaviour as final after patches.</p>

<h4>⚾ Baseball Bat</h4>
<p>A melee weapon that replaces your golf club swing. Wind up and send anyone in range flying. Straightforward, personal, deeply satisfying.</p>

<h4>🛩️ AC-130 Gunship</h4>
<p>You become the gunship. The plane circles the map at altitude while you stare down a targeting camera and rain rockets on your friends. Fire is free, ammo is infinite, and the only limit is how long you can stay on station (and the configured time limit). Hit the mayday button and the gunship nosedives — opponents can lock onto it with a rocket launcher and shoot it down before it reaches them. If they cannot, the crash does the work for you.</p>

<h4>💣 Stealth Bomber</h4>
<p>Paint a target on the course from ground level, then confirm the strike. Moments later a B-2 roars overhead and carpets the area with bombs. Great for punishing anyone who stops moving. The bomber itself is a valid rocket launcher target — lock on before the run completes to intercept it.</p>

<h4>🎯 Predator Missile</h4>
<p>You pilot the missile. It drops from altitude and you steer it directly with your camera from a first-person view until it hits something or you let go.</p>

<h4>⚛️ Nuke</h4>
<p>Drop a nuclear bomb that blows all of the other players sky-high.</p>

<h4>🍩 Giant Flying Donut</h4>
<p>A massive donut spawns and you pilot it around the course from a third-person perspective. It follows the terrain at low altitude, fires downward lasers as it passes over players, and can be shot down with standard weapons. Equal parts absurd and devastating.</p>

<h4>🐻 Attack Bears</h4>
<p>Summons AI-controlled battle bears onto the course. Bears chase down the nearest player, wind up, and launch them like a ball. They take damage from all weapons — guns, clubs, the bat, rockets, explosions — and become more aggressive when they get hit. Bears are persistent until killed, which means your bears are everyone’s problem. And your own.</p>

<h4>🧊 Freeze World</h4>
<p>Turn the world into ice and watch as everybody helplessly slips around.</p>

<h4>🌌 Low Gravity</h4>
<p>Reduces gravity across the entire course for a configurable duration. Shots fly further, players float on hits, and any ball already airborne gets a free extension. Can backfire badly on anyone with a long putt already in motion. The swing preview / power bar is adjusted during low gravity.</p>

<h4>🎯 M200 Intervention</h4>
<p>A scoped sniper rifle. Right-click to zoom and show the scope overlay. Fire to hit instantly at any range without the backwards knockback dive of the Elephant Gun. Tight spread when scoped, normal spread when hip-fired. One shot, one hole in someone’s plan.</p>

<h4>⚡ Javelin</h4>
<p>Locks onto a ground target point and flies a lofted arc: up, turn at apex, dive straight down.</p>

<h4>💥 Sticky Grenade</h4>
<p>Thrown with an arc preview so you know exactly where it is going. Sticks to whatever it lands on — terrain, structures, or a player who was not paying attention. Detonates on a fuse. If it sticks to a player, they have a few seconds to contemplate their choices.</p>

<h4>🌀 Black Hole Grenade</h4>
<p>Thrown with an arc preview. Lands and opens a black hole that pulls every nearby player and object toward its center for several seconds, then violently ejects everything outward in random directions. Good luck putting after that.</p>

<h4>🧱 Placeable Wall</h4>
<p>Plants a destructible brick wall wherever you are standing. Useful for blocking shots, redirecting players, or making the course more chaotic. The wall takes damage from rockets, explosives, golf clubs, and the baseball bat — it will eventually come down, but it might save you long enough to matter.</p>

<h4>🔫 AK-47</h4>
<p>A rapid-fire sub-machine gun. Hold the fire button and spray bullets downrange at high speed. Each bullet hits independently, so sustained fire on a target adds up fast. Accuracy degrades with range, so this one rewards getting close.</p>

<h4>🔄 Position Swap</h4>
<p>Pick any other player from the chooser overlay. Warning circles appear around both of you while a short countdown runs — then you swap positions in a burst of smoke. Great for dumping someone into a bad lie or pulling yourself out of one. Cannot be used on players sitting in a golf cart.</p>

<h4>🧪 Poison Jar</h4>
<p>Lob a jar of poison with an arc preview. On landing it shatters and douses anyone within the blast radius — including you, if your aim is bad. Poisoned players suffer a full screen of visual distortion: camera roll, FOV breathing, double vision, and aim drift that makes lining up a shot genuinely difficult. The radius and duration are configurable.</p>

<h4>🛸 Drone Swarm</h4>
<p>Deploys a swarm of kamikaze drones that fan out overhead and circle the course. Each drone flies independently with erratic steering, then picks a random target and dives. They home in until they get close, then lock their aim point and fly straight — a fast-moving target can dodge. Swarm size scales with player count. A HUD counter shows how many drones are still airborne.</p>

<h4>🐂 Red Bull</h4>
<p>Gives you wings. Cracks open a can and grants a speed boost more powerful than coffee, plus a jump height boost for its duration. Use it to cross the course fast, escape a bad situation, or make yourself a harder target to hit.</p>

<h4>🍩 Super Donut</h4>
<p>Trigger an orbital laser on all other players at the same time.</p>

<h4>🌗 Gravity Gun</h4>
<p>Like the iconic weapon from the Half-Life franchise — use the Gravity Gun to throw players and golf carts around with ease.</p>

<h4>✈️ Harrier Jet</h4>
<p>Calls in an autonomous Harrier jet that flies in from off-map, hovers over the course, and fires rockets at players on its own. No steering required after activation — you point and watch. Can be shot down with a rocket launcher before it finishes its run.</p>

<h4>🚀 Rocket Tether</h4>
<p>Targets another player and fires a rocket that spawns directly above them, then launches straight up. The target is tethered to the rocket by a spring force and gets dragged skyward with it. When the timer runs out, the rocket detonates at altitude.</p>

<h4>🎒 Jetpack</h4>
<p>Strap on a jetpack and hold the fire button to thrust upward. Each canister provides a set amount of burn time; releasing the button pauses fuel consumption, so you can pulse the thrust. A fuel gauge HUD shows how much burn time is left in the current canister.</p>

<h4>📡 Teleporter</h4>
<p>The camera pans to a top-down overhead view of the course and a glowing marker appears on the ground. Move the marker with WASD to pick your destination, then confirm to teleport there instantly. Right-click or Space to cancel.</p>

<h4>🥬 Spinach</h4>
<p>Eat your vegetables. Provides a boost to movement speed and swing power.</p>

<h4>🔥 Flamethrower</h4>
<p>Unleash a continuous stream of fire in front of you. Enemies caught in the flames run around while they are set ablaze before falling and rolling on the ground.</p>

<h4>🚀💣 Rocket Tether Grenade</h4>
<p>Throw a toy rocket at the ground, causing a small spark. Anybody within range will be tethered to a rocket — like the Rocket Tether item, but even more chaotic.</p>

<h4>💨 Wind Storm</h4>
<p>Create a wind storm with extremely high-speed winds and dynamically changing directions. These winds blow away players and golf balls alike.</p>

<h3>Installation</h3>
<ul>
<li>Install via <strong>Thunderstore Mod Manager</strong> or <strong>r2modman</strong>. Requires <strong>BepInEx</strong>.</li>
<li><strong>Manual install:</strong> drop <code>IssaPlugin.dll</code> and <code>IssaModBundle</code> into <code>BepInEx/plugins/</code> (paths may vary slightly by manager — follow the package readme).</li>
</ul>

<h3>Configuration</h3>

<h4>In-game spawn config UI (recommended)</h4>
<p>The host can open the <strong>Spawn Config</strong> panel during a session by pressing <strong>M</strong> (default; rebindable in the config file). The panel configures the tiered item spawn system without editing files by hand. Clients can see the panel in read-only mode; their view updates when the host applies changes.</p>

<h4>How the tiered spawn system works</h4>
<p>Items are sorted into up to <strong>5 tiers</strong>. When an item box is ready to award a custom item, the game first picks a tier by weight, then picks a random item from that tier. This gives coarse control (how common is this whole category?) and fine control (per-item tuning) without balancing every item against every other item directly.</p>

<p><strong>Tier settings</strong> (one set per tier):</p>
<table>
<thead><tr><th scope="col">Setting</th><th scope="col">What it does</th></tr></thead>
<tbody>
<tr><td>Tier enabled</td><td>Master switch for the whole tier. Disabled tiers are skipped entirely.</td></tr>
<tr><td>Spawn weight</td><td>How likely this tier is to be chosen. Weights are relative — if Tier 1 is 70 and Tier 2 is 30, Tier 1 is chosen 70% of the time.</td></tr>
<tr><td>Min distance behind leader</td><td>Tier only activates for players at least this many units behind the current leader. Set to 0 to lift the restriction.</td></tr>
<tr><td>Min place to trigger</td><td>Tier only activates for players in this place or worse (e.g. 3 = 3rd place and below). Set to 0 to lift the restriction.</td></tr>
</tbody></table>
<p>Both gating conditions must be met simultaneously. Either can be disabled by setting it to <strong>0</strong>. This supports “rubber band” tiers that only give powerful items to players who are losing badly.</p>

<p><strong>Per-item settings</strong> (in each tier’s item list):</p>
<table>
<thead><tr><th scope="col">Setting</th><th scope="col">What it does</th></tr></thead>
<tbody>
<tr><td>Enabled</td><td>Removes this item from the spawn pool when unchecked.</td></tr>
<tr><td>Override weight</td><td>Gives this item its own spawn weight instead of sharing the tier’s weight equally.</td></tr>
<tr><td>Move →</td><td>Reassign the item to a different tier. Weight override is cleared so it inherits the new tier’s weight.</td></tr>
</tbody></table>

<p><strong>Global settings</strong> (top row of the panel):</p>
<table>
<thead><tr><th scope="col">Setting</th><th scope="col">What it does</th></tr></thead>
<tbody>
<tr><td>Custom items enabled</td><td>Master switch for all custom items.</td></tr>
<tr><td>Global rate multiplier</td><td>Scales spawn rate of every custom item. <code>1.0</code> = normal; <code>2.0</code> = twice as often.</td></tr>
<tr><td>Catchup boost</td><td>Extra multiplier applied only to players behind the leader. <code>1.0</code> = no boost.</td></tr>
<tr><td>Tiers (+ / −)</td><td>Add or remove tiers. A tier can only be removed if it has no items assigned.</td></tr>
</tbody></table>

<p><strong>Applying changes:</strong> click <strong>Apply &amp; Sync</strong> to save to the config file and broadcast to all clients. Click <strong>Cancel</strong> to discard and close. Settings persist in <code>BepInEx/config/com.scusemua.IssaPlugin.cfg</code>.</p>

<h4>Item-specific settings (config file)</h4>
<p>Every item has tuning values in the config file (or via <strong>AtomicStudio’s ModConfig</strong> mod for an in-game UI): uses per pickup, give key for testing, damage, knockback, duration, speed, range, and other item-specific knobs.</p>

<h3>Compatibility</h3>
<ul>
<li><strong>Multiplayer:</strong> All items are networked; the host is server-authoritative. <strong>Clients need the mod.</strong></li>
<li><strong>Base game items:</strong> No vanilla items removed or rebalanced — this mod adds.</li>
<li><strong>Other mods:</strong> Should work alongside mods that do not patch the same inventory or item-spawn hooks. The author calls out compatibility with AtomicStudio’s <strong>ModConfig</strong> and <strong>ItemSpawner</strong>. Host settings can change mid-session and take effect the next time the associated item is used. Spawn pool weights sync on an interval (author: about five seconds).</li>
</ul>

<h3>Console commands (author)</h3>
<ul>
<li><code>vote &lt;timeout&gt;</code> — Host only. Starts a vote to enable or disable individual custom items. Timeout is seconds before the vote closes automatically.</li>
<li><code>spawnConfigUI</code> — Opens the tiered spawn config panel (same as pressing M).</li>
<li><code>giveCustomItem &lt;item name&gt;</code> — Give yourself a custom item.</li>
</ul>

<h3>Known issues / notes</h3>
<ul>
<li>The Donut, AC-130, and Stealth Bomber are valid rocket lock-on targets — intentional.</li>
<li>Hitting a golf ball with a fully charged baseball bat can send the ball backwards (as of the Frozen Fairway update).</li>
</ul>

<h3>Source &amp; disclaimer</h3>
<p>Package listing: <a href="https://thunderstore.io/c/super-battle-golf/p/TeamScusemua/IssaMod/" target="_blank" rel="noopener noreferrer">TeamScusemua — IssaMod on Thunderstore</a>. Bug reports and pull requests belong on the author’s repository linked from that page. <strong>IssaMod is fan-made and is not affiliated with Brimstone or Oro Interactive.</strong> This guide is unofficial; verify versions and EULA before modding your install.</p>
`.trim(),
  },
]

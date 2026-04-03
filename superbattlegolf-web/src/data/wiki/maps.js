/**
 * Three themed courses × nine holes (27 total). Page copy lives in WikiMapsListView.vue.
 */

export default [
  {
    id: 'coast',
    name: 'Coast',
    tagline: 'Water hazards and sand discipline',
    feature:
      'Bright ocean and beach framing. Shallow water and bunkers define the risk — sand kills momentum and stops the ball fast.',
    holes: [
      {
        order: 1,
        slug: 'twin-beach',
        name: 'Twin Beach',
        par: 4,
        expert: 'Birdie (-1)',
        guide:
          'Two main sand spits: land the first shot on the first grass tongue and stay out of the channel between them.',
      },
      {
        order: 2,
        slug: 'cove',
        name: 'Cove',
        par: 5,
        expert: 'Eagle (-2)',
        guide:
          'Curved path — use the shoreline grass for a wide arc into the fairway and skip the deep center water.',
      },
      {
        order: 3,
        slug: 'sandbanks',
        name: 'Sandbanks',
        par: 4,
        expert: 'Birdie (-1)',
        guide:
          'Clustered bunkers reward power control; keep the ball sliding in grass corridors whenever possible.',
      },
      {
        order: 4,
        slug: 'lone-island',
        name: 'Lone Island',
        par: 4,
        expert: 'Eagle (-2)',
        guide:
          'Pin sits on an islet — you need a precise long carry straight over open water onto the green.',
      },
      {
        order: 5,
        slug: 'woodland-bay',
        name: 'Woodland Bay',
        par: 5,
        expert: 'Eagle (-2)',
        guide:
          'Dense trees on the sand — chart trunk collision volume before you commit to a line.',
      },
      {
        order: 6,
        slug: 'spiral',
        name: 'Spiral',
        par: 3,
        expert: 'Birdie (-1)',
        guide:
          'Ring-shaped fairway: beginners play the loop; advanced players can cut in from a side ramp.',
      },
      {
        order: 7,
        slug: 'atoll',
        name: 'Atoll',
        par: 6,
        expert: 'Eagle (-2)',
        guide:
          'Longest Coast hole — hop between islands; every landing zone must be exact.',
      },
      {
        order: 8,
        slug: 'gauntlet',
        name: 'Gauntlet',
        par: 3,
        expert: 'Hole-in-One',
        guide:
          'Razor-straight chute — perfect aim with full power can thread a hole-in-one.',
      },
      {
        order: 9,
        slug: 'downhill',
        name: 'Downhill',
        par: 6,
        expert: 'Eagle (-2)',
        guide:
          'Massive drop — use gravity and hunt the best kick angles down the slope.',
      },
    ],
  },
  {
    id: 'forest',
    name: 'Forest',
    tagline: 'Elevation swings and obstacle dance',
    feature:
      'Pine forest and oversized mushrooms. Verticality is higher and mushrooms add springy, unpredictable bounce physics.',
    holes: [
      {
        order: 1,
        slug: 'twin-path',
        name: 'Twin Path',
        par: 4,
        expert: 'Birdie (-1)',
        guide:
          'Splits left/right after the tee — the right lane is tighter but shorter to the cup.',
      },
      {
        order: 2,
        slug: 'roundabout',
        name: 'Roundabout',
        par: 4,
        expert: 'Birdie (-1)',
        guide:
          'Big obstacle in the middle — ride the outer bank to preserve ball speed.',
      },
      {
        order: 3,
        slug: 'overgrown',
        name: 'Overgrown',
        par: 4,
        expert: 'Birdie (-1)',
        guide:
          'Red and blue mushrooms everywhere — learn cap jumps for advanced lines.',
      },
      {
        order: 4,
        slug: 'overlook',
        name: 'Overlook',
        par: 5,
        expert: 'Eagle (-2)',
        guide:
          'Wide sightlines with the cup low — on long slides, steer clear of root clusters.',
      },
      {
        order: 5,
        slug: 'donut',
        name: 'Donut',
        par: 5,
        expert: 'Eagle (-2)',
        guide:
          'Ring track around a pit — stay on the loop; greedy shortcuts drop you into the void.',
      },
      {
        order: 6,
        slug: 'hilltops',
        name: 'Hilltops',
        par: 5,
        expert: 'Albatross (-3)',
        guide:
          'Rolling crests and valleys — striking at the base of a downslope adds exit speed.',
      },
      {
        order: 7,
        slug: 'upward',
        name: 'Upward',
        par: 4,
        expert: 'Eagle (-2)',
        guide:
          'Pure uphill — add power each stroke so gravity cannot roll you backward.',
      },
      {
        order: 8,
        slug: 'blast-off',
        name: 'Blast Off',
        par: 4,
        expert: 'Eagle (-2)',
        guide:
          'Tight platform hops — too much or too little power spells OB.',
      },
      {
        order: 9,
        slug: 'terraces',
        name: 'Terraces',
        par: 5,
        expert: 'Albatross (-3)',
        guide:
          'Stepped tiers — use controlled drops to ping down each level.',
      },
    ],
  },
  {
    id: 'desert',
    name: 'Desert',
    tagline: 'Long carries and ruin exploration',
    feature:
      'Hot wasteland with pyramids, canyons, and giant cactus. Quicksand pockets and hard rock ricochets make angles volatile.',
    holes: [
      {
        order: 1,
        slug: 'showdown',
        name: 'Showdown',
        par: 3,
        expert: 'Hole-in-One',
        guide:
          'Minimalist layout — tiny aim tweaks are enough to chase an ace.',
      },
      {
        order: 2,
        slug: 'patches',
        name: 'Patches',
        par: 6,
        expert: 'Eagle (-2)',
        guide:
          'Grass islands in a sand sea — hop accurately from patch to patch.',
      },
      {
        order: 3,
        slug: 'oasis',
        name: 'Oasis',
        par: 5,
        expert: 'Albatross (-3)',
        guide:
          'Water in the center — orbit the outer grass ring for safer tempo.',
      },
      {
        order: 4,
        slug: 'serpent-trail',
        name: 'Serpent Trail',
        par: 5,
        expert: 'Eagle (-2)',
        guide:
          'Winding narrow fairway — read roll geometry several bounces ahead.',
      },
      {
        order: 5,
        slug: 'big-rock',
        name: 'Big Rock',
        par: 5,
        expert: 'Birdie (-1)',
        guide:
          'Monolith dead ahead — bank off side berms or loft over the top.',
      },
      {
        order: 6,
        slug: 'sand-traps',
        name: 'Sand Traps',
        par: 5,
        expert: 'Eagle (-2)',
        guide:
          'Deep pits everywhere — if you fall to the bottom, you need huge power to escape.',
      },
      {
        order: 7,
        slug: 'chasm',
        name: 'Chasm',
        par: 4,
        expert: 'Eagle (-2)',
        guide:
          'Wide gap — keep the power meter roughly 90%+ to clear the jump.',
      },
      {
        order: 8,
        slug: 'vertigo',
        name: 'Vertigo',
        par: 4,
        expert: 'Birdie (-1)',
        guide:
          'Cup hugs a cliff — touch it gently or the ball rolls OB.',
      },
      {
        order: 9,
        slug: 'underpass',
        name: 'Underpass',
        par: 4,
        expert: 'Birdie (-1)',
        guide:
          'Natural stone arch — walls add friction and can twist your exit angle.',
      },
    ],
  },
]

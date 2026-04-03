#!/usr/bin/env node
/**
 * One-off: pull hero + per-achievement lead images from Sea Tea’s Steam Community guide HTML
 * (same UGC URLs as on the guide page). Run: node scripts/download-sea-tea-achievement-images.mjs
 */
import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/images/wiki/steam-sea-tea-guide')

const coverUrl =
  'https://images.steamusercontent.com/ugc/14723272687118469787/9A369A8F68B3B6591B85B90500714E15AC319AB1/?imw=512&imh=512&ima=fit&impolicy=Letterbox'

/** slug → first section image path on steamusercontent (ugc/ID/HASH/) */
const slugToPath = {
  'a-cut-above': '9282200881728512090/A46ECE5A0B6D57C5FD8556B014E65E2B700E859C',
  'behind-you': '13068032733718206731/C7D22B9AD0DB4E4AEA59A4D1B4EA3361BFF6A1CE',
  bully: '17493291162445987652/7AF1E9C9F2B39D9AD67441CB75EACC08C02605B8',
  'catlike-reflexes': '15963900485084371820/A81E6A0752742B6684F1AA6DC1D5D24E744BDB77',
  'clowning-around': '11159688138514294194/B39163F2AE15D58EABFD74E436F3F7573E741E0D',
  coolheaded: '15182870106872588281/A4E89E1F2638FB3F42C66FEB977B7731D5BBD343',
  'couch-potato': '13633191816055970484/EB891B0F682B7C445670C2A3FC3FAB3234D8E463',
  'early-bird': '18006787122884910393/858CF3FE219131673BE9EE4B7E8E1028EA32F2FC',
  'frog-legs': '12227317811736430571/50503D9C6C3038AC4E3EE133E1E9DD254A189E96',
  goalie: '16441139110405542587/08776A39CDEDEEA815FBD0C9630ECA40CE2F73D3',
  gunslinger: '11845363327296196059/67352358BCD157C09D2435B4825909AAF700CE57',
  'head-in-the-clouds': '17298299088961706730/682F4A98D721258F9874803B95631885D2AEB6DD',
  'lying-in-wait': '14319316222136138040/71C5FA5627254E643F62E65B57F43619E7E5EAA5',
  'never-give-up': '10814477460425589208/99201327D109A9E93D3E98085690233BCCCF7AA7',
  'phone-home': '16669053838806417660/6625A8C61E01C9696C75267B5CFAE5973EE477EC',
  'road-rage': '12836980931994000130/A396AFFA41F0F3B5DD5F3F27A188D25FA7A44CD6',
  'safety-first': '10711885042534438554/C5635C6753642E3CF3864226EE0C7E8D2C6D97A5',
  'sweet-moves': '13621978331186861340/875B9B8D1918A7E6EC1315675063693B72426F7D',
  'underwater-expedition': '11266970855991232776/1A9598DDA5E64A6D87143712FF6A07CB0A97337A',
  'walk-the-plank': '15565128426139892008/D0F75C42730820F153E9EE9C481E921BE596BCBC',
}

function ugcUrl(rest) {
  return `https://images.steamusercontent.com/ugc/${rest}/`
}

async function download(url, dest) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; SBGGuideMirror/1.0; +https://superbattlegolf.org)',
      Accept: 'image/*,*/*',
    },
  })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  writeFileSync(dest, buf)
  return buf.length
}

mkdirSync(outDir, { recursive: true })

let n = 0
const bytes = await download(coverUrl, join(outDir, 'cover.jpg'))
console.log(`cover.jpg\t${bytes}`)
n++

for (const [slug, path] of Object.entries(slugToPath)) {
  const dest = join(outDir, `${slug}.jpg`)
  try {
    const b = await download(ugcUrl(path), dest)
    console.log(`${slug}.jpg\t${b}`)
    n++
  } catch (e) {
    console.error(`FAIL ${slug}:`, e.message)
  }
}

console.log(`Done. Wrote ${n} files -> ${outDir}`)

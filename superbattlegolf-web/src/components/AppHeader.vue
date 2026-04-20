<template>
  <header class="hdr" role="banner">
    <div class="container hdr-inner">
      <a :href="appHref('/')" class="hdr-logo" aria-label="Super Battle Golf Guide home">
        <img src="/images/logo.png" alt="Super Battle Golf Guide" class="hdr-logo-image">
        <span class="hdr-logo-mark">Super Battle Golf</span>
      </a>

      <button
        type="button"
        class="hdr-toggle"
        :aria-expanded="menuOpen"
        aria-controls="hdr-nav"
        @click="menuOpen = !menuOpen"
      >
        <span class="visually-hidden">Toggle menu</span>
        <svg v-if="!menuOpen" class="hdr-toggle-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <svg v-else class="hdr-toggle-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>

      <nav id="hdr-nav" class="hdr-nav" :class="{ 'hdr-nav--open': menuOpen }" aria-label="Primary">
        <ul class="hdr-list">
          <li>
            <a :href="appHref('/')" class="hdr-pill" :class="{ 'hdr-pill--active': isActive('/') }" @click="closeMenu">Home</a>
          </li>
          <li>
            <a
              :href="appHref('/getting-started')"
              class="hdr-pill"
              :class="{ 'hdr-pill--active': isActive('/getting-started') }"
              @click="closeMenu"
            >Getting Started</a>
          </li>
          <li>
            <a :href="appHref('/wiki')" class="hdr-pill" :class="{ 'hdr-pill--active': isActive('/wiki') }" @click="closeMenu">Wiki</a>
          </li>
          <li>
            <a :href="appHref('/guides')" class="hdr-pill" :class="{ 'hdr-pill--active': isActive('/guides') }" @click="closeMenu">Guides</a>
          </li>
          <li>
            <a :href="appHref('/advanced')" class="hdr-pill" :class="{ 'hdr-pill--active': isActive('/advanced') }" @click="closeMenu">Advanced</a>
          </li>
          <li>
            <a :href="appHref('/mods')" class="hdr-pill" :class="{ 'hdr-pill--active': isActive('/mods') }" @click="closeMenu">Mods</a>
          </li>
          <li>
            <a
              :href="appHref('/platforms')"
              class="hdr-pill"
              :class="{ 'hdr-pill--active': isActive('/platforms') }"
              @click="closeMenu"
            >Platforms</a>
          </li>
          <li>
            <a :href="appHref('/support')" class="hdr-pill" :class="{ 'hdr-pill--active': isActive('/support') }" @click="closeMenu">Support</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { appHref } from '../utils/appHref.js'

const route = useRoute()
const menuOpen = ref(false)

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(`${path}/`)
}

function closeMenu() {
  menuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<style scoped>
.hdr {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 3px dashed rgba(253, 224, 71, 0.45);
  background: rgba(12, 21, 36, 0.88);
  backdrop-filter: blur(14px);
}

.hdr-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.25rem;
}

.hdr-logo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-weight: 800;
  line-height: 1.15;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.hdr-logo-image {
  width: 65px;
  height: auto;
  object-fit: contain;
}

@media (min-width: 768px) {
  .hdr-logo {
    white-space: nowrap;
  }
}


.hdr-logo-mark {
  font-size: clamp(1rem, 2.8vw, 1.35rem);
  letter-spacing: -0.02em;
  background: linear-gradient(95deg, #fef9c3, #fde047 35%, #4ade80 72%, #7dd3fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 0 rgba(15, 23, 42, 0.9));
}

.hdr-logo-tail {
  font-size: clamp(0.95rem, 2.4vw, 1.15rem);
  color: #fffbeb;
  text-shadow: 0 2px 0 #15803d, 0 3px 10px rgba(0, 0, 0, 0.35);
}

.hdr-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.85rem;
  height: 2.85rem;
  border-radius: 999px;
  border: 3px solid #38bdf8;
  background: rgba(21, 34, 56, 0.95);
  color: #fffbeb;
  cursor: pointer;
  box-shadow: 0 3px 0 rgba(15, 23, 42, 0.9);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.hdr-toggle:hover {
  transform: translateY(-1px);
  border-color: #fde047;
}

.hdr-toggle-icon {
  width: 1.35rem;
  height: 1.35rem;
}

.hdr-nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  padding: 0.85rem 1.25rem 1.1rem;
  background: rgba(10, 18, 32, 0.97);
  border-bottom: 3px solid rgba(251, 113, 133, 0.35);
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.hdr-nav--open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.hdr-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.hdr-pill {
  display: block;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  border: 2px solid transparent;
  color: #e0f2f1;
  text-decoration: none;
  font-weight: 800;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  cursor: pointer;
  background: rgba(30, 58, 88, 0.55);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.hdr-pill:hover {
  text-decoration: none;
  border-color: rgba(253, 224, 71, 0.65);
  transform: translateX(4px);
}

.hdr-pill--active {
  background: linear-gradient(90deg, rgba(74, 222, 128, 0.35), rgba(56, 189, 248, 0.25));
  border-color: #4ade80;
  color: #fffbeb;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 1024px) {
  .hdr-toggle {
    display: none;
  }

  .hdr-nav {
    position: static;
    padding: 0;
    border: none;
    background: transparent;
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }

  .hdr-list {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 0.35rem;
  }

  .hdr-pill {
    padding: 0.4rem 0.75rem;
    font-size: 0.88rem;
  }

  .hdr-pill:hover {
    transform: translateY(-2px);
  }
}
</style>

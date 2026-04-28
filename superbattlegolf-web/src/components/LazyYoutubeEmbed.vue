<template>
  <div class="lazy-yt">
    <iframe
      v-if="activated"
      :src="embedSrc"
      :title="embedTitle"
      class="lazy-yt__frame"
      width="560"
      height="315"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      loading="lazy"
    />
    <button
      v-else
      type="button"
      class="lazy-yt__facade"
      :aria-label="`Play video: ${embedTitle}`"
      @click="activated = true"
    >
      <!-- 封面作全屏背景；中间播放按钮；点击后才插入 iframe，避免预加载 YouTube -->
      <span class="lazy-yt__poster-stack" aria-hidden="true">
        <img
          v-if="posterSrc"
          class="lazy-yt__poster"
          :src="posterSrc"
          alt=""
          width="640"
          height="360"
          loading="lazy"
          decoding="async"
        />
        <div v-else class="lazy-yt__poster lazy-yt__poster--fallback" />
        <span class="lazy-yt__poster-dim" />
      </span>
      <span class="lazy-yt__play" aria-hidden="true">
        <svg class="lazy-yt__play-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="36" fill="rgba(15, 23, 42, 0.62)" stroke="rgba(255, 255, 255, 0.92)" stroke-width="2.5" />
          <path d="M34 26 L56 40 L34 54 V26 Z" fill="white" />
        </svg>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  embedSrc: { type: String, required: true },
  embedTitle: { type: String, required: true },
  /** 点击前全屏背景图；可由数据的 home.embedPosterSrc 指定 */
  posterSrc: { type: String, default: '' },
})

const activated = ref(false)
</script>

<style scoped>
.lazy-yt {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.lazy-yt__frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.lazy-yt__facade {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: #020617;
}

.lazy-yt__facade:hover .lazy-yt__play-svg {
  transform: scale(1.06);
  filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.55));
}

.lazy-yt__facade:focus-visible {
  outline: 3px solid #fde047;
  outline-offset: 2px;
}

.lazy-yt__poster-stack {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.lazy-yt__poster {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lazy-yt__poster--fallback {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 41, 59, 0.9) 55%, rgba(12, 74, 110, 0.35) 100%);
}

.lazy-yt__poster-dim {
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.35);
  pointer-events: none;
}

.lazy-yt__play {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.lazy-yt__play-svg {
  display: block;
  width: clamp(3.25rem, 12vw, 4.5rem);
  height: clamp(3.25rem, 12vw, 4.5rem);
  transition: transform 0.2s ease, filter 0.2s ease;
}

@media (prefers-reduced-motion: reduce) {
  .lazy-yt__facade:hover .lazy-yt__play-svg {
    transform: none;
  }

  .lazy-yt__play-svg {
    transition: none;
  }
}
</style>

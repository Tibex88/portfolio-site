<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { heroContent, infoCardItems } = storeToRefs(store)
</script>

<template>
  <section class="hero-board reference-card">
    <p class="hero-board__eyebrow">{{ heroContent.eyebrow }}</p>

    <div class="hero-board__nameplate">
      <div class="hero-board__name-line">
        <span class="hero-board__name hero-board__name--left">{{ heroContent.titleTop }}</span>
        <span class="hero-board__overlay">{{ heroContent.overlayWord }}</span>
        <span class="hero-board__name hero-board__name--right">{{ heroContent.titleBottom }}</span>
      </div>
      <p class="hero-board__subtitle">{{ heroContent.subtitle }}</p>
    </div>

    <div class="hero-board__info-grid">
      <component
        v-for="item in infoCardItems"
        :key="item.id"
        class="hero-board__info-card interactive-target"
        :class="{ 'is-static': !item.href }"
        :is="item.id === 'about' ? 'button' : 'a'"
        :href="item.id === 'about' ? undefined : item.href || undefined"
        :target="item.id === 'about' ? undefined : item.href?.startsWith('http') ? '_blank' : undefined"
        :rel="item.id === 'about' ? undefined : 'noreferrer'"
        :data-cursor-mode="item.cursorMode || 'inspect'"
        @mouseenter="store.setCursorMode(item.cursorMode || 'inspect')"
        @mouseleave="store.setCursorMode('default')"
        @click="item.id === 'about' ? store.openOverlay('about') : undefined"
      >
        <span class="hero-board__info-label">{{ item.label }}</span>
        <span class="hero-board__info-value">{{ item.value }}</span>
      </component>
    </div>

    <!-- <img
      class="hero-board__fun-mark-image"
      src="https://framerusercontent.com/images/hwZmZyH3g1JcfsUCWy2ozeUOAEo.png"
      alt=""
      aria-hidden="true"
    /> -->
  </section>

  <!-- <section class="hero-tagline-strip">
    <div class="stellare-strip reference-image-card">
     <img
        class="stellare-strip__image"
        src="https://framerusercontent.com/images/zIZ1FHlbpGhIVNDAMFMESn0KzE.png"
        alt="Decorative Stellare title"
      /> 
      <span class="stellare-strip__overlay">systems</span>
    </div>
  </section> -->
</template>

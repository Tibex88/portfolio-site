<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { socialItems } = storeToRefs(store)
</script>

<template>
  <section class="social-dock" aria-label="Social links">
    <a
      v-for="item in socialItems"
      :key="item.id"
      class="social-pill interactive-target"
      :href="item.href"
      target="_blank"
      rel="noreferrer"
      :data-cursor-mode="item.cursorMode"
      @mouseenter="store.setCursorMode(item.cursorMode)"
      @mouseleave="store.setCursorMode('default')"
    >
      <span class="social-pill__label">{{ item.label }}:</span>
      <span class="social-pill__note">{{ item.note }}</span>
    </a>
  </section>
</template>

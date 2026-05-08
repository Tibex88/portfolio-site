<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { aboutContent, activeOverlay } = storeToRefs(store)
</script>

<template>
  <div
    v-if="activeOverlay === 'about'"
    class="about-overlay"
    @click.self="store.closeOverlay()"
  >
    <div class="about-overlay__panel">
      <button class="about-overlay__close interactive-target" type="button" @click="store.closeOverlay()">
        {{ aboutContent.title }}
      </button>
      <div class="about-overlay__body">
        <p v-for="paragraph in aboutContent.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

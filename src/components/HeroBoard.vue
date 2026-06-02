<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { heroContent, infoCardItems } = storeToRefs(store)

const leftInfoItems = computed(() => {
  const order = ['about', 'contact', 'phone']
  return order
    .map((id) => infoCardItems.value.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
})

const rightInfoItems = computed(() => {
  const order = ['social', 'work', 'CV']
  return order
    .map((id) => infoCardItems.value.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
})
</script>

<template>
  <section
    class="mb-section-gap grid items-center justify-center rounded-card border-[3px] border-black bg-reference-dark px-hero-x pt-12 pb-hero-bottom text-reference-light shadow-inset-frame md:px-hero-x-md md:pt-14 md:pb-hero-bottom-md xl:px-hero-x-xl xl:pt-[62px] xl:pb-hero-bottom-xl">
    <p
      class="mb-[14px] max-w-full text-center font-ui text-[calc(16px*var(--body-text-scale))] font-bold uppercase tracking-[0.08em] text-reference-light md:text-[calc(18px*var(--body-text-scale))]"
    >
      {{ heroContent.eyebrow }}
    </p>

    <div class="hero-board__content">
      <div class="hero-board__title-block border-b-[2px] border-b-[rgba(194,208,190,0.95)] pb-4 md:border-b-0 md:pb-0">
        <p class="relative items-end justify-center gap-hero-title-gap text-center text-[52px] max-md:gap-hero-title-gap-sm md:flex-wrap">
          <span
            class="font-display text-[52px] leading-[0.88] tracking-[0.03em] uppercase"
          >
            {{ heroContent.titleTop }}
          </span>
          <span
            class="mt-[-8px] block w-full rotate-[-7deg] select-none font-script text-[44px] leading-none text-accent md:absolute md:top-[38%] md:left-[34%] md:mt-0 md:inline-block md:w-auto md:text-[58px] xl:text-[74px]"
          >
            {{ heroContent.overlayWord }}
          </span>
          <span
            class="font-display text-[52px] leading-[0.88] tracking-[0.03em] uppercase"
          >
            {{ heroContent.titleBottom }}
          </span>
        </p>
        <p
          class="mt-2 text-center font-script text-[calc(28px*var(--body-text-scale))] text-reference-light md:text-[calc(32px*var(--body-text-scale))] xl:text-[calc(38px*var(--body-text-scale))]"
        >
          {{ heroContent.subtitle }}
        </p>
      </div>

      <div class="hero-board__info-panel hero-board__info-panel--left">
        <component
          v-for="item in leftInfoItems"
          :key="item.id"
          class="hero-board__info-row interactive-target"
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

      <div class="hero-board__info-panel hero-board__info-panel--right">
        <component
          v-for="item in rightInfoItems"
          :key="item.id"
          class="hero-board__info-row interactive-target"
          :class="{ 'is-static': !item.href }"
          :is="'a'"
          :href="item.href || undefined"
          :target="item.href?.startsWith('http') || item.href?.endsWith('.pdf') ? '_blank' : undefined"
          rel="noreferrer"
          :data-cursor-mode="item.cursorMode || 'inspect'"
          @mouseenter="store.setCursorMode(item.cursorMode || 'inspect')"
          @mouseleave="store.setCursorMode('default')"
        >
          <span class="hero-board__info-label">{{ item.label }}</span>
          <span class="hero-board__info-value">{{ item.value }}</span>
        </component>
      </div>
    </div>
  </section>

</template>

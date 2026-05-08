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
    class="relative mb-[var(--section-gap)] rounded-[var(--card-radius)] border-[3px] border-[#0a0a0a] bg-[var(--reference-dark)] px-[18px] pt-12 pb-[18px] text-[var(--reference-light)] shadow-[inset_0_0_0_3px_rgba(0,0,0,0.08)] min-[810px]:px-6 min-[810px]:pt-14 min-[810px]:pb-5 min-[1310px]:px-7 min-[1310px]:pt-[62px] min-[1310px]:pb-[18px]"
  >
    <p
      class="mb-[14px] max-w-full font-[var(--ui-font)] text-[calc(16px*var(--body-text-scale))] font-bold uppercase tracking-[0.08em] text-[var(--reference-light)] min-[810px]:text-[calc(18px*var(--body-text-scale))]"
    >
      {{ heroContent.eyebrow }}
    </p>

    <div class="border-b-[2px] border-b-[rgba(194,208,190,0.95)] pb-4 min-[810px]:border-b-0 min-[810px]:pb-0">
      <div class="relative flex flex-wrap items-end gap-4 max-[809px]:gap-[6px]">
        <span
          class="font-[var(--display-font)] text-[52px] leading-[0.88] tracking-[0.03em] uppercase "
        >
          {{ heroContent.titleTop }}
        </span>
        <span
          class="relative mt-[-8px] block w-full rotate-[-7deg] select-none font-['Brush_Script_MT','Segoe_Script',cursive] text-[44px] leading-none text-[var(--accent)] min-[810px]:absolute min-[810px]:top-[38%] min-[810px]:left-[34%] min-[810px]:mt-0 min-[810px]:inline-block min-[810px]:w-auto min-[810px]:text-[58px] min-[1310px]:text-[74px]"
        >
          {{ heroContent.overlayWord }}
        </span>
        <span
          class="font-[var(--display-font)] text-[52px] leading-[0.88] tracking-[0.03em] uppercase"
        >
          {{ heroContent.titleBottom }}
        </span>
      </div>
      <p
        class="mt-2 font-['Brush_Script_MT','Segoe_Script',cursive] text-[calc(28px*var(--body-text-scale))] text-[var(--reference-light)] min-[810px]:text-[calc(32px*var(--body-text-scale))] min-[1310px]:text-[calc(38px*var(--body-text-scale))]"
      >
        {{ heroContent.subtitle }}
      </p>
    </div>

    <div class="hero-board__info-grid">
      <div class="hero-board__info-panel">
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

      <div
        class="hidden min-[810px]:block min-[810px]:self-stretch min-[810px]:w-px min-[810px]:justify-self-center min-[810px]:bg-[rgba(194,208,190,0.95)]"
        aria-hidden="true"
      />

      <div class="hero-board__info-panel">
        <component
          v-for="item in rightInfoItems"
          :key="item.id"
          class="hero-board__info-row interactive-target"
          :class="{ 'is-static': !item.href }"
          :is="'a'"
          :href="item.href || undefined"
          :target="item.href?.startsWith('http') ? '_blank' : undefined"
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

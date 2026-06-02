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
    class="grid items-center justify-center mb-[var(--section-gap)] rounded-[var(--card-radius)] border-[3px] border-[#0a0a0a] bg-[var(--reference-dark)] px-[18px] pt-12 pb-[18px] text-[var(--reference-light)] shadow-[inset_0_0_0_3px_rgba(0,0,0,0.08)] md:px-6 md:pt-14 md:pb-5 xl:px-7 xl:pt-[62px] xl:pb-[18px]">
    <p
      class="mb-[14px] max-w-full text-center font-[var(--ui-font)] text-[calc(16px*var(--body-text-scale))] font-bold uppercase tracking-[0.08em] text-[var(--reference-light)] md:text-[calc(18px*var(--body-text-scale))]"
    >
      {{ heroContent.eyebrow }}
    </p>

    <div class="hero-board__content">
      <div class="hero-board__title-block border-b-[2px] border-b-[rgba(194,208,190,0.95)] pb-4 md:border-b-0 md:pb-0">
        <p class="relative items-end justify-center text-[52px] gap-4 text-center max-md:gap-[6px] md:flex-wrap">
          <span
            class="font-[var(--display-font)] text-[52px] leading-[0.88] tracking-[0.03em] uppercase "
          >
            {{ heroContent.titleTop }}
          </span>
          <span
            class=" mt-[-8px] block w-full rotate-[-7deg] select-none font-['Brush_Script_MT','Segoe_Script',cursive] text-[44px] leading-none text-[var(--accent)] md:absolute md:top-[38%] md:left-[34%] md:mt-0 md:inline-block md:w-auto md:text-[58px] xl:text-[74px]"
          >
            {{ heroContent.overlayWord }}
          </span>
          <span
            class="font-[var(--display-font)] text-[52px] leading-[0.88] tracking-[0.03em] uppercase"
          >
            {{ heroContent.titleBottom }}
          </span>
        </p>
        <p
          class="mt-2 text-center font-['Brush_Script_MT','Segoe_Script',cursive] text-[calc(28px*var(--body-text-scale))] text-[var(--reference-light)] md:text-[calc(32px*var(--body-text-scale))] xl:text-[calc(38px*var(--body-text-scale))]"
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

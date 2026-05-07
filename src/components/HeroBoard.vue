<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { heroContent, infoCardItems } = storeToRefs(store)
</script>

<template>
  <section
    class="relative mb-[var(--section-gap)] rounded-[var(--card-radius)] border-[3px] border-[#0a0a0a] bg-[var(--reference-dark)] px-[18px] pt-12 pb-[18px] text-[var(--reference-light)] shadow-[inset_0_0_0_3px_rgba(0,0,0,0.08)] min-[810px]:px-6 min-[810px]:pt-14 min-[810px]:pb-5 min-[1310px]:px-7 min-[1310px]:pt-[62px] min-[1310px]:pb-[18px]"
  >
    <p
      class="mb-[14px] max-w-full font-[var(--ui-font)] text-[16px] font-bold uppercase tracking-[0.08em] text-[var(--reference-light)] min-[810px]:text-[18px]"
    >
      {{ heroContent.eyebrow }}
    </p>

    <div class="border-b-[2px] border-b-[rgba(194,208,190,0.95)] pb-4">
      <div class="relative flex flex-wrap items-end gap-4 max-[809px]:gap-[6px]">
        <span
          class="font-[var(--display-font)] text-[72px] leading-[0.88] tracking-[0.03em] uppercase min-[810px]:text-[96px] min-[1310px]:text-[138px]"
        >
          {{ heroContent.titleTop }}
        </span>
        <span
          class="relative mt-[-8px] block w-full rotate-[-7deg] font-['Brush_Script_MT','Segoe_Script',cursive] text-[44px] leading-none text-[var(--accent)] min-[810px]:absolute min-[810px]:top-[38%] min-[810px]:left-[34%] min-[810px]:mt-0 min-[810px]:inline-block min-[810px]:w-auto min-[810px]:text-[58px] min-[1310px]:text-[74px]"
        >
          {{ heroContent.overlayWord }}
        </span>
        <span
          class="font-[var(--display-font)] text-[72px] leading-[0.88] tracking-[0.03em] uppercase min-[810px]:text-[96px] min-[1310px]:text-[138px]"
        >
          {{ heroContent.titleBottom }}
        </span>
      </div>
      <p
        class="mt-2 font-['Brush_Script_MT','Segoe_Script',cursive] text-[28px] text-[var(--reference-light)] min-[810px]:text-[32px] min-[1310px]:text-[38px]"
      >
        {{ heroContent.subtitle }}
      </p>
    </div>

    <div class="mt-5 grid grid-cols-1 gap-3 min-[810px]:grid-cols-2">
      <component
        v-for="item in infoCardItems"
        :key="item.id"
        class="interactive-target flex min-h-[74px] items-center justify-between gap-[14px] rounded-[10px] border-[2px] border-transparent bg-[#afc6b3] px-4 py-[14px] text-[#0a223a] no-underline transition duration-180 ease-[ease] hover:translate-y-[-2px] hover:border-[#0a223a]"
        :class="{ 'cursor-none': item.href, 'cursor-default': !item.href }"
        :is="item.id === 'about' ? 'button' : 'a'"
        :href="item.id === 'about' ? undefined : item.href || undefined"
        :target="item.id === 'about' ? undefined : item.href?.startsWith('http') ? '_blank' : undefined"
        :rel="item.id === 'about' ? undefined : 'noreferrer'"
        :data-cursor-mode="item.cursorMode || 'inspect'"
        @mouseenter="store.setCursorMode(item.cursorMode || 'inspect')"
        @mouseleave="store.setCursorMode('default')"
        @click="item.id === 'about' ? store.openOverlay('about') : undefined"
      >
        <span
          class="font-[var(--ui-font)] text-[14px] font-bold uppercase min-[810px]:text-[16px]"
        >
          {{ item.label }}
        </span>
        <span
          class="font-['Brush_Script_MT','Segoe_Script',cursive] text-[26px] min-[810px]:text-[34px]"
        >
          {{ item.value }}
        </span>
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

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { heroContent, infoCardItems } = storeToRefs(store)
</script>

<template>
  <section
    class="reference-card mb-[var(--section-gap)] bg-[var(--reference-dark)] px-[18px] pt-12 pb-[18px] text-[var(--reference-light)] min-[810px]:px-7 min-[810px]:pt-14 min-[810px]:pb-6 min-[1310px]:px-10 min-[1310px]:pt-16"
  >
    <p class="mb-3 max-w-full text-[16px] font-bold uppercase tracking-[0.08em] text-[var(--reference-light)] min-[1310px]:mb-4">
      {{ heroContent.eyebrow }}
    </p>

    <div class="border-b-2 border-b-[rgba(194,208,190,0.95)] pb-4 min-[810px]:pb-5">
      <div class="relative flex flex-wrap items-end gap-4 min-[810px]:gap-5">
        <span class="font-[var(--display-font)] text-[72px] leading-[0.88] tracking-[0.03em] uppercase min-[810px]:text-[92px] min-[1310px]:text-[118px]">
          {{ heroContent.titleTop }}
        </span>
        <span class="relative -mt-2 block w-full rotate-[-7deg] font-[Brush_Script_MT,_Segoe_Script,_cursive] text-[44px] leading-none text-[var(--accent)] min-[810px]:mt-0 min-[810px]:w-auto min-[810px]:text-[56px] min-[1310px]:text-[72px]">
          {{ heroContent.overlayWord }}
        </span>
        <span class="font-[var(--display-font)] text-[72px] leading-[0.88] tracking-[0.03em] uppercase min-[810px]:text-[92px] min-[1310px]:text-[118px]">
          {{ heroContent.titleBottom }}
        </span>
      </div>
      <p class="mt-2 font-[Brush_Script_MT,_Segoe_Script,_cursive] text-[28px] text-[var(--reference-light)] min-[810px]:mt-3 min-[810px]:text-[34px] min-[1310px]:text-[40px]">
        {{ heroContent.subtitle }}
      </p>
    </div>

    <div class="mt-5 grid grid-cols-1 gap-3 min-[810px]:mt-6 min-[810px]:grid-cols-2 min-[1310px]:mt-7 min-[1310px]:gap-4">
      <component
        v-for="item in infoCardItems"
        :key="item.id"
        class="interactive-target flex min-h-[74px] items-center justify-between gap-3 rounded-[10px] border-2 border-transparent bg-[#afc6b3] px-4 py-[14px] text-[#0a223a] no-underline transition-transform duration-180 ease-[ease] hover:-translate-y-0.5 hover:border-[#0a223a] min-[810px]:min-h-[88px] min-[810px]:px-5 min-[810px]:py-4 min-[1310px]:min-h-[96px]"
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
        <span class="text-[14px] font-bold uppercase">{{ item.label }}</span>
        <span class="font-[Brush_Script_MT,_Segoe_Script,_cursive] text-[26px] min-[810px]:text-[30px] min-[1310px]:text-[34px]">
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

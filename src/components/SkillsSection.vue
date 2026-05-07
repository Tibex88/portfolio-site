<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { skillGroupItems } = storeToRefs(store)

const skillCards = computed(() =>
  skillGroupItems.value.flatMap((group) =>
    group.items.map((item, index) => ({
      id: `${group.id}-${index}`,
      title: item,
      group: group.title,
      tilt: index % 3 === 0 ? '-1.2deg' : index % 3 === 1 ? '0.8deg' : '-0.45deg',
    })),
  ),
)
</script>

<template>
  <section class="relative left-1/2 mr-[-50vw] ml-[-50vw] w-screen">
    <h2
      class="mx-auto mt-[var(--section-gap)] mb-[18px] w-[min(var(--content-max),calc(100%-calc(var(--frame-gutter)*2)))] font-[var(--display-font)] text-[32px] leading-[0.92] tracking-[0.06em] uppercase text-[#0a223a] min-[810px]:text-[44px] min-[1310px]:text-[54px]"
    >
      Technical Skills
    </h2>
    <div class="overflow-visible pt-2 pb-[22px]">
      <div class="mt-[-22px] w-screen overflow-x-auto overflow-y-hidden pt-[22px] pb-2">
        <div
          class="grid min-w-max auto-cols-[clamp(240px,19vw,320px)] grid-flow-col grid-rows-[repeat(2,max-content)] items-start gap-5 overflow-visible px-6 pt-[14px] pb-5 min-[810px]:auto-cols-[clamp(260px,22vw,340px)] min-[810px]:px-[var(--frame-gutter)] min-[1310px]:auto-cols-[clamp(280px,19vw,360px)] max-[809px]:px-3"
        >
          <article
            v-for="skill in skillCards"
            :key="skill.id"
            class="group/skill relative min-h-[190px] self-start overflow-visible bg-transparent px-4 pt-4 pb-[10px]"
            :style="{ transform: `rotate(${skill.tilt})` }"
          >
            <span class="absolute top-[14px] left-2 z-[3] h-[clamp(14px,5vw,20px)] w-[clamp(56px,22%,78px)] rotate-[-42deg] bg-[#050505]" />
            <span class="absolute top-[14px] right-2 z-[3] h-[clamp(14px,5vw,20px)] w-[clamp(56px,22%,78px)] rotate-[42deg] bg-[#050505]" />
            <span class="absolute bottom-[6px] left-2 z-[3] h-[clamp(14px,5vw,20px)] w-[clamp(56px,22%,78px)] rotate-[42deg] bg-[#050505]" />
            <span class="absolute right-2 bottom-[6px] z-[3] h-[clamp(14px,5vw,20px)] w-[clamp(56px,22%,78px)] rotate-[-42deg] bg-[#050505]" />
            <div class="flex min-h-[160px] flex-col justify-center border-[3px] border-[rgba(0,0,0,0.85)] bg-[rgba(228,237,220,0.96)] px-5 pt-[18px] pb-6">
              <p
                class="m-0 break-words font-['Brush_Script_MT','Segoe_Script','Marker_Felt',cursive] text-[42px] leading-[0.9] tracking-[-0.04em] text-[#050505] normal-case min-[810px]:text-[54px] min-[1310px]:text-[66px]"
              >
                {{ skill.title }}
              </p>
              <p
                class="pointer-events-none absolute top-[-20px] left-1/2 z-[4] m-0 -translate-x-1/2 translate-y-[-8px] rotate-[-2deg] rounded-[18px] bg-[var(--accent)] px-4 pt-2 pb-[10px] whitespace-nowrap font-['Brush_Script_MT','Segoe_Script','Marker_Felt',cursive] text-[26px] leading-none tracking-[0.02em] text-[#050505] uppercase opacity-0 shadow-[0_4px_0_rgba(0,0,0,0.16)] transition duration-180 ease-[ease] group-hover/skill:translate-y-0 group-hover/skill:rotate-0 group-hover/skill:opacity-100 min-[810px]:text-[30px] min-[1310px]:text-[34px]"
              >
                {{ skill.group }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

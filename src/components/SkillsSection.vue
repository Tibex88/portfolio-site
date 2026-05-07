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
    })),
  ),
)
</script>

<template>
  <section class="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen py-8 min-[810px]:py-10 min-[1310px]:py-12">
    <div class="mx-auto w-[min(var(--frame-width),100vw)] px-0">
      <h2 class="mb-5 px-[var(--frame-gutter)] font-[var(--display-font)] text-[34px] leading-[0.92] tracking-[0.06em] uppercase text-[#0a223a] min-[810px]:mb-6 min-[810px]:text-[44px] min-[1310px]:mb-7 min-[1310px]:text-[56px]">
        Technical Skills
      </h2>
      <div class="overflow-x-auto overflow-y-visible px-0 pb-2">
        <div class="min-w-max px-[var(--frame-gutter)]">
          <div class="flex gap-4 min-[810px]:gap-5 min-[1310px]:gap-6">
          <article v-for="skill in skillCards" :key="skill.id" class="skills-card">
            <span class="skills-card__tape skills-card__tape--left" />
            <span class="skills-card__tape skills-card__tape--right" />
            <span class="skills-card__tape skills-card__tape--bottom-left" />
            <span class="skills-card__tape skills-card__tape--bottom-right" />
            <div class="skills-card__frame">
              <p class="skills-card__title">{{ skill.title }}</p>
              <p class="skills-card__group">{{ skill.group }}</p>
            </div>
          </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

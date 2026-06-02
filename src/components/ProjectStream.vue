<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ProjectCard from './ProjectCard.vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { projectItems } = storeToRefs(store)
</script>

<template>
  <section class="grid grid-cols-1 gap-[18px]">
    <div class="mb-1">
      <p class="m-0 font-display text-[34px] leading-[0.92] tracking-[0.06em] uppercase text-ink md:text-[44px] xl:text-[56px]">
        Selected Projects
      </p>
    </div>
    <div class="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
      <ProjectCard
        v-for="(project, index) in projectItems"
        :key="project.id"
        :project="project"
        :index="index"
        :show-ampersand="index < projectItems.length - 1"
      />
    </div>
  </section>
</template>

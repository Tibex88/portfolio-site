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
      <p class="m-0 font-[var(--display-font)] text-[34px] leading-[0.92] tracking-[0.06em] uppercase text-[#0a223a] min-[810px]:text-[44px] min-[1310px]:text-[56px]">
        Selected Projects
      </p>
    </div>
    <ProjectCard
      v-for="(project, index) in projectItems"
      :key="project.id"
      :project="project"
      :index="index"
      :show-ampersand="index < projectItems.length - 1"
    />
  </section>
</template>

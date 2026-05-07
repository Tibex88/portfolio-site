<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ProjectCard from './ProjectCard.vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { projectItems } = storeToRefs(store)
</script>

<template>
  <section class="project-stream">
    <div class="project-stream__header">
      <p class="project-stream__title">Selected Projects</p>
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

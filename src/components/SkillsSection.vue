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
  <section class="skills-section">
    <h2 class="section-title">Technical Skills</h2>
    <div class="skills-scroller">
      <div class="skills-list">
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
  </section>
</template>

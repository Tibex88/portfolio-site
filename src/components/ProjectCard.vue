<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import DecorativeTitle from './DecorativeTitle.vue'
import { type ProjectItem } from '@/data/siteContent'
import { usePortfolioStore } from '@/stores/portfolio'

const props = defineProps<{
  project: ProjectItem
  index: number
  showAmpersand?: boolean
}>()

const store = usePortfolioStore()
const { selectedProjectId } = storeToRefs(store)

const isSelected = computed(() => selectedProjectId.value === props.project.id)
const titleScribble = computed(() => {
  const variants = ['slash', 'loop', 'pointer'] as const
  return variants[props.index % variants.length]
})

function activateCard() {
  store.setSelectedProject(props.project.id)
  store.setCursorMode(props.project.cursorMode)
}

function resetCard() {
  store.setCursorMode('default')
}
</script>

<template>
  <article
    class="project-card interactive-target"
    :class="[{ 'is-selected': isSelected }, `card-${index + 1}`]"
    :data-cursor-mode="project.cursorMode"
    @mouseenter="activateCard"
    @mouseleave="resetCard"
    @click="store.setSelectedProject(project.id)"
  >
    <div class="project-card__surface">
      <div class="project-card__grain" />
      <div class="project-card__count">0{{ index + 1 }}</div>
      <div class="project-card__header">
        <p class="eyebrow">{{ project.timeline }}</p>
        <DecorativeTitle :main="project.title" overlay="project" :scribble="titleScribble" dark />
        <!-- <span
          v-if="project.confidential"
          class="project-card__lock"
          title="This project is confidential"
          aria-label="This project is confidential"
        >
          🔒
        </span> -->
        <p class="project-card__role">
          
          {{ project.role }}

          <span
            v-if="project.confidential"
            class=""
            title="This project is confidential"
            aria-label="This project is confidential">
            🔒
          </span>

        </p>
      </div>
      <p class="project-card__summary">{{ project.summary }}</p>
      <p class="project-card__impact">{{ project.impact }}</p>
      <!-- <div v-if="showAmpersand" class="project-card__ampersand" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 283 335" preserveAspectRatio="xMidYMid meet" overflow="visible" class="project-card__ampersand-svg">
          <defs>
            <path id="curve-zu2xj51et" d="M53.84 47.72c0 .65-.53 1.18-1.18 1.18-.65 0-1.18-.52-1.18-1.18 0-.66.53-1.18 1.18-1.18.65 0 1.18.52 1.18 1.18Zm-1.18 10.59c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0 5.88c-.65 0-1.18.52-1.18 1.18 0 .65.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.65-.53-1.18-1.18-1.18Zm0 17.65c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0-5.89c-.65 0-1.18.52-1.18 1.18 0 .65.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.65-.53-1.18-1.18-1.18Zm0-5.88c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0-17.64c-.65 0-1.18.52-1.18 1.18 0 .65.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.65-.53-1.18-1.18-1.18Zm-2.95 2.94c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0 17.64c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm2.95 14.71c-.65 0-1.18.52-1.18 1.18 0 .65.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.65-.53-1.18-1.18-1.18Zm-2.95-8.83c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm-2.95-14.7c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm2.95 26.47c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0-5.88c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm2.95 8.82c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0 5.89c-.65 0-1.18.52-1.18 1.18 0 .65.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.65-.53-1.18-1.18-1.18Zm-2.95-32.36c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm5.91 35.3c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm-5.91-41.18c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm5.91-5.88c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm2.95 8.82c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0-5.88c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm-2.95 38.23c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm2.95-20.59c-.65 0-1.18.52-1.18 1.18 0 .65.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.65-.53-1.18-1.18-1.18Zm0 5.89c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0-29.41c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm0 17.64c-.65 0-1.18.52-1.18 1.18 0 .66.53 1.18 1.18 1.18.65 0 1.18-.52 1.18-1.18 0-.66-.53-1.18-1.18-1.18Zm-47.73 174.82c-15.11 12.03-34.56 18.71-55.48 18.71-22.66 0-43.43-7.75-58.48-21.82-15.09-14.1-23.39-33.58-23.39-54.85 0-27.26 14.97-51.86 40.05-65.79l.52-.29.87-9.04-5.05 2.8c-27.49 15.27-43.9 42.31-43.9 72.32 0 47.97 38.43 84.14 89.38 84.14 11.73 0 23.05-1.95 33.52-5.65 8.74-5.67 17.2-14.89 21.96-20.52v-.01Zm10.53-12.58L78.59 153.98c-24.23 13.7-38.67 37.6-38.67 64.06 0 20.81 8.12 39.87 22.88 53.66 14.75 13.79 35.13 21.38 57.37 21.38 26.38 0 50.39-10.8 66-29.65Z"></path>
          </defs>
          <use href="#curve-zu2xj51et" fill="rgb(0, 0, 0)" x="0" y="0"></use>
        </svg>
      </div> -->
      <div class="project-card__stack">
        <span
          v-for="item in project.stack"
          :key="item"
          class="project-chip"
        >
          {{ item }}
        </span>
      </div>

      <div class="">
        <span
          v-for="item in project.tag"
          :key="item"
          class="project-card__tag"
        >
          {{ item }}
        </span>
      </div>

    </div>
  </article>
</template>

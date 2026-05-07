<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import AnnotationTag from './AnnotationTag.vue'
import DecorativeTitle from './DecorativeTitle.vue'
import { type ProjectItem } from '@/data/siteContent'
import { usePortfolioStore } from '@/stores/portfolio'

const props = defineProps<{
  project: ProjectItem
  index: number
}>()

const store = usePortfolioStore()
const { assetItems, activeAnnotationId, selectedProjectId } = storeToRefs(store)

const projectAssets = computed(() =>
  assetItems.value.filter((asset) => props.project.assetIds.includes(asset.id)),
)

const annotations = computed(() =>
  projectAssets.value.flatMap((asset) => asset.annotations ?? []),
)

const isSelected = computed(() => selectedProjectId.value === props.project.id)

function activateCard() {
  store.setSelectedProject(props.project.id)
  store.setCursorMode(props.project.cursorMode)
}

function resetCard() {
  store.setCursorMode('default')
}

function toggleAnnotation(annotationId: string) {
  store.setActiveAnnotation(activeAnnotationId.value === annotationId ? null : annotationId)
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
        <DecorativeTitle :main="project.title" overlay="project" dark />
        <span
          v-if="project.confidential"
          class="project-card__lock"
          title="This project is confidential"
          aria-label="This project is confidential"
        >
          🔒
        </span>
        <p class="project-card__role">{{ project.role }}</p>
      </div>
      <p class="project-card__summary">{{ project.summary }}</p>
      <p class="project-card__impact">{{ project.impact }}</p>
      <div class="project-card__stack">
        <span
          v-for="item in project.stack"
          :key="item"
          class="project-chip"
        >
          {{ item }}
        </span>
      </div>
      <div class="project-card__scribble project-card__scribble--one" />
      <div class="project-card__scribble project-card__scribble--two" />
      <button
        v-for="annotation in annotations"
        :key="annotation.id"
        class="annotation-hit interactive-target"
        type="button"
        :data-cursor-mode="project.cursorMode"
        @mouseenter="store.setActiveAnnotation(annotation.id)"
        @mouseleave="store.setActiveAnnotation(null)"
        @click.stop="toggleAnnotation(annotation.id)"
      >
        <AnnotationTag
          :label="annotation.label"
          :x="annotation.x"
          :y="annotation.y"
          :rotation="annotation.rotation"
          :active="activeAnnotationId === annotation.id"
        />
      </button>
    </div>
  </article>
</template>

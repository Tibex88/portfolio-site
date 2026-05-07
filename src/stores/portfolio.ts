import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { aboutOverlay, assets, experience, hero, infoCards, projects, skillGroups, socials, type CursorMode } from '@/data/siteContent'

export const usePortfolioStore = defineStore('portfolio', () => {
  const projectItems = ref(projects)
  const assetItems = ref(assets)
  const socialItems = ref(socials)
  const heroContent = ref(hero)
  const aboutContent = ref(aboutOverlay)
  const infoCardItems = ref(infoCards)
  const experienceItems = ref(experience)
  const skillGroupItems = ref(skillGroups)
  const selectedProjectId = ref(projectItems.value[0]?.id ?? null)
  const activeCursorMode = ref<CursorMode>('default')
  const activeAnnotationId = ref<string | null>(null)
  const activeOverlay = ref<string | null>(null)

  const selectedProject = computed(() =>
    projectItems.value.find((project) => project.id === selectedProjectId.value) ?? null,
  )

  function setSelectedProject(projectId: string) {
    selectedProjectId.value = projectId
  }

  function setCursorMode(mode: CursorMode) {
    activeCursorMode.value = mode
  }

  function setActiveAnnotation(annotationId: string | null) {
    activeAnnotationId.value = annotationId
  }

  function openOverlay(overlayId: string) {
    activeOverlay.value = overlayId
  }

  function closeOverlay() {
    activeOverlay.value = null
  }

  return {
    projectItems,
    assetItems,
    socialItems,
    heroContent,
    aboutContent,
    infoCardItems,
    experienceItems,
    skillGroupItems,
    selectedProjectId,
    selectedProject,
    activeCursorMode,
    activeAnnotationId,
    activeOverlay,
    setSelectedProject,
    setCursorMode,
    setActiveAnnotation,
    openOverlay,
    closeOverlay,
  }
})

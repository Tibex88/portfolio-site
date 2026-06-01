<script setup lang="ts">
const scribblePaths = {
  slash: 'M8 44 C32 26, 58 34, 84 18 C114 4, 148 12, 176 2',
  loop: 'M18 34 C22 6, 74 2, 116 14 C148 24, 150 60, 112 68 C70 76, 24 62, 18 34 Z',
  pointer: 'M8 12 C34 8, 58 18, 70 34 C80 48, 86 66, 96 86 M96 86 C88 72, 74 66, 56 66',
} as const

defineProps<{
  main: string
  overlay?: string
  dark?: boolean
  compact?: boolean
  scribble?: keyof typeof scribblePaths
}>()
</script>

<template>
  <div class="decorative-title" :class="{ 'is-dark': dark, 'is-compact': compact }">
    <span class="decorative-title__main">{{ main }}</span>
    <span v-if="overlay" class="decorative-title__overlay">{{ overlay }}</span>
    <svg
      v-if="scribble"
      class="decorative-title__scribble"
      :class="`decorative-title__scribble--${scribble}`"
      viewBox="0 0 180 90"
      aria-hidden="true"
    >
      <path
        class="decorative-title__scribble-path"
        :d="scribblePaths[scribble]"
        pathLength="100"
      />
    </svg>
    <span class="decorative-title__spark decorative-title__spark--left">✦</span>
    <span class="decorative-title__spark decorative-title__spark--right">✦</span>
  </div>
</template>

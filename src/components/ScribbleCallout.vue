<script setup lang="ts">
defineProps<{
  text: string
  x: string
  y: string
  rotation?: number
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <span
    class="project-scribble project-scribble--callout"
    :class="size ? `project-scribble--${size}` : 'project-scribble--md'"
    :style="{
      left: x,
      top: y,
      transform: `translate(-50%, -50%) rotate(${rotation ?? 0}deg)`,
    }"
    aria-hidden="true"
  >
    {{ text }}
  </span>
</template>

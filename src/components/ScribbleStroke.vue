<script setup lang="ts">
defineProps<{
  variant: 'slash' | 'loop' | 'pointer'
  x: string
  y: string
  width: string
  height?: string
  rotation?: number
}>()
</script>

<template>
  <span
    class="project-scribble project-scribble--stroke"
    :class="`project-scribble--${variant}`"
    :style="{
      left: x,
      top: y,
      width,
      height: height ?? 'auto',
      transform: `translate(-50%, -50%) rotate(${rotation ?? 0}deg)`,
    }"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
defineProps<{
  label: string
  x: string
  y: string
  rotation?: number
  active: boolean
}>()
</script>

<template>
  <span
    class="annotation-tag"
    :class="{ 'is-active': active }"
    :style="{
      left: x,
      top: y,
      transform: `translate(-50%, -50%) rotate(${rotation ?? 0}deg)`,
    }"
  >
    {{ label }}
  </span>
</template>

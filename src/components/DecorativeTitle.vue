<script setup lang="ts">
defineProps<{
  main: string
  overlay?: string
  dark?: boolean
  compact?: boolean
}>()
</script>

<template>
  <div class="decorative-title" :class="{ 'is-dark': dark, 'is-compact': compact }">
    <span class="decorative-title__main">{{ main }}</span>
    <span v-if="overlay" class="decorative-title__overlay">{{ overlay }}</span>
    <span class="decorative-title__spark decorative-title__spark--left">✦</span>
    <span class="decorative-title__spark decorative-title__spark--right">✦</span>
  </div>
</template>

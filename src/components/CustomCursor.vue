<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { activeCursorMode } = storeToRefs(store)

const x = ref(0)
const y = ref(0)
const visible = ref(false)

function onMove(event: PointerEvent) {
  x.value = event.clientX
  y.value = event.clientY
  visible.value = true
}

function onLeave() {
  visible.value = false
}

onMounted(() => {
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerleave', onLeave)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerleave', onLeave)
})
</script>

<template>
  <div
    class="custom-cursor"
    :class="[`is-${activeCursorMode}`, { 'is-visible': visible }]"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
  >
    <span class="custom-cursor__arrow" />
    <span class="custom-cursor__chip">{{ activeCursorMode }}</span>
  </div>
</template>

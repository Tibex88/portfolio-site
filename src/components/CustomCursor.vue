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
    :style="{ transform: `translate(-50%, -50%) translateX(${x}px) translateY(${y}px)` }"
  >
    <svg
      class="custom-cursor__tool"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path
        fill="#fff"
        d="m16.3 14.97 9.29 9.28-1.34 1.34L15 16.33l-2.98 6.56L6.6 6.63l15.18 5.42-5.48 2.92z"
      />
      <path
        fill="#000"
        d="m24.25 28.41-8.62-8.62-3.89 8.57L3.4 3.37l23.32 8.33-7.09 3.77 8.79 8.79-4.16 4.16ZM15 16.33l9.25 9.25 1.34-1.34-9.28-9.28 5.48-2.91L6.6 6.63l5.42 16.26L15 16.33Z"
      />
    </svg>
  </div>
</template>

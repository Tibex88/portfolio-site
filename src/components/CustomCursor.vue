<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { activeCursorMode } = storeToRefs(store)

const x = ref(0)
const y = ref(0)
const visible = ref(false)

const cursorTool = computed(() =>
  activeCursorMode.value === 'default' ? 'marker' : 'eraser',
)

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
    :class="[`is-${activeCursorMode}`, `is-${cursorTool}`, { 'is-visible': visible }]"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
  >
    <svg
      class="custom-cursor__tool custom-cursor__tool--marker"
      viewBox="0 0 84 84"
      aria-hidden="true"
    >
      <g transform="translate(8 10) rotate(-19 30 22)">
        <rect x="16" y="16" width="40" height="14" rx="6" fill="#050505" />
        <rect x="26" y="16" width="12" height="14" rx="3" fill="var(--accent)" />
        <path d="M56 16h9.5l5.5 7-5.5 7H56z" fill="#050505" />
        <path d="M67.5 16l5.5 7-5.5 7-4.6-7z" fill="var(--paper)" />
        <path d="M11 16h5v14h-5.5c-3.2 0-5.5-2.3-5.5-5.5V21.5c0-3.2 2.3-5.5 5.5-5.5Z" fill="var(--reference-light)" />
        <path d="M8 19h5.5v8H8c-1.66 0-3-1.34-3-3v-2c0-1.66 1.34-3 3-3Z" fill="var(--paper)" />
        <path d="M70 23h7.5" stroke="#050505" stroke-width="2.4" stroke-linecap="round" />
      </g>
    </svg>
    <svg
      class="custom-cursor__tool custom-cursor__tool--eraser"
      viewBox="0 0 84 84"
      aria-hidden="true"
    >
      <g transform="translate(12 12) rotate(24 24 20)">
        <path d="M8 14.5c0-3.59 2.91-6.5 6.5-6.5H43c3.59 0 6.5 2.91 6.5 6.5v14c0 3.59-2.91 6.5-6.5 6.5H14.5c-3.59 0-6.5-2.91-6.5-6.5z" fill="#050505" />
        <path d="M11 12h31c2.76 0 5 2.24 5 5v9c0 2.76-2.24 5-5 5H11z" fill="var(--paper)" />
        <path d="M31 12h11c2.76 0 5 2.24 5 5v9c0 2.76-2.24 5-5 5H31z" fill="var(--accent)" />
        <path d="M11 30h18.5" stroke="#050505" stroke-width="2.2" stroke-linecap="round" />
        <path d="M45 10.5l6-6 5.5 5.5-6 6Z" fill="#050505" />
      </g>
    </svg>
  </div>
</template>

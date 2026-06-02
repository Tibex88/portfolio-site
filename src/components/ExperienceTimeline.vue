<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { experienceItems } = storeToRefs(store)
</script>

<template>
  <section class="py-6 md:py-8 xl:py-10">
    <h2 class="mb-5 font-display text-[34px] leading-[0.92] tracking-[0.06em] uppercase text-ink md:mb-6 md:text-[44px] xl:mb-7 xl:text-[56px]">
      Experience
    </h2>
    <div class="timeline-list">
      <article v-for="item in experienceItems" :key="item.id" class="">
        <div class="timeline-item__content reference-card timeline-item">
          <div class="timeline-item__marker" aria-hidden="true">
            <!-- <svg viewBox="0 0 115.3 115.3" class="timeline-item__marker-svg" preserveAspectRatio="xMidYMid meet">
              <path
                d="M29.2 101.6c-1.1 1.3-2.3 1.7-3.6 1.7-5.7 0-13.9-8.8-13.9-13.9 0-1.3.4-2.3 1.7-3.4 5.5-4.4 17.4-9 31.9-20.4-1-1.5-1.7-3.2-2.1-5C25 63 13.4 69.1 6.3 69.1c-5 0-6.3-5.5-6.3-11.5 0-5.7 1.3-10.9 6.3-10.9 7.1 0 18.7 5.9 37 8 .4-2.1 1.1-3.8 2.1-5.2C30.9 38 18.9 33.4 13.4 29c-1.3-1-1.7-2.1-1.7-3.4 0-5 8.2-13.9 13.9-13.9 1.3 0 2.5.4 3.6 1.5 4.8 4.9 8.8 17.3 20.6 32 1.5-.8 2.9-1.3 4.6-1.7-2.1-18.5-8-30.2-8-37.4 0-4.8 5.2-6.1 11.1-6.1s11.3 1.3 11.3 6.1c0 7.1-6.1 18.9-8.4 37.4 1.9.4 3.8 1 5.3 1.9 11.5-14.7 15.5-27.3 20.6-32.1 1.1-1 2.1-1.5 3.4-1.5 5 0 13.9 8.2 13.9 13.9 0 1.3-.4 2.5-1.5 3.6C97.2 34 84.6 38 69.9 50c.8 1.3 1.5 2.9 1.7 4.6 18.7-2.1 30.4-8 37.6-8 4.8 0 6.1 5.2 6.1 10.9 0 6.1-1.3 11.5-6.1 11.5-7.1 0-19.1-6.1-37.6-8.4-.4 1.7-.8 3.4-1.7 4.6 14.5 12 27.1 16 31.9 20.8 1.1 1.1 1.5 2.3 1.5 3.6 0 5.7-8.8 13.9-13.9 13.9-1.3 0-2.3-.4-3.4-1.7-4.4-5.2-9-17.4-20.4-31.9-1.7.8-3.4 1.5-5.3 1.9 2.3 18.5 8.4 30 8.4 37.2 0 5-5.5 6.3-11.3 6.3s-11-1.3-11-6.3c0-7.1 5.9-18.7 8-37.2-1.7-.4-3.4-1.1-4.8-1.9C38 84.4 33.4 96.4 29.2 101.6zm28.3-38c3.6 0 5.9-2.3 5.9-6.1 0-3.6-2.3-5.9-5.9-5.9-3.8 0-6.1 2.3-6.1 5.9.1 3.8 2.4 6.1 6.1 6.1z"
                fill="#000000"
              />
            </svg> -->
          </div>
        <div>
            <p class="timeline-item__meta">{{ item.timeline }}</p>
            <h3>{{ item.role }}</h3>
            <p class="timeline-item__company">{{ item.company }}</p>
            <p class="timeline-item__summary">{{ item.summary }}</p>
            <div v-if="item.areas?.length" class="timeline-item__areas">
              <section v-for="area in item.areas" :key="area.title" class="timeline-item__area">
                <div class="timeline-item__area-heading">
                  <div class="timeline-item__area-marker" aria-hidden="true">
                    <svg viewBox="0 0 115.3 115.3" class="timeline-item__area-marker-svg" preserveAspectRatio="xMidYMid meet">
                      <path
                        d="M29.2 101.6c-1.1 1.3-2.3 1.7-3.6 1.7-5.7 0-13.9-8.8-13.9-13.9 0-1.3.4-2.3 1.7-3.4 5.5-4.4 17.4-9 31.9-20.4-1-1.5-1.7-3.2-2.1-5C25 63 13.4 69.1 6.3 69.1c-5 0-6.3-5.5-6.3-11.5 0-5.7 1.3-10.9 6.3-10.9 7.1 0 18.7 5.9 37 8 .4-2.1 1.1-3.8 2.1-5.2C30.9 38 18.9 33.4 13.4 29c-1.3-1-1.7-2.1-1.7-3.4 0-5 8.2-13.9 13.9-13.9 1.3 0 2.5.4 3.6 1.5 4.8 4.9 8.8 17.3 20.6 32 1.5-.8 2.9-1.3 4.6-1.7-2.1-18.5-8-30.2-8-37.4 0-4.8 5.2-6.1 11.1-6.1s11.3 1.3 11.3 6.1c0 7.1-6.1 18.9-8.4 37.4 1.9.4 3.8 1 5.3 1.9 11.5-14.7 15.5-27.3 20.6-32.1 1.1-1 2.1-1.5 3.4-1.5 5 0 13.9 8.2 13.9 13.9 0 1.3-.4 2.5-1.5 3.6C97.2 34 84.6 38 69.9 50c.8 1.3 1.5 2.9 1.7 4.6 18.7-2.1 30.4-8 37.6-8 4.8 0 6.1 5.2 6.1 10.9 0 6.1-1.3 11.5-6.1 11.5-7.1 0-19.1-6.1-37.6-8.4-.4 1.7-.8 3.4-1.7 4.6 14.5 12 27.1 16 31.9 20.8 1.1 1.1 1.5 2.3 1.5 3.6 0 5.7-8.8 13.9-13.9 13.9-1.3 0-2.3-.4-3.4-1.7-4.4-5.2-9-17.4-20.4-31.9-1.7.8-3.4 1.5-5.3 1.9 2.3 18.5 8.4 30 8.4 37.2 0 5-5.5 6.3-11.3 6.3s-11-1.3-11-6.3c0-7.1 5.9-18.7 8-37.2-1.7-.4-3.4-1.1-4.8-1.9C38 84.4 33.4 96.4 29.2 101.6zm28.3-38c3.6 0 5.9-2.3 5.9-6.1 0-3.6-2.3-5.9-5.9-5.9-3.8 0-6.1 2.3-6.1 5.9.1 3.8 2.4 6.1 6.1 6.1z"
                        fill="#000000"
                      />
                    </svg>
                  </div>
                  <h4 class="timeline-item__area-title">{{ area.title }}</h4>
                </div>
                <ul class="timeline-item__area-points">
                  <li v-for="point in area.points" :key="point">{{ point }}</li>
                </ul>
              </section>
            </div>
      </div>
        </div>
      </article>
    </div>
  </section>
</template>

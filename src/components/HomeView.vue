<script setup lang="ts">
import AboutOverlay from './AboutOverlay.vue'
import CustomCursor from './CustomCursor.vue'
import ExperienceTimeline from './ExperienceTimeline.vue'
import HeroBoard from './HeroBoard.vue'
import PortfolioFooter from './PortfolioFooter.vue'
import ProjectStream from './ProjectStream.vue'
import SkillsSection from './SkillsSection.vue'
</script>

<template>
  <main
    class="mx-auto min-h-screen w-[min(var(--content-max),calc(100%-calc(var(--frame-gutter)*2)))] px-0 pt-6 pb-8 min-[810px]:pt-7 min-[810px]:pb-10 min-[1310px]:pt-8"
  >
    <CustomCursor />
    <AboutOverlay />
    <HeroBoard />
    <section class="block">
      <ProjectStream />
    </section>
    <SkillsSection />
    <ExperienceTimeline />
    <PortfolioFooter />
  </main>
</template>

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
  <main class="home-view">
    <CustomCursor />
    <AboutOverlay />
    <HeroBoard />
    <section class="portfolio-layout">
      <ProjectStream />
    </section>
    <ExperienceTimeline />
    <SkillsSection />
    <PortfolioFooter />
  </main>
</template>

<script setup lang="ts">
import {
  Blocks,
  Bot,
  BrainCircuit,
  ChartNetwork,
  Database,
  DatabaseZap,
  HardDrive,
  MessageSquare,
  Monitor,
  Network,
  Terminal,
  Waypoints,
  Zap,
} from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { type Component, computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import awsIcon from '@/assets/generated/skill-icons/aws.svg'
import cppIcon from '@/assets/generated/skill-icons/cpp.svg'
import dockerIcon from '@/assets/generated/skill-icons/docker.svg'
import ec2Icon from '@/assets/generated/skill-icons/ec2.svg'
import graphqlIcon from '@/assets/generated/skill-icons/graphql.svg'
import javaIcon from '@/assets/generated/skill-icons/java.svg'
import javascriptIcon from '@/assets/generated/skill-icons/javascript.svg'
import linuxIcon from '@/assets/generated/skill-icons/linux.svg'
import mongodbIcon from '@/assets/generated/skill-icons/mongodb.svg'
import mysqlIcon from '@/assets/generated/skill-icons/mysql.svg'
import nestjsIcon from '@/assets/generated/skill-icons/nestjs.svg'
import nodejsIcon from '@/assets/generated/skill-icons/nodejs.svg'
import openaiIcon from '@/assets/generated/skill-icons/openai.svg'
import pythonIcon from '@/assets/generated/skill-icons/python.svg'
import typescriptIcon from '@/assets/generated/skill-icons/typescript.svg'

const store = usePortfolioStore()
const { skillGroupItems } = storeToRefs(store)
const scrollFrame = ref<HTMLElement | null>(null)
const scrollDirection = ref<'left' | 'right'>('right')
const showScrollCue = ref(false)

type SkillVisual = {
  iconSrc?: string
  iconComponent?: Component
}

const skillVisualMap: Record<string, SkillVisual> = {
  Python: { iconSrc: pythonIcon },
  JavaScript: { iconSrc: javascriptIcon },
  TypeScript: { iconSrc: typescriptIcon },
  'Node.js': { iconSrc: nodejsIcon },
  'C++': { iconSrc: cppIcon },
  Java: { iconSrc: javaIcon },
  NestJS: { iconSrc: nestjsIcon },
  'REST APIs': { iconComponent: Waypoints },
  'Modular System Design': { iconComponent: Blocks },
  MySQL: { iconSrc: mysqlIcon },
  SQLite: { iconComponent: Database },
  MongoDB: { iconSrc: mongodbIcon },
  Neo4j: { iconComponent: ChartNetwork },
  Pinecone: { iconComponent: DatabaseZap },
  Cypher: { iconComponent: Network },
  'Graph Modeling': { iconSrc: graphqlIcon },
  'AWS EC2': { iconSrc: ec2Icon },
  S3: { iconSrc: awsIcon },
  Lambda: { iconComponent: Zap },
  Docker: { iconSrc: dockerIcon },
  Linux: { iconSrc: linuxIcon },
  VirtualBox: { iconComponent: Monitor },
  'Hyper-V': { iconComponent: Monitor },
  'Symbolic / Hybrid AI': { iconComponent: BrainCircuit },
  RAG: { iconComponent: DatabaseZap },
  'Agentic Systems': { iconComponent: Bot },
  'Knowledge Graphs': { iconComponent: ChartNetwork },
  'Prompt Engineering': { iconSrc: openaiIcon },
}

function resolveSkillVisual(title: string) {
  return skillVisualMap[title] ?? { iconComponent: Terminal }
}

const skillCards = computed(() =>
  skillGroupItems.value.flatMap((group) =>
    group.items.map((item, index) => ({
      id: `${group.id}-${index}`,
      title: item,
      group: group.title,
      visual: resolveSkillVisual(item),
      tilt: index % 3 === 0 ? '-1.2deg' : index % 3 === 1 ? '0.8deg' : '-0.45deg',
    })),
  ),
)

function updateScrollCue() {
  const element = scrollFrame.value
  if (!element) return

  const maxScrollLeft = Math.max(0, element.scrollWidth - element.clientWidth)
  if (maxScrollLeft <= 8) {
    showScrollCue.value = false
    return
  }

  showScrollCue.value = true
  scrollDirection.value = element.scrollLeft >= maxScrollLeft - 8 ? 'left' : 'right'
}

function handleResize() {
  updateScrollCue()
}

onMounted(() => {
  updateScrollCue()
  scrollFrame.value?.addEventListener('scroll', updateScrollCue, { passive: true })
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  scrollFrame.value?.removeEventListener('scroll', updateScrollCue)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <section class="relative left-1/2 mr-[-50vw] ml-[-50vw] w-screen">
    <h2
      class="mx-auto mt-[var(--section-gap)] mb-[18px] w-[min(var(--main-column-width),calc(100%-calc(var(--frame-gutter)*2)))] font-[var(--display-font)] text-[32px] leading-[0.92] tracking-[0.06em] uppercase text-[#0a223a] min-[810px]:text-[44px] min-[1310px]:text-[54px]"
    >
      Technical Skills
    </h2>
    <div class="relative overflow-visible pt-2 pb-[22px]">
      <button
        v-if="showScrollCue"
        class="pointer-events-none absolute top-1/2 z-[5] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--accent)] text-[#f5f1e8] shadow-[0_4px_0_rgba(0,0,0,0.18)]"
        :class="scrollDirection === 'right' ? 'right-4' : 'left-4'"
        type="button"
        aria-hidden="true"
      >
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            :d="scrollDirection === 'right' ? 'M8 5l8 7-8 7' : 'M16 5l-8 7 8 7'"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.8"
          />
        </svg>
      </button>
      <div
        ref="scrollFrame"
        class="mt-[-22px] w-screen overflow-x-auto overflow-y-hidden pt-[22px] pb-2"
      >
        <div
          class="grid min-w-max auto-cols-[clamp(240px,19vw,320px)] grid-flow-col grid-rows-[repeat(2,max-content)] items-start gap-5 overflow-visible px-6 pt-[14px] pb-5 min-[810px]:auto-cols-[clamp(260px,22vw,340px)] min-[810px]:px-[var(--frame-gutter)] min-[1310px]:auto-cols-[clamp(280px,19vw,360px)] max-[809px]:px-3"
        >
          <article
            v-for="skill in skillCards"
            :key="skill.id"
            class="group/skill relative min-h-[190px] self-start overflow-visible bg-transparent px-4 pt-4 pb-[10px]"
            :style="{ transform: `rotate(${skill.tilt})` }"
          >
            <span class="absolute top-[14px] left-2 z-[3] h-[clamp(14px,5vw,20px)] w-[clamp(56px,22%,78px)] rotate-[-42deg] bg-[#050505]" />
            <span class="absolute top-[14px] right-2 z-[3] h-[clamp(14px,5vw,20px)] w-[clamp(56px,22%,78px)] rotate-[42deg] bg-[#050505]" />
            <span class="absolute bottom-[6px] left-2 z-[3] h-[clamp(14px,5vw,20px)] w-[clamp(56px,22%,78px)] rotate-[42deg] bg-[#050505]" />
            <span class="absolute right-2 bottom-[6px] z-[3] h-[clamp(14px,5vw,20px)] w-[clamp(56px,22%,78px)] rotate-[-42deg] bg-[#050505]" />
            <div class="flex min-h-[160px] items-center justify-center border-[3px] border-[rgba(0,0,0,0.85)] bg-[rgba(228,237,220,0.96)] px-5 py-6 text-center">
              <img
                v-if="skill.visual.iconSrc"
                :src="skill.visual.iconSrc"
                :alt="skill.title"
                class="h-[calc(64px*var(--body-text-scale))] w-[calc(64px*var(--body-text-scale))] object-contain min-[810px]:h-[calc(82px*var(--body-text-scale))] min-[810px]:w-[calc(82px*var(--body-text-scale))] min-[1310px]:h-[calc(94px*var(--body-text-scale))] min-[1310px]:w-[calc(94px*var(--body-text-scale))]"
              />
              <component
                :is="skill.visual.iconComponent"
                v-else
                class="h-[calc(64px*var(--body-text-scale))] w-[calc(64px*var(--body-text-scale))] text-[#050505] min-[810px]:h-[calc(82px*var(--body-text-scale))] min-[810px]:w-[calc(82px*var(--body-text-scale))] min-[1310px]:h-[calc(94px*var(--body-text-scale))] min-[1310px]:w-[calc(94px*var(--body-text-scale))]"
                :stroke-width="2.4"
                aria-hidden="true"
              />
              <p
                class="pointer-events-none absolute top-[-20px] left-1/2 z-[4] m-0 -translate-x-1/2 translate-y-[-8px] rotate-[-2deg] rounded-[18px] bg-[var(--accent)] px-4 pt-2 pb-[10px] whitespace-nowrap font-['Brush_Script_MT','Segoe_Script','Marker_Felt',cursive] text-[calc(26px*var(--body-text-scale))] leading-none tracking-[0.02em] text-[#050505] uppercase opacity-0 shadow-[0_4px_0_rgba(0,0,0,0.16)] transition duration-180 ease-[ease] group-hover/skill:translate-y-0 group-hover/skill:rotate-0 group-hover/skill:opacity-100 min-[810px]:text-[calc(30px*var(--body-text-scale))] min-[1310px]:text-[calc(34px*var(--body-text-scale))]"
              >
                {{ skill.group }}
              </p>
              <p
                class="pointer-events-none absolute bottom-[-20px] left-1/2 z-[4] m-0 -translate-x-1/2 translate-y-[8px] rotate-[2deg] rounded-[18px] bg-[var(--accent)] px-4 pt-2 pb-[10px] whitespace-nowrap font-['Brush_Script_MT','Segoe_Script','Marker_Felt',cursive] text-[calc(22px*var(--body-text-scale))] leading-none tracking-[0.01em] text-[#050505] normal-case opacity-0 shadow-[0_4px_0_rgba(0,0,0,0.16)] transition duration-180 ease-[ease] group-hover/skill:translate-y-0 group-hover/skill:rotate-0 group-hover/skill:opacity-100 min-[810px]:text-[calc(25px*var(--body-text-scale))] min-[1310px]:text-[calc(28px*var(--body-text-scale))]"
              >
                {{ skill.title }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

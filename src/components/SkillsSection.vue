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
import { type Component, computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import awsIcon from '@/assets/generated/skill-icons/aws.svg'
import cppIcon from '@/assets/generated/skill-icons/cpp.svg'
import dockerIcon from '@/assets/generated/skill-icons/docker.svg'
import ec2Icon from '@/assets/generated/skill-icons/ec2.svg'
import graphmodelingIcon from '@/assets/generated/skill-icons/graphmodeling.svg'
import javaIcon from '@/assets/generated/skill-icons/java.svg'
import javascriptIcon from '@/assets/generated/skill-icons/javascript.svg'
import linuxIcon from '@/assets/generated/skill-icons/linux.svg'
import mongodbIcon from '@/assets/generated/skill-icons/mongodb.svg'
import mysqlIcon from '@/assets/generated/skill-icons/mysql.svg'
import sqliteIcon from '@/assets/generated/skill-icons/sqlite.svg'
import neo4jIcon from '@/assets/generated/skill-icons/neo4j.svg'
import vbIcon from '@/assets/generated/skill-icons/virtualbox.svg'
import nestjsIcon from '@/assets/generated/skill-icons/nestjs.svg'
import nodejsIcon from '@/assets/generated/skill-icons/nodejs.svg'
import openaiIcon from '@/assets/generated/skill-icons/openai.svg'
import pythonIcon from '@/assets/generated/skill-icons/python.svg'
import typescriptIcon from '@/assets/generated/skill-icons/typescript.svg'

const store = usePortfolioStore()
const { skillGroupItems } = storeToRefs(store)

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
  SQLite: { iconSrc: sqliteIcon },
  MongoDB: { iconSrc: mongodbIcon },
  Neo4j: { iconSrc: neo4jIcon },
  Pinecone: { iconComponent: DatabaseZap },
  Cypher: { iconComponent: Network },
  'Graph Modeling': { iconSrc: graphmodelingIcon },
  'AWS EC2': { iconSrc: ec2Icon },
  S3: { iconSrc: awsIcon },
  Lambda: { iconComponent: Zap },
  Docker: { iconSrc: dockerIcon },
  Linux: { iconSrc: linuxIcon },
  VirtualBox: { iconSrc: vbIcon },
  // 'Hyper-V': { iconComponent: Monitor },
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
</script>

<template>
  <section class="relative left-1/2 mr-[-50vw] ml-[-50vw] w-screen">
    <h2
      class="mx-auto mt-[var(--section-gap)] mb-[18px] w-[min(var(--main-column-width),calc(100%-calc(var(--frame-gutter)*2)))] font-[var(--display-font)] text-[32px] leading-[0.92] tracking-[0.06em] uppercase text-[#0a223a] min-[810px]:text-[44px] min-[1310px]:text-[54px]"
    >
      Technical Skills
    </h2>
    <div class="relative overflow-visible pt-2 pb-[22px]">
      <div class="w-screen px-3 pt-[10px] pb-2 min-[810px]:px-[var(--frame-gutter)]">
        <div
          class="flex flex-wrap items-start justify-center gap-x-2 gap-y-3 overflow-visible"
        >
          <article
            v-for="skill in skillCards"
            :key="skill.id"
            class="group/skill skills-card-scale relative h-[calc(124px*var(--skill-card-scale))] w-[calc(124px*var(--skill-card-scale))] self-start overflow-visible bg-transparent px-[calc(7px*var(--skill-card-scale))] pt-[calc(7px*var(--skill-card-scale))] pb-[calc(4px*var(--skill-card-scale))]"
            :style="{ transform: `rotate(${skill.tilt})` }"
          >
            <span class="absolute top-[calc(8px*var(--skill-card-scale))] left-[calc(5px*var(--skill-card-scale))] z-[3] h-[calc(12px*var(--skill-card-scale))] w-[calc(34px*var(--skill-card-scale))] rotate-[-42deg] bg-[#050505]" />
            <span class="absolute top-[calc(8px*var(--skill-card-scale))] right-[calc(5px*var(--skill-card-scale))] z-[3] h-[calc(12px*var(--skill-card-scale))] w-[calc(34px*var(--skill-card-scale))] rotate-[42deg] bg-[#050505]" />
            <span class="absolute bottom-[calc(3px*var(--skill-card-scale))] left-[calc(5px*var(--skill-card-scale))] z-[3] h-[calc(12px*var(--skill-card-scale))] w-[calc(34px*var(--skill-card-scale))] rotate-[42deg] bg-[#050505]" />
            <span class="absolute right-[calc(5px*var(--skill-card-scale))] bottom-[calc(3px*var(--skill-card-scale))] z-[3] h-[calc(12px*var(--skill-card-scale))] w-[calc(34px*var(--skill-card-scale))] rotate-[-42deg] bg-[#050505]" />
            <div class="flex h-full items-center justify-center border-[3px] border-[rgba(0,0,0,0.85)] bg-[rgba(228,237,220,0.96)] px-[calc(10px*var(--skill-card-scale))] py-[calc(10px*var(--skill-card-scale))] text-center">
              <img
                v-if="skill.visual.iconSrc"
                :src="skill.visual.iconSrc"
                :alt="skill.title"
                class="h-[calc(42px*var(--skill-card-scale))] w-[calc(42px*var(--skill-card-scale))] object-contain"
              />
              <component
                :is="skill.visual.iconComponent"
                v-else
                class="h-[calc(42px*var(--skill-card-scale))] w-[calc(42px*var(--skill-card-scale))] text-[#050505]"
                :stroke-width="2.4"
                aria-hidden="true"
              />
              <p
                class="pointer-events-none absolute top-[-18px] left-1/2 z-[4] m-0 -translate-x-1/2 translate-y-[-8px] rotate-[-2deg] rounded-[18px] bg-[var(--accent)] px-3 pt-2 pb-[8px] whitespace-nowrap font-['Brush_Script_MT','Segoe_Script','Marker_Felt',cursive] text-[calc(16px*var(--skill-card-scale))] leading-none tracking-[0.02em] text-[#050505] uppercase opacity-0 shadow-[0_4px_0_rgba(0,0,0,0.16)] transition duration-180 ease-[ease] group-hover/skill:translate-y-0 group-hover/skill:rotate-0 group-hover/skill:opacity-100"
              >
                {{ skill.group }}
              </p>
              <p
                class="pointer-events-none absolute bottom-[-18px] left-1/2 z-[4] m-0 -translate-x-1/2 translate-y-[8px] rotate-[2deg] rounded-[18px] bg-[var(--accent)] px-3 pt-2 pb-[8px] whitespace-nowrap font-['Brush_Script_MT','Segoe_Script','Marker_Felt',cursive] text-[calc(14px*var(--skill-card-scale))] leading-none tracking-[0.01em] text-[#050505] normal-case opacity-0 shadow-[0_4px_0_rgba(0,0,0,0.16)] transition duration-180 ease-[ease] group-hover/skill:translate-y-0 group-hover/skill:rotate-0 group-hover/skill:opacity-100"
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

<script setup>
import { computed } from 'vue'

const props = defineProps({
  activity: {
    type: Object,
    required: true
  }
})

const achievementProgress = computed(() => {
  if (!props.activity.achievementsTotal) {
    return 0
  }

  return Math.round((props.activity.achievementsUnlocked / props.activity.achievementsTotal) * 100)
})
</script>

<template>
  <article class="rounded-lg border border-border-800/80 bg-panel-900/70 p-3">
    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div class="flex min-w-0 items-center gap-3">
        <img :src="props.activity.cover" :alt="props.activity.title" class="h-20 w-36 shrink-0 rounded-md object-cover" />
        <div class="min-w-0">
          <p class="truncate text-xl font-semibold text-text-100">{{ props.activity.title }}</p>
        </div>
      </div>

      <div class="text-left md:text-right">
        <p class="text-2xl font-semibold text-text-100">{{ props.activity.hoursOnRecord }} hrs on record</p>
        <p class="text-sm text-text-400">last played on {{ props.activity.lastPlayedLabel }}</p>
      </div>
    </div>

    <div class="mt-3 rounded-md border border-border-800 bg-panel-800/80 p-2">
      <div class="mb-2 flex flex-wrap items-center gap-2 text-sm">
        <span class="font-semibold text-text-100">Achievement Progress</span>
        <span class="text-text-300">{{ props.activity.achievementsUnlocked }} of {{ props.activity.achievementsTotal }}</span>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <div class="h-2 w-full max-w-xs overflow-hidden rounded-full bg-bg-950/90 sm:flex-1">
          <div
            class="h-full rounded-full bg-accent-400"
            :style="{ width: `${achievementProgress}%` }"
          />
        </div>

       
      </div>
    </div>
  </article>
</template>
<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['play', 'details'])

function handlePlay() {
  emit('play', props.game)
}

function handleDetails() {
  emit('details', props.game.id)
}
</script>

<template>
  <article
    class="flex flex-col gap-3 rounded-xl border border-border-800 bg-bg-950/50 p-3 transition-colors hover:border-accent-500 md:flex-row md:items-center">
    <img :src="game.cover" :alt="game.title" class="h-14 w-full rounded-lg object-cover md:w-22" />

    <div class="min-w-0 flex-1">
      <h3 class="truncate text-lg font-bold text-text-100">{{ game.title }}</h3>
      <p class="text-text-400">{{ game.hoursPlayed }} hours played</p>
      <p class="text-sm text-text-500">{{ game.installed ? 'Installed' : 'Not Installed' }} • {{ game.genre }}</p>
    </div>

    <div class="flex gap-2 flex-col">
      <button
        @click="handlePlay"
        class="rounded-lg bg-accent-500 px-6 py-2.5 font-bold text-bg-950 transition-all duration-200 hover:scale-105 hover:bg-accent-400">
        Play
      </button>
      <button
        @click="handleDetails"
        class="rounded-lg border border-border-700 bg-panel-800 px-5 py-2.5 font-semibold text-text-200 transition-colors hover:border-accent-500 hover:text-accent-300">
        Details
      </button>
    </div>
  </article>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>

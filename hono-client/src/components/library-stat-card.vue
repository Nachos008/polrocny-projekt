<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  hint: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="rounded-xl border border-border-800 bg-bg-950/50 p-4">
    <p class="text-sm text-text-500">{{ title }}</p>
    <p class="mt-1 text-3xl font-black text-accent-300">{{ value }}</p>
    <p v-if="hint" class="mt-1 text-sm text-text-400">{{ hint }}</p>
  </div>
</template>

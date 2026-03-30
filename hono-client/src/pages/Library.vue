<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const openedGameId = ref(null)

const libraryGames = [
  {
    id: 1,
    title: 'Shadow Rise',
    cover: 'https://placehold.co/260x140/1a1a2e/84cc16?text=Shadow+Rise',
    genre: 'Action',
    hoursPlayed: 38,
    lastPlayed: '2 days ago',
    installed: true,
    size: '74 GB',
    description: 'Fast-paced action campaign with stealth and open mission routes.'
  },
  {
    id: 2,
    title: 'Galactic Horizons',
    cover: 'https://placehold.co/260x140/1a1a2e/84cc16?text=Galactic+Horizons',
    genre: 'Sci-Fi',
    hoursPlayed: 84,
    lastPlayed: '5 hours ago',
    installed: true,
    size: '112 GB',
    description: 'Explore deep-space sectors, build ships, and complete faction contracts.'
  },
  {
    id: 3,
    title: 'Mystic Valley',
    cover: 'https://placehold.co/260x140/1a1a2e/84cc16?text=Mystic+Valley',
    genre: 'Adventure',
    hoursPlayed: 21,
    lastPlayed: '1 week ago',
    installed: true,
    size: '56 GB',
    description: 'Story-driven fantasy adventure focused on exploration and puzzles.'
  },
  {
    id: 4,
    title: 'Urban Soccer',
    cover: 'https://placehold.co/260x140/1a1a2e/84cc16?text=Urban+Soccer',
    genre: 'Sports',
    hoursPlayed: 9,
    lastPlayed: '3 days ago',
    installed: false,
    size: '42 GB',
    description: 'Arcade football experience with online seasons and team upgrades.'
  },
  {
    id: 5,
    title: 'Fantasy Legends',
    cover: 'https://placehold.co/260x140/1a1a2e/84cc16?text=Fantasy+Legends',
    genre: 'RPG',
    hoursPlayed: 67,
    lastPlayed: 'yesterday',
    installed: true,
    size: '96 GB',
    description: 'Party-based RPG with deep classes, dungeons, and skill trees.'
  }
]

const filteredLibraryGames = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) {
    return libraryGames
  }

  return libraryGames.filter(game => {
    return (
      game.title.toLowerCase().includes(query) ||
      game.genre.toLowerCase().includes(query)
    )
  })
})

const openedGame = computed(() => {
  if (openedGameId.value === null) {
    return null
  }

  return libraryGames.find(game => game.id === openedGameId.value) ?? null
})

function openGame(gameId) {
  openedGameId.value = gameId
}

function closeOpenedGame() {
  openedGameId.value = null
}

function playGame(game) {
  alert(`Launching ${game.title}`)
}
</script>

<template>
  <div class="mx-auto w-full max-w-7xl">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <section class="lg:col-span-3 rounded-xl border border-border-800 bg-panel-900/80 p-4 md:p-5">
        <div v-if="openedGame" class="space-y-5">
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-bold text-text-100">{{ openedGame.title }}</h2>
            <button
              @click="closeOpenedGame"
              class="rounded-lg border border-border-700 bg-panel-800 px-4 py-2 font-semibold text-text-200 transition-colors hover:border-accent-500 hover:text-accent-300"
            >
              Back to Library
            </button>
          </div>

          <div class="overflow-hidden rounded-xl border border-border-800 bg-bg-950/60">
            <img :src="openedGame.cover" :alt="openedGame.title" class="h-72 w-full object-cover md:h-80" />
            <div class="space-y-4 p-5">
              <p class="text-text-300">{{ openedGame.description }}</p>

              <div class="grid grid-cols-1 gap-3 text-sm text-text-300 sm:grid-cols-3">
                <div class="rounded-lg border border-border-800 bg-panel-900 p-3">
                  <p class="text-text-500">Genre</p>
                  <p class="font-semibold text-text-100">{{ openedGame.genre }}</p>
                </div>
                <div class="rounded-lg border border-border-800 bg-panel-900 p-3">
                  <p class="text-text-500">Playtime</p>
                  <p class="font-semibold text-text-100">{{ openedGame.hoursPlayed }} hours</p>
                </div>
                <div class="rounded-lg border border-border-800 bg-panel-900 p-3">
                  <p class="text-text-500">Disk Size</p>
                  <p class="font-semibold text-text-100">{{ openedGame.size }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <button
                  @click="playGame(openedGame)"
                  class="rounded-lg bg-accent-500 px-6 py-2.5 font-bold text-bg-950 transition-all duration-200 hover:scale-105 hover:bg-accent-400"
                >
                  Play
                </button>
                <button
                  class="rounded-lg border border-border-700 bg-panel-800 px-6 py-2.5 font-semibold text-text-200 transition-colors hover:border-accent-500 hover:text-accent-300"
                >
                  Details
                </button>
                <p class="text-sm text-text-500">Last played {{ openedGame.lastPlayed }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="space-y-4">
          <h2 class="text-2xl font-bold text-text-100">Your Games</h2>

          <div v-if="filteredLibraryGames.length === 0" class="rounded-xl border border-border-800 bg-bg-950/50 p-10 text-center">
            <p class="text-lg text-text-300">No games found for your search.</p>
          </div>

          <div v-else class="space-y-3">
            <article
              v-for="game in filteredLibraryGames"
              :key="game.id"
              class="flex flex-col gap-3 rounded-xl border border-border-800 bg-bg-950/50 p-3 transition-colors hover:border-accent-500 md:flex-row md:items-center"
            >
              <img :src="game.cover" :alt="game.title" class="h-28 w-full rounded-lg object-cover md:w-44" />

              <div class="min-w-0 flex-1">
                <h3 class="truncate text-2xl font-bold text-text-100">{{ game.title }}</h3>
                <p class="text-text-400">{{ game.hoursPlayed }} hours played</p>
                <p class="text-sm text-text-500">{{ game.installed ? 'Installed' : 'Not Installed' }} • {{ game.genre }}</p>
              </div>

              <div class="flex gap-2">
                <button
                  @click="playGame(game)"
                  class="rounded-lg bg-accent-500 px-6 py-2.5 font-bold text-bg-950 transition-all duration-200 hover:scale-105 hover:bg-accent-400"
                >
                  Play
                </button>
                <button
                  @click="openGame(game.id)"
                  class="rounded-lg border border-border-700 bg-panel-800 px-5 py-2.5 font-semibold text-text-200 transition-colors hover:border-accent-500 hover:text-accent-300"
                >
                  Details
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <aside class="rounded-xl border border-border-800 bg-panel-900/80 p-4 lg:h-[80vh] lg:overflow-hidden lg:sticky lg:top-4">
        <div class="flex h-full flex-col">
        <div class="relative mb-4">
          <svg class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search games"
            class="w-full rounded-lg border border-border-800 bg-bg-950/60 py-2.5 pl-9 pr-3 text-sm text-text-100 focus:border-accent-500 focus:outline-none"
          />
        </div>

        <h3 class="mb-3 text-xl font-bold text-text-100">All Games</h3>

        <div v-if="filteredLibraryGames.length === 0" class="rounded-lg border border-border-800 bg-bg-950/50 p-4 text-sm text-text-400">
          No matching games.
        </div>

        <div v-else class="space-y-2 overflow-y-auto pr-1 custom-scroll">
          <button
            v-for="game in filteredLibraryGames"
            :key="`list-${game.id}`"
            @click="openGame(game.id)"
            :class="[
              'relative flex w-full items-center gap-3 rounded-lg border p-2 text-left transition-all duration-200',
              openedGameId === game.id
                ? 'border-accent-400 bg-linear-to-r from-accent-500/20 via-accent-500/10 to-transparent shadow-[0_0_18px_rgba(34,197,94,0.22)]'
                : 'border-border-800 bg-bg-950/50 hover:border-accent-500'
            ]"
          >
            <span
              v-if="openedGameId === game.id"
              class="absolute bottom-2 left-0 top-2 w-1 rounded-r bg-accent-400"
            ></span>
            <img :src="game.cover" :alt="game.title" class="h-10 w-16 rounded object-cover" />
            <span :class="['truncate font-semibold', openedGameId === game.id ? 'text-accent-200' : 'text-text-100']">{{ game.title }}</span>
          </button>
        </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}

.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(34, 197, 94, 0.6) rgba(15, 23, 42, 0.5);
}

.custom-scroll::-webkit-scrollbar {
  width: 8px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 9999px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: rgba(34, 197, 94, 0.7);
  border-radius: 9999px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(74, 222, 128, 0.9);
}
</style>

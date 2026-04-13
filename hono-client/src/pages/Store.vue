<script setup>
import { ref, computed } from 'vue'

//copmonents
import GameCard from '@/components/game-card.vue'

// Search state
const searchQuery = ref('')
const selectedCategories = ref([])
const sortBy = ref('featured')

// Placeholder data for games
const featuredGame = {
  id: 1,
  title: 'Cyber Odyssey 2077',
  image: 'https://placehold.co/1200x500/1a1a2e/84cc16?text=Featured+Game',
  rating: 4.8,
  price: 59.99,
  description: 'Experience the future in this groundbreaking open-world RPG'
}

const recommendedGames = ref([
  {
    id: 2,
    title: 'Stellar Warriors',
    cover: 'https://placehold.co/300x400/1a1a2e/84cc16?text=Game+1',
    genre: 'Action',
    rating: 4.6,
    price: 49.99,
    description: 'Epic space battles await in this action-packed shooter',
    favorite: false
  },
  {
    id: 3,
    title: 'Dragon Quest',
    cover: 'https://placehold.co/300x400/1a1a2e/84cc16?text=Game+2',
    genre: 'RPG',
    rating: 4.9,
    price: 39.99,
    description: 'Embark on a legendary adventure through mystical lands',
    favorite: true
  },
  {
    id: 4,
    title: 'Speed Legends',
    cover: 'https://placehold.co/300x400/1a1a2e/84cc16?text=Game+3',
    genre: 'Racing',
    rating: 4.3,
    price: 29.99,
    description: 'Feel the adrenaline in the world\'s fastest racing game',
    favorite: false
  },
  {
    id: 5,
    title: 'Empire Tactics',
    cover: 'https://placehold.co/300x400/1a1a2e/84cc16?text=Game+4',
    genre: 'Strategy',
    rating: 4.7,
    price: 44.99,
    description: 'Build your empire and conquer the world with strategy',
    favorite: false
  },
  {
    id: 6,
    title: 'Horror Night',
    cover: 'https://placehold.co/300x400/1a1a2e/84cc16?text=Game+5',
    genre: 'Horror',
    rating: 4.5,
    price: 34.99,
    description: 'Survive the night in this terrifying survival horror',
    favorite: true
  },
  {
    id: 7,
    title: 'Adventure Island',
    cover: 'https://placehold.co/300x400/1a1a2e/84cc16?text=Game+6',
    genre: 'Adventure',
    rating: 4.4,
    price: 24.99,
    description: 'Explore uncharted islands and discover ancient secrets',
    favorite: false
  }
])

const categories = [
  { id: 'action', name: 'Action', icon: '⚔️' },
  { id: 'rpg', name: 'RPG', icon: '🐉' },
  { id: 'racing', name: 'Racing', icon: '🏎️' },
  { id: 'strategy', name: 'Strategy', icon: '♟️' },
  { id: 'horror', name: 'Horror', icon: '👻' },
  { id: 'adventure', name: 'Adventure', icon: '🗺️' }
]

// Computed
const hasFiltersActive = computed(() => {
  return searchQuery.value.trim().length > 0 || selectedCategories.value.length > 0
})

// const isSearchActive = computed(() => searchQuery.value.trim().length > 0)

function getGameCategoryTokens(game) {
  // Supports single genres ("Action") and future multi-genre strings ("Action, RPG").
  return game.genre
    .toLowerCase()
    .split(/[,/|&]/)
    .map(token => token.trim())
    .filter(Boolean)
}

const filteredGames = computed(() => {
  let games = [...recommendedGames.value]
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    games = games.filter(game => 
      game.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  
  // Filter by selected categories using AND logic (must match all selected).
  if (selectedCategories.value.length > 0) {
    games = games.filter(game => {
      const gameCategories = getGameCategoryTokens(game)
      return selectedCategories.value.every(categoryId => gameCategories.includes(categoryId))
    })
  }
  
  // Sort
  if (sortBy.value === 'rating') {
    games.sort((a, b) => b.rating - a.rating)
  } else if (sortBy.value === 'price-low') {
    games.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price-high') {
    games.sort((a, b) => b.price - a.price)
  }
  
  return games
})

// Methods
function toggleFavorite(gameId) {
  const game = recommendedGames.value.find(g => g.id === gameId)
  if (game) {
    game.favorite = !game.favorite
  }
}

function selectCategory(categoryId) {
  if (selectedCategories.value.includes(categoryId)) {
    selectedCategories.value = selectedCategories.value.filter(id => id !== categoryId)
    return
  }

  selectedCategories.value = [...selectedCategories.value, categoryId]
}

function buyGame(game) {
  alert(`Adding ${game.title} to cart - $${game.price}`)
}
</script>

<template>
  <div class="w-full max-w-7xl mx-auto">
    <div class="mb-8 rounded-2xl border border-accent-500/25 bg-linear-to-r from-bg-950 via-panel-950 to-bg-950 p-5 shadow-[0_0_40px_rgba(34,197,94,0.12)]">
      <div class="relative mb-5">
        <svg class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-accent-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search games..."
          class="w-full rounded-xl border border-border-800 bg-panel-900/95 py-3 pl-12 pr-4 text-text-100 focus:border-accent-500 focus:outline-none"
        />
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectCategory(category.id)"
          :class="[
            'rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-200',
            selectedCategories.includes(category.id)
              ? 'border-accent-400 bg-accent-500/15 text-accent-300 shadow-[0_0_16px_rgba(34,197,94,0.25)]'
              : 'border-border-800 bg-panel-900 text-text-300 hover:border-accent-500 hover:text-accent-300'
          ]"
        >
          {{ category.name }}
        </button>

        <select v-if="hasFiltersActive"
          v-model="sortBy"
          class="ml-auto rounded-lg border border-border-800 bg-panel-900 px-4 py-2 text-text-100 focus:border-accent-500 focus:outline-none"
        >
          <option value="featured">Sort: Featured</option>
          <option value="rating">Sort: Rating</option>
          <option value="price-low">Sort: Price Low</option>
          <option value="price-high">Sort: Price High</option>
        </select>
      </div>
    </div>

    <section class="mb-8">
      <div class="mb-3 flex items-center justify-between">
        <!-- <h2 class="text-4xl font-bold text-text-100">Store</h2> -->
        <p v-if="hasFiltersActive" class="text-sm text-text-400">
          Showing {{ filteredGames.length }} result(s)
        </p>
      </div>

     
      <div v-if="!hasFiltersActive" class="overflow-hidden rounded-2xl border border-accent-500/35 bg-panel-900 shadow-[0_0_28px_rgba(34,197,94,0.18)]">
        <div class="relative h-64 md:h-72">
          <img :src="featuredGame.image" :alt="featuredGame.title" class="h-full w-full object-cover" />
          <div class="absolute inset-0 bg-linear-to-r from-bg-950/90 via-bg-950/50 to-transparent"></div>
          <div class="absolute left-0 top-0 p-4">
            <span class="rounded-md bg-accent-500 px-3 py-1 text-sm font-bold uppercase text-bg-950">Featured</span>
          </div>
          <div class="absolute bottom-0 w-full p-6 md:p-8">
            <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 class="text-3xl font-bold text-text-100 md:text-4xl">{{ featuredGame.title }}</h3>
                <p class="mt-1 text-text-300">{{ featuredGame.description }}</p>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-4xl font-black text-accent-400">${{ featuredGame.price }}</span>
                <button
                  @click="buyGame(featuredGame)"
                  class="rounded-lg bg-accent-500 px-6 py-3 font-bold text-bg-950 transition-all duration-200 hover:scale-105 hover:bg-accent-400"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section>
      <h3 v-if="!hasFiltersActive" class="mb-6 text-2xl font-bold text-text-100">Recommended Games</h3>

      <div v-if="filteredGames.length === 0" class="rounded-xl border border-border-800 bg-panel-900 p-12 text-center">
        <p class="text-xl text-text-300">No games match your filters.</p>
      </div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="group overflow-hidden rounded-xl border border-border-800 bg-panel-900 transition-all duration-300 hover:scale-[1.02] hover:border-accent-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.16)]"
        >

          <GameCard :game="game" @toggle-favorite="toggleFavorite" @buy-game="buyGame" />
          
          
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}

select {
  cursor: pointer;
}
</style>

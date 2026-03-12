<script setup>
import { ref, computed } from 'vue'

// Search state
const searchQuery = ref('')
const selectedCategory = ref('all')
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

const recommendedGames = [
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
]

const categories = [
  { id: 'all', name: 'All Games', icon: '🎮' },
  { id: 'action', name: 'Action', icon: '⚔️' },
  { id: 'rpg', name: 'RPG', icon: '🐉' },
  { id: 'racing', name: 'Racing', icon: '🏎️' },
  { id: 'strategy', name: 'Strategy', icon: '♟️' },
  { id: 'horror', name: 'Horror', icon: '👻' },
  { id: 'adventure', name: 'Adventure', icon: '🗺️' }
]

const news = [
  {
    id: 1,
    game: 'Cyber Odyssey 2077',
    thumbnail: 'https://placehold.co/150x150/1a1a2e/84cc16?text=News+1',
    title: 'New DLC Expansion Released!',
    description: 'Explore new districts and missions in the latest expansion',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    game: 'Dragon Quest',
    thumbnail: 'https://placehold.co/150x150/1a1a2e/84cc16?text=News+2',
    title: 'Summer Sale - 40% Off',
    description: 'Limited time offer on this epic RPG adventure',
    timestamp: '5 hours ago'
  },
  {
    id: 3,
    game: 'Speed Legends',
    thumbnail: 'https://placehold.co/150x150/1a1a2e/84cc16?text=News+3',
    title: 'New Racing Tracks Added',
    description: 'Experience the thrill on 5 new challenging circuits',
    timestamp: '1 day ago'
  }
]

// Computed
const isSearchActive = computed(() => searchQuery.value.trim().length > 0)

const filteredGames = computed(() => {
  let games = [...recommendedGames]
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    games = games.filter(game => 
      game.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  
  // Filter by category
  if (selectedCategory.value !== 'all') {
    games = games.filter(game => 
      game.genre.toLowerCase() === selectedCategory.value.toLowerCase()
    )
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
  const game = recommendedGames.find(g => g.id === gameId)
  if (game) {
    game.favorite = !game.favorite
  }
}

function selectCategory(categoryId) {
  selectedCategory.value = categoryId
}

function buyGame(game) {
  alert(`Adding ${game.title} to cart - $${game.price}`)
}
</script>

<template>
  <div class="w-full max-w-7xl mx-auto">
    
    <!-- TOP BAR - SEARCH -->
    <div class="mb-8">
      <row>
        <col class="col-10">
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search for games..." 
            class="w-full bg-panel-900 text-text-100 pl-12 pr-4 py-4 rounded-lg border border-border-800 focus:border-accent-500 focus:outline-none transition-colors"
            />
        </col>
        </div>
      </row>
      
      <!-- Search filters (only show when searching) -->
      <div v-if="isSearchActive" class="flex gap-4 mt-4">
        <select 
          v-model="selectedCategory"
          class="bg-panel-900 text-text-100 px-4 py-2 rounded-lg border border-border-800 focus:border-accent-500 focus:outline-none transition-colors"
        >
          <option value="all">All Categories</option>
          <option v-for="cat in categories.filter(c => c.id !== 'all')" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
        
        <select 
          v-model="sortBy"
          class="bg-panel-900 text-text-100 px-4 py-2 rounded-lg border border-border-800 focus:border-accent-500 focus:outline-none transition-colors"
        >
          <option value="featured">Featured</option>
          <option value="rating">Best Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>

    <!-- DEFAULT STORE VIEW -->
    <div v-if="!isSearchActive">
      
      <!-- FEATURED GAME -->
      <div class="mb-12 bg-panel-900 rounded-xl overflow-hidden border border-border-800 hover:border-accent-500 transition-all duration-300 hover:glow">
        <div class="relative h-96">
          <img :src="featuredGame.image" :alt="featuredGame.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-bg-950 via-bg-950/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8 w-full">
            <div class="flex items-end justify-between">
              <div class="flex-1">
                <h2 class="text-4xl font-bold text-text-100 mb-2">{{ featuredGame.title }}</h2>
                <p class="text-text-300 mb-4">{{ featuredGame.description }}</p>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-1">
                    <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span class="text-text-100 font-semibold">{{ featuredGame.rating }}</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end gap-4">
                <span class="text-4xl font-bold text-accent-400">${{ featuredGame.price }}</span>
                <button @click="buyGame(featuredGame)" class="bg-accent-500 hover:bg-accent-600 text-bg-950 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 glow-sm">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RECOMMENDED GAMES -->
      <section class="mb-12">
        <h3 class="text-2xl font-bold text-text-100 mb-6">Recommended For You</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="game in recommendedGames" 
            :key="game.id"
            class="bg-panel-900 rounded-xl overflow-hidden border border-border-800 hover:border-accent-500 transition-all duration-300 hover:scale-105 hover:glow-sm group"
          >
            <div class="relative">
              <img :src="game.cover" :alt="game.title" class="w-full h-64 object-cover" />
              <button 
                @click="toggleFavorite(game.id)"
                class="absolute top-3 right-3 bg-bg-950/80 p-2 rounded-full hover:bg-bg-950 transition-colors"
              >
                <svg class="w-5 h-5" :class="game.favorite ? 'text-accent-400 fill-accent-400' : 'text-text-300'" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                </svg>
              </button>
            </div>
            <div class="p-5">
              <div class="flex items-start justify-between mb-2">
                <h4 class="text-lg font-semibold text-text-100 group-hover:text-accent-400 transition-colors">{{ game.title }}</h4>
              </div>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-sm text-text-500 bg-panel-800 px-2 py-1 rounded">{{ game.genre }}</span>
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="text-sm text-text-300">{{ game.rating }}</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-accent-400">${{ game.price }}</span>
                <button @click="buyGame(game)" class="bg-accent-500 hover:bg-accent-600 text-bg-950 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GAME CATEGORIES -->
      <section class="mb-12">
        <h3 class="text-2xl font-bold text-text-100 mb-6">Browse by Category</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="selectCategory(category.id)"
            class="bg-panel-900 hover:bg-panel-800 border border-border-800 hover:border-accent-500 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 group"
          >
            <div class="text-4xl mb-2">{{ category.icon }}</div>
            <div class="text-text-300 group-hover:text-accent-400 font-medium transition-colors">{{ category.name }}</div>
          </button>
        </div>
      </section>

      <!-- NEWS SECTION -->
      <section>
        <h3 class="text-2xl font-bold text-text-100 mb-6">Latest News</h3>
        <div class="space-y-4">
          <div 
            v-for="item in news" 
            :key="item.id"
            class="bg-panel-900 border border-border-800 hover:border-accent-500 rounded-xl p-5 flex gap-5 transition-all duration-300 hover:glow-sm group"
          >
            <img :src="item.thumbnail" :alt="item.game" class="w-32 h-32 rounded-lg object-cover" />
            <div class="flex-1">
              <div class="flex items-start justify-between mb-2">
                <div>
                  <span class="text-sm text-accent-400 font-medium">{{ item.game }}</span>
                  <h4 class="text-lg font-semibold text-text-100 group-hover:text-accent-400 transition-colors">{{ item.title }}</h4>
                </div>
                <span class="text-sm text-text-500">{{ item.timestamp }}</span>
              </div>
              <p class="text-text-300">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>

    <!-- SEARCH RESULTS VIEW -->
    <div v-else>
      <h3 class="text-2xl font-bold text-text-100 mb-2">Search Results</h3>
      <p class="text-text-500 mb-6">Found {{ filteredGames.length }} game(s) for "{{ searchQuery }}"</p>
      
      <div v-if="filteredGames.length === 0" class="text-center py-20">
        <svg class="w-24 h-24 mx-auto text-text-700 mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
        <p class="text-xl text-text-500">No games found</p>
        <p class="text-text-700 mt-2">Try adjusting your search or filters</p>
      </div>

      <div v-else class="space-y-4">
        <div 
          v-for="game in filteredGames" 
          :key="game.id"
          class="bg-panel-900 border border-border-800 hover:border-accent-500 rounded-xl overflow-hidden flex transition-all duration-300 hover:glow-sm group"
        >
          <img :src="game.cover" :alt="game.title" class="w-48 h-48 object-cover" />
          <div class="flex-1 p-6 flex flex-col">
            <div class="flex items-start justify-between mb-2">
              <div>
                <h4 class="text-xl font-bold text-text-100 group-hover:text-accent-400 transition-colors mb-1">{{ game.title }}</h4>
                <div class="flex items-center gap-3">
                  <span class="text-sm text-text-500 bg-panel-800 px-2 py-1 rounded">{{ game.genre }}</span>
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span class="text-sm text-text-300 font-medium">{{ game.rating }}</span>
                  </div>
                </div>
              </div>
              <span class="text-3xl font-bold text-accent-400">${{ game.price }}</span>
            </div>
            <p class="text-text-300 mb-4 flex-1">{{ game.description }}</p>
            <div class="flex gap-3">
              <button class="bg-panel-800 hover:bg-panel-850 text-text-100 px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 border border-border-800 hover:border-accent-500">
                Details
              </button>
              <button @click="buyGame(game)" class="bg-accent-500 hover:bg-accent-600 text-bg-950 px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

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

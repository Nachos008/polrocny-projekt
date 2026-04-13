<script setup>
const props = defineProps({
    game: {
        type: Object,
        required: true
    }
})

const emits = defineEmits(['toggle-favorite', 'buy-game'])

function toggleFavorite() {
    emits('toggle-favorite', props.game.id)
}

function buyGame() {
    emits('buy-game', props.game)
}
</script>

<template>
    <div class="relative">
        <img :src="props.game.cover" :alt="props.game.title" class="h-48 w-full object-cover" />
        <button @click="toggleFavorite"class="absolute right-3 top-3 rounded-full bg-bg-950/80 p-2 transition-colors hover:bg-bg-950">
        <svg class="h-5 w-5" :class="props.game.favorite ? 'fill-accent-400 text-accent-400' : 'text-text-300'" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        </button>
        </div>

        <div class="p-4">
            <h4 class="text-xl font-semibold text-text-100 transition-colors group-hover:text-accent-300">{{ props.game.title }}</h4>
                <div class="mt-1 flex items-center justify-between text-sm">
                                <span class="text-text-400">{{ props.game.genre }}</span>
                                <span class="font-semibold text-accent-300">★ {{ props.game.rating }}</span>
                </div>
                <div class="mt-4 flex items-center justify-between">
                                <span class="text-3xl font-black text-accent-400">${{ props.game.price }}</span>
                <button
                                        @click="buyGame"
                    class="rounded-lg bg-accent-500 px-4 py-2 font-bold text-bg-950 transition-all duration-200 hover:scale-105 hover:bg-accent-400"
                >
                    Buy
                </button>
                </div>
            </div>
</template>
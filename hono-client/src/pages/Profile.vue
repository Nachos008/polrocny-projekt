<script setup>
import { ref, computed } from 'vue'
import RecentActivityCard from '@/components/recent-activity-card.vue'

const user = {
  id: 'usr_9f31b2a',
  username: 'username',
  displayName: 'Moje Meno',
  avatarUrl: 'https://placehold.co/220x220/1a1a2e/84cc16?text=PN',
  status: 'online',
  headline: 'Grinding ranked matches and indie gems.',
  bio: 'Frontend-focused gamer. I like RPGs, strategy games, and building clean UI.',
  accountCreatedAt: '2024-10-02T14:18:00Z',
  country: 'Slovakia',
  language: 'sk-SK',
  timezone: 'Europe/Bratislava',
  lastSeenAt: '2026-04-14T17:40:00Z',
  profileVisibility: 'friends',
  stats: {
    level: 27,
    experience: 12450,
    ownedGames: 34,
    favoriteGamesCount: 5,
    totalPlaytimeHours: 812,
    achievementsUnlocked: 214,
    friendsCount: 8
  },
  favoriteGames: [
    {
      id: 3,
      title: 'Dragon Quest',
      genre: 'RPG',
      hoursPlayed: 176,
      cover: 'https://placehold.co/260x140/1a1a2e/84cc16?text=Dragon+Quest'
    },
    {
      id: 5,
      title: 'Fantasy Legends',
      genre: 'RPG',
      hoursPlayed: 121,
      cover: 'https://placehold.co/260x140/1a1a2e/84cc16?text=Fantasy+Legends'
    },
    {
      id: 2,
      title: 'Galactic Horizons',
      genre: 'Sci-Fi',
      hoursPlayed: 143,
      cover: 'https://placehold.co/260x140/1a1a2e/84cc16?text=Galactic+Horizons'
    }
  ],
  lastPlayedGame: {
    id: 2,
    title: 'Galactic Horizons',
    lastPlayedAt: '2026-04-14T13:05:00Z',
    sessionMinutes: 94
  },
  recentlyPlayedGames: [
    { id: 2, title: 'Galactic Horizons', lastPlayedAt: '2026-04-14T13:05:00Z' },
    { id: 4, title: 'Speed Legends', lastPlayedAt: '2026-04-13T20:16:00Z' },
    { id: 1, title: 'Cyber Odyssey 2077', lastPlayedAt: '2026-04-12T22:41:00Z' }
  ],
  friends: [
    {
      id: 'usr_71ae',
      displayName: 'Jozo',
      avatarUrl: 'https://placehold.co/96x96/1a1a2e/84cc16?text=MS',
      status: 'online',
      currentGame: 'Urban Soccer'
    },
    {
      id: 'usr_10cd',
      displayName: 'Kubo',
      avatarUrl: 'https://placehold.co/96x96/1a1a2e/84cc16?text=NK',
      status: 'offline',
      currentGame: null
    },
    {
      id: 'usr_4cab',
      displayName: 'Stefan',
      avatarUrl: 'https://placehold.co/96x96/1a1a2e/84cc16?text=TP',
      status: 'online',
      currentGame: 'Mystic Valley'
    }
  ],
  socialLinks: {
    steam: 'patrikdev_sk',
    discord: 'patrik#4312',
    twitch: 'patrikplays'
  },
  preferences: {
    darkMode: true,
    autoAcceptFriendRequests: false,
    showOnlineStatus: true,
    preferredGenres: ['RPG', 'Strategy', 'Adventure']
  },
  wallet: {
    currency: 'EUR',
    balance: 27.45
  },
  subscription: {
    plan: 'Plus',
    expiresAt: '2026-08-01T00:00:00Z'
  },
  notifications: {
    unreadCount: 4,
    emailEnabled: true,
    pushEnabled: true
  },
  recentActivity: [
    {
      id: 11,
      title: 'ARC Raiders',
      cover: 'https://placehold.co/460x180/0b1021/e5e7eb?text=ARC+Raiders',
      hoursOnRecord: 121,
      hoursPastTwoWeeks: 2.1,
      lastPlayedLabel: '19 Apr',
      achievementsUnlocked: 38,
      achievementsTotal: 50,
      recentAchievements: 33,
      achievementBadges: ['A1', 'A2', 'A3', 'A4', 'A5']
    },
    {
      id: 12,
      title: 'theHunter: Call of the Wild',
      cover: 'https://placehold.co/460x180/12202c/e5e7eb?text=theHunter+Call+of+the+Wild',
      hoursOnRecord: 93,
      hoursPastTwoWeeks: 1.4,
      lastPlayedLabel: '17 Apr',
      achievementsUnlocked: 35,
      achievementsTotal: 160,
      recentAchievements: 30,
      achievementBadges: ['H1', 'H2', 'H3', 'H4', 'H5']
    },
    {
      id: 13,
      title: 'Gang Beasts',
      cover: 'https://placehold.co/460x180/2a1522/e5e7eb?text=Gang+Beasts',
      hoursOnRecord: 85,
      hoursPastTwoWeeks: 0.9,
      lastPlayedLabel: '13 Apr',
      achievementsUnlocked: 14,
      achievementsTotal: 19,
      recentAchievements: 9,
      achievementBadges: ['G1', 'G2', 'G3', 'G4', 'G5']
    }
  ]
}

const isFriendsExpanded = ref(false)
const MAX_VISIBLE_FRIENDS = 10

const friendCount = computed(() => user.friends.length)
const hiddenFriendsCount = computed(() => Math.max(0, friendCount.value - MAX_VISIBLE_FRIENDS))
const displayedFriends = computed(() => {
  if (isFriendsExpanded.value) {
    return user.friends
  }
  return user.friends.slice(0, MAX_VISIBLE_FRIENDS)
})

const recentHoursLabel = computed(() => {
  const total = user.recentActivity.reduce((sum, game) => sum + game.hoursPastTwoWeeks, 0)
  return total.toFixed(1)
})

function toggleFriendsList() {
  isFriendsExpanded.value = !isFriendsExpanded.value
}

function openFriendProfile(friendId) {
  alert(`Open profile: ${friendId}`)
}

function addFriend() {
  alert('Add friend action')
}

</script>

<template>
   <div class="mx-auto w-full max-w-7xl">
     <div class="grid grid-cols-1 gap-6">
             <section class="rounded-xl border border-border-800 bg-panel-900/80 p-4 md:p-5 w-100%">
               <div class="space-y-5">
                 <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                   <div class="flex items-start gap-4">
                     <img :src="user.avatarUrl" :alt="user.displayName" class="h-20 w-20 rounded-xl object-cover" />
                     <div class="space-y-1">
                       <h2 class="text-2xl font-bold leading-tight text-text-100">{{ user.displayName }}</h2>
                       <p class="text-sm text-text-400">@{{ user.username }}</p>
                     </div>
                   </div>

                   <div class="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                     <p class="text-sm text-text-200">
                       Status: <span class="font-semibold capitalize text-accent-300">{{ user.status }}</span>
                     </p>
                     <button
                       @click="addFriend"
                       class="rounded-lg border border-border-700 bg-panel-800 px-4 py-2 text-sm font-semibold text-text-200 transition-colors hover:border-accent-500 hover:text-accent-300"
                     >
                       Edit Profile
                     </button>
                   </div>
                 </div>

                 <p class="text-text-300">{{ user.bio }}</p>

                 <div class="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_22rem]">
                   <div class="rounded-xl border border-border-800 bg-bg-950/45 p-3 md:p-4">
                     <div class="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-border-800/70 pb-2">
                       <h3 class="text-lg font-bold text-text-100">Recent Activity</h3>
                       <p class="text-sm text-text-300">{{ recentHoursLabel }} hours past 2 weeks</p>
                     </div>

                     <div class="space-y-4">
                       <RecentActivityCard
                         v-for="activity in user.recentActivity"
                         :key="activity.id"
                         :activity="activity"
                       />
                     </div>
                   </div>

                   <aside class="space-y-2">
                     <div class="flex items-center justify-between gap-3">
                       <h3 class="text-sm font-semibold text-text-200">Friends</h3>
                       <button
                         v-if="hiddenFriendsCount > 0"
                         @click="toggleFriendsList"
                         class="rounded-lg border border-border-700 bg-panel-800 px-3 py-1.5 text-xs font-semibold text-text-200 transition-colors hover:border-accent-500 hover:text-accent-300"
                       >
                         {{ isFriendsExpanded ? 'Hide Extra' : `Show +${hiddenFriendsCount}` }}
                       </button>
                     </div>

                     <div class="flex flex-col rounded-lg border border-border-700 bg-bg-950/45">
                       <button
                         v-for="(friend, index) in displayedFriends"
                         :key="friend.id"
                         @click="openFriendProfile(friend.id)"
                         :class="{ 'border-b border-border-800': index < displayedFriends.length - 1, 'rounded-t': index === 0, 'rounded-b': index === displayedFriends.length - 1 }"
                         class="flex w-full items-center justify-between px-3 py-2 text-left transition-colors hover:bg-border-700"
                       >
                         <span class="font-semibold text-text-100">{{ friend.displayName }}</span>
                         <span v-if="friend.status === 'online'" class="text-sm text-text-400">{{ friend.status }}</span>
                         <span v-if="friend.status === 'offline'" class="text-sm text-danger-300">{{ friend.status }}</span>
                       </button>
                     </div>
                   </aside>
                 </div>
               </div>
             </section>
    </div>
  </div>
</template>

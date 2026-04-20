<template>
  <div :class="isAuthPage ? 'min-h-screen bg-bg-950' : 'flex h-screen bg-bg-950'">
    <aside v-if="!isAuthPage" class="w-52 gap-3 bg-bg-900 flex flex-col py-4 border-r border-border-800">

      <!-- Logo -->
      <div class="flex items-center gap-2 px-4 pb-6 pt-1">
        <svg class="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span class="text-text-100 font-semibold text-base">Logo</span>
      </div>

      <!-- Main nav -->
      <nav class="flex flex-col px-2 flex-1 gap-0">
        <RouterLink to="/store" class="nav-link">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13l-1-4m6 4v4m4-4v4"/></svg>
          <p class="nav-link-p">Store</p>
        </RouterLink>
        <RouterLink to="/library" class="nav-link">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z"/></svg>
          <p class="nav-link-p">Library</p>
        </RouterLink>
        <RouterLink to="/profile" class="nav-link">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg>
          <p class="nav-link-p">Profile</p>
        </RouterLink>
        <RouterLink to="/settings" class="nav-link">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
          <p class="nav-link-p">Settings</p>
        </RouterLink>
      </nav>

      <!-- Bottom actions -->
      <div class="flex flex-col gap-1 px-2 border-t border-border-800 pt-3 mt-3">
        <button class="nav-link nav-link--accent w-full text-left">
          <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Add Friends
        </button>
        <button class="nav-link-logout w-full text-left ">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
          Logout
        </button>
      </div>

    </aside>

    <main :class="isAuthPage ? 'min-h-screen overflow-y-auto p-6 text-accent-300' : 'flex-1 overflow-y-auto bg-bg-950 p-6 text-accent-300'">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isAuthPage = computed(() => route.meta.authPage === true)
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
  color: var(--color-text-300);
  font-size: 1.125rem;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.2s ease-in-out;
}

.nav-link:hover {
  color: var(--color-accent-400);
  transform: translateX(20px);
}

.nav-link:active {
  transform: translateX(2px) scale(0.97);
  animation: click-flash 2.67s ease-in-out;
}



.nav-link-logout {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
  color: var(--color-text-300);
  font-size: 1.125rem;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.2s ease-in-out;
}

.nav-link-logout:hover {
  color: var(--color-danger-500);
  transform: translateY(3px);
}


/* .nav-link--accent:hover {
  @apply text-accent-400;
} */

@keyframes click-flash {
  0%   { opacity: 1; }
  30%  { opacity: 1; }
  100% { opacity: 1; }
}

.nav-link.router-link-active {
  color: var(--color-accent-400);
  border-left: 2px solid var(--color-accent-300);
  border-radius: 0;
  padding-left: 0.625rem;
}

.nav-link.router-link-active:hover {
  transform: none;
  color: var(--color-accent-400);
  background: none;
}


</style>

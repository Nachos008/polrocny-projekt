import { createRouter, createWebHistory } from 'vue-router'
import Store from '../pages/Store.vue'
import Library from '../pages/Library.vue'
import Settings from '../pages/Settings.vue'
import Profile from '../pages/Profile.vue'



const routes = [
  { path: '/store', component: Store },
  { path: '/library', component: Library },
  { path: '/settings', component: Settings },
  { path: '/profile', component: Profile }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

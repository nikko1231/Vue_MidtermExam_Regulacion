import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Products from '@/components/Products.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/products', component: Products },
  { path: '/:catchAll(.*)', redirect: '/home' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

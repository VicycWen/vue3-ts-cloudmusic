import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/play',
      name: 'play',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PlaySong.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../views/PlayList.vue')
      }
  ]
})

export default router

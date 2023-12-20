import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'

const routes = [
    { path: '/', component: Home},
    {
      path: `/conocenos`,
      name: 'About',
      component: function () {
        return import('../components/About.vue')
      }
    },
    {
      path: `/historia-contigo`,
      name: 'History',
      component: function () {
        return import('../components/History.vue')
      }
    },
    {
      path: `/mochi-te-lleva`,
      name: 'MochiTakeAway',
      component: function () {
        return import('../components/MochiTakeAway.vue')
      }
    },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

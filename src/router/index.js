import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/main.vue'
import yaodai from '../views/yaodai.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },{
      path: '/yaodai',
      name: 'yaodai',
      component: yaodai
    }
  ]
})

export default router

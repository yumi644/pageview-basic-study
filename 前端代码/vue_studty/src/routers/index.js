import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/components/home.vue'
import Vue2 from '../views/mystudy/vue2/vue2.vue'
import Vue3 from '../views/mystudy/vue3/vue3.vue'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue2',
    name: 'Vue2',
    component: Vue2
  },
  {
    path: '/vue3',
    name: 'Vue3',
    component: Vue3
  }
]

// 创建路由器实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


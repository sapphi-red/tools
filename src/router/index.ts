import { createRouter, createWebHistory } from 'vue-router'
import Index from '/@/pages/Index.vue'
import JsonFormatter from '/@/pages/JsonFormatter.vue'
import Time from '/@/pages/Time.vue'

export const routerHistory = createWebHistory()

export default createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/json-formatter',
      name: 'jsonFormatter',
      component: JsonFormatter
    },
    {
      path: '/time',
      name: 'time',
      component: Time
    }
  ]
})

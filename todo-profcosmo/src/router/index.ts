import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '@/views/TodosView.vue'
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TodosView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/logout',
      component: LogoutView
    }
  ]
})

export default router

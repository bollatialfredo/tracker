import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Users from '../pages/Users.vue';

const routes = [
  {
    path: '/tracker',
    component: Home
  },
  {
    path: '/tracker/users',
    component: Users
  },
  {
    path: '/',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
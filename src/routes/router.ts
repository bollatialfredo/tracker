import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Users from '../pages/Users.vue';

const routes = [
  {
    path: '/tracker',
    component: Home
  },
  {
    path: '/tracker/about',
    component: About
  },
  {
    path: '/tracker/users',
    component: Users
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
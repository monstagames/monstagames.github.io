import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "Monsta Games | Home"
      }
    },
    {
      path: '/broken-sleep',
      name: 'Broken Sleep',
      component: () => import("../views/BrokenSleep.vue"),
      meta: {
        title: "Monsta Games | Broken Sleep"
      }
    }
  ]
})

router.afterEach((to, from) => {
  const title = document.querySelector("title")
  title.innerHTML = to.meta.title
})

export default router

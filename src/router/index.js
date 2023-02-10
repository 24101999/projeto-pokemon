import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import pokemon from '../views/pokemon.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/pokemon/:id",
    name:'pokemon',
    component:pokemon
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage'
import NotFound from '../views/404'
import CharacterDetails from '../components/characters/CharacterDetails'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage
  },
  {
    path: '/character/:id',
    name: 'character-detail',
    component: CharacterDetails
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

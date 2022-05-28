import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import AnimalsView from '../views/AnimalsView.vue'
import AnimalView from '../views/AnimalView.vue'
import ContactView from '../views/ContactView.vue'
import VolunteerView from '../views/VolunteerView.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/animals',
    name: 'animals',
    component: AnimalsView
  },
  { 
    path: '/animals/:id', 
    component: AnimalView 
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/becomeVolunteer',
    name: 'becomeVolunteer',
    component: VolunteerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

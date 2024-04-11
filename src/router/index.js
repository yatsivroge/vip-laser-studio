import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PriceView from '../views/PriceView.vue'
import DiscountView from '../views/DiscountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/price',
      name: 'price',
      component: PriceView
    },
    {
      path: '/discount',
      name: 'discount',
      component: DiscountView
    },
    {
      path:'/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router

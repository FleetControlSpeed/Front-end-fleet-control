import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/listagem',
    name: 'listagem',
    component: () => import(/* webpackChunkName: "listagem" */ '../views/condutor/listagem-condutor.vue')
  },
  {
    path: '/condutorcadastro',
    name: 'condutorcadastro',
    component:() => import('../views/condutor/CadastroCondutorView.vue')
  },
  {
    path:'/condutorcadastro2',
    name: 'condutorcadastro2',
    component:() => import('../views/condutor/CadastroCondutorView2.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

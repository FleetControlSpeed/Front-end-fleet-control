import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/lista-multas',
    name: 'lista-multas',
    component:() => import('../views/multas/Multas-lista-view.vue')
  },
  {
    path: '/recuperarSenha',
    name: 'recuperarSenha',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecuperarSenha.vue')
  },
  {

    path: '/lista-veiculos',
    name: 'lista-veiculos',
    component:() => import('../views/veiculos/Veiculo-lista-view.vue')
  },
  {
    path: '/veiculo-modelo-lista',
    name: 'VeiculoForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculos/Veiculo-FormView.vue'),
    children: [
      {
        path: '/veiculo-cadastrar',
        name: 'veiculo-cadastrar-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculos/Veiculo-FormView.vue'),
      },
      {
        path: '/veiculo-cadastrar',
        name: 'veiculo-cadastrar-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculos/Veiculo-FormView.vue'),
      },
    ]
  },
  {
    path: '/listaCorridas',
    name: 'listacorridas',
    component: () => import(/* webpackChunkName: "about" */ '../views/motorista/Motorista-Historico.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

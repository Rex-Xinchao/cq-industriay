import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/Layout')
const StockCustom = () => import('@/views/stockCustom/index')
const Boom = () => import('@/views/industrial/boom')
const Risk = () => import('@/views/industrial/risk')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/stockCustom'
      },
      {
        path: 'industrial/boom',
        name: 'component',
        component: Boom
      },
      {
        path: 'industrial/risk',
        name: 'component',
        component: Risk
      },
      {
        path: 'stockCustom/index',
        name: 'StockCustom',
        component: StockCustom
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

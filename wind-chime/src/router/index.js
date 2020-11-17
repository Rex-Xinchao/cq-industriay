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
        path: 'industrial',
        name: 'industrial',
        component: Boom,
        children: [
          {
            path: 'boom',
            name: 'Boom',
            component: Boom
          },
          {
            path: 'risk',
            name: 'Risk',
            component: Risk
          }
        ]
      },
      {
        path: 'stockCustom',
        name: 'StockCustom',
        component: StockCustom,
        children: [
          {
            path: 'index',
            name: 'StockCustom',
            component: StockCustom
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

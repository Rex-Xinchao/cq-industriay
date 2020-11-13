import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/Layout')
const StockCustom = () => import('@/views/stockCustom/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
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

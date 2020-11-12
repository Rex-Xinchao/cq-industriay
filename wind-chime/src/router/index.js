import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/Layout')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

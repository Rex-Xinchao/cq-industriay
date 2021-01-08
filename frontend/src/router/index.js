import Vue from 'vue'
import VueRouter from 'vue-router'
import { getBaseItem } from '@/api/base'
import store from '../store'
const Login = () => import('@/views/login')
const Layout = () => import('@/views/layout/Index')
const StockCustom_All = () => import('@/views/stockCustom/total')
const Pillar = () => import('@/views/pillar/index')
const LayoutWithSider = () => import('@/views/layout/LayoutWithSider')
const IndustryEnv = () => import('@/views/analysis/env')
const IndustryProspect = () => import('@/views/analysis/prospect')
const IndustryPolicy = () => import('@/views/analysis/policy')
const IndustryCompete = () => import('@/views/analysis/competition')
const IndustryRisk = () => import('@/views/analysis/risk')
const IndustryCustomer = () => import('@/views/analysis/customer')
const IndustryInformation = () => import('@/views/analysis/information')
const BaseAbility = () => import('@/views/base/ability')
const BaseFinance = () => import('@/views/base/finance')
const Boom = () => import('@/views/industrial/boom')
const Risk = () => import('@/views/industrial/risk')
const StockCustom = () => import('@/views/stockCustom/branch')
const LayoutForAreaFinance = () => import('@/views/layout/LayoutForAreaF')
const PillarChart = () => import('@/views/pillar/chart')
const FinanceStatus = () => import('@/views/finance/status')
const FinanceIncomes = () => import('@/views/finance/incomes')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/analysis/env'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: LayoutWithSider,
    children: [
      {
        path: 'env',
        name: 'IndustryEnv',
        component: IndustryEnv
      },
      {
        path: 'prospect',
        name: 'IndustryProspect',
        component: IndustryProspect
      },
      {
        path: 'policy',
        name: 'IndustryPolicy',
        component: IndustryPolicy
      },
      {
        path: 'compete',
        name: 'IndustryCompete',
        component: IndustryCompete
      },
      {
        path: 'risk',
        name: 'IndustryRisk',
        component: IndustryRisk
      },
      {
        path: 'customer',
        name: 'IndustryCustomer',
        component: IndustryCustomer
      },
      {
        path: 'information',
        name: 'IndustryInformation',
        component: IndustryInformation
      }
    ]
  },
  {
    path: '/base',
    name: 'Base',
    component: LayoutWithSider,
    children: [
      {
        path: 'ability',
        name: 'BaseAbility',
        component: BaseAbility
      },
      {
        path: 'finance',
        name: 'BaseFinance',
        component: BaseFinance
      }
    ]
  },
  {
    path: '/industrial',
    name: 'Industrial',
    component: LayoutWithSider,
    children: [
      {
        path: 'boom',
        name: 'component',
        component: Boom
      },
      {
        path: 'risk',
        name: 'component',
        component: Risk
      }
    ]
  },
  {
    path: '/stockCustom/index',
    name: 'StockCustomIndex',
    component: LayoutWithSider,
    children: [
      {
        path: '',
        name: 'StockCustom',
        component: StockCustom
      }
    ]
  },
  {
    path: '/stockCustom/all',
    name: 'StockCustomAll',
    component: Layout,
    children: [
      {
        path: '',
        name: 'StockCustom_All',
        component: StockCustom_All
      }
    ]
  },
  {
    path: '/pillar',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Pillar',
        component: Pillar
      },
      {
        path: 'chart',
        name: 'PillarChart',
        component: PillarChart
      }
    ]
  },
  {
    path: '/finance',
    name: 'LayoutForAreaFinance',
    component: LayoutForAreaFinance,
    children: [
      {
        path: 'status',
        name: 'FinanceStatus',
        component: FinanceStatus
      },
      {
        path: 'incomes',
        name: 'FinanceIncomes',
        component: FinanceIncomes
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (store.state.baseMenu.length === 0) {
    getBaseItem({})
      .then((res) => {
        store.dispatch('setMenu', res.result)
        next()
      })
      .catch((err) => {
        store.dispatch('setMenu', [])
        next()
      })
  } else {
    next()
  }
})

export default router

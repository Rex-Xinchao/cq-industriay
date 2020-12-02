import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/Layout')
const IndustryEnv = () => import('@/views/analysis/env')
const IndustryProspect = () => import('@/views/analysis/prospect')
const IndustryPolicy = () => import('@/views/analysis/policy')
const IndustryCompete = () => import('@/views/analysis/competition')
const IndustryRisk = () => import('@/views/analysis/risk')
const IndustryCustomer = () => import('@/views/analysis/customer')
const IndustryInformation = () => import('@/views/analysis/information')
const BaseGrow = () => import('@/views/base/grow')
const BaseProfit = () => import('@/views/base/profit')
const BaseRepay = () => import('@/views/base/repay')
const BaseBusiness = () => import('@/views/base/business')
const BaseFinance = () => import('@/views/base/finance')
const Boom = () => import('@/views/industrial/boom')
const Risk = () => import('@/views/industrial/risk')
const StockCustom = () => import('@/views/stockCustom/index')
const StockCustom_All = () => import('@/views/stockCustom/all')
const Pillar = () => import('@/views/pillar/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/analysis/env'
      },
      {
        path: 'analysis/env',
        name: 'IndustryEnv',
        component: IndustryEnv
      },
      {
        path: 'analysis/prospect',
        name: 'IndustryProspect',
        component: IndustryProspect
      },
      {
        path: 'analysis/policy',
        name: 'IndustryPolicy',
        component: IndustryPolicy
      },
      {
        path: 'analysis/compete',
        name: 'IndustryCompete',
        component: IndustryCompete
      },
      {
        path: 'analysis/risk',
        name: 'IndustryRisk',
        component: IndustryRisk
      },
      {
        path: 'analysis/customer',
        name: 'IndustryCustomer',
        component: IndustryCustomer
      },
      {
        path: 'analysis/information',
        name: 'IndustryInformation',
        component: IndustryInformation
      },
      {
        path: 'base/grow',
        name: 'BaseGrow',
        component: BaseGrow
      },
      {
        path: 'base/profit',
        name: 'BaseProfit',
        component: BaseProfit
      },
      {
        path: 'base/repay',
        name: 'BaseRepay',
        component: BaseRepay
      },
      {
        path: 'base/business',
        name: 'BaseBusiness',
        component: BaseBusiness
      },
      {
        path: 'base/finance',
        name: 'BaseFinance',
        component: BaseFinance
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
      },
      {
        path: '/stockCustom/all',
        name: 'StockCustom_All',
        component: StockCustom_All
      },
      {
        path: '/pillar/index',
        name: 'Pillar',
        component: Pillar
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

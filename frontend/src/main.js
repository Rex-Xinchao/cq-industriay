import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { eventBus } from './libs/vue-prototype'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@styles/theme.scss'
import http from '@/api/index'
require('./components/install')

Vue.use(ElementUI, { size: 'mini' })
Vue.prototype.$eventBus = eventBus
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

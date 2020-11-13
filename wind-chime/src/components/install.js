import Vue from 'vue'
import noDataShow from './public/no-data-show'

const components = [noDataShow]

const install = function(Vue, ops = {}) {
  components.forEach((com) => {
    Vue.component(com.name, com)
  })
}

Vue.use(install)

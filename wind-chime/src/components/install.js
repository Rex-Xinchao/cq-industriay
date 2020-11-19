import Vue from 'vue'
import noDataShow from './public/no-data-show'
import timeSelect from './public/time-select'

const components = [noDataShow, timeSelect]

const install = function(Vue, ops = {}) {
  components.forEach((com) => {
    Vue.component(com.name, com)
  })
}

Vue.use(install)

import Vue from 'vue'
import noDataShow from './public/no-data-show'
import timeSelect from './public/time-select'
import areaSearch from './public/area-search'
import tagList from './public/tag-list'

const components = [noDataShow, timeSelect, areaSearch, tagList]

const install = function(Vue, ops = {}) {
  components.forEach((com) => {
    Vue.component(com.name, com)
  })
}

Vue.use(install)

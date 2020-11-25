import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    industry: '汽车行业'
  },
  getters: {
    industry: (state) => {
      return state.industry
    }
  }
})

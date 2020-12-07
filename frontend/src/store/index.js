import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    industry: '汽车行业',
    industryCode: 'AF000001'
  },
  getters: {
    industry: (state) => {
      return state.industry
    },
    industryCode: (state) => {
      return state.industryCode
    }
  }
})

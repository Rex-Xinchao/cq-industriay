import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    industry: '新能源车整车制造（国标）',
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

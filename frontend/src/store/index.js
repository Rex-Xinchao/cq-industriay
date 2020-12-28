import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // industry: '新能源车整车制造（国标）',
    // industryCode: 'AF000001',
    industry: null,
    industryCode: null
  },
  getters: {
    industry: (state) => {
      return state.industry || localStorage.getItem('industryName')
    },
    industryCode: (state) => {
      return state.industryCode || localStorage.getItem('industryCode')
    }
  },
  actions: {
    setIndustry({ commit }, data) {
      commit('SET_INDUSTRY', data)
    }
  },
  mutations: {
    SET_INDUSTRY: (state, data) => {
      state.industry = data.name
      state.industryCode = data.code
      localStorage.setItem('industryName', data.name)
      localStorage.setItem('industryCode', data.code)
    }
  }
})

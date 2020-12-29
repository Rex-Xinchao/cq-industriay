import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    industry: null,
    industryCode: null,
    regionCode: null,
    regionName: null
  },
  getters: {
    industry: (state) => {
      return state.industry
    },
    industryCode: (state) => {
      return state.industryCode
    },
    regionCode: (state) => {
      return state.regionCode
    },
    regionName: (state) => {
      return state.regionName
    }
  },
  actions: {
    setIndustry({ commit }, data) {
      commit('SET_INDUSTRY', data)
    },
    setRegion({ commit }, data) {
      commit('SET_REGION', data)
    }
  },
  mutations: {
    SET_INDUSTRY: (state, data) => {
      state.industry = data.name
      state.industryCode = data.code
    },
    SET_REGION: (state, data) => {
      state.regionCode = data.code
      state.regionName = data.name
    }
  }
})

/* jshint esversion: 6 */
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    login
  },
  state: {
    // 蒙层
    layershow: false,
    layershow2: false,
    // 详情信息
    data: sessionStorage.getItem('data')
      ? JSON.parse(sessionStorage.getItem('data'))
      : { subindex: 11 }
  },
  mutations: {
    // 蒙层
    changelayershow (state, payload) {
      state.layershow = payload.boleen
    },
    changelayershow2 (state, payload) {
      state.layershow2 = payload.boleen
    },
    // 详情信息
    savedata (state, data) {
      state.data = data
      sessionStorage.setItem('data', JSON.stringify(data))
    }
  }
})
window.$store = store
export default store

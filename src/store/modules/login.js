/* jshint esversion: 6 */
import axios from '@/axios/axios'
// import apis from '@/apis'
export default {
  state: {
    token: sessionStorage.getItem('share-token')
      ? JSON.parse(sessionStorage.getItem('share-token'))
      : ''
  },
  mutations: {
    SET_USER_INFO (state, token) {
      state.token = token
      sessionStorage.setItem('share-token', JSON.stringify(token))
    }
  },
  actions: {
    /**
     * 用户登录
     * @param {*} param0
     * @param {*} params
     */
    SET_LOGIN (params) {
      return axios('http://10.98.13.237:5755/weapp/mockApi', params, 'POST')
    }
  }
}

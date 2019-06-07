/* jshint esversion: 6 */
import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store/index'

// const host = window.location.host
// axios 配置
axios.defaults.timeout = 30000
// axios.defaults.baseURL = 'http://' + host
// axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = '/datacenter-projectserver'
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 配置跨域请求允许
// axios.defaults.headers['Access-Control-Allow-Origin'] = process.env.BASE_API

// http request 拦截器
axios.interceptors.request.use(
  // config => {
  //   const token = store.state.login.token ? store.state.login.token : ''
  //   if (token) {
  //     // config.headers['X-YAuth-Token'] = token
  //     config.headers['Authorization'] = token
  //   }
  //   return config
  // },
  // err => {
  //   return Promise.reject(err)
  // }
)

// 返回状态判断
axios.interceptors.response.use(
  // response => {
  //   if (response.data.resultCode === '9996') {
  //     // 除了200code判断
  //     // window.location.href = `/#/login`
  //     sessionStorage.clear('share-token')
  //     this.router.push({ path: '/' })
  //   }
  //   return response
  // },
  // error => {
  //   if (error) {
  //     Message({
  //       type: 'error',
  //       message: '服务器开小差了，请联系管理员...',
  //       title: '温馨提示',
  //       duration: 1000
  //     })
  //   }
  //   return error
  // }
)

// export default (url, data = {}, method = 'get') => {
//   let options = {}
//   if (method === 'get') {
//     options = { method }
//   } else {
//     options = {
//       method,
//       data
//     }
//   }
//   return axios(url, options)
//     .then(response => {
//       return response
//     })
//     .catch(err => {
//       return { err }
//     })
// }

export default (url, data = {}, method = 'get') => {
  if (method === 'get') {
    return axios.get(url, data)
  }
  return axios.post(url, data)
}

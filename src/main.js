// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import './style/index.css'
import axios from '@/axios/axios'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import VueDraggableResizable from 'vue-draggable-resizable'
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.VueDraggableResizable = VueDraggableResizable
// Vue.use(axios)
// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(VXETable)
Vue.use(Viewer)
Vue.use(VueQuillEditor)
// 这里是插件的默认设置
Viewer.setDefaults({
  zIndexInline: 9999
})
Vue.use(ElementUI, {
  size: 'medium'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

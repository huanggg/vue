/* jshint esversion: 6 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import layout from '@/components/layout'
// import login from '@/components/login.vue'
// import home from '@/components/homed.vue'

// 项目数据路由
import projectdata from './projectdata'
// 数据管理路由
import Datamanagement from './Datamanagement'
// 角色管理路由
import AuthorityManagement from './AuthorityManagement'
// 产品管理路由
import ProductManagement from './ProductManagement'
import store from '@/store/index'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // 首页
    {
      path: '/home',
      name: 'home',
      // component: home,
      component: (resolve) => require(['@/components/homed.vue'], resolve),
      meta: { title: '首页', noCache: true, requiresAuth: true }
    },
    // 登录页
    {
      path: '/',
      name: 'login',
      // component: login,
      // 按需加载
      component: (resolve) => require(['@/components/login.vue'], resolve),
      meta: { title: '登陆页', noCache: true }
    },
    {
      // 控制中心
      path: '/layout',
      name: 'layout',
      // component: layout,
      component: (resolve) => require(['@/components/layout'], resolve),
      meta: { title: '控制中心', noCache: true, requiresAuth: true },
      //  Datamanagement
      children: [].concat(
        projectdata,
        Datamanagement,
        AuthorityManagement,
        ProductManagement
      )
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = store.state.login.token ? store.state.login.token : ''
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token === '') {
      next({
        path: '/',
        // query: { redirect: to.fullPath }
      })
      window.document.title = ` | 登录页`
    } else {
      next()
    }
  } else {
    next()
    // 确保一定要调用 next()
  }
  // // 如果未匹配到路由
  // if (to.matched.length === 0) {
  //   from.name ? next({ name: from.name }) : next('/404-page')
  // } else {
  //   // 如果匹配到正确跳转
  //   next()
  // }
})

router.afterEach((to, from, next) => {
  window.document.title = ` | ${to.meta.title}`
})

export default router

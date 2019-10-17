/* jshint esversion: 6 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // 登录页
    {
      path: '/',
      name: 'login',
      // component: login,
      // 按需加载
      component: resolve => require(['@/components/login.vue'], resolve),
      children: [
        {
          path: 'excel',
          name: 'excel',
          // component: login,
          // 按需加载
          component: resolve => require(['@/components/excel.vue'], resolve),
          meta: { title: 'excel', noCache: true }
        },
        {
          path: 'sortTable',
          name: 'sortTable',
          // component: login,
          // 按需加载
          component: resolve =>
            require(['@/components/sortTable.vue'], resolve),
          meta: { title: 'sortTable', noCache: true },
          children: [
            {
              path: 'graphee',
              name: 'graphee',
              // component: login,
              // 按需加载
              component: resolve => require(['@/components/graph.vue'], resolve),
              meta: { title: 'graph', noCache: true }
            },
            {
              path: 'excelee',
              name: 'excelee',
              // component: login,
              // 按需加载
              component: resolve => require(['@/components/excel.vue'], resolve),
              meta: { title: 'graph', noCache: true }
            },
         
          ]
        },
        {
          path: 'vuephotopreview',
          name: 'vuephotopreview',
          // component: login,
          // 按需加载
          component: resolve =>
            require(['@/components/vuephotopreview.vue'], resolve),
          meta: { title: 'vuephotopreview', noCache: true }
        },
        {
          path: 'html2canvas',
          name: 'html2canvas',
          // component: login,
          // 按需加载
          component: resolve =>
            require(['@/components/html2canvas.vue'], resolve),
          meta: { title: 'html2canvas', noCache: true }
        },
        {
          path: 'graph',
          name: 'graph',
          // component: login,
          // 按需加载
          component: resolve => require(['@/components/graph.vue'], resolve),
          meta: { title: 'graph', noCache: true }
        },
        {
          path: 'newTable',
          name: 'newTable',
          // component: login,
          // 按需加载
          component: resolve => require(['@/components/newTable.vue'], resolve),
          meta: { title: 'newTable', noCache: true }
        },
        {
          path: 'cropper',
          name: 'cropper',
          // component: login,
          // 按需加载
          component: resolve => require(['@/components/cropper.vue'], resolve),
          meta: { title: 'cropper', noCache: true }
        }
      ],
      meta: { title: 'copper', noCache: true }
    }

    // {
    //   // 控制中心
    //   path: '/layout',
    //   name: 'layout',
    //   // component: layout,
    //   component: (resolve) => require(['@/components/layout'], resolve),
    //   meta: { title: '控制中心', noCache: true, requiresAuth: true },
    //   //  Datamanagement
    //   children: [].concat(
    //     projectdata,
    //     Datamanagement,
    //     AuthorityManagement,
    //     ProductManagement
    //   )
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = store.state.login.token ? store.state.login.token : ''
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (token === '') {
//       next({
//         path: '/',
//         // query: { redirect: to.fullPath }
//       })
//       window.document.title = ` | 登录页`
//     } else {
//       next()
//     }
//   } else {
//     next()
//     // 确保一定要调用 next()
//   }
//   // // 如果未匹配到路由
//   // if (to.matched.length === 0) {
//   //   from.name ? next({ name: from.name }) : next('/404-page')
//   // } else {
//   //   // 如果匹配到正确跳转
//   //   next()
//   // }
// })

// router.afterEach((to, from, next) => {
//   window.document.title = ` | ${to.meta.title}`
// })

export default router

export default [
  {
    path: '/',
    name: '',
    component: () => import(''),
    beforeEnter: (to, from, next) => {


      next();

    },
    children: [
      {

        path: '',
        name: '',
        component: resolve =>
          require([''], resolve)
      },


    ]
  },

]

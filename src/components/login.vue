// <template>
 
// </template>
// <script>
// import { Message } from 'element-ui'
// import aes from '@/util/aes'
// import { setTimeout } from 'timers'

// export default {
//   name: 'login',
//   data () {
//     return {
//       name: '',
//       password: ''
//     }
//   },
//   mounted () {
   
//   },
//   components: {},
//   methods: {
//     async login () {
//       const params = {
//         userAccount: aes.Encrypt(this.name.trim()),
//         password: aes.Encrypt(this.password.trim())
//       }
//       // /release/page/login
//       await this.$http('/release/page/login', params, 'POST').then(res => {
//         if (res.data.resultCode === '0000') {
//           console.log('99999', res.data.data)
//           this.$store.commit('SET_USER_INFO', res.data.data.tokenValue)
//           sessionStorage.setItem(
//             'userName',
//             JSON.stringify(res.data.data.userName)
//           )
//           sessionStorage.setItem(
//             'userAccount',
//             JSON.stringify(res.data.data.userAccount)
//           )
//           // let redirect = decodeURIComponent(this.$route.query.redirect || '/')
//           // this.$router.push({
//           //   path: redirect
//           // })
//           setTimeout(() => {
//             this.$router.push({ name: 'home' })
//           }, 10)
//         } else {
//           Message({
//             message: '用户名,密码错误',
//             type: 'error',
//             duration: 1000
//           })
//         }
//       })
//     }
//   }
// }
// </script>
// <style lang='less'>
// .login {
//   .el-input--medium .el-input__inner {
//     border-radius: 1px;
//   }
// }
// </style>

// <style scoped>
// .login {
//   width: 100%;
//   height: 100%;
//   position: relative;
// }
// .header {
//   width: 100%;
//   height: 60px;
//   padding-left: 55px;
//   padding-top: 16px;
//   background: #181a1d;
// }
// .main {
//   width: 100%;
//   height: calc(100% - 60px);
//   background: url("/static/images/logobg.png") no-repeat 0px 0px;
//   background-size: 100% 100%;
// }
// .loginlayer {
//   height: 582px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   margin-left: -496px;
//   margin-top: -290px;
//   display: flex;
// }
// .left {
//   width: 506px;
//   height: 100%;
//   background: url("/static/images/denglubg.png") no-repeat 0px 0px;
//   background-size: 100% 100%;
//   padding: 60px 0px 0px 54px;
// }
// .right {
//   width: 486px;
//   height: 100%;
//   padding: 60px 68px 0px 60px;
//   background: white;
// }
// .linear-gradient {
//   width: 100%;
//   height: 24px;
// }
// .loginbottom {
//   width: 100%;
//   height: 40px;
//   font-size: 14px;
//   border-radius: 1px;
//   background-image: linear-gradient(90deg, #23c5ff 0%, #2275fe 100%);
// }
// </style>

import Vue from 'vue'
import Router from 'vue-router'
import home from '@router/modules/home/index'
import login from '@router/modules/login/index'
// import root from './root.vue'
// import err from './err.vue'

Vue.use(Router)

const routes = [
  // {
  //   path: '/',
  //   name: '/',
  //   component: root
  // },
  {
    path: '/',
    name: '/',
    redirect: '/login'
  },
  home,
  login
  // {
  //   path: '*', // 用于匹配404页面
  //   redirect: '/404'
  // },
]

console.log(process.env)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  const data = JSON.parse(localStorage.getItem('data'))
  if (to.meta.requireAuth) {
    if (data && data.isLogin) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if (data && data.isLogin) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  }
})

export default router

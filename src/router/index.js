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
  if (to.meta.requireAuth) { // 需要登录的路由
    if (data && data.isLogin) { // 已经登录，直接进入下一管道
      next()
    } else {
      next({
        path: '/' // 未登录，直接返回登录
      })
    }
  } else { // 不需要登录的路由
    if (data && data.isLogin) { // 已经登录，直接进入home
      next({
        path: '/home'
      })
    } else {
      next() // 未登录，直接进入下一管道
    }
  }
})

export default router

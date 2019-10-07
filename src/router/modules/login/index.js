const login = () => import(/* webpackChunkName: "login" */ '@views/login/login.vue')

export default {
  path: '/login',
  name: 'login',
  component: login
}

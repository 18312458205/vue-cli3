const home = () => import(/* webpackChunkName: "home" */ '@views/home/index.vue')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: { requireAuth: true }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: { requireAuth: true }
  }
]

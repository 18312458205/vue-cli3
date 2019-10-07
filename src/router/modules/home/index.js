const home = () => import(/* webpackChunkName: "home" */ '@views/home/index.vue')

export default {
  path: '/home',
  name: 'home',
  component: home,
  meta: { requireAuth: true }
}

const home = () => import(/* webpackChunkName: "home" */ '@views/home/index.vue')
const wangModal = () => import(/* webpackChunkName: "wangModal" */ '@views/home/wangModal.vue')
const wangForm = () => import(/* webpackChunkName: "wangForm" */ '@views/home/wangForm.vue')
const wangInput = () => import(/* webpackChunkName: "wangInput" */ '@views/home/wangInput.vue')
const dispatch = () => import(/* webpackChunkName: "dispatch" */ '@views/home/dispatch.vue')
const demo1 = () => import(/* webpackChunkName: "demo1" */ '@views/home/demo1.vue')

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
  },
  {
    path: '/components/wangmodal',
    name: 'wangmodal',
    component: wangModal,
    meta: { requireAuth: true }
  },
  {
    path: '/components/wangform',
    name: 'wangform',
    component: wangForm,
    meta: { requireAuth: true }
  },
  {
    path: '/components/wanginput',
    name: 'wanginput',
    component: wangInput,
    meta: { requireAuth: true }
  },
  {
    path: '/components/dispatch',
    name: 'dispatch',
    component: dispatch,
    meta: { requireAuth: true }
  },
  {
    path: '/components/demo1',
    name: 'demo1',
    component: demo1,
    meta: { requireAuth: true }
  }
]

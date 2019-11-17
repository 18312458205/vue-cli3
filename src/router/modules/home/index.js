const home = () => import(/* webpackChunkName: "home" */ '@views/home/index.vue')
const wangModal = () => import(/* webpackChunkName: "home" */ '@views/home/wangModal.vue')
const wangForm = () => import(/* webpackChunkName: "home" */ '@views/home/wangForm.vue')
const wangInput = () => import(/* webpackChunkName: "home" */ '@views/home/wangInput.vue')
const dispatch = () => import(/* webpackChunkName: "home" */ '@views/home/dispatch.vue')

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
  }
]

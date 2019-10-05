import page1 from '@views/page1/index.vue'
const storage = () => import(/* webpackChunkName: "storage" */ '@views/page1/storage.vue')

export default {
  path: '/page1',
  name: 'page1',
  component: page1,
  children: [
    {
      path: 'storage',
      name: 'storage',
      component: storage
    }
  ]
}

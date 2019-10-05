import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@router/modules/page1/index'

Vue.use(Router)

const routes = [
  page1
]

const router = new Router({
  routes
})

export default router

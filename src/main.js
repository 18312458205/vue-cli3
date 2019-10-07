import Vue from 'vue'
import '@babel/polyfill'
import App from './App.vue'
import router from '@router/index'
import store from '@store/index'
// import './registerServiceWorker'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './styles/index.less'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import base from './utils'
import { $get, $post } from '@/api/request'
import Element from 'element-ui'
import conf from './config'
import './styles/element-variables.scss'
import './styles/common.scss'
import { commonMixin } from './mixin/common'
// import './utils/element'
Vue.config.productionTip = false
Vue.prototype.$base = base()
Vue.prototype.$conf = conf
Vue.mixin(commonMixin)
Vue.use(Element, { size: 'small' })
// eslint-disable-next-line no-undef
// Vue.prototype.$wzMap = aimap
Object.assign(Vue.prototype, {
  $get
})
Object.assign(Vue.prototype, {
  $post
})
// rem()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

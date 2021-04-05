import Vue from 'vue'
import store from '@store'
import router from '@router'
import App from './App.vue'

import '@plugins'
import '@components'
import '@components/element-ui'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  ...App
})

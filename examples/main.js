import Vue from 'vue'
import App from './App.vue'

import colorSelect from '../packages/index'
Vue.use(colorSelect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

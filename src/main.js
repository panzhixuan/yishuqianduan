// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
// import App from './App'
import Entry from './pages/entry'

Vue.use(Element)
Vue.use(Router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#entry',
  components: { Entry },
  template: '<Entry/>'
}).$mount('#entry')

Vue.use(VueAxios, axios)
// axios.defaults.baseURL="http://localhost:8082/"
// new Vue({
//   router,
//   el: '#seller',
//   components: { Seller },
//   template: '<Seller/>'
// }).$mount('#seller')

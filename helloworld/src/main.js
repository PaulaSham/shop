import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import VueResource from 'vue-resource'  //发送http请求
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/css/style.css'
import '@/common/font/font-awesome/css/font-awesome.min.css'

import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */



// UI框架组件按需引入
import {Row, Col, Search,Button,Cell,CellGroup} from 'vant'
Vue.use(Row).use(Col).use(Search).use(Button).use(Cell).use(CellGroup)




new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

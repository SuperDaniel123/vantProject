// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/css/style.css'
import '@/common/font/font-awesome/css/font-awesome.min.css'
import './common/js/axios'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */



// UI框架组件按需引入
import {Row, Col, Search,Button,Cell,CellGroup,Picker,Actionsheet,Popup,Area,List,Toast,Loading} from 'vant'
Vue.use(Row).use(Col).use(Search).use(Button).use(Cell).use(CellGroup).use(Picker).use(Actionsheet).use(Popup).use(Area).use(List).use(Toast).use(Loading)



var mid = sessionStorage.getItem('MID');

//判断登录全局守卫
router.beforeEach((to, from, next) => {
  let timers = Date.parse(new Date())
  if(timers >= localStorage.getItem('time')){
      sessionStorage.removeItem('MID')
      setTimeout(()=>{
          next('/login')
          return
      },1000)
  }
  if(mid){
    store.commit('IS_LOGIN', true)
  }
  if(to.path === '/login'){
    next()
  }else if(store.getters.isLogin == false){
    next('/login')
  }else{
    next();
  }
})


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

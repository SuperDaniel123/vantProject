import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:resolve => require(['../base/rootLayer'],resolve),
      children:[
        {
          path:'/',
          name:'index',
          component:resolve => require(['@/base/index'],resolve)
        },
        {
          path:'/newsList',
          name:'nameList',
          component:resolve => require(['@/base/newsList'],resolve)
        },
        //新闻详情
        {
          path:'/newsDetails',
          name:'newsDetails',
          component:resolve => require(['@/base/newsDetails'],resolve)
        },
        //产品
        {
          path:'/product',
          name:'product',
          component:resolve => require(['@/base/product'],resolve)
        },
        //充值
        {
          path:'/recharge',
          name:'recharge',
          component:resolve => require(['@/base/recharge'],resolve)
        },
        {
          path:'/withdraw',
          name:'withdraw',
          component:resolve => require(['@/base/withdraw'],resolve)
        }
      ]
    },


    {
      path:'*',
      redirect:'/'
    }
  ]
})

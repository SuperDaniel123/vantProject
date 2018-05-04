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
      component:resolve => require(['@/base/rootLayer'],resolve),
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
        //提现
        {
          path:'/withdraw',
          name:'withdraw',
          component:resolve => require(['@/base/withdraw'],resolve)
        },
        //登录
        {
          path:'/login',
          name:'login',
          component:resolve => require(['@/base/login'],resolve)
        },
        //测试
        {
          path:'/hello',
          name:'hello',
          component:resolve => require(['@/components/HelloWorld'],resolve)
        },
        //设置
        {
          path:'/setting',
          name:'setting',
          component:resolve => require(['@/base/setting'],resolve)
        },
        //历史交易
        {
          path:'/record',
          name:'record',
          component:resolve => require(['@/base/record'],resolve)
        },
        //历史交易列表
        {
          path:'/recordList',
          name:'recordList',
          component:resolve => require(['@/base/recordList'],resolve)
        },

        //修改密码
        {
          path:'/password/:id',
          name:'password',
          component:resolve => require(['@/base/password'],resolve)
        },

        //绑定银行卡
        {
          path:'/bankcard',
          name:'bankcard',
          component:resolve => require(['@/base/bankcard'],resolve)
        }
      ]
    },


    {
      path:'*',
      redirect:'/'
    }
  ]
})

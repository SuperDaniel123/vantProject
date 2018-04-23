<template>
  <div>
      <div class="userTop">
          <img class="bg" src="../common/images/userTop.jpg" />
          <div class="userDest">
              <img src="../common/images/userhead.png" alt="">
              <div class="ds">
                  <h2>刘某某</h2>
                  <span>余额：100元</span>
              </div>
          </div>
          <i class="setting"></i>
      </div>
      <ul class="part">
          <router-link :to="{path:'/recharge'}"><li>充值<div class="val"></div></li></router-link>
          <router-link :to="{path:'/withdraw'}"><li>提现</li></router-link>
      </ul>
      <div class="e-line"></div>
      <van-cell-group>
          <van-cell title="我的持仓" icon="wap-home" is-link />
          <van-cell title="资金明细" icon="exchange" is-link />
      </van-cell-group>
      <div class="e-line"></div>
      <van-cell-group>
          <van-cell title="历史交易" icon="clock" is-link />
          <van-cell title="我的消息" icon="chat" is-link />
      </van-cell-group>
      <div class="e-line"></div>
      <van-cell-group>
          <van-cell title="我的推广" icon="exchange-record" is-link />
          <van-cell title="客服热线" icon="contact" is-link />
      </van-cell-group>
      
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.userTop{
    position: relative;
    .bg{
        width:100%;
        vertical-align: middle;
    }
    .userDest{
        position: absolute;
        height:5rem;
        margin-top:-2.5rem;
        top:50%;
        left:2rem;
        display: inline-block;
        img{
            float: left;
            width:5rem;
            height:5rem;
            vertical-align: middle;
            object-fit: cover;
        }

        .ds{
            float: left;
            padding-top:1rem;
            color:@white;
            margin-left: 0.5rem;
            h2{
                font-size:@font1-25;
            }
            span{
                font-size:@font1;
            }
        }
    }
    .setting{
        display: block;
        width:3rem;
        height:3rem;
        background: url('../common/images/cog.png') no-repeat center center;
        background-size:3rem;
        position: absolute;
        top:50%;
        margin-top:-1.5rem;
        right:2rem;
        
    }
}
.part{
    display: flex;
    a{
        flex:1;
    }
    li{
        text-align: center;
        line-height: 4rem;
        height:4rem;
        
        font-size:1.2rem;
        position: relative;
        .val{
            .vertical;
        }
    }
}
</style>


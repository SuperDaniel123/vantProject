<template>
  <div>
      <i-header :headline="name"></i-header>
      <div class="content">
          <ul class="priceBox">
              <li class="red">
                  <h2>11.56<i class="fa fa-caret-up"></i></h2>
                  <p><span>+0.07</span><span>+0.61%</span></p>
              </li>
              <li>
                  <ul class="history">
                      <li>昨收<span>11.50</span></li>
                      <li>今开<span>11.50</span></li>
                      <li>最高<span>11.50</span></li>
                      <li>最低<span>11.50</span></li>
                  </ul>
              </li>
          </ul>
          <div class="e-line"></div>
      </div>
  </div>
</template>

<script>
import iHeader from '@/components/i-header'
export default {
    components:{
        iHeader
    },
    data(){
        return{
            name:'浦发银行'
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.priceBox{
    display: flex;
    >li:nth-of-type(1){
        flex:1;
        padding:1rem;
        text-align: center;
        h2{
            font-size:2.5rem;
            i{
                font-size:1.8rem;
                margin-left: 0.5rem;
            }
        }
        span{
            font-size:1rem;
            padding:0 0.5rem;
        }
    }
    >li:nth-of-type(1).red{
        color:@red;
    }
    >li:nth-of-type(1).blue{
        color:@blue;
    }


    >li:nth-of-type(2){
        flex:1;
        padding:1rem 2rem;
        ul.history{
            display: flex;
            flex-wrap:wrap;
            li{
                width:50%;
                color:@font-Sgray;
                font-size:12px;
                text-align: center;
                span{
                    display: inline-block;
                    width:100%;
                    color:@font-Lgray;
                }
            }
        }
    }
}
</style>

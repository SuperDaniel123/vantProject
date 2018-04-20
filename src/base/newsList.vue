<template>
  <div>
        <i-header :headline="name"></i-header>
        <div class="content">
            <ul class="newsList">
                <router-link :to="{path:'/newsDetails'}">
                <li>
                    <h2>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</h2>
                    <div class="datum">
                        <p>证券时报网</p>
                        <p>2018-04-04  10:26:13</p>
                    </div>
                </li>
                </router-link>
            </ul>
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
            name:'资讯'
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.newsList{
    li{
        padding:1rem 0 ;
        margin-left: 1rem;
        background: url('../common/images/more.png') no-repeat 97% center;
        background-size:auto 1rem;
        .bottomRim;
        h2{
            padding-right:3rem;
            font-size:1.2rem;
            font-weight: bold;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .datum{
            display: flex;
            p{
                flex:1;
                color:@font-Sgray;
                font-size:@font1;
                margin-top:0.5rem;
            }
        }
    }
}
</style>

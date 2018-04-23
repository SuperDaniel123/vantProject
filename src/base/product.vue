<template>
  <div>
        <i-header :headline="name"></i-header>
        <div class="content" style="padding-bottom:4rem;">
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
            <!--线图-->
            <div class="charts">
                <div class="tab">
                    <span v-for="(item,index) in chartTab" :key="index" :class="item.state == 1? 'activate' : ''" @click="getShow(index)">
                        {{item.value}}<i v-show="item.state == 1"></i>
                    </span>
                </div>
                <time-charts v-if="chartTabFlag == 0"></time-charts>
                <grail-charts v-if="chartTabFlag != 0" :eindex ="this.eNode"></grail-charts>
            </div>
            <div class="e-line"></div>
            <div class="common buyDetail" v-if="stateNode == 0">
                <div class="title"><i></i><span>交易</span></div>
                <ul>
                    <li>认购:<span>11.80</span></li>
                    <li>现价:<span>11.50</span></li>
                    <li>盈亏:<span class="red">4231.5元</span></li>
                    <li>周期:<span>2018-08-30 至 2018-09-30</span></li>
                    <li>认购时间:<span>2018-08-30</span></li>
                </ul>
                <button>出售期权</button>
            </div>



            <div class="common choose" v-if="stateNode == 1">
                <div class="title"><i></i><span>资讯推荐</span></div>
                <ul>
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
                <div class="buttonList">
                    <button>删除自选</button>
                    <button>认购期权</button>
                </div> 
            </div>
        </div>
  </div>
</template>

<script>
import timeCharts from '@/components/timeCharts'
import iHeader from '@/components/i-header'
import grailCharts from '@/components/grailCharts'
export default {
    components:{
        iHeader,
        timeCharts,
        grailCharts
    },
    computed:{

    },
    data(){
        return{
            name:'浦发银行',
            //最新动态开关
            chartTab:[
                {
                    key:'0',
                    value:'时分',
                    state:1
                },
                {
                    key:'1',
                    value:'1m',
                    state:0
                },
                {
                    key:'15',
                    value:'15m',
                    state:0
                },
                {
                    key:'60',
                    value:'1h',
                    state:0
                },
                {
                    key:'1440',
                    value:'日K',
                    state:0
                },
                
            ],
            chartTabFlag:0,
            //当前线图对象
            eNode:'',
            stateNode:1
        }
    },
    methods:{
        getShow(id){
            this.chartTabFlag = id;
            for (let i = 0; i < this.chartTab.length ; i++){
                let temp = this.chartTab[i]
                temp['state'] = 0
                if(i == id){
                    temp['state'] = 1
                }
            }
            this.eNode = this.chartTab[id]

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
.charts{
    .tab{
        padding:1rem;
        position: relative;
        text-align: center;
        .bottomRim;
        span{
            display: inline-block;
            padding:0 1.5rem;
            font-size:@font1;
            position: relative;
            i{
                display: block;
                position: absolute;
                height:2px;
                border-radius: 1px;
                width:2rem;
                bottom:-1rem;
                left: 50%;
                background: @blue;
                margin-left:-1rem;
            } 
        }
        span.activate{
            transition: all 0.2s;
            color:@blue;
        }
    }
}
.buyDetail{
    ul{
        padding-left: 1rem;
        li{
            height:3rem;
            padding-right:1rem;
            line-height: 3rem;
            font-size:@font1;
            .bottomRim;
            span{
                float: right;
                color:@font-Sgray;
            }
            span.red{
                color:@red;
            }
        }
    }
    button{
        width:100%;
        position: fixed;
        bottom:0;
        left: 0;
        height:3rem;
        background: @blue;
        color:@white;
        font-size:@font1;
        
    }
}
.common{
    .title{
        height:3rem;
        padding:0 1rem;
        line-height: 3rem;
        .bottomRim;
        i{
            display: inline-block;
            width:0.6rem;
            height:0.6rem;
            background: @blue;
            border-radius: 50%;
            margin-right:0.5rem;
        }
        span{
            font-size:@font1;
            font-weight: bold;
        }
    }
}
.choose{
    ul{
        padding-left:1rem;
        li{
            padding:1rem 1rem 1rem 0;
            background: url('../common/images/more.png') no-repeat 98% center;
            background-size:0.8rem auto;
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
    .buttonList{
        width:100%;
        position: fixed;
        bottom:0;
        left: 0;
        display: flex;
        button{
            flex:1;
            line-height: 3rem;
            height:3rem;
            font-size:1rem;
        }
        button:nth-of-type(1){
            background:@borderColor;
            color:@font-Lgray;
        }
        button:nth-of-type(2){
            background:@blue;
            color:@white;
        }
    }

}
</style>

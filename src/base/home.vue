<template>
  <div>
        <div class="banner">
            <img src="../common/images/banner.jpg" />
        </div>
        <van-row class="market">
            <van-col span="8" v-for="(item,index) in marketList" :key ="index">
                <h3 v-text="item.name"></h3>
                <h2 v-text="item.Ask"></h2>
                <p>
                    <span v-text="item.low" ></span>
                    <span v-text="item.range"></span>
                </p>
                <div class="ver" v-if="index != 2"></div>
            </van-col>
        </van-row>
      
        <div class="dynamic common">
            <div class="tit">
                <span v-for="(item,index) in dynamic" :key="index" :class="item.state == 1? 'activate' : ''" @click="getShow(index)">
                    {{item.title}}<i v-if="item.state == 1"></i>
                </span>
            </div>
            
            <ul class="ctxList commonList" v-if="dynamicFlag == 0">
                <swiper :options="swiperOption" ref="mySwiper" class="swiper-no-swiping">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in recent" :key="index">
                        <li>
                            <div class="he">
                                <img src="../common/images/userhead.jpg" />
                                <span class="userName">{{item.IDName}}</span>
                            </div>
                            <div class="detail">
                                <span>{{item.Code}} {{item.Name}}</span>
                                <span>{{item.CurrentPrice}} <small>认购</small></span>
                                <span>{{item.CurrentTime}}</span>
                            </div>
                        </li>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <li>
                            <div class="he">
                                <img src="../common/images/userhead.jpg" />
                                <span class="userName">123123</span>
                            </div>
                            <div class="detail">
                                <span>600000 阿萨德</span>
                                <span>222 <small>认购</small></span>
                                <span>666</span>
                            </div>
                        </li>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <li>
                            <div class="he">
                                <img src="../common/images/userhead.jpg" />
                                <span class="userName">123123</span>
                            </div>
                            <div class="detail">
                                <span>600000 阿萨德</span>
                                <span>222 <small>认购</small></span>
                                <span>666</span>
                            </div>
                        </li>
                    </swiper-slide>

                </swiper>
                
            </ul>
            <div class="tactics" v-if="dynamicFlag == 1">
                <div style="line-height:3rem; text-align: center;">暂无数据</div>
            </div>
        </div>
        <!--分隔符-->
        <div class="e-line"></div>

        <div class="common">
            <div class="title"><i></i><span>我的订单</span><div class="more">更多</div></div>
            <ul class="myOrder commonList">
                    <li>
                        <router-link to="/product">
                        <h2 class="protit">浦发银行<span>600000</span></h2>
                        <ul class="selling">
                            <li><span>涨幅</span><small class="red">8.68</small></li>
                            <li><span>认购</span><small>11.58</small></li>
                            <li><span>现价</span><small>11.90</small></li>
                            <li><span>盈亏</span><small class="red">4521.6</small></li>
                        </ul>
                        </router-link>
                    </li>
            </ul>
        </div>
        <div class="e-line"></div>

        <div class="common">
            <div class="title"><i></i><span>资讯</span><router-link to="/newsList"><div class="more">详情</div></router-link></div>
            <ul class="newsList commonList">
                <li v-for="(item,index) in newsList" :key="index">
                    <h2 v-text="item.Span"></h2>
                    <div class="datum">
                        <!-- <p>证券时报网</p> -->
                        <p v-text="item.Time"></p>
                    </div>
                </li>
                
            </ul>
        </div>


  </div>
</template>

<script>
import  {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import {mapGetters} from 'vuex'
export default {
    components:{
        swiper, 
        swiperSlide
    },
    created(){
        this.getNews()
        this.recentNews()
    },
    computed:{
        ...mapGetters(['setMID'])
    },
    data(){
        return{
            marketList:[
                {
                    name:'上证指数',
                    Ask:'3157.49',
                    low:'+19.49',
                    range:'+0.59'
                },
                {
                    name:'深成指数',
                    Ask:'3157.49',
                    low:'+19.49',
                    range:'+0.59'
                },
                {
                    name:'创业板指',
                    Ask:'3157.49',
                    low:'-19.49',
                    range:'-0.59'
                }
            ],
            swiperOption: {
                slidesPerView: 3,
                autoplay:true,
                direction:'vertical',
                autoHeight:true,
            },
            //最新动态开关
            dynamic:[
                {
                    title:'最新动态',
                    state:1
                },
                {
                    title:'最优策略',
                    state:0
                }
            ],
            dynamicFlag:0,
            newsList:[],
            recent:[]
        }
    },
    methods:{
        getShow(id){
            this.dynamicFlag = id;
            for (let i = 0; i < this.dynamic.length ; i++){
                let temp = this.dynamic[i]
                temp['state'] = 0
                if(i == id){
                    temp['state'] = 1
                }
            }
        },
        //新闻列表
        getNews(){
            this.$ajax('/news/list','get').then(res=>{
                let data = res.data;
                if(data.ResultCD != 200){
                    this.$toast.fail(data.ErrorMsg)
                    return;
                }
                for(let i = 0; i < 3; i++){
                    this.newsList.push(data.Data.News[i])
                }
            })
        },
        //最新动态
        recentNews(){
            this.$ajax('/trade/new_trade','post',{MID:this.setMID}).then(res=>{
                let data = res.data;
                if(data.ResultCD != 200){
                    this.$toast(data.ErrorMsg)
                    return;
                }
                this.recent = data.Data.order_list;
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
    .banner{
        img{
            width:100%;
            vertical-align: middle;
        }
    }
    .market{
        text-align: center;
        .bottomRim;
        h3{
            font-size:@font1-25;
            line-height: 3rem;
        }
        h2{
            font-size:@font1-5;
            line-height: 2rem;
            color:@red;
        }
        p{
            padding-bottom: 0.5rem;
            line-height: 1.5rem;
            span{
                color:@red;
            }
            span:nth-of-type(1){
                float: left;
                padding-left: @font1-25;
            }
            span:nth-of-type(2){
                float: right;
                padding-right: @font1-25;
            }
        }
        .van-col{
            position: relative;
            height:7rem;
            .ver{
                .vertical; 
            }
        }
    }
    .dynamic{
        .tit{
            border-bottom: 1px solid @borderColor;
            padding:1rem;
            position: relative;
            span{
                display: inline-block;
                padding-right:0.5rem;
                margin-right:0.5rem; 
                border-right: 1px solid @borderColor;
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
                color:@blue;
            }
            span:nth-last-of-type(1){
                border:none;
            }
            .more{
                float: right;
                color:@font-Sgray;
            }
        }
        .ctxList{
            margin-top:1rem;
            li{

                box-sizing:border-box;
                padding-bottom: 1rem;
                .bottomRim !important;
                .he{
                    img{
                        height:4rem;
                        width:4rem;
                        vertical-align: middle;
                        object-fit: cover
                    }
                    .userName{
                        font-size:@font1-25;
                        padding-left: 0.5rem;
                    }
                }
                .detail{
                    margin-top:0.5rem;
                    display: flex;
                    span{
                        flex:1;
                        text-align: center;
                        font-size:1.1rem;
                        color:@font-Sgray;
                    }
                    span:nth-of-type(1){
                        text-align: left;
                        font-weight: bold;
                        color:@font-Lgray;
                    }
                    span:nth-of-type(3){
                        text-align: right;
                        
                    }
                }
            }
        }

        .tactics{

        }
    }

    .myOrder{
        >li{
            display: flex;
            padding:1rem 0;
            .bottomRim;
            .protit{
                display: inline-block;
                line-height: 1.5rem;
                text-align: center;
                font-size:@font1-25;
                span{
                    display: block;
                    font-size:@font1;
                    color:@font-Sgray;
                }
            }
            .selling{
                flex: 1;
                float: right;
                display: flex;
                li{
                    flex: 1;
                    text-align: center;
                    line-height: 1.5rem;
                    span{
                        display: inline-block;
                        width:100%;
                        color:@font-Sgray;
                    }
                    .red{
                        color:@red;
                    }
                }
            }
        }

    }

    .newsList{
        li{
            padding:1rem 0;
            background: url('../common/images/more.png') no-repeat right center;
            background-size:auto 1rem; 
            .bottomRim;
            h2{
                padding-right:3rem;
                font-size:1.1rem;
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
                font-size:1.1rem;
                font-weight: bold;
            }
            .more{
                float: right;
                font-size:@font1;
                color:@font-Sgray;
            }
            
        }
        .commonList{
            padding:0 1rem;
            li:nth-last-of-type(1){
                border: none;
            }
        }
    }
.swiper-container{
    height:24rem;
}
.swiper-slide {
    height:8rem !important;
}

</style>

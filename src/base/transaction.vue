<template>
  <div>
        <nav class="transTab">
                <span v-for="(item,index) in tabTeams" :key="index" :class="item.state == 1? 'activate' : ''" @click="getShow(index)">
                    {{item.title}}<div class="val" v-if="index != 2"></div><i v-if="item.state == 1"></i>
                </span>
        </nav>
      
        
        <!--交易-->
        <div class="trDeal" v-if="index == 0">
            <div class="electBox">
                <p><b>股票:</b><input class="ftext" type="text" placeholder="请输入股票编号或名称" v-model="searchText" />
                    <span>行情<i class="fa  fa-angle-right"></i></span>
                </p>
                <div class="nowpay">当前价:0.00</div>
                <ul class="searchList" v-if="searchFlag == true">
                    <li v-if="!searchLoad" v-for="(item,index) in searchData" :key="index" @click="getData(index)">
                        <span>代号:{{item.Code}}</span><span>名称:{{item.Name}}</span>
                    </li>
                    <div class="jjz" v-if="searchLoad">加载中...</div>
                    <div class="close"><span @click="searchFlag = false">关闭</span></div>
                </ul>
            </div>
            <div class="e-line"></div>

            <ul class="deadline commonList">
                <li><p>期限：<span>1周</span></p><p>权利金比例：<span>4.56%</span></p><input type="radio" v-model="radio" value="1" /></li>
                <li><p>期限：<span>1月</span></p><p>权利金比例：<span>4.56%</span></p><input type="radio" v-model="radio" value="2" /></li>
                <li><p>期限：<span>2月</span></p><p>权利金比例：<span>4.56%</span></p><input type="radio" v-model="radio" value="3" /></li>
                <li><p>期限：<span>3月</span></p><p>权利金比例：<span>4.56%</span></p><input type="radio" v-model="radio" value="4" /></li>
            </ul>
            <div class="e-line"></div>
            <div class="sumBox">
                <p class="cc"><span>名义本金：</span><input type="number" v-model="sum" placeholder="请输入金额30万元起" />万</p>
                <ul class="sumlist">
                    <li v-for="(item,index) in sumTeams" :key="index" @click="setSum(item.value,index)" :class="item.state == 1? 'active':''">{{item.title}}</li>
                </ul>
            </div>
            <ul class="commonList accountMore">
                <li>认购权利金：<span class="red">0.00</span></li>
                <li>市场交易：<span>以市价委托成交</span></li>
                <li>到期日期：<span>2018-05-09</span></li>
                <!-- <li>预期收益率：<span class="red">140.96%</span></li> -->
                <li>预期盈利额：<span class="red">23400.00元</span></li>
            </ul>
            <div class="e-line"></div>
            <div class="settle">
                <div><p>需支付:<span>0.00</span>元</p></div>
                <button @click="settleOther">立即结算<br><small>( 余额:{{this.capital.aBalance}} )</small></button>
            </div>
        </div>
 
        <!--挂单-->
        <entry-orders v-if="index == 1"></entry-orders>
        
        <!--持仓-->
        <my-order v-if="index == 2"></my-order>
        
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import entryOrders from '@/components/entryOrders'
import myOrder from '@/components/myOrder'
export default {
    components:{
        entryOrders,
        myOrder
    },
    watch:{
        'radio'(val,old){
            // console.log(val)
        },
        'searchText'(val,old){
            if(val == '' || this.cid == 0){
                this.searchFlag = false;
                this.cid = 1
                return
            }
            this.searchFlag = true
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{
                this.searchLoad = true;
            },500)
        },
        'searchLoad'(){
            if(this.searchLoad){
                this.getSearchData()
            }

        }
    },
    computed:{
        ...mapGetters(['trading','setMID']),
        index(){
            return this.trading
        }
    },

    created(){
        this.getShow(this.trading)
        this.userInfo()
    },
    data(){
        return{
            //tab标签
            tabTeams:[
                {
                    title:'交易',
                    state:'1'
                },
                {
                    title:'挂单',
                    state:'0'
                },
                {
                    title:'持仓',
                    state:'0'
                }
            ],
            //期限radio
            radio:'1',
            //本金
            sum:'',
            //sun选项
            sumTeams:[
                {
                    title:'30万',
                    value:'30',
                    state:0
                },
                {
                    title:'50万',
                    value:'50',
                    state:0
                },
                {
                    title:'100万',
                    value:'100',
                    state:0
                },
                {
                    title:'200万',
                    value:'200',
                    state:0
                },
                {
                    title:'500万',
                    value:'500',
                    state:0
                },
            ],


            /*
             * 搜索功能
             */

            //搜索text
            searchText:'',
            //搜索列表:
            searchData:[],
            //搜索列表选中的项
            searchOpt:'',
            //搜索列表开关
            searchFlag:false,
            //搜索load开关
            searchLoad:false,
            timer:'',
            cid:1,
            //资金
            capital:''
            
        }
    },
    methods:{
        ...mapMutations({
            tra:'TRADING',
        }),
        getShow(id){
            for (let i = 0; i < this.tabTeams.length ; i++){
                let temp = this.tabTeams[i]
                temp['state'] = 0
                if(i == id){
                    temp['state'] = 1
                }
            }
            this.tra(id) 
        },
        setSum(value,index){
            this.sum = value;
            for(let i = 0; i <this.sumTeams.length ; i++){
                let temp = this.sumTeams[i];
                temp['state'] = 0
            }
            this.sumTeams[index]['state'] = 1;
        },
        //获取搜索列表
        getSearchData(){
            let opt = {
                MID:this.setMID,
                keywords:this.searchText,
                page:1,
                limit:8
            }
            this.$ajax('/trade/trade_search','post',opt).then(res=>{
                let data = res.data
                this.searchLoad = true;
                this.searchData = []
                if(data.ResultCD != 200){
                    alert(data.ErrorMsg)
                    return;
                }
                this.searchData = data.Data.item_list;
                this.searchLoad = false;
                this.cid = 1
            })
            
        },
        getData(id){
            let arr = this.searchData;
            this.searchOpt = arr[id];
            this.searchText = arr[id].Name
            this.searchFlag = false;
            this.cid = 0
        },

        placeOrder(){
            let opt = {
                MID:this.setMID,
                OrderInfo:{
                    
                }
            }
        },
        settleOther(){
            let opt = {
                MID:this.setMID,
                ItemID:this.searchOpt['ItemID'],
                NotionalPrincipal:this.sum,
                ExpireDay:30

            }
            this.$ajax('/trade/order','post',opt).then(res=>{
                let data = res.data
                if(data.ResultCD != 200){
                    this.$toast(data.ErrorMsg)
                    return
                }
                this.$toast('购买成功')
                
            })
        },
        userInfo(){
            this.$ajax('/account/balance','post',{MID:this.setMID}).then(res=>{
                let data = res.data
                if(data.ResultCD != 200){
                    this.$toast(data.ErrorMsg)
                    return
                }
                this.capital = data.Data
            })
        }
    },
    beforeDestroy(){
        this.tra(0)
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.transTab{
    width:100%;
    display: flex;
    text-align: center;
    line-height: 4rem;
    .bottomRim;
    span{
        display: block;
        position: relative;
        height:4rem;
        font-size:1.2rem;
        flex:1;
        .val{
            .vertical;
        }
        i{
            display: block;
            position: absolute;
            height:2px;
            border-radius: 1px;
            width:2rem;
            bottom:0;
            left: 50%;
            background: @blue;
            margin-left:-1rem;
        }
    }
    span.activate{
        color:@blue;
    }
}
.trDeal{
    .electBox{
        padding:1.5rem 1rem;
        position: relative;
        p{
            line-height: 2rem;
            b{
                display: inline-block;
                width:3rem;
            }
            .ftext{
                line-height: 2rem;
                height:2rem;
                border: 1px solid @borderColor;
                padding:0 0.5rem;
                color:@font-Sgray;
                width: 19rem;
                box-sizing: border-box;

            }
            span{
                float: right;
                font-size:1rem;
                i{
                    font-size:1rem;
                    padding-left:0.3rem;
                    color:@borderColor;
                }
            }
        }
        .nowpay{
            margin-top:0.5rem;
            padding-left:3rem;
        }
        .searchList{
            width:19rem;
            box-sizing: border-box;
            z-index: 99;
            border:1px solid #f0f0f0;
            background: @white;
            position: absolute;
            top:3.5rem;
            left:4rem;
            li{
                padding:0.5rem 1rem;
                span{
                    padding-right:1rem;
                }
            }
            .close{
                border-top:1px solid #f0f0f0;
                padding:0.5rem 1rem;
                text-align: right;
                color:@blue;
            }
            .jjz{
                line-height: 4rem;
                height:4rem;
                text-align: center;
            }
        }
    }
    .deadline{
        li{
            position: relative;
            p{
                display: inline-block;
                padding-right:3rem;
                span{
                    color:@red;
                }
            }
            
            input[type='radio']{
                position: absolute;
                right:1rem;
                top:50%;
                margin-top:-6px;
            }
        }

    }
    .sumBox{
        padding:1rem;
        line-height: 2rem;
        .bottomRim;
        .cc{
            margin-bottom: 1rem;
            span{display: inline-block;width:5rem;}
            color:@font-Lgray;
            input[type="number"]{
                color:@font-Sgray;
                margin-left: 1rem;
                font-size:1rem;
            }
        }
        .sumlist{
            padding-left: 5rem;
            width:100%;
            box-sizing: border-box;
            display: flex;
            flex-wrap:wrap ;
            li{
                margin:0 2% 2% 0;
                text-align: center;
                line-height: 3rem;
                width:30%;
                box-sizing: border-box;
                border:1px solid @borderColor;
                border-radius: 0.25rem;
            }
            li.active{
                border:1px solid @blue;
                transition: all 0.2s;
                background: @blue;
                color:@white;
            }
        }
    }
    .accountMore{
        padding-bottom: 2rem;
        span{
            padding-right:1rem;
            color:@font-Sgray;
            float: right;
        }
        .red{
            color:@red;
        }
        .blue{
            color:@blue;
        }
    }
    .commonList{
        li{
            margin-left: 1rem;
            line-height: 3rem;
            height:3rem;
            font-size:@font1;
            .bottomRim;
        }
        li:nth-last-of-type(1){
            border:none;
        }
    }
    .settle{
        position: fixed;
        width:100%;
        bottom: 51px;
        display: flex;
        div{
            flex:1;
            background: @white;
            p{
                line-height: 3rem;
                text-align: center;
                font-size:1.3rem;
                span{
                    padding:0 0.2rem;
                    color:@red;
                }
            }
        }
        button{
            width:12rem;
            height:3rem;
            background: @roseRed;
            color:@white;
            line-height: 1rem;
            font-size:1.2rem;
            small{
                font-size:12px !important;
            }
        }
    }
}
</style>

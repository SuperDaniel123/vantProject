<template>
  <div>
        <i-header :headline="name"></i-header>
        <div class="content">
            <div class="pad1">
                <div class="withdraw">
                    <div class="mode">
                        <input type="text" placeholder="请选择充值方式" v-model="inpop">
                        <button @click="getshow">选择其他 <i class="fa  fa-angle-down"></i></button>
                        <van-popup v-model="show" position="bottom" :overlay="true">
                            <van-picker show-toolbar title="选择方式" :columns="columns" @cancel="onCancel" @confirm="onConfirm"/>
                        </van-popup>
                    </div>
                    <div class="figure">
                        <input type="number" v-model="figure" placeholder="请输入金额 (最小10元)" />
                        <span>手续费:2元</span>
                    </div>
                    <ul class="verify">
                        <li class="city" @click="getCity">省份城市: <input type="text" v-model="city" disabled="disabled" placeholder="请选择城市"/></li>
                        <li>身份证:<input type="number" v-model="idCard"  placeholder="请选择身份证"/></li>
                        <li>持卡人:<input type="text" v-model="cardholder"  placeholder="持卡人"/></li>
                        <li>验证码:<input type="number" v-model="authCode"  placeholder="请输入验证码"/><van-button type="primary" size="small" style="float:right;margin-top:0.5rem;">获取验证码</van-button></li>
                    </ul>
                </div>
                <van-button type="primary" size="large">立即提现</van-button>
                <van-popup v-model="ishow" position="bottom" :overlay="true">
                    <van-area :area-list="areaList" @confirm="getAdd" />
                </van-popup>
                
            </div>
            
        </div>
  </div>
</template>

<script>
import iHeader from '@/components/i-header'
import data from '@/common/js/data.json'
export default {
    components:{
        iHeader
    },
    computed:{
        areaList(){
            return data
        }
    },
    data(){
        return{
            name:'提现',
            show:false,
            //地址
            ishow:false,
            //选择列表
            columns: ['微信', '广发银行', '兴业银行', '支付宝', '银联'],
            //当前选择
            inpop:'',
            //金额
            figure:'',
            //省份城市
            city:'',
            //身份证
            idCard:'',
            //持卡人
            cardholder:'',
            //验证码
            authCode:''
        }
    },
    methods:{
        getshow(){
            this.show = true
        },

        //支付方式
        onConfirm(value, index) {
            // console.log(`当前值：${value}, 当前索引：${index}`);
            this.inpop = value
            this.show = false
        },
        onCancel() {
            this.show = false
        },


        //城市
        getAdd(arr){
            let str = ''
            for(let i = 0; i < arr.length; i++){
                let temp = arr[i];
                str += temp['name']+' ';
            }
            this.city = str
            this.ishow = false
        },
        closeCity(){
            this.ishow = false
        },
        getCity(){
            this.ishow = true
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.withdraw{
    padding:1rem;
    box-sizing: border-box;
    width:100%;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    .mode{
        height:2rem;
        // .bottomRim;
        input{
            line-height: 2rem;
            color:@font-Sgray;
            font-size:@font1;
        }
        button{
            float: right;
            height:2rem;
            background: none;
            color:@font-Sgray;
        }
    }

    .figure{
        height:5rem;
        line-height: 5rem;
        input[type="number"]{
            font-size:2rem;
            font-family:  Arial, sans-serif;
            color:@font-Lgray;
            width:70%;
        }
        input::placeholder{
            font-size:12px;
        }
        span{
            float: right;
        }   
    }
    
    .verify{
        line-height: 3rem;
        font-size:@font1;
        li{
            .bottomRim;
            input{
                margin-left: 1.5rem;
                width:70%;
                color:@font-Sgray;
            }
            

        }
        li.city{
            background: url('../common/images/more.png') no-repeat right center;
            background-size:  auto 1rem; 
        }
        li:nth-last-of-type(1){
            input{
                width:10rem;
            }
            
        }
        
    }
    input:disabled{
        background: none;
    }
    
}
</style>

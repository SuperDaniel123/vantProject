<template>
  <div>
        <i-header :headline="name"></i-header>
        <div class="content">
            <div class="pad1">
                <div class="recharge">
                    <div class="mode">
                        <input type="text" placeholder="请选择充值方式" v-model="inpop">
                        <button @click="getshow">选择其他 <i class="fa  fa-angle-down"></i></button>
                        <van-popup v-model="show" position="bottom" :overlay="true">
                            <van-picker show-toolbar title="选择方式" :columns="columns" @cancel="onCancel" @confirm="onConfirm"/>
                        </van-popup>
                    </div>
                    <p class="tip">银联快捷-112每笔收取2%手续费，充值范围：10~10000</p>
                    <div class="sumTab">
                        <van-button type="default" size="small" class="btn" @click="setSum(10)">10元</van-button>
                        <van-button type="default" size="small" class="btn" @click="setSum(50)">50元</van-button>
                        <van-button type="default" size="small" class="btn" @click="setSum(100)">100元</van-button>
                        <van-button type="default" size="small" class="btn" @click="setSum(200)">200元</van-button>
                    </div>
                    <div class="figure">
                        <input type="number" v-model="figure" placeholder="请输入金额 (最小10元)" />
                        <span>手续费:0元</span>
                    </div>
                    <p>订单编号:1234567890123456</p>
                </div>
                <van-button type="primary" size="large">立即充值</van-button>
            </div>
            
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
            name:'充值',
            show:false,
            //选择列表
            columns: ['微信', '广发银行', '兴业银行', '支付宝', '银联'],
            //当前选择
            inpop:'',
            //金额
            figure:''
        }
    },
    methods:{
        getshow(){
            this.show = true
        },
        onConfirm(value, index) {
            // console.log(`当前值：${value}, 当前索引：${index}`);
            this.inpop = value
            this.show = false
        },
        onCancel() {
            this.show = false
        },
        setSum(sum){
            this.figure = +sum
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.recharge{
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
    .tip{
        font-size:12px;
        line-height: 24px;
        color:rgb(201, 201, 201);
        padding-bottom: 0.5rem;
        .bottomRim;
        
    }
    .sumTab{
        text-align: center;
        padding:1rem 0;
        .bottomRim;
        .btn{
            margin:0 0.3rem;
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
    
    
}
</style>

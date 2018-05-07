<template>
    <div>
        <div class="searchBox"  @click="show = true" >
            <van-search placeholder="请输入股票编号/名称/拼音" background="#fff" />
        </div>
        <table border="0" class="stock" cellpadding="10">
            <tr>
                <th>股票名称</th>
                <th>现价</th>
                <th>涨跌幅</th>
                <th></th>
            </tr>
            <tr class="list">
                <td>浦发银行<span>600000</span></td>
                <td class="red">11.53</td>
                <td class="red">+0.09%</td>
                <td><van-button type="danger" size="small">认购</van-button></td>
            </tr>
        </table>
        <van-popup v-model="show" position="right" :overlay="false">
            <div class='popupBox' :style="'height:'+ height">
                <div class="popTop">
                    <i class="fa fa-th-large" @click="show = false"></i>
                    <div class="searchBox">
                        <van-search placeholder="请输入股票编号/名称/拼音" v-model="value" background="#fff" />
                    </div>
                </div>
                
            </div>
        </van-popup>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    watch:{
        'flag'(val,old){
            if(this.flag){
                this.getSearch(this.value)
                this.flag = false;
            }
        },
        'value'(){
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{
                this.flag = true
            },500)
        }
    },
    computed:{
        ...mapGetters(['setMID']),
        height(){
            return document.documentElement.clientHeight+ 'px'
        }
    },
    created(){
    },
    data(){
        return{
            value:'',
            flag:false,
            //节流时间
            timer:'',
            //右侧弹出
            show: false
        }
    },
    methods:{
        //已选商品
        getOptionalList(){
            this.$ajax('/trade/custom','post',{MID:this.setMID}).then(res=>{
                console.log(res)
            })
        },
        //搜索列表
        getSearch(key){
            let opt = {
                MID:this.setMID,
                keywords:key
            }
            this.$ajax('/trade/custom_search','post',opt).then(res=>{
                console.log(res)
            })
        }
    }

}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.searchBox{
    padding:0.5rem 0;
    .bottomRim;
}
.stock{
    margin-top:0.5rem;
    text-align: center;
    width:100%;
    th{
        font-weight: normal;
        color:@font-Sgray;
        width:25%;
        font-size:1.2rem;
    }
    .list{
        font-size:1.1rem;
        .bottomRim;
        span{
            display: block;
            color:@font-Sgray;
            font-size:1rem;
        }
        .red{
            color:@red;
        }
    }
}
.van-popup{
    width:100% !important;
    .popTop{
        position: relative;
        .bottomRim;
        .searchBox{
            width:88%; 
            border:none;
        }
        i{
            position: absolute;
            width:2rem;
            height:2rem;
            line-height: 2rem;
            text-align: center;
            font-size:2rem;
            top:50%;
            right:1rem;
            margin-top:-1rem;
        }
    }
}
</style>

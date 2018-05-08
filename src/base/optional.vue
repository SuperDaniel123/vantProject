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
            <tr class="list" v-for="(item,index) in selectList" :key="index">
                <td>{{item.Name}}<span>{{item.Code}}</span></td>
                <td class="red">11.53</td>
                <td class="red">+0.09%</td>
                <td><van-button type="primary" size="small">详情</van-button></td>
            </tr>
        </table>
        <van-popup v-model="show" position="right" :overlay="false">
            <div class='popupBox' :style="'height:'+ height">
                <div class="popTop">
                    <i class="fa fa-th-large" @click="closePop"></i>
                    <div class="searchBox">
                        <van-search placeholder="请输入股票编号/名称/拼音" v-model="value" background="#fff" />
                    </div>
                </div>
                
                <div class="listStyle">
                    <div v-if="searchList.length == 0" class="nulltext">请输入关键词</div>
                    <ul v-if="searchList.length != 0">
                        <li v-for="(item,index) in searchList" :key="index">
                            <span v-text="item.Code"></span>
                            <span v-text="item.Name"></span>
                            <van-button type="danger" class="dd" size="small" @click="subscription(item.ItemID)">认购</van-button>
                        </li>
                    </ul>
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
        'value'(val,old){
            if(val == ''){
                this.searchList = [];
                return;
            }
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
        this.getOptionalList()
    },
    data(){
        return{
            value:'',
            //已选列表
            selectList:[],
            flag:false,
            //节流时间
            timer:'',
            //右侧弹出
            show: false,
            //搜索列表
            searchList:[],
        }
    },
    methods:{
        //已选商品
        getOptionalList(){
            let opt = {
                MID:this.setMID,

            }
            this.$ajax('/trade/custom','post',opt).then(res=>{
                let data = res.data
                if(data.ResultCD != 200){
                    this.$toast(data.ErrorMsg)
                    return;
                }
                this.selectList = data.Data['item_list']
            })
        },
        //搜索列表
        getSearch(key){
            if(key == ''){
                return;
            }
            let opt = {
                MID:this.setMID,
                keywords:key
            }
            this.$ajax('/trade/custom_search','post',opt).then(res=>{
                let data = res.data
                if(data.ResultCD != 200){
                    this.$toast(data.ErrorMsg)
                    return;
                }
                let arr = data.Data['item_list'];
                this.searchList = arr
            })
        },
        //认购商品
        subscription(id){
            let opt = {
                MID:this.setMID,
                ItemID:id
            }
            this.$ajax('/trade/pitchon','post',opt).then(res=>{
                let data = res.data
                if(data.ResultCD != 200){
                    this.$toast(data.ErrorMsg)
                    return;
                }
                if(data.State == 2){
                    this.$toast('认购商品已存在')
                    return;
                }
                this.$toast('认购成功')
            })
        },
        //关闭pop
        closePop(){
            this.show = false
            this.getOptionalList()
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
    .listStyle{
        .nulltext{
            text-align: center;
            line-height: 3rem;
        }
        ul{
            padding:1rem;
            li{
                .bottomRim;
                line-height: 4rem;
                height:4rem;
                span:nth-of-type(1){
                    color:#ccc;
                }
                span{
                    display: inline-block;
                    margin-right:3rem;
                    font-size:@font1;
                }
                .dd{
                    margin-top:1rem;
                    float: right;
                }
            }
        }
    }
}
</style>

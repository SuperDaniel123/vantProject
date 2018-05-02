<template>
    <div>
        <i-header :headline="headline"></i-header>
        <div class="content" :style="'min-height:'+ height">
            <van-list v-model="loading" :finished="finished"  :offset="100">
                <!-- <div v-for="item in list" :key="item" v-text="item">
                    
                </div> -->
                <div class="fexit">
                    <h2>2018-3-5<span>浦发银行</span></h2>
                    <div class="view">
                        <p class="clearfix">买入价:<i v-text="'1'"></i></p>
                        <p class="clearfix">卖出价:<i v-text="'1'"></i></p>
                        <p class="clearfix">止损:<i v-text="'1'"></i></p>
                        <p class="clearfix">止盈:<i v-text="'1'"></i></p>
                        <p class="clearfix">库存费:<i v-text="0"></i></p>
                        <p class="clearfix">手续费:<i v-text="'1'"></i></p>
                        <p class="clearfix">卖出<i>{{'1'}}手</i></p>
                        <p class="clearfix">获利:<i v-text="11"></i></p>
                    </div>
                </div>
            </van-list>
        </div>

    </div>
</template>

<script>
import iHeader from '@/components/i-header'
export default {
    components:{
        iHeader
    },
    computed:{
        height(){
            return document.documentElement.clientHeight+ 'px'
        }
    },
    data() {
        return {
        list: [],
        loading: false,
        finished: false,
        headline:'历史交易',
        };
    },

    methods: {
        // onLoad() {
        //     setTimeout(() => {
        //         for (let i = 0; i < 20; i++) {
        //         this.list.push(this.list.length + 1);
        //         }
        //         this.loading = false;

        //         if (this.list.length >= 100) {
        //         this.finished = true;
        //         }
        //     }, 1000);
        // }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.content{
    background: #f5f5f5;
}
.fexit{
    margin:0.5rem 1rem;
    background: @white;
    h2{
        line-height: 3rem;
        width:100%;
        height:3rem;
        padding:0 1rem;
        box-sizing: border-box;
        .bottomRim;
        span{
            float: right;
        }
    }
    .view{
        line-height:2.25rem;
        width:100%;
        background: @bgGray;
        display: flex;
        flex-wrap: wrap;
        p{
            width:50%;
            box-sizing: border-box;
            padding:0 0.6rem;
            background: none;
            i{
                float: right;
            }
        }
    }

}
</style>

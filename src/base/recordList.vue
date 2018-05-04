<template>
    <div>
        <i-header :headline="headline"></i-header>
        <div class="content" :style="'min-height:'+ height">
            <van-list v-model="loading" :finished="finished"  @load="onLoad">
                <!-- <div v-for="item in list" :key="item" v-text="item">
                    
                </div> -->
                <div class="fexit">
                    <h2>2018-3-5<span>浦发银行</span></h2>
                    <div class="view">
                        <p class="clearfix">股票代码:<i v-text="'600000'"></i></p>
                        <p class="clearfix">平仓份数:<i v-text="'1'"></i></p>
                        <p class="clearfix">平仓价:<i v-text="'0.00'"></i></p>
                        <p class="clearfix">权利金:<i v-text="'1'"></i></p>
                        <p class="clearfix">行权价:<i v-text="0"></i></p>
                        <p class="clearfix">平仓日:<i v-text="'1'"></i></p>
                        <p class="clearfix">盈亏金额<i>{{'1'}}</i></p>
                    </div>
                </div>

            </van-list>
        </div>

    </div>
</template>

<script>
import iHeader from '@/components/i-header'
import {mapGetters} from 'vuex'
export default {
    components:{
        iHeader
    },
    computed:{
        height(){
            return document.documentElement.clientHeight+ 'px'
        },
        ...mapGetters(['setMID'])
    },
    created(){
        this.trade_history()
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            headline:'历史交易',
            page:1
        };
    },

    methods: {
        onLoad() {
            setTimeout(() => {
                for (let i = 0; i < 20; i++) {
                this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 100) {
                this.finished = true;
                }
            }, 1000);
        },
        trade_history(){
            let opt = {
                MID: this.setMID,
                Page: this.page,
                Limit: 10,
                StartTime: '2017-01-01',
                EndTime: '2018-12-30',
            }
            this.$ajax('/trade/history','post',opt).then(res=>{
                console.log(res)
            })
        }
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

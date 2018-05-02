<template>
    <div>
            <i-header :headline="headline"></i-header>
            <div class="content" :style="'min-height:'+ height">
                <van-cell-group>
                    <van-cell title="充值记录" icon="exchange"  is-link @click="pushList(1)"/>
                    <van-cell title="提现记录" icon="points"  is-link @click="pushList(2)"/>
                </van-cell-group>
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
    data(){
        return {
            headline:'资金明细',
        }
    },
    methods:{
        pushList(id){
            this.$router.push('/recordList')
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.content{
    background: #f5f5f5;
}

</style>

<template>
    <div >
        <div class="loadBg" :style="'min-height:' + height">
            <div class="adorn">
                <van-loading color="white" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        height(){
            return document.documentElement.clientHeight+ 'px'
        }
    },
    data(){
        return{
        }
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.loadBg{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    background: rgba(255, 255, 255, 0.3);
    z-index: 99999;
}
.adorn{
    position: absolute;
    top:50%;
    left: 50%;
    margin:-30px 0 0 -30px;
    width:60px;
    height:60px;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 60px;
    border-radius:5px;
    .van-loading{
       display: inline-block;
    }
}
</style>

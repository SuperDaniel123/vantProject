<template>
    <div>
        <i-header :headline="name"></i-header>
        
        <div class="content">
            <div class="head">
                <img src="@/common/images/userhead.png" />
                <div class="change">更换头像<i class="fa fa-angle-right"></i></div>
            </div>
            <div class="e-line"></div>
            <ul class="dacklist">
                <li><span>昵称:</span><input type="text" v-model="userName" placeholder="昵称" /></li>
                <li><span>电话号码:</span><input type="number" v-model="phone" placeholder="电话号码" /></li>
                <li class="other" @click="goBank">绑定银行卡</li>
            </ul>
            <div class="e-line"></div>
            <ul class="dacklist">
                <li class="other" @click="password(1)">修改登录密码</li>
                <li class="other" @click="password(2)">修改支付密码</li>
            </ul>
            <div class="e-line"></div>
            <button class="btn">确定</button>
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
        return {
            name:'设置',
            userName:'刘翔',
            phone:'13131313131'
        }
    },
    methods:{
        password(id){
            this.$router.push({
                name:'password', params: { id: id }
            })
        },
        goBank(){
            this.$router.push('/bankcard')
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.head{
    padding:0.8rem;
    height:5rem;
    line-height: 5rem;
    img{
        width: 5rem;
        height:5rem;
        object-fit: cover;
        vertical-align: middle;
    }
    .change{
        float:right;
        color:@font-Sgray;
        font-size:@font1;
        i{
            padding-left:0.5rem;
        }
    }

}
.dacklist{
    padding-left:1rem;
    li{
        padding-right:1rem;
        line-height: 3.5rem;
        height:3.5rem;
        font-size:1.1rem;
        .bottomRim;
        display: flex;
        span{
            width:6rem;
        }
        input{
            flex: 1;
            box-sizing: border-box;
            color:@font-Sgray;
            vertical-align: middle;
        }
        
    }
    li.other{
        background: url('../common/images/more.png') no-repeat 96% center;
        background-size:auto 1rem;
    }
    li:nth-last-of-type(1){
        border:none;
    }
}
.btn{
    width:100%;
    height:3.5rem;
    line-height: 3.5rem;
    color:@white;
    font-size:@font1-25;
    background: @blue;
}
</style>

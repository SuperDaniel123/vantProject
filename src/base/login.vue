<template>
  <div class="login">
     <div class="loginTest">
         <img class="logo" src="@/common/images/logo.png" alt="logo" />
         <div class="input" v-if="state==0">
             <input type="number" name="userPhone" placeholder="请输入手机" v-model="userPhone" />
             <input type="password" name="password" placeholder="请输入密码" v-model="password" />
             <div class="otherOper clearfix"><span @click ="getToken(1)">忘记密码</span><span @click ="getToken(2)">注册账号</span></div>
             <input type="button" name="Submit" value="登录" @click="getLogin" />
         </div>
         <!--忘记密码-->
         <div class="input" v-if="state==1">
             <input type="number" placeholder="请输入手机" v-model="forgetUser"/>
             <div class="aCode">
                <input type="number" placeholder="请输入验证码" v-model="authCode"/>
                <button @click="getCode(forgetUser)">获取验证码</button>
             </div>
             <input type="password" name="password" placeholder="请输入新密码" v-model="newPwd" />
             <input type="password" name="password" placeholder="请再次输入新密码" v-model="ReNewPwd" />
             <div class="otherOper clearfix"><span @click ="state = 0">登录</span></div>
             <input type="button" @click="forget_pwd()" name="Submit" value="完成" />
         </div>
        <!--注册-->
         <div class="input" v-if="state==2">
             <input type="text" placeholder="请输入推荐人" v-model="referrer" />
             <input type="number"  placeholder="请输入手机" v-model="registerPhone" />
             <input type="text" placeholder="请输入姓名" v-model="IdName" />
             <input type="text" placeholder="请输入密码" v-model="enrollPwd" />
             <input type="text" placeholder="请输入确认密码" v-model="affirmPwd" />
             <div class="aCode">
                <input type="number" placeholder="请输入验证码" v-model="authCode"/>
                <button>获取验证码</button>
             </div>
             <div class="otherOper clearfix"><span @click ="state = 0">登录</span></div>
             <input type="button" @click="reg()" name="Submit" value="注册" />
         </div>
         
     </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name:'login',
    data(){
        return{ 
            token:'',
            userPhone:localStorage.getItem('userName') || '',
            password:'',
            facility:'iphone',
            ip:'127.0.0.1',
            //0 是登录，1是忘记密码, 2是注册
            state:0,


            //验证码
            authCode:'',


            //忘记密码
            forgetUser:'',
            newPwd:'',
            ReNewPwd:'',

            //注册
            referrer:'',
            registerPhone:'',
            IdName:'',
            enrollPwd:'',
            affirmPwd:''
        }
    },
    created(){

    },
    methods:{
        ...mapMutations({
            setMID:'SET_MID',
            isLogin:'IS_LOGIN'
        }),
        getLogin(){
           this.$router.push('/')
        },
        getToken(id){
            this.state = id

        },
        getCode(code){
            if(code == '' && code.length != 11){
                alert('请输入正确手机号')
                return;
            }
   
        },
        forget_pwd(){

        },
        reg(){
           
        }
    }
  
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.login{
    background: url('../common/images/loginBg.png') no-repeat center center;
    background-size: 100% 100%;
}
.loginTest{
    text-align: center;
    position: absolute;
    top:5%;
    width:100%;
    .logo{
        width:150px;
        vertical-align: middle;
    }
    div.input{
        margin: 2rem auto 0 auto;
        width:65%;
        input{
            font-family: '微软雅黑';
            width:100%;
            background:@bgGray;
            line-height: 3rem;
            text-indent: 1rem;
            font-size:@font1;
            border:none;
            color:@font-Lgray;
            border-radius: 0.5rem;
            margin-bottom: @font1;
        }
    }
    .otherOper{
        color:@font-Sgray;
        margin-bottom: @font1;
        span:nth-of-type(1){
            float: left;
        }
        span:nth-of-type(2){
            float: right;
        }
    }
    input[name="Submit"]{
        width:12rem;
        height:3rem;
        border-radius: 0.5rem;
        background: @blue !important;
        color:@white !important;
        text-indent: 0 !important;
    }
}
.aCode{
    position: relative;
    button{
        padding:0 0.5rem;
        line-height: 2rem;
        background: @white;
        color:#cacaca;
        border:1px solid #cacaca;
        border-radius: 0.5rem;
        position: absolute;
        right:0.5rem;
        top:0.5rem;
    }
}

</style>


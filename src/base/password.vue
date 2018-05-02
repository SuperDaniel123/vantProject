<template>
  <div>
      <iheader :headline="headline"></iheader>
      <div class="content">
            <ul class="dacklist">
                <li><span>原密码：</span><input type="password" placeholder="请输入原密码" v-model="oldcode" /></li>
                <p v-if="headline == '修改支付密码'" class="tip">(初始密码:123456)</p>
                <li><span>新密码：</span><input type="password" placeholder="请输入新密码" v-model="newcode"/></li>
                <li><span>确认密码：</span><input type="password" placeholder="请在输入一遍新密码" v-model="affirm" /></li>
            </ul>
            <div class="button">
                <van-button size="large" type="primary" @click="getAffirm()">确定</van-button>
            </div>
            
      </div>

  </div>
</template>

<script>
import iheader from '@/components/i-header'
import {mapGetters} from 'vuex'
import { setTimeout } from 'timers';
export default {
  components:{
      iheader
  },
  created(){
  },
  data(){
      return{
          oldcode:'',
          newcode:'',
          affirm:''
      }
  },
  computed:{
        ...mapGetters([
            'setMID'
        ]),
        headline(){
            return this.$route.params.id == 1 ? '修改登录密码':'修改支付密码'
        }
  },
  methods:{
    getAffirm(){
        let opt,url;
        if(!this.oldcode || !this.newcode || !this.affirm){
            this.$toast('密码不能为空');
            return;
        }else if(this.oldcode == this.newcode){
            this.$toast('新旧密码不能相同');
            return;
        }else if(this.newcode != this.affirm){
            this.$toast('新密码不一致');
            return;
        }else{
            opt = {
                MID: this.setMID,
                OldPwd:this.oldcode,
                NewPwd:this.newcode,
                ReNewPwd:this.affirm
            }
            
            url = this.$route.params.id == 1? '/account/pwd':'/account/pay_pwd'
            this.$ajax(url,'post',opt).then(res=>{
                let data = res.data;
                if(data.ResultCD != '200'){
                    alert(data.ErrorMsg)
                    return
                }

                this.$toast.success('修改成功');
                setTimeout(()=>{
                    this.$router.push('/')
                },1000)

            })
        }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.tip{
    margin-top:0.5rem;
    text-indent: 1rem;
    color:#ccc;
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
}
.button{
    margin: 1rem;
}
</style>


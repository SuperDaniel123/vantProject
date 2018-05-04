<template>
  <div>
        <i-header :headline="name"></i-header>
        <div class="content">
            <ul class="newsList">
                <li v-for="(item,index) in newsList" :key="index">
                    <p v-text="item.Span"></p>
                    <div class="datum">
                        <!-- <p>证券时报网</p> -->
                        <p v-text="item.Time"></p>
                    </div>
                </li>
                
            </ul>
        </div>
      
  </div>
</template>

<script>
import iHeader from '@/components/i-header'
export default {
    components:{
        iHeader
    },
    created(){
        this.getNews()
    },
    data(){
        return{
            name:'资讯',
            newsList:[]
        }
    },
    methods:{
        getNews(){
            this.$ajax('/news/list','get').then(res=>{
                let data = res.data;
                console.log(data)
                if(data.ResultCD != 200){
                    this.$toast.fail(data.ErrorMsg)
                    return;
                }
                this.newsList = data.Data.News

                
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.newsList{
    li{
        padding:1rem 0 ;
        margin-left: 1rem;
        .bottomRim;
        p{
            padding-right:1rem;
            line-height: 1.8rem;
            font-size:1rem;
        }
        .datum{
            display: flex;
            p{
                flex:1;
                color:@font-Sgray;
                font-size:@font1;
                margin-top:0.5rem;
            }
        }
    }
}
</style>

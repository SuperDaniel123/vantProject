<template>
  <div>
        
        <i-header :headline="name"></i-header>
        <div class="content">
            <div class="details">
                
                    <div class="head">
                            <h1>我是标题我是标题我是标题我是标题我是标题我是标题</h1>
                            <p><time>2018-04-09 10:42:27</time><a @click="link">百度</a></p>
                    </div>
                    <div class="major">
                        <p>阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德</p>
                    </div>
            </div>
        </div>

      
  </div>
</template>

<script>
import iHeader from '@/components/i-header'
import {pageHeight} from '../common/js/common.js'
export default {
    components:{
        iHeader,
        pageHeight
    },
    mounted(){
        pageHeight('.content')
    },
    data(){
        return{
            name:'资讯详情'
        }
    },
    methods:{
        link(){
            window.location.href = 'http://www.Baidu.com'
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.details{
    padding:0 1rem;
    .head{
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        .bottomRim;
        h1{
            padding:1rem 0;
            font-size:@font1-5;
            color:@font-Lgray;
            font-weight: bold;
        }
        p{
            font-size:1rem;
            time{
                padding-right: 1rem;
                color:@font-Sgray;
            }
            a{
                color:@blue;
            }
            
        }
    }
    .major{
        line-height: 1.8rem;
        font-size:1rem;
        
    }

}
</style>

<template>
  <div>
      <i-header :headline="name"></i-header>
      <div class="content">
          asdf
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
        return{
            name:'充值'
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';

</style>
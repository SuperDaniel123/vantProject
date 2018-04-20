<template>
  <div>
      <div class="content">
              <home v-if="this.indexStateS == 0"></home>
          
              <transaction v-if="this.indexStateS == 1"></transaction>

              <optional v-if="this.indexStateS == 2"></optional>

              <user v-if="this.indexStateS == 3"></user>
      </div>
      <i-footer></i-footer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import home from '@/base/home'
import transaction from '@/base/transaction'
import optional from '@/base/optional'
import user from '@/base/user'
import iFooter from '@/components/i-footer'
export default {
  components:{
      iFooter,
      home,
      transaction,
      optional,
      user
  },
  computed:{
        ...mapGetters([
            'indexStateS'
        ])
  }
}
</script>

<style lang="less" scoped>
.content{
    padding-bottom: 5rem;
}
</style>

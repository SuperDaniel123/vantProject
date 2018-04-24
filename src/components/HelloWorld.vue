<template>
  <div>
        <i-header :headline="name"></i-header>
        <div id="swiper" class="content">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide class="swiper-slide">1</swiper-slide>
                <swiper-slide class="swiper-slide">2</swiper-slide>
                <swiper-slide class="swiper-slide">3</swiper-slide>
                <swiper-slide class="swiper-slide">4</swiper-slide>
                <swiper-slide class="swiper-slide">5</swiper-slide>
                <swiper-slide class="swiper-slide">6</swiper-slide>
                <swiper-slide class="swiper-slide">7</swiper-slide>
                <swiper-slide class="swiper-slide">8</swiper-slide>
                <swiper-slide class="swiper-slide">9</swiper-slide>
            </swiper>
        </div>
  </div>
</template>

<script>
import iHeader from '@/components/i-header'
import  {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    components:{
        iHeader,
        swiper, 
        swiperSlide
    },
    data(){
        return{
            name:'测试',
            swiperOption: {
                slidesPerView: 3,
                autoplay:true,
                direction:'vertical',
                autoHeight:true,
            }
        }
    },
    mounted(){

    },

    
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.swiper-container{
    height:9rem;
}
.swiper-slide {
    height:3rem !important;
}
</style>
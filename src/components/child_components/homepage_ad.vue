<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="item in ad_src" :key="item.id" class="swiper-slide"><img :src=item width="100%"></div>
    </div>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css"
  import Swiper from "swiper/dist/js/swiper.js"
  export default {
    name: 'homepage_ad',
    data() {
      return {
        ad_src: ["../../../static/image/14c3c16916a87c3e886bca68fca18836.png",
          "../../../static/image/35d7aba46daa6111dcfc5498647733d2.png"
        ]
      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true, //可选选项，自动滑动
        loop : true,
      })
    },
    created() {

    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .swiper-container{
        width: 94%;
    }
</style>

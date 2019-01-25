<template>
  <div class="homepage">
    {{msg}}
    <test />
    <homepage_ad/>
  </div>
</template>

<script>
  import homepage_ad from "./child_components/homepage_ad.vue"
  import test from "./child_components/test.vue"
  import "swiper/dist/css/swiper.css"
  import Swiper from "swiper/dist/js/swiper.js"
  export default {
    name: 'homepage',
    components: {
      test,
      homepage_ad,
    },
    data() {
      return {
        msg: "我是主页"
      }
    },
    mounted() {

    },
    created() {

    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

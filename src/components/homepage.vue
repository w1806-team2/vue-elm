<template>
  <div class="homepage">
    {{msg}}
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css"
  import Swiper from "swiper/dist/js/swiper.js"
  export default {
    name: 'homepage',
    data() {
        return{
            msg:"我是主页"
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

<template>
  <div class="cart">
    <common_head page_title="购物车"></common_head>
    <spac/>
  </div>
</template>

<script>
  import common_head from "./common_head.vue"
  import spac from "./child_components/spac.vue"
  export default {
    name: 'cart',
    components:{
      common_head,
      spac,
    },
    data() {
      return {
        msg: "我是购物车页"
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

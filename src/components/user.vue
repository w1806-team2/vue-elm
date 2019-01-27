<template>
  <div class="user">
    <hammer_head />
    <spac/>
  </div>
</template>

<script>
  import hammer_head from "./hammer_head.vue"
  import spac from "./child_components/spac.vue"
  export default {
    name: 'user',
    components:{
      hammer_head,
      spac,
    },
    data() {
      return {
        msg: "我是用户页"
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

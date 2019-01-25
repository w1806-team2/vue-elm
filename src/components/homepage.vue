<template>
  <div class="homepage">
    <pro_title/>
    <hot/>
  </div>
</template>

<script>
  import hot from './child_components/hot.vue'
  import pro_title from './child_components/pro_title.vue'
  export default {
    name: 'homepage',
    components: {
      hot,
      pro_title
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

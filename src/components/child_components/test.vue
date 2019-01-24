<template>
  <div class="test">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
        return{
            msg:"子组件"
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

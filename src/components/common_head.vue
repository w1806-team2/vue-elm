<template>
  <div class="head">
    <h1 class="title">{{page_title}}</h1>
  </div>
</template>

<script>
  export default {
    props: ["page_title"],
    name: 'common_head',
    data() {
      return {

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
  .head {
    z-index: 10;
    width: 100%;
    height: 50px;
    background-color: rgb(27, 27, 27);
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: white;
    font-size: 18px;
  }

</style>

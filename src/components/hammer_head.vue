<template>
  <div class="head">
    <el-col :span="13" :offset="3">
      <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" clearable>
      </el-input>
    </el-col>
    <el-col :span="2" :offset="1">
      <img src="../../static/image/ico/searth.png" alt="" width="80%">
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'hammer_head',
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
    width: 100%;
    height: 50px;
    background-color: rgb(27, 27, 27);
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    .el-col{
      img{
        margin-top: 3px;
      }
    }
  }

</style>

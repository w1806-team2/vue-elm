<template>
  <div class="picture">
    <el-row class="pic">
      <el-col :span="12">
        <div class="pic-box">
          <img src="../../../static/image/14c3c16916a87c3e886bca68fca18836.png" alt>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="pic-box">
          <img src="../../../static/image/14c3c16916a87c3e886bca68fca18836.png" alt>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="pic-box">
          <img src="../../../static/image/14c3c16916a87c3e886bca68fca18836.png" alt>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="pic-box">
          <img src="../../../static/image/14c3c16916a87c3e886bca68fca18836.png" alt>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "picture",
  data() {
    return {
      msg: "子组件"
    };
  },
  mounted() {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.picture {
  width: 100%;
  .pic {
    box-shadow: 0 5px 13px rgba(0,0,0,.1);
    margin-bottom: 6px;
    background: #fff;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    .pic-box {
      width: 90%;
      margin: auto;
      
      img {
        border: 1px solid rgb(240, 240, 240);
        border-radius: 10px;
        width: 100%;
      }
    }
  }
}
</style>

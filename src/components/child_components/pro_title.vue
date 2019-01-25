<template>
  <div class="hot">
    <!-- swiper轮播 -->
      <div class="hot-box-title">
        <h2>热销产品</h2>
        <span>></span>
      </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper/dist/js/swiper.js";
export default {
  name: "hot",
  data() {
    return {
      msg: "子组件"
    };
  },
  mounted() {

  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.hot {
    .hot-box-title {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #ebebeb;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 15px;
      }
      span {
        font-weight: bold;
        font-size: 20px;
        color: #666;
        margin-right: 15px;
      }
    }
}
</style>

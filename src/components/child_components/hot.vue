<template>
  <div class="hot">
    <!-- swiper轮播 -->
    <div class="hot-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="hot-box-box">
              <img
                src="../../../static/image/details/box8/0d64854591f31cc0befc2897a4fd6e3a(1).jpg"
                alt
              >
              <div class="hot_content">
                <h4>畅呼吸西游油烟机山风大是大非</h4>
                <p class="descrip">健康无雾sdjflsjflksjflkjslf</p>
                <span>￥1999</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hot-box-box">
              <img
                src="../../../static/image/details/box8/0d64854591f31cc0befc2897a4fd6e3a(1).jpg"
                alt
              >
              <div class="hot_content">
                <h4>畅呼吸西游油烟机山风大是大非</h4>
                <p class="descrip">健康无雾sdjflsjflksjflkjslf</p>
                <span>￥1999</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hot-box-box">
              <img
                src="../../../static/image/details/box8/0d64854591f31cc0befc2897a4fd6e3a(1).jpg"
                alt
              >
              <div class="hot_content">
                <h4>畅呼吸西游油烟机山风大是大非</h4>
                <p class="descrip">健康无雾sdjflsjflksjflkjslf</p>
                <span>￥1999</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hot-box-box">
              <img
                src="../../../static/image/details/box8/0d64854591f31cc0befc2897a4fd6e3a(1).jpg"
                alt
              >
              <div class="hot_content">
                <h4>畅呼吸西游油烟机山风大是大非</h4>
                <p class="descrip">健康无雾sdjflsjflksjflkjslf</p>
                <span>￥1999</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hot-box-box">
              <img
                src="../../../static/image/details/box8/0d64854591f31cc0befc2897a4fd6e3a(1).jpg"
                alt
              >
              <div class="hot_content">
                <h4>畅呼吸西游油烟机山风大是大非</h4>
                <p class="descrip">健康无雾sdjflsjflksjflkjslf</p>
                <span>￥1999</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
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
    var swiper = new Swiper(".swiper-container", {
      // autoplay: true, //可选选项，自动滑动
      slidesPerView: 3,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      }
    });
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
  .hot-box {
    width: 100%;
    box-shadow: 0 5px 13px rgba(0,0,0,.1);
    margin-bottom: 6px;
    background: #fff;
    .hot-box-box {
      width: 85%;
      padding-left: 8px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid silver;
      }
      .hot_content {
        margin: 0 auto;
        padding: 10px;
        padding-top: 0px;
        line-height: 20px;
        h4 {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
          font-size: 15px;
          color: #333;
        }
        .descrip {
          overflow: hidden;
          font-size: 12px;
          color: #7f7f7f;
          text-overflow: ellipsis;
          white-space: nowrap;

        }
        span {
          color: red;
          font-size: 15px;
        }
      }
    }
  }
}
</style>

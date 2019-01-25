<template>
  <div id="app">
    <div class="item">
      <router-view />
    </div>
    <el-row class="bottom_nav_box">
      <el-col :span="6" v-for="(item,index) in navlist" :key="item.id">
        <div @click="cheangepage(index,$router.options.routes[index+1].name)" :class="{'router-link-active':count_index==index}">
          <img v-if="count_index==index" :src=item.p_src alt="" width="27xp">
          <img v-else :src=item.onbulr_p_src alt="" width="27xp">
          <p>{{item.name}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        navlist: [{
            name: "首页",
            p_src: "../static/image/ico/home.png",
            onbulr_p_src: "../static/image/ico/home_onblur.png"
          },
          {
            name: "分类",
            p_src: "../static/image/ico/menu_bottom.png",
            onbulr_p_src: "../static/image/ico/menu_bottom_onblur.png"
          },
          {
            name: "购物车",
            p_src: "../static/image/ico/cart.png",
            onbulr_p_src: "../static/image/ico/cart_onblur.png"
          },
          {
            name: "个人中心",
            p_src: "../static/image/ico/user.png",
            onbulr_p_src: "../static/image/ico/user_onblur.png"
          }
        ],
        count_index: 0
      }
    },
    methods: {
      cheangepage(index, pagename) {
        console.log("ok")
        this.$router.push(pagename);
        this.count_index = index;
      },
    },
  }

</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  .bottom_nav_box {
    width: 100%;
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0px;

    .el-col {
      text-align: center;
      div{
        padding-top: 4px;
        padding-bottom: 3px;
        p{
          font-size: .6rem;
          font-weight: 600;
        }
      }
    }
  }

  .router-link-active{
    background-color: rgb(249, 249, 249);
    box-shadow: inset 5px 0 3px -3px rgba(0,0,0,.01), inset -5px 0 3px -3px rgba(0,0,0,.01);
  }
</style>

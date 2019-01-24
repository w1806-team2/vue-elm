<template>
  <div id="app">
    <router-view />
    <div class="bottom_box">
      <li v-for="(item,index) in navlist" :key="item.id" @click="cheangepage(index,$router.options.routes[index+1].name)"
        :class="{'router-link-active':count_index==index}">{{item}}</li>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        navlist: ["首页", "分类", "购物车", "个人中心"],
        count_index: 0
      }
    },
    methods: {
      cheangepage(index, pagename) {
        this.$router.push(pagename);
        this.count_index = index;
      },
    },
  }

</script>

<style>

</style>

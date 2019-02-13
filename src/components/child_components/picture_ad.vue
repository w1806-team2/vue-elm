<template>
  <div class="picture_ad">
      <el-row>
           <el-col :span="11" :offset="1">
               <img src="../../../static/image/juq.jpg" alt="" width="100%" @click="goto_detail('空气净化器','trunk')">
               <img src="../../../static/image/16b8f40fbf0a6c4ff36b277663eb76db.jpg" alt="" width="100%" @click="goto_detail('旅行箱','trunk')">
               <img src="../../../static/image/f7270c05a3e8d16b7616af4b140d1ddd.jpg" alt="" width="100%" @click="goto_detail('坚果3','jianguo3')">
           </el-col>
           <el-col :span="11" class="right">
               <img src="../../../static/image/ea18e93a7a26621cf77ec7fb977fccf8.jpg" alt="" width="100%" @click="goto_detail('坚果pro2s','jianguo3')">
           </el-col>
      </el-row>
  </div>
</template>

<script>
  export default {
    name: 'picture_ad',
    data() {
      return{

      }
    },
    mounted() {
      
    },
    created() {

    },
    methods:{
        //前往详情页的方法
        goto_detail(page_title,item_name){
            this.$router.push({
                name:"detail",
                //query方法传了两个之（页面头文字和商品名）
                query:{
                    page_title:page_title,
                    item_name:item_name
                }
            });
        }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .picture_ad{
      .el-row{
          margin-top: 10px;
          img{
              margin-top: 6px;
          }
          .right{
              margin-left: 8px;
              img{
                border-radius: 5px;
              }
          }
      }
  }
</style>

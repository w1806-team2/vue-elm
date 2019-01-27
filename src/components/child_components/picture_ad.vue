<template>
  <div class="picture_ad">
      <el-row>
           <el-col :span="11" :offset="1">
               <img src="../../../static/image/juq.jpg" alt="" width="100%">
               <img src="../../../static/image/16b8f40fbf0a6c4ff36b277663eb76db.jpg" alt="" width="100%">
               <img src="../../../static/image/f7270c05a3e8d16b7616af4b140d1ddd.jpg" alt="" width="100%">
           </el-col>
           <el-col :span="11" class="right">
               <img src="../../../static/image/ea18e93a7a26621cf77ec7fb977fccf8.jpg" alt="" width="100%">
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

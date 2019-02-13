<template>
  <div class="detail">
    <common_head :page_title=page_title></common_head>
    <spac />
    <div class="nav">
      <el-row type="flex" class="element_row">
        <el-col :span="8" class="nav_itembox left_nav_itembox">商品</el-col>
        <el-col :span="8" class="nav_itembox">详情</el-col>
      </el-row>
    </div>
    <div class="show_img_box">
      <img v-for="(item,index) in show_img" :key="index" :src="src_head+item.src+src_end" width="80%">
    </div>
    <div class="space"></div>
    <el-card class="box-card" :body-style="{padding:'16px'}">
      <div slot="header" class="clearfix">
        <div style="margin:-18px -20px; padding-top:8px;padding-bottom:10px;padding-left:16px;padding_right:20px;"><span>商品详情</span></div>
      </div>
      <div class="text item">
        <p class="big_text">{{show_img[0].item_name}}</p>
        <p class="small_text">{{show_img[0].item_describe}}</p>
        <p class="price">￥{{show_img[0].item_price}}</p>
      </div>
    </el-card>
    <div class="space"></div>
    <el-card class="box-card" :body-style="{padding:'0'}">
      <div slot="header" class="clearfix">
        <div style="margin:-18px -20px; padding-top:8px;padding-bottom:10px;padding-left:16px;padding_right:20px;"><span>商品详情</span></div>
      </div>
    </el-card>
    <div class="img_box">
      <img v-for="(item,index) in item" :key="index" :src="src_head+item.src+src_end" width="100%">
    </div>
    <div class="space"></div>
    <el-card class="box-card" :body-style="{padding:'0'}">
      <div slot="header" class="clearfix">
        <div style="margin:-18px -20px; padding-top:8px;padding-bottom:10px;padding-left:16px;padding_right:20px;"><span>相关推荐</span></div>
      </div>
      <div class="card_box" @click="flush()">
        <card v-if="show_img[0].type=='phone'" item_type="access"></card>
        <card v-if="show_img[0].type=='access'" item_type="phone"></card>
      </div>
    </el-card>
    <div class="buy_box">
      <el-row>
        <el-button type="primary">加入购物车</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  import common_head from "./common_head.vue"
  import spac from "./child_components/spac.vue"
  import card from "./child_components/card.vue"
  export default {
    name: 'detail',
    components: {
      common_head,
      spac,
      card
    },
    data() {
      return {
        page_title: "",
        item: [],
        src_head: "../../../static/image/",
        src_end: ".jpg",
        show_img: [{
          belong: "",
          id: "",
          item_describe:"",
          item_english_name:"",
          item_homepage_describe:"",
          item_name:"",
          item_price:"",
          src:"",
          type:"",
          which_page:""
        }]
      }
    },
    mounted() {

    },
    created() {
      this.page_title = this.$route.query.page_title;
      let item_name = this.$route.query.item_name;
      //商品页图片
      $.post('/api/hammer/php/select.php', {
          sql_words: `SELECT * FROM pricture inner join item on pricture.belong = item.item_english_name where pricture.belong="${item_name}" and pricture.which_page ="homepage"`
        })
        .then(res => {
          let res_obj = JSON.parse(res);
          this.show_img = res_obj;
          console.log(this.show_img)
        })
        .catch(error => {
          console.log(error)
        })
      //详情页图片
      $.post('/api/hammer/php/select.php', {
          sql_words: `SELECT src FROM pricture inner join item on pricture.belong = item.item_english_name where pricture.belong="${item_name}" and pricture.which_page <>"homepage"`
        })
        .then(res => {
          let res_obj = JSON.parse(res);
          this.item = res_obj;
          console.log(this.item)
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods:{
      flush(){
        window.location.reload();
        window.scrollTo(0,0);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .img_box {
    font-size: 0;
  }

  .nav {
    height: 32px;
    padding: 10px 6px 10px 6px;
    background: #f2f2f2;
    box-shadow: 0 5px 13px rgba(0, 0, 0, .12);
  }

  .nav_itembox {
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    color: #606060;
    line-height: 32px;
    border: 1px solid #d5d5d5;
    border-left: none;
  }

  .left_nav_itembox {
    border-left: 1px solid #d5d5d5;
  }

  .show_img_box {
    width: 100%;
    margin-top: 10px;
    font-size: 0;
    text-align: center;
  }

  .space {
    width: 100%;
    height: 8px;
    background-color: #d5d5d5;
  }

  .clearfix {
    div {
      span {
        font-size: 1.14rem;
        font-weight: 700;
        color: #666;
      }
    }
  }

  .big_text {
    color: #333;
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .small_text {
    font-size: .84rem;
    color: #7f7f7f;
    line-height: 1.5;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .price {
    color: #d44d44;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .card_box {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .buy_box{
    width: 100%;
    height: 54px;
    position: fixed;
    bottom: 0px;
    background-color: rgb(255, 255, 255);
    z-index: 9999;
  }
</style>

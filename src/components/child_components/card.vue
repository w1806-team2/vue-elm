<template>
  <div class="card">
    <el-row type="flex" class="element_row" justify="speace-between">
      <el-col v-for="(item) in item" :key="item.id" :span=24/x_length> <div class="box" @click="goto_detail(item.item_name,item.type)">
        <img :src="src_head+item.src+src_end" alt="" width="100%">
        <h4 class="title">{{item.item_name}}</h4>
        <p class="describe">{{item.item_homepage_describe}}</p>
        <p class="price">￥{{item.item_price}}</p>
  </div>
  </el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    //从子组件传过来的是当前组件内装的东西的类型
    props: ["item_type"],
    name: 'card',
    data() {
      return {
        x_length: 2,
        //数据库获取的数据（一个数组，数组里面是对象）
        item: [],
        //图片路径的头尾
        src_head: "../../../static/image/",
        src_end: ".jpg"
      }
    },
    mounted() {
      //从数据库获取数据
      $.post('/api/hammer/php/select.php', {
          sql_words: `SELECT * FROM pricture inner join item on pricture.belong = item.item_english_name where pricture.which_page="homepage" and pricture.type="${this.item_type}"`
        })
        .then(res => {
          let res_obj = JSON.parse(res);
          this.item = res_obj;
        })
        .catch(error => {
          console.log(error)
        })
    },
    created() {

    },
    methods: {
      //前往详情页的方法
      goto_detail(page_title, item_name) {
        if (item_name == "phone") {
          item_name = "jianguo3";
        }else if(item_name == "access"){
          item_name = "earphone_red";
        };
        this.$router.push({
          name: "detail",
          //query方法传了两个之（页面头文字和商品名）
          query: {
            page_title: page_title,
            item_name: item_name
          }
        });
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

  .box {
    margin: 0 auto;
    width: 80%;
    margin-bottom: 20px;

    img {
      border: solid 1px rgb(243, 241, 241);
    }

    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      font-size: .8rem;
      color: #333;
    }

    .describe {
      margin-top: .3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: .5rem;
      line-height: 1.2;
      color: #7f7f7f;
      min-height: .6rem;
    }

    .price {
      color: #d44d44;
      white-space: nowrap;
      font-weight: 700;
      font-size: .6rem;
    }
  }

  .element_row {
    flex-wrap: wrap;
  }

</style>

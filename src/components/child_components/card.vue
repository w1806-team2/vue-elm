<template>
  <div class="card">
      <el-row type="flex" class="element_row" justify="speace-between">
        <el-col v-for="(index,pricture) in pricture" :key="pricture.id" :span=12>
          <div class="box">
            
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
  export default {
    props:["item_type"],
    name: 'card',
    data() {
      return {
        y_length: 3,
        x_length: 2,
        pricture:{}
      }
    },
    mounted() {
      $.post('/api/hammer/php/select.php',{
        sql_words:`SELECT * FROM pricture where which_page="homepage" and type="${this.item_type}"`
      })
      .then(res=>{
        let res_obj=JSON.parse(res);
        console.log(res_obj);
        this.pricture=res_obj;
      })
      .catch(error=>{
        console.log(error)
      })
      
    },
    created() {
      // axios.get('/api/josn/data.json').then((res)=>{
      //       console.log(res)
      //   })
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .box{
    height: 100px;
    border: solid 1px;
  }
  .element_row{
    flex-wrap: wrap;
  }
</style>

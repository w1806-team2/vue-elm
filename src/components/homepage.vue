<template>
  <div class="homepage">
    <hammer_head/>
    <spac/>
    <homepage_ad />
    <spac_small/>
    <pro_title title_words="热销产品"></pro_title>
    <hot/>
    <picture_ad/>
    <pro_title title_words="坚果系列手机"></pro_title>
    <card item_type="phone"></card>
    <pro_title title_words="坚果“足迹”系列"></pro_title>
    <pro_title title_words="官方配件"></pro_title>
    <card item_type="access"></card>
    <picture_list/>
  </div>
</template>

<script>
  import homepage_ad from "./child_components/homepage_ad.vue"
  import hammer_head from "./hammer_head.vue"
  import spac from "./child_components/spac.vue"
  import picture_ad from "./child_components/picture_ad.vue"
  import spac_small from "./child_components/spac_small.vue"
  import card from "./child_components/card.vue"
  import hot from './child_components/hot.vue'
  import pro_title from './child_components/pro_title.vue'
  import picture_list from './child_components/picture-list.vue'
  export default {
    name: 'homepage',
    components: {
      homepage_ad,
      hammer_head,
      spac,
      picture_ad,
      spac_small,
      card,
      hot,
      pro_title,
      picture_list,
    },
    data() {
      return {
        msg: "我是主页"
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
  
</style>

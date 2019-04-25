<template>
  <div class="seller-title">
    {{titleName}}
  </div>
</template>

<script>
export default {
  name: 'SellerTitle',
  data () {
    return {
      titleName: '我的书店'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seller-title{
  width: 1130px;
  height:35px;
  color:#2c3e50;
  padding-left: 20px;
  line-height: 40px;
  font-size: 25px;
  font-weight: bold;
}
</style>
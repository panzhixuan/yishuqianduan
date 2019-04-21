<template>
  <div class="cart-title">
    {{titleName}}
  </div>
</template>

<script>
export default {
  name: 'CartTitle',
  data () {
    return {
      titleName: '我的购物车'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-title{
  width: 185px;
  color:#2c3e50;
  height: 44px;
  font-family: 'Arial Normal', 'Arial';
  font-weight: 400;
  font-style: normal;
  font-size: 36px;

}
</style>
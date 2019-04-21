<template>
  <div id="pay-page">
    <ConfirmPayment/>
    <!-- <PaySuccess/> -->
  </div>
</template>
 
<script>
import ConfirmPayment from '../components/ConfirmPayment'
import PaySuccess from '../components/PaySuccess'

export default {
  name: 'Pay',
  components: {
    ConfirmPayment,
    PaySuccess,
   
  }
}
</script>

<style scoped>
.pay-page{
  width: 75%;
  height: 800px;
  background-color: #F0F2F5;
}
</style>
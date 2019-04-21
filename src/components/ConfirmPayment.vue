<template>
    <div class="confirm-payment">
      <p class="title">支付窗口</p>
      <hr class="hr1">
        <div class="PayMain">
      <img src="static\2dim.png">
      <p class="p1">请扫描二维码付款</p>
      <hr class="hr2">
      <PayButton/>
        </div>
        <hr class="hr3">
    </div>
</template>

<script>
import PayButton from './PayButton'
export default {
name:'ConfirmPayment',
components:{
    PayButton
} 
}
</script>
<style scoped>
.confirm-payment{
    position: absolute;
  top: 102px;
  width:1440px;
  margin-top: 0px;
  /* position: absolute;
  top: 100px;
    width: 100%;
    height: 950px;
    background-color: #f0f2f5; */
}
.PayMain{
    background-color: white;
    width: 80%;
    height: 800px;
    margin-left: 10%;
}
.title{
    padding-left: 10%;
    padding-top:15px;
    margin-bottom: 15px;
    font-size: 50px;
    font-weight: bold;
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
}
.hr1{
   margin-left: 2.5%;
    width: 95%;
    color: #333333;
    size: 1;
}
.confirm-payment img{
    margin-left: 30%;
}
.p1{
    font-size: 37.3px;
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
   /*  padding-left: 636px;
    padding-top: 886px; */
    text-align: center;
}
.hr2{
    padding-left: 10px;
    width: 1000px;
    color: #333333;
    size: 1
}
.hr3{
    width: 95%;
    color: #333333;
    size: 1;
    margin-left: 2.5%
}
</style>



<template>
    <div class=pay-success>
        
        <hr class="hr1">
        <div class="content">
        <img src="static\successPayment.png"><br/>
        
        </div>
        <hr class="hr2">
    </div>
    
</template>

<script>
export default {
name: 'PaySuccess',
data(){
      return {
        orderId:'00000000', // 订单id
        orderTime:'2018.11.20' // 订单时间
      }
    }
}
</script>

<style scoped>
.pay-success{
    width: 100%;
    height: 800px;
    background-color: #F0F2F5;
    margin-top: 5px;
}

.hr1,.hr2{
    width: 95%;
    color: #333333;
    size: 1;
    margin-left: 2.5%;
}
.hr1{
    margin-top: 100px;
}

.hr2{
    margin-top: 800px;
}

.pay-success .content{
    margin-top: 50px;
  position: absolute;
  top: 200px;
    width: 60%;
    height: 600px;
    background-color: white;
    margin-left: 150px;
}
.pay-success .content img{
    margin-left: 120px;
    width: 80%;
    margin-top: 100px;
}
span{
    margin-top: 20px;
    margin-left: 20%;
    font-size: 30px;
    color: #001529;
}
</style>

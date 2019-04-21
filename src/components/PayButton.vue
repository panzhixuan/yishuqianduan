<template>
<div>
  <el-button type="primary" class="Paybtn" @click="jumpToPaySuccess">支付成功</el-button>
</div>
</template>

<script>
export default {
name:'PayButton',
methods:{
  jumpToPaySuccess(){
        this.$router.push({
          name: 'PaySuccess'
        })
    },
}
}
</script>

<style scoped>
.Paybtn{
  width: 153px;
  height: 46px;
  background-color: #cc3333;
  font-size: 14px;
  font-family:Arial, Helvetica, sans-serif;
  color: white; 
  margin-left: 70%;
}
.Paybtn:hover{
  background-color: #001529
}
</style>

<template>
<div class="SalerOrder">
  <div class="group">
    
    <div class="body">
       <div class=nav>
      <text2><el-button type="text"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">出售订单</span></el-button></text2>
      <text1><el-button type="text" @click="jumpToBuyerOrder"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">购买订单</span></el-button></text1>
              <text3><el-button type="text" @click="PersonalInfor"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">个人信息</span></el-button></text3>
              <text4><el-button type="text" @click="jumpTOcartmain"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">购物车</span></el-button></text4>

    </div>
      <div class="bodytop">
        <img src="../../static/photo/line.png">
        <text1><span>用户名</span></text1>
        <img src="../../static/photo/line.png">
      </div>
      <div class="bodymain">
        <div class="maincontent">
          <text1>
            <el-table :data="orderList" style="width: 75%;overflow: auto;" :height="clientHeight" stripe border highlight-current-row v-loading="pageLoading">
              <!-- <el-table-column prop="checked" width="50" type="selection" @selection-change="changeFun"></el-table-column> -->
              <el-table-column prop="orderId" width="60" label="订单"></el-table-column>
              <el-table-column prop="orderTime" width="200" label="订单日期"></el-table-column>
              <el-table-column prop="buyerId" width="60" label="买家"></el-table-column>
              <el-table-column prop="bookId" width="80" label="书籍ID"></el-table-column>
              <el-table-column prop="orderPrice"  width="60" label="价格"></el-table-column>
              <el-table-column prop="orderFlag"  width="143" label="状态">
                <template slot-scope="scope">
                <div class="status" v-if="scope.row.orderFlag===0">未支付</div>
                <div class="status" v-if="scope.row.orderFlag===1">已支付</div>
                <div class="status" v-if="scope.row.orderFlag===2">退货中</div>
                <div class="status" v-if="scope.row.orderFlag===3">已退货</div>
                </template>
              </el-table-column>
              <el-table-column prop="operation" width="220" label="操作">
                <template slot-scope="scope">
                <el-button class="oflag" type="info" @click="setOrderFlagF(scope.row.bookId)" v-if="scope.row.orderFlag===2">退货完成</el-button><el-button  type="info" @click="deleteOrder(scope.row.orderId)" v-on:click="confirm" v-if="scope.row.orderFlag!==2">删除</el-button>
                 <!-- v-on:click="changeButton" -->
                </template>
              </el-table-column>
             </el-table>
          </text1>
        </div>
      </div>
    </div>
   
  </div>
</div>
</template>

<script>
// import SellerPage from './SellerPage'
import axios from 'axios'

export default {
  inject:['reload'],
  name: 'SalerOrder',
  data () {
    return {
    /*  flag:0,
      bookId:0,
      msg: 'seller',
      currentPage:1, //初始页
      pagesize:17,    //    每页的数据
      bookList: [],
      multipleSelection: []*/
      oflag:'确认退货',
      userId:this.$userId,
      orderId:0,
     // buyerId:1,
      msg: 'seller',
      orderList: [],
      num: []
    }
  },
   mounted:function(){
    this.findAllBySalerId()
  },
  methods: {
    // jump(){
    // //this.$router.push("/cart")
    // //传递的参数用{{ $route.query.goodsId }}获取
    // this.$router.replace('/seller')
    // //this.$router.go(-2)
    // //后退两步
    // }
  /*  changeFun(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection)
    },*/
   jumpToHome(){
        this.$router.push({
          path: '/'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
     jumpTOcartmain(){
        this.$router.push({
          path: '/cartmain'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
    PersonalInfor(){
        this.$router.push({
          path: '/PersonalInfor'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
    jumpToBuyerOrder(){
        this.$router.push({
          path: '/BuyerOrder'
//           query: {
//             bookList: this.bookList
//           }
        })
    },
    changeButton: function(){
      this.oflag = '已经退货' 
    },
    confirm:function(){
      alert('订单已删除！')
    },
    confirmButton(val){
      this.num = val;
      console.log(this.num)
    },/*
    changeFun(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection)
    },*/
   jumpToHome(){
        this.$router.push({
          path: '/'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
 /*   jumpToBuyerOrder(){
        this.$router.push({
          path: '/BuyerOrder'
//           query: {
//             bookList: this.bookList
//           }
        })
    },*/
    deleteOrder:function(val){
      let self = this;
        axios.get('/api/salerorder/deleteOrder/'+val)
        .then(
          console.log('更新成功')
        )
        .catch(e => console.log(e))
      console.log('更新完毕')
      this.reload()
    },
    findAllBySalerId:function(){
      console.log('获取出售订单列表中...')
      axios.get('/api/salerorder/findAllSalerOrder/'+this.userId)
        .then(res =>{
          console.log(res.data)
          this.orderList=res.data
        })
        .catch(e => console.log(e))
      console.log('获取出售订单列表完毕')
    },
 /*   setOrderFlag:function(val){
        axios.get('/api/salerorder/setOrderFlag/'+val)
        .then(
          console.log('更新成功')
        )
        .catch(e => console.log(e))
      console.log('更新完毕')
      this.oflag = '已经退货'
      this.reload()
     // this.$router.go(0)
    },*/
   setOrderFlagF:function(val){
        axios.get('/api/salerorder/setOrderFlagF/'+val)
        .then(
          console.log('更新成功')
        )
        .catch(e => console.log(e))
      console.log('更新完毕')
      this.reload()
     // this.$router.go(0)
    }
  }
}


   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.group {
  position: absolute;
  top: 102px;
  width:1440px;
  margin-top: 0px;
}

.nav{
  border-width:0px;
  position:absolute;
  left:-30px;
  top:112px;
  width:800px;
  height:1645px;
  background:#f0f2f5;
  
}
.nav text1{
  border-width:0px;
  position:absolute;
  left:120px;
  top:36px;
  width:121px;
  height:64px;
}
.nav text2{
  border-width:0px;
  position:absolute;
  left:120px;
  top:100px;
  width:121px;
  height:64px;
}
.nav text3{
  border-width:0px;
  position:absolute;
  left:120px;
  top:164px;
  width:121px;
  height:64px;
}
.nav text4{
  border-width:0px;
  position:absolute;
  left:120px;
  top:228px;
  width:121px;
  height:64px;
}

.body {
  position: absolute;
  left: 50px;
  top: 0px;
  width: 1340px;
  height: 1px;
  margin: 0;  
}
.body img{
  border-width:0px;
  position:absolute;
  left:178px;
  top:1440px;
  width:1085px;
  height:63px;
}
.bodytop{
  border-width:0px;
  position:absolute;
  left:-50px;
  top:0px;
  width:1440px;
  height:83px;
}
.bodytop text1 {
  border-width:0px;
  position:absolute;
  left:143px;
  top:21px;
  width:145px;
  height:44px;
  font-family:'Arial Normal', 'Arial';
  font-weight:400;
  font-style:normal;
  font-size:36px;
}
.bodytop img{
  border-width:0px;
  position:absolute;
  left:50px;
  top:83px;
  width:1340px;
  height:2px;
}
.bodymain{
  border-width:0px;
  position:absolute;
  left:200px;
  top:84px;
  width:1130px;
  height:1200px;
  background: #ffffff
}
.bodymain img {
  border-width:0px;
  position:absolute;
  left:-93px;
  top:1200px;
  width:1000px;
  height:2px;
}
.maintitle{
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1100px;
  height:53px;
}
.maincontent{
  border-width:0px;
  position:absolute;
  left:0px;
  top:15px;
  width:1100px;
}
.maincontent text1{
  border-width:0px;
  position:absolute;
  left:25px;
  top:0px;
  width:1100px;
}
.mainpagination{
  border-width:0px;
  position:absolute;
  left:0px;
  top:935px;
  width:1100px;
  height: 50px;
}
.mainbuttom{
  border-width:0px;
  position:absolute;
  left:0px;
  top:1000px;
  width:1100px;
  height:200px;
}
.mainbuttom img{
  border-width:0px;
  position:absolute;
  left:12px;
  top:1px;
  width:1127px;
  height:2px;
}
.mainbuttom button1{
  border-width:0px;
  position:absolute;
  left:850px;
  top:20px;
}
.el-row {
   margin-bottom: 10px;
}
.el-col {
  border-radius: 0px;
}
</style>
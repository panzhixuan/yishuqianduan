<template>
  <div class="cart-main">
    <div class="title">
      <CartTitle/>
      
      <CartButtons :booklist="booklist"/>
    </div>
    <hr class="pagetop">
    <div class=nav>
        <text3><el-button type="text" @click="PersonalInfor"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">个人信息</span></el-button></text3>
        <text2><el-button type="text" @click="jumpToSalerOrder"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">出售订单</span></el-button></text2>
        <text1><el-button type="text"@click="jumpToBuyerOrder"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">购买订单</span></el-button></text1>
                    <text4><el-button type="text" @click="jumpTOcartmain"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">购物车</span></el-button></text4>

      </div>
    <div class="list-container">
      <div class="cart-list-container">
        <cart-main-item 
          v-for="(bookitem,index) of booklist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="index"
          :index="index"
          :content="bookitem"
        ></cart-main-item>
        
      </div>
        <el-pagination 
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="pagesize" 
              layout="total, prev, pager, next, jumper"
              :total="booklist.length"> 
        </el-pagination>
       
    </div>
    
    <hr class="pagefoot"> 
    
  </div>
 
</template>

<script>
import CartMainItem from './CartMainItem'
// import CartButtons from './CartButtons'
import CartTitle from './CartTitle'

import axios from 'axios'

export default {
  name: 'CartMain',
  components:{
    //  CartButtons,
     CartTitle,
    'cart-main-item':CartMainItem
  },
  data () {
    return {
      userId:this.$userId,
      tempNewBook:'',
      currentPage:1, //初始页
      pagesize:5,
      testbooks:[],
      booklist:[],
      deletelist:[],
      
      
      
      
    }
  },
   mounted:function(){
  
    // 获取购物车列表
    this.getAllShoppingCars()
  },

  methods:{
    jumpToSalerOrder(){
        this.$router.push({
          path: '/SalerOrder'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
    /*jumpTOcartmain(){
        this.$router.push({
          path: '/cartmain'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },*/
    jumpToBuyerOrder(){
        this.$router.push({
          path: '/BuyerOrder'
//           query: {
//             bookList: this.bookList
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
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize)  //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
      console.log(this.currentPage)  //点击第几页
    },
  
    getAllShoppingCars:function(){
      console.log('获取购物车列表中...')
      axios.get('/api/shoppingcar/getAllShoppingCars/'+this.userId)
        .then(res =>{
          console.log(res.data)
          this.booklist=res.data
        })
        .catch(e => console.log(e))
      console.log(this.booklist)
      console.log('获取购物车列表完毕')
    },
    


    selectAllBook: function(booklist){
      if(!this.allSelect);
        for (var i=0,len=booklist.length; i<len; i++){ 
          booklist[i].checked=true;
        }
      if(this.allSelect)
        for (var i=0,len=booklist.length; i<len; i++){ 
          booklist[i].checked=false;
        }
      this.allSelect=!this.allSelect;

    }
  
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-main{
  position: absolute;
  top: 102px;
  width:1440px;
  margin-top: 0px;
}
.total-amount{
  position:absolute;
  left:880px;
  top:1205px;
  width: 185px;
  color:#2c3e50;
  height: 44px;
  font-family: 'Arial Normal', 'Arial';
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}
.selectBtn{
  color:#2c3e50;
  position: absolute;
  left: 0px;
  top: 1214px;
  width: 88px;
  padding: 0;
  height: 30px;
}
.title{
  border-width: 0px;
  position: absolute;
  left: 144px;
  top: 21px;
  width: 145px;
  height: 44px;
  font-family: 'Arial Normal', 'Arial';
  font-weight: 400;
  font-style: normal;
  font-size: 36px;
}
.pagetop{
  position: absolute;
  left: 50px;
  top: 83px;
  width: 1340px;
  height: 1px;
  margin: 0;  
}
.nav text1{
  border-width:0px;
  position:absolute;
  left:140px;
  top:148px;
  width:121px;
  height:64px;
}
.nav text2{
  border-width:0px;
  position:absolute;
  left:140px;
  top:212px;
  width:121px;
  height:64px;
}
.nav text3{
  border-width:0px;
  position:absolute;
  left:140px;
  top:276px;
  width:121px;
  height:64px;
}
.nav text4{
  border-width:0px;
  position:absolute;
  left:140px;
  top:340px;
  width:121px;
  height:64px;
}
.list-container{
  position: absolute;
  background-color:#ffffff; 
  left: 250px;
  top: 85px;
  width: 1152px;
  height: 1200px;
}
.list-container .el-pagination {
    white-space: nowrap;
    margin-bottom:30px ;
    margin-left:auto;
    margin-right:auto;
    color: #303133;
    font-weight: 700;
    width:350px;
}
.list-container .el-pagination button, .el-pagination span:not([class*=suffix]) {
    font-size: 14px;
}
.list-container .el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon {
    font-size: 14px;
}
.list-container .el-pager li{
  font-size:14px;
  color:gray;
}
.list-container .el-pager li.active {
    color: #303133;
}
.cart-list-container{
  height: 1135px;
}
.pagefoot{
  position: absolute;
  left: 50px;
  top: 1286px;
  width: 1340px;
  height: 1px;
  margin: 0;  
}
</style>


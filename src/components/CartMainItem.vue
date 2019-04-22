<template>
  <div class="cart-main-item">
      <!-- <hr > -->
      <div class="container">
        <img :src="content.image">
        <div class="check-name">
          <div class="name">
            <el-checkbox class="check-box" v-model="content.checked" :label="content.bookName"  ></el-checkbox>
          </div>
        <div class="details">
            <div class="book-author">作者：{{content.bookAuthor}}</div>
            <div class="book-version">版次：{{content.bookVersion}}</div>
            <div class="book-upTime">书籍上架时间：{{content.bookModifytime}}</div>
            <div class="book-shopName">书籍原价：{{content.bookOriginalprice}}元</div>
            <div class="price">价格：{{content.bookPrice}}元</div>
        </div>
      </div>
      <div @click="deleteBook" class="delete">
            <el-button icon="el-icon-delete"></el-button>
      </div>
      <div @click="buyOneBook" class="buyIcon">
            <el-button icon="el-icon-goods"></el-button>
      </div>
      
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  inject:['reload'],
  name: 'CartMainItem',
  props:['content','index'],
  data () {
    return {
      userId:this.$userId

    }
  },
  methods:{
    deleteBook(){
      console.log('删除该书籍...')
      axios.post('/api/shoppingcar/deleteShoppingCar/'+this.content.bookId+'/'+this.userId)
        .then(res =>{
          // this.$router.go(0)
          this.reload()
          console.log(res.data)
          // this.booklist=res.data
        })
        .catch(e => console.log(e))
     
    },
    buyOneBook(){
      console.log('购买该书籍...')
      axios.post('/api/shoppingcar/buyThisBook/'+this.content.bookId+'/'+this.userId+'/'+this.content.bookPrice)
        .then(res =>{
          this.reload()
          console.log(res.data)
          // this.booklist=res.data
        })
        .catch(e => console.log(e))

      this.$router.push({
          name: 'BuyerOrder',     //支付页面
         
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-main-item{
  height:220px;
  width: 1000px;
  margin-left: 20px;
}
.container{
padding-top: 20px;
padding-bottom: 20px;
  height:160px;
  width: 970px;
  display: flex;
  justify-content: flex-start;
  position:relative;
}
.check-name{
  margin-left: 40px;
}
.name{
  width: 350px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
}
.name .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 16px;
}
.cart-main-item .book-check-box{
    line-height: 40px;
}

.book-name{
    width: 400px;
    line-height: 40px;
    font-size: 18px;
    padding-left: 10px;
}
.book-author, .book-version, .book-upTime, .book-shopName,.price{
    padding-left: 38px;
    width: 350px;
    font-size: 14px;
    color: grey;
}
.other{
    width:450px;
    height:160px;
    display: flex;
    justify-content: flex-end;
    position: relative;
}
.other hr{
  margin-left: 50px;
  margin-right: 0;
  margin-top: 0;
  height:160px;
}
img{
    margin-left:20px;
    width: 140px;
}
.price{
    padding-top: 28px;
    color:#ce0000;
    font-weight:bold;
}
.delete{
    margin-top: 122px;
    width: 40px;
    height:40px;
    line-height: 50px;
    padding-left: 0px;
}
.delete .el-button {
    font-size: 18px;
    text-align: center;
    padding: 0;
    height: inherit;
    width: inherit;
}
.buyIcon{
    margin-top: 122px;
    width: 40px;
    height:40px;
    line-height: 50px;
    padding-left: 20px;
}
.buyIcon .el-button {
    font-size: 18px;
    text-align: center;
    padding: 0;
    height: inherit;
    width: inherit;
}

</style>

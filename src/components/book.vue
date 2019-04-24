<template>
<div>
  <div class="book">
    <div class="top">
      <img :src="this.book.bookImage">
    </div>
    <table class="information"  border="1" cellspacing="0">
      <tr>
        <td style="width:145px;height:42px;">价格:</td>
        <td style="width:399px;height:42px;"><span style="font-size:20px;color:red;font-weight:bold;">{{ book.bookPrice }}元</span><span style="font-size:20px;color:black;font-weight:bold;">/{{book.bookOriginalprice}}元</span></td>
      </tr>
      <tr>
        <td style="width:145px;height:42px;">卖家信息:</td>
        <td style="width:399px;height:42px;">{{this.saler.userName}}的书店</td>
      </tr>
      <tr>
        <td style="width:145px;height:42px;">联系方式:</td>
        <td style="width:399px;height:42px;">{{saler.userTel}} {{saler.userEmail}}</td>
      </tr>
    </table>
    <el-button style="position:absolute;float:left;left:750px;top:300px" @click="addShoppingCar">加入购物车</el-button>
    <el-button style="position:absolute;float:left;left:900px;top:300px" @click="buyNow">立即购买</el-button>
    <div class="introduction">
      <hr/>
      <h2>{{book.bookName}}</h2>
      <div>{{book.bookAuthor}}</div>
      <div>{{book.bookVersion}}</div>
    </div>
    <!-- <div class="comment">
      <hr/>
      <table  border="1" cellspacing="0" style="border-color: #DDDDDD;border-collapse: collapse;">
        <tr>
          <th style="width:276px;height:75px;font-size:25px">买家ID</th>
          <th style="width:399px;height:75px;font-size:25px">评价</th>
          <th style="width:345px;height:75px;font-size:25px">相关订单</th>
        </tr>
        <tr v-for="item in comments.slice((currentPage-1)*4,currentPage*4)" :key=item>
          <td style="width:276px;height:75px;">{{item.userId}}</td>
          <td style="width:399px;height:75px;">{{item.text}}</td>
          <td style="width:345px;height:75px;">{{item.bookId}}<br/>{{item.updateTime}}</td>
        </tr>
      </table>
    </div> -->
    <!-- <el-pagination
      class="pagination"
      background
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="4"
      layout="prev, pager, next"
      :total="comments.length"
      >
    </el-pagination> -->
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      currentPage: 1,
      bookId: this.$route.params.bookID,
      salerId: this.$route.params.salerId,
      book: null,
      saler: null,
      comments: null,
      userId: this.$userId
      /* ,
      commentUserId: null,
      commentBookId: null,
      commentUserName: null,
      commentBookName: null */
      /* book: {
        imgPath: '../../static/1.jpg',
        title: 'C++程序设计',
        seller: '潘智轩',
        sellerID: '201630666189',
        sellerNumber: '15555555555',
        price: 15.00,
        firstPrice: 72.00,
        information: '九成新二手书，书名:C++面向对象程序设计（第2版）,定价：34.50元,作者:谭浩强著,出版社：清华大学出版社,出版日期：2014年07月',
        comments: [{
          buyerID: '可爱智轩',
          comment: '很好',
          order: {
            book: '工科数学分析',
            time: '2018.09.12'
          }
        },
        {
          buyerID: '你的益达',
          comment: '超级好谢谢智轩！！',
          order: {
            book: '工科数学分析',
            time: '2018.09.12'
          }
        },
        ]
      } */
    }
  },
  methods: {
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
    addShoppingCar: function () {
      console.log(this.userId)
      console.log(this.bookId)
      axios({
        method: 'post',
        url: '/api/shoppingcar/insertShoppingCar',
        data: {
          userId: this.userId,
          bookId: this.bookId,
        }
      }).then(res => {
        console.log('now add to shopping car')
        console.log(res.data)
      }).catch(e => console.log(e))
      alert('已加入购物车')
    },
    buyNow: function () {
      axios({
        method: 'post',
        url: '/api/buy/buyNow',
        data: {
          salerId: this.salerId,
          buyerId: this.userId,
          bookId: this.bookID,
          price: this.book.price
        }
      }).then(res => {
        console.log(res.data)
        this.$router.push({
          path: '/Pay'
//           query: {
//             bookList: this.bookList
//           }
        })
      }).catch(e => console.log(e))
    }
    
  },
  mounted () {
    console.log('trying to get book by id')
    //console.log(this.$route.params)
    //console.log(this.$route.params.bookID)
    axios({
      method: 'get',
      url: 'api/Book/getBookById/' + this.bookId
    }).then(res => {
      this.book = res.data
      //console.log('getBookById')
      console.log(this.book)
      
      axios( {
        method: 'get',
        url: 'api/userinfor/getUserbyId/' + this.salerId
      }).then(res => {
        this.saler = res.data
        console.log('here is saler information')
        console.log(this.saler)
      })

    })
    // axios({
    //   method: 'get',
    //   url: '/api/buy/book/' + this.bookID
    // }).then(res => {
    //   this.book = res.data
    // })
    // axios({
    //   method: 'get',
    //   url: '/api/buy/getSaler/' + this.salerId
    // }).then(res => {
    //   this.saler = res.data
    // })
    // axios({
    //   method: 'get',
    //   url: '/api/buy/comment/' + this.bookID
    // }).then(res => {
    //   this.comments = res.data
    // })
  }
}
</script>

<style scoped>
.book {
  position: absolute;
  top: 186px;
  left: 50%;
  margin-left: -580px;
  background: white;
  width: 1152px;
  height: 1430px;
}
.information {
  position: absolute;
  width: 545px;
  top: 80px;
  left: 500px;
  float: left;
  text-align: left;
  font-size: 13px;
  border-collapse: collapse;
  border-color: #DDDDDD;
}
.introduction {
  position: absolute;
  top: 450px;
  left: 100px;
  width: 1000px;
  height: 400px;
  background: white;
  text-align: left;
  text-align: center;
}
.comment {
  position: absolute;
  top: 700px;
  left: 100px;
  width: 1000px;
  height: 400px;
  background: white;
  text-align: left;
}
.pagination {
  position: absolute;
  top: 1200px;
  left: 50%;
  margin-left: -175px;
  white-space: nowrap;
  color: #303133;
  font-weight: 700;
  width:350px;
}
.top{
  position: absolute;
  width: 350px;
  height: 350px;
  top: 50px;
  left: 50px;
}
.top img {
  position: absolute;
  width: 350px;
  height: 350px;
  top: 0px;
  left: 50px;
}
</style>

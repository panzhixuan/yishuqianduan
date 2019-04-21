<template>
<div class="sellerpage">
  <div class="group">
    <div class="header">
      <img src="../../static/photo/logo.png"></img>
      <text1><el-button type="text"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(255, 255, 255, 0.647058823529412);text-align:left;">主页</span></el-button></text1>
      <text2><el-button type="text"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(255, 255, 255, 0.647058823529412);text-align:left;">售卖中心</span></el-button></text2>
      <text3><el-button type="text"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(255, 255, 255, 0.647058823529412);text-align:left;">购买中心</span></el-button></text3>
      <text4><el-button type="text"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(255, 255, 255, 0.647058823529412);text-align:left;">个人中心</span></el-button></text4>
    </div>
    <div class="body"><div class="bodytop">
        <text1><span>书籍详情</span></text1>
        <img src="../../static/photo/line.png"></img>
      </div>
      <div class="bodymain">
        <img src="../../static/photo/line.png"></img>
        <div class="maincontent">
          <img :src="image"></img>
          <text1>
            <span style="font-size:14px;text-align:left;">价&nbsp; &nbsp; &nbsp; &nbsp; 格：</span>
          </text1>
          <text2>
            <span style="font-family:'Heiti SC Bold', 'Heiti SC';font-weight:700;font-style:normal;text-align:left;font-size:20px;color:#CC3333;">￥{{sellprice}}</span><span style="font-family:'Heiti SC Bold', 'Heiti SC';font-weight:700;font-style:normal;text-align:left;font-size:20px;color:#000000;">/ 原价￥{{price}}</span>
          </text2>
          <text3>
            <span style="font-size:14px; text-align:left;">卖家信息：</span>
          </text3>
          <text4>
            <span style="font-size:14px; text-align:left;">{{salerList[0].name}} </span><span style="font-size:14px;text-align:left;"> &nbsp;&nbsp;{{salerList[0].studentId}}</span>
          </text4>
          <text5>
            <span style="font-size:14px; text-align:left;">联系方式：</span>
          </text5>
          <text6>
            <span style="font-size:14px; text-align:left;">{{salerList[0].tel}}</span>
          </text6>
        </div>
        <div class="mainbuttom">
          <img src="../../static/photo/line1.png"></img>
          <button1>
            <el-button @click="postBookPass">通过审核</el-button>
            <el-button type="info" @click="postBookNoPass">不通过</el-button>
          </button1>
        </div>
      </div>
      <img src="../../static/photo/buttom.png"></img>
    </div>
    <router-view class="view"></router-view>
  </div>
</div>
</template>

<script>
import Admin from '../pages/Admin'
import axios from 'axios'

export default {
  name: 'SellerPage',
  data () {
    return {
      msg: 'Home',
      bookId:this.$route.query.mbookId,
      price:this.$route.query.oPrice,
      sellprice:this.$route.query.price,
      salerId:this.$route.query.salerId,
      image:this.$route.query.image,
      salerList:[]
    }
  },
  mounted:function(){
    this.getAllSaler()
  },
  methods: {
    // jump(){
    // //this.$router.push("/cart")
    // //传递的参数用{{ $route.query.goodsId }}获取
    // this.$router.replace('/seller')
    // //this.$router.go(-2)
    // //后退两步
    // }
    jumpToAdmin(){
        this.$router.push({
          path: '/admin'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
    getAllSaler:function(){
      console.log('获取卖家中...')
      axios.get('/api/user/getAllSaler/'+this.salerId)
        .then(res =>{
          console.log(res.data)
          this.salerList=res.data
          })
        .catch(e => console.log(e))
      console.log('获取卖家完毕')
    },
    postBookPass:function(){
      console.log('更新数据中')
      axios.post('/api/book/postBookPass/'+this.bookId)
        .then(
          console.log('更新成功')
        )
        .catch(e => console.log(e))
      console.log('更新完毕')
      this.$router.go(-1);
    },
    postBookNoPass:function(){
      console.log('更新数据中')
      axios.post('/api/book/postBookNoPass/'+this.bookId)
        .then(
          console.log('更新成功')
        )
        .catch(e => console.log(e))
      console.log('更新完毕')
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.group {
  margin:0px;
  position: relative;
  left:auto;
  top:-8px;
  width:1440px;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}
.header{
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1440px;
  height:102px;
  background:#001529
}
.header img{
  border-width:0px;
  position:absolute;
  left:144px;
  top:0px;
  width:140px;
  height:102px;
}
.header text1{
  border-width:0px;
  position:absolute;
  left:340px;
  top:36px;
  width:121px;
  height:64px;
}
.header text2{
  border-width:0px;
  position:absolute;
  left:482px;
  top:36px;
  width:121px;
  height:64px;
}
.header text3{
  border-width:0px;
  position:absolute;
  left:624px;
  top:36px;
  width:121px;
  height:64px;
}
.header text4{
  border-width:0px;
  position:absolute;
  left:766px;
  top:36px;
  width:121px;
  height:64px;
}
.body {
  border-width:0px;
  position:absolute;
  left:0px;
  top:102px;
  width:1440px;
  height:1645px;
  background:#f0f2f5;
}
.body img{
  border-width:0px;
  position:absolute;
  left:178px;
  top:1453px;
  width:1085px;
  height:63px;
}
.bodytop{
  border-width:0px;
  position:absolute;
  left:0px;
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
  left:144px;
  top:84px;
  width:1152px;
  height:1200px;
  background: #ffffff
}
.bodymain img {
  border-width:0px;
  position:absolute;
  left:-93px;
  top:1200px;
  width:1340px;
  height:2px;
}
.maintitle{
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1152px;
  height:53px;
}
.maincontent{
  border-width:0px;
  position:absolute;
  left:0px;
  top:15px;
  width:1152px;
}
.maincontent text1{
  border-width:0px;
  position:absolute;
  left:50px;
  top:80px;
  width:1104px;
  height:23px;
}
.maincontent text2{
  border-width:0px;
  position:absolute;
  text-align:left;
  left:700px;
  top:80px;
  width:1104px;
  height:23px;
}
.maincontent text3{
  border-width:0px;
  position:absolute;
  left:50px;
  top:130px;
  width:1104px;
  height:23px;
}
.maincontent text4{
  border-width:0px;
  position:absolute;
  text-align:left;
  left:700px;
  top:130px;
  width:1104px;
  height:23px;
}
.maincontent text5{
  border-width:0px;
  position:absolute;
  left:50px;
  top:180px;
  width:1104px;
  height:23px;
}
.maincontent text6{
  border-width:0px;
  position:absolute;
  text-align:left;
  left:700px;
  top:180px;
  width:1104px;
  height:23px;
}
.maincontent img{
  border-width:0px;
  position:absolute;
  left:150px;
  top:47px;
  width:280px;
  height:280px;
}
.mainpagination{
  border-width:0px;
  position:absolute;
  left:0px;
  top:935px;
  width:1152px;
  height: 50px;
}
.mainbuttom{
  border-width:0px;
  position:absolute;
  left:0px;
  top:430px;
  width:1152px;
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
   margin-bottom: 20px;
}
.el-col {
  border-radius: 0px;
}
</style>
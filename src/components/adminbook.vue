<template>
<div class="adminbook">
    <div class="body"><div class="bodytop">
        <text1><span>书籍列表</span></text1>
        <img src="../../static/photo/line.png">
      </div>
      <div class="bodymain">
        <img src="../../static/photo/line.png">
        <div class="maincontent">
          <text1>
            <div class="container">
            <el-table style="width: 100%;" data="bookList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
              <el-table-column prop="orderdate" width="140" label="订单日期"></el-table-column>
              <el-table-column prop="buyer" width="200" label="买家"></el-table-column>
              <el-table-column prop="bookdetails" width="250" label="书籍信息"></el-table-column>
              <el-table-column prop="price" width="150" label="价格"></el-table-column>
              <el-table-column prop="operation" width="150" label="操作"></el-table-column>   
            </el-table>
            </div>
          </text1>
        </div>
      </div>
    <div>
      <img src="../../static/photo/buttom.png">
    </div>
</div>
</template>

<script>

export default {
  name: 'seller',
  data () {
    return {
      msg: 'seller',
      checked: false,
      currentPage:1, //初始页
      pagesize:17,    //    每页的数据
      bookList: [
      //   {
      //   checked:false,
      //   booknum:"123",
      //   bookname:'IT项目管理',
      //   author:'凯西',
      //   price:"100",
      //   sellprice:"50",
      //   date:'2018-11-21'
      // },
      // {
      //   checked:false,
      //   booknum:"12",
      //   bookname:'IT项目管理',
      //   author:'凯西',
      //   price:"100",
      //   sellprice:"50",
      //   date:'2018-11-21'
      // }
      ]
    }
  },
  methods: {
    // jump(){
    // //this.$router.push("/cart")
    // //传递的参数用{{ $route.query.goodsId }}获取
    // this.$router.replace('/seller')
    // //this.$router.go(-2)
    // //后退两步
    // }
   jumpToHome(){
        this.$router.push({
          path: '/'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
      console.log(this.currentPage)  //点击第几页
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
  top:0px;
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
  left:25px;
  top:0px;
  width:1104px;
  height:23px;
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
  top:1000px;
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
   margin-bottom: 10px;
}
.el-col {
  border-radius: 0px;
}
</style>
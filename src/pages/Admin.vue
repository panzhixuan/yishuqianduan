<template>
<div class="admin">
  <div class="group">
    <div class="header">
      <img src="../../static/photo/logo.png"></img>
      <text1><el-button type="text" @click="jumpToAdminMain"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(255, 255, 255, 0.647058823529412);text-align:left;">审核人员</span></el-button></text1>
      <text2><el-button type="text"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#F7F7F7;text-align:left;">审核书籍</span></el-button></text2>
    </div>
    <div class="body"><div class="bodytop">
        <text1><span>书籍列表</span></text1>
        <img src="../../static/photo/line.png"></img>
      </div>
      <div class="bodymain">
        <img src="../../static/photo/line.png"></img>
        <div class="maincontent">
          <text1>
            <el-table style="width: 100%;" :data="bookList.slice((currentPage-1)*pagesize,currentPage*pagesize)"  @row-click="jumpToAdminSellerPage" @selection-change="changeFun">
              <el-table-column prop="checked" width="50" type="selection" @selection-change="changeFun"></el-table-column>
              <el-table-column prop="bookId" width="140" label="书籍编号"></el-table-column>
              <el-table-column prop="name" width="200" label="名称"></el-table-column>
              <el-table-column prop="author" width="200" label="作者"></el-table-column>
              <el-table-column prop="oPrice" width="150" label="官方定价"></el-table-column>
              <el-table-column prop="price" width="150" label="售价"></el-table-column>
              <el-table-column prop="uploadTime" width="213" label="上传时间"></el-table-column>    
            </el-table>
          </text1>
        </div>
        <div class="mainpagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            :page-size="pagesize" 
            :current-page="currentPage"
            layout="total,prev, pager, next, jumper"
            :total="bookList.length">
          </el-pagination>
        </div>
        <div class="mainbuttom">
          <img src="../../static/photo/line1.png"></img>
          <button1>
            <el-button size="medium" @click="pass">通过审核</el-button>
            <el-button type="info" size="medium" @click="nopass">不通过审核</el-button>
          </button1>
        </div>
      </div>
      <img src="../../static/photo/buttom.png"></img>
    </div>
  </div>
</div>
</template>

<script>
// import SellerPage from './SellerPage'
import axios from 'axios'

export default {
  inject:['reload'],
  name: 'admin',
  data () {
    return {
      flag:0,
      bookId:0,
      msg: 'seller',
      currentPage:1, //初始页
      pagesize:17,    //    每页的数据
      bookList: [],
      multipleSelection: []
    }
  },
  mounted:function(){
    this.getAllUnflagBook()
  },
  methods: {
    // jump(){
    // //this.$router.push("/cart")
    // //传递的参数用{{ $route.query.goodsId }}获取
    // this.$router.replace('/seller')
    // //this.$router.go(-2)
    // //后退两步
    // }
    changeFun(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection)
    },
   jumpToHome(){
        this.$router.push({
          path: '/'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
    jumpToAdminSellerPage(row){
        this.$router.push({
          path: '/adminsellerpage',
          query: {
            oPrice: row.oPrice,
            price: row.price,
            salerId: row.salerId,
            mbookId: row.bookId,
            image: row.image
          }
        })
    },
    jumpToAdminMain(){
        this.$router.push({
          path: '/adminmain'
//           query: {
//             bookList: this.bookList
//           }
        })
    },
    pass:function(){
      for (var i=0;i<this.multipleSelection.length;i++){
        this.bookId=this.multipleSelection[i].bookId
        axios.post('/api/book/postBookPass/'+this.bookId)
        .then(
          console.log('更新成功')
        )
        .catch(e => console.log(e))
      console.log('更新完毕')
      this.reload()
      }
    },
    nopass:function(){
      for (var i=0;i<this.multipleSelection.length;i++){
        this.bookId=this.multipleSelection[i].bookId
        axios.post('/api/book/postBookNoPass/'+this.bookId)
        .then(
          console.log('更新成功')
        )
        .catch(e => console.log(e))
      console.log('更新完毕')
      this.reload()
      }
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
      console.log(this.currentPage)  //点击第几页
    },
    getAllUnflagBook:function(){
      console.log('获取书籍列表中...')
      axios.get('/api/book/getAllUnflagBook/'+this.flag)
        .then(res =>{
          console.log(res.data)
          this.bookList=res.data
        })
        .catch(e => console.log(e))
      console.log('获取书籍列表完毕')
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
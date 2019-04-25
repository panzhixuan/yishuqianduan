<template>
  <div class="seller-main">
    <div class="title">
      <SellerTitle/>
      <SellerButtons  :deletelist="deletelist" />
    </div>
    <hr class="pagetop">
    <div class="list-container">
      <div class="seller-list-container">
        <seller-main-item 
          v-for="(bookitem,index) of booklist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="index"
          :index="index"
          :content="bookitem"
          :deletelist="deletelist"
          @updateDeletelist="updateDelList"
        ></seller-main-item>
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
import SellerMainItem from './SellerMainItem'
import SellerButtons from './SellerButtons'
import SellerTitle from './SellerTitle'
// 导入axios
import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
// import Mock from 'mockjs'

export default {
  name: 'SellerMain',
  components:{
     SellerButtons,
     SellerTitle,
    'seller-main-item':SellerMainItem
  },
  data () {
    return {
      // MockAdapter:require('axios-mock-adapter'),
      // mock:new MockAdapter(axios),
      salerId:this.$userId,
      currentPage:1, //初始页
      pagesize:5,
      booklist:[],
      deletelist:[]
    }
  },
  mounted:function(){
    // this.booklist=this.init()
    // let dBookList=this.init()
    // this.mock.onGet('/api/book/getAllSellerBooks').reply(req => {
    //   return [200,{
    //     dBookList
    //   }]
    // })
    // 获取书籍列表
    // this.getAllSellerBooks()
    this.getBookBySalerId()

  },
  methods:{
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize)  //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
      console.log(this.currentPage)  //点击第几页
    }, 
    init:function(){
      let books=[]
      for(let i=0;i<23;i++){
        let newBookObject = {
          checked: false,
          name: '123',
          src: null,
          price: 23.50,
          author: '123',
          version: '第七版',
          upTime: '123',
          flag: '已审核',
          type:''
        }
        books.push(newBookObject)
      }
      return books
    },
    updateDelList(data){
      // console.log("更新"+data[0])
      let ifIn=0
      for(let i=0;i<this.deletelist.length;i++){
        if(this.deletelist[i]===data[0]){
          ifIn=1
          this.deletelist.splice(i,1)
          break
        }
      }
      if(ifIn===0){
        this.deletelist=this.deletelist.concat(data)
      }
      // console.log(this.deletelist)
    },
    // 获取书籍列表
    getAllSellerBooks:function(){
      console.log('获取书籍列表中...')
      axios.get('/api/sell/getAllSalerBooks/'+this.salerId)
        .then(res =>{
          console.log(res.data)
          this.booklist=res.data
        })
        .catch(e => console.log(e))
      console.log(this.booklist)
      console.log('获取图书列表完毕')
    },
    getBookBySalerId: function(){
      //console.log('haha?')
      console.log(this.salerId)
      var str = this.salerId
      console.log(str)
      axios({
        method: 'get',
        url: '/api/Book/getBookBySalerId/' + str               
      }).then(res => {
        console.log(res)
        this.booklist = res.data
        console.log(this.booklist)
        //this.$emit('getTotal', this.currentBooks.length)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seller-main{
  width:1140px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
 
  height:680px;
}
.title{
  display: flex;
  justify-content: flex-start;
}
ul{
  width: 1120px;
  padding-inline-start: 0px;
  margin:10px;
  padding: 0;
}
.pagefoot{
  margin-top:60px;
}
</style>
<style>
.el-pagination {
    white-space: nowrap;
    margin:40px auto;
    color: #303133;
    font-weight: 700;
    width:350px;
}
.el-pagination button, .el-pagination span:not([class*=suffix]) {
    font-size: 14px;
}
.el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon {
    font-size: 14px;
}
.el-pager li{
  font-size:14px;
  color:gray;
}
.el-pager li.active {
    color: #303133;
}
</style>

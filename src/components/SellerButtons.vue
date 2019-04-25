<template>
  <div class="seller-buttons">
    <el-row>
      <el-button @click="deleteBook" class="lowerBtn" type="info" plain>下架所选书籍</el-button>
      <el-button @click="jumpToAddBookDetails" class="uperBtn" type="info" plain>上架书籍</el-button>
    </el-row>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios'

export default {
  inject:['reload'],
  name: 'SellerButtons',
  props:['deletelist'],
  data () {
    return {
      del:[]
    }
  },
  methods:{
    jumpToAddBookDetails(){
        this.$router.push({
          name: 'addBookDetails'
        })
    },
    deleteBook(){
      console.log(this.deletelist)
      console.log('下架书籍列表中...')
      axios.get('/api/sell/deleteSalerBooks/'+this.deletelist)
        .then(res =>{
          console.log(res.data)
          this.reload()
        }).then(res =>{
                this.reload()
              }).catch(e => console.log(e))    
      console.log('下架书籍完毕')
      // this.$router.go(0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seller-buttons{
  width: 1130px;
  height:45px;
  color:#2c3e50;
  padding-right: 10px; 
  position:relative;
}
.uperBtn{
  float:left;
}
.lowerBtn{
  margin-left: 300px;
  float: left;
}
</style>
<style>
.el-button{
  font-size:14px;
}
.el-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    /* position: absolute; */
    /* right: 0; */
    /* padding-right: 10px; */
    margin-right: 10px;
}
</style>

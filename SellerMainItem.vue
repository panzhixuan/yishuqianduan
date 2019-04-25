<template>
  <div class="seller-main-item">
      <!-- <hr > -->
      <div class="container">
        <img :src="content.bookImage">
        <div class="check-name">
          <div class="name">
            <el-checkbox class="check-box" :label="content.bookId" v-model="temp">{{content.bookName}}</el-checkbox>
            <!-- v-model="content.checked" -->
          </div>
        <div class="details">
            <div class="book-author">作者：{{content.bookAuthor}}</div>
            <div class="book-version">版次：{{content.bookVersion}}</div>
            <div class="book-upTime">上架时间：{{content.bookModifytime}}</div>
            <div class="book-flag" v-if="content.bookFlag===0">书籍状态：未审核</div>
            <div class="book-flag" v-if="content.bookFlag===1">书籍状态：审核通过</div>
            <div class="book-flag" v-if="content.bookFlag===2">书籍状态：审核未通过</div>
            <div class="book-flag" v-if="content.bookFlag===3">已售出</div>
            <div class="price">价格：{{content.bookPrice}}元</div>
        </div>
      </div>
      <div @click="jumpToEditBook" class="edit">
            <el-button icon="el-icon-edit"></el-button>
      </div>
      
      </div>
  </div>
</template>

<script>
export default {
  name: 'SellerMainItem',
  props:['content','index','deletelist'],
  data () {
    return {
      temp:[]
    }
  },
  watch: {
    temp(nval,oval) {
      //console.log(this.deletelist)
      //console.log(this.temp)
      // console.log(oval)
      // console.log(nval)
      if(nval.length>0){
        console.log(nval)
        this.$emit('updateDeletelist', nval)
      }else{
        console.log(oval)
        this.$emit('updateDeletelist', oval)
      }
    }
  },
  methods:{
    jumpToEditBook(){
        console.log("即将修改："+this.content.book_id)
      //   this.$emit('editBook',this.index)
        this.$router.push({
        name: 'addBookDetails',
        params:{editBook:this.content}
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seller-main-item{
  height:150px;
  width: 970px;
}
.container{
  margin-top: 30px;
  height:160px;
  width: 970px;
  display: flex;
  justify-content: flex-start;
  position:relative;
}
.check-name{
  margin-left: 20px;
}
.name{
  width: 350px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
}
.seller-main-item .book-check-box{
    line-height: 40px;
}

.book-name{
    width: 400px;
    line-height: 40px;
    font-size: 18px;
    padding-left: 10px;
}
.book-author, .book-version, .book-upTime, .book-flag,.price{
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
    /* margin-top: 110px; */
    /* width: 130px; */
    /* height:50px; */
    /* font-size: 14px;
    line-height: 90px;
    margin-left: 30px; */
}
.edit{
    margin-top: 122px;
    width: 50px;
    height:50px;
    line-height: 50px;
    padding-left: 0px;
}
</style>
<style>
    .el-checkbox__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 16px;
    }
</style>
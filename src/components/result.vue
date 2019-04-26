<template>
<div>
  <el-tabs v-model="activeName" type="card" style=" margin-left: 100px; margin-top: 70px; margin-right: 50px; z-index: 1000;">
    <el-tab-pane label="搜索结果" name="搜索结果"></el-tab-pane>
  </el-tabs>
  <ul v-if="this.currentBooks.bookId!=null">
    <li class="book">
      <img :src="currentBooks.bookImage" @click="jump(currentBooks.bookId, currentBooks.salerId)"/>
      <h2 class="title">{{currentBooks.bookName}}</h2>
      <div class="seller">{{currentBooks.bookPrice}}元</div>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      activeName: '搜索结果',
      currentPage: 1,
      input: this.$route.params.keyword,
      currentBooks: null
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: '/api/Book/getBookByName/' + this.input
    }).then(res => {
      console.log(res.data);
      
      this.currentBooks = res.data;
      console.log(this.currentBooks)
    })
  },
  methods: {
    jump: function (id, salerId) {
      this.$router.push({ path: '/book/' + id + '/' + salerId }, {params: { bookID: id, salerId: salerId }})
    }
  }
}
</script>

<style scoped>
img {
  width: 280px;
  height: 250px;
}
.book {
  width: 300px;
  height: 320px;
  border: 1px solid gray;
  margin-top: 10px;
}
.title {
  margin-top: -5px;
  margin-left: 5px;
}
.seller {
  margin-top: -8px;
  color: gray;
  font-size: 18px;
  float: right;
  background-color: #ffcc99;
}
ul {
  list-style: none;
  margin-left: 100px;
  overflow: hidden;
}
ul li {
  float: left;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>

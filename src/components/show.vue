<template>
<div>
  <ul>
    <li class="book" v-for="book in currentBooks.slice((currentPage-1)*12,currentPage*12)" :key=book>
      <img :src="book.bookImage" @click="jump(book.bookId, book.salerId)">
      <h2 class="title">{{book.bookName}}</h2>
      <div class="seller">{{book.bookPrice}}元</div>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      books: null,
      currentBooks: null
      /*books: [{
        bookID: '00000000000000000001',
        imgPath: '../../static/1.jpg',
        title: 'C++程序设计',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大一'
      }
      */
    }
  },
  props: {
    tabs: String,
    currentPage: Number
  },
  computed: {
    /* currentBooks: function () {
      var arraybook = []
      for (var i = 0; i < this.books.length; i++) {
        var book = this.books[i]
        if (book.tag === this.tabs && book.option === this.option) {
          arraybook.push(book)
        }
      }
      this.$emit('getTotal', arraybook.length)
      return arraybook
    } */
    tabTypeId: function () {
      var id = 0
      switch (this.tabs) {
        case '所有书籍':
          id = 0
          break
        case '科学类':
          id = 1
          break
        case '教育类':
          id = 2
          break
        case '休闲类':
          id = 3
          break
        case '文学类':
          id = 4
          break
      }
      return id
    }
  },
  watch: {
    tabTypeId: function (tabTypeId) {
      if (tabTypeId === 0) {
        this.currentBooks = this.books
      } 
      else {
        var arraybook = []
        // alert(this.books)
        for (var i = 0; i < this.books.length; i++) {
          var book = this.books[i]
          if (book.booktypeId === tabTypeId) {
            //  && book.option === this.option
            arraybook.push(book)
          }
        }
        this.currentBooks = arraybook
      }
      this.$emit('getTotal', this.currentBooks.length)
    }
  },
  methods: {
    jump: function (bookId, salerId) {
      this.$router.push({ path: '/book/' + bookId + '/' + salerId }, {params: { bookId: bookId, salerId: salerId }})
    },
    getBooks: function(){
      axios({
        method: 'post',
        url: '/api/buy/getBook'
      }).then(res => {
        this.books = res.data
        this.currentBooks = res.data
        this.$emit('getTotal', this.currentBooks.length)
      })
    },
    getBook: function(){
      //console.log('haha?')
      console.log(this.tabTypeId)
      var str = ''
      switch (this.tabTypeId) {
        case 0:
          str = 'all'
          break
        case 1:
          str = 'science'
          break
        case 2:
          str = 'education'
          break
        case 3:
          str = 'leisure'
          break
        case 4:
          str = 'literature'
          break

      }

      console.log(str)

      axios({
        method: 'get',
        url: '/api/Book/getBook/' + str                  //////这里有点问题
      }).then(res => {
        console.log(res)
        this.books = res.data
        console.log(this.books)
        this.currentBooks = res.data
        //this.$emit('getTotal', this.currentBooks.length)
      })
    }
  },
  mounted () {
    //console.log('fuck')
    /*axios({
      method: 'post',
      url: '/api/buy/getBook'
    }).then(res => {
      this.books = res.data
      this.currentBooks = res.data
      this.$emit('getTotal', this.currentBooks.length)
    })*/
    console.log('get book ')
    this.getBook();
  }
}
</script>

<style scoped>
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
  margin-top: -5px;
  color: gray;
  font-size: 12px;
  float: right;
  background-color: #ffcc99;
}
ul {
  list-style: none;
  overflow: hidden;
}
ul li {
  float: left;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
img {
  width: 300px;
  height: 250px;
}
</style>

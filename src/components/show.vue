<template>
<div>
  <ul>
    <li class="book" v-for="book in currentBooks.slice((currentPage-1)*12,currentPage*12)" :key=book>
      <img :src="book.image" @click="jump(book.bookId, book.salerId)">
      <h2 class="title">{{book.name}}</h2>
      <div class="seller">{{book.price}}元</div>
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
      },
      {
        bookID: '00000000000000000002',
        imgPath: '../../static/2.jpg',
        title: 'C++ Primer Plus',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大一'
      },
      {
        bookID: '00000000000000000003',
        imgPath: '../../static/3.jpg',
        title: '数字设计和计算机体系结构',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000004',
        imgPath: '../../static/4.jpg',
        title: 'UML和模式应用',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000005',
        imgPath: '../../static/5.jpg',
        title: '计算机组成与嵌入式系统',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000006',
        imgPath: '../../static/6.jpg',
        title: '概率论与数理统计',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000007',
        imgPath: '../../static/6.jpg',
        title: '概率论与数理统计',
        seller: '刘一达',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000008',
        imgPath: '../../static/5.jpg',
        title: '计算机组成与嵌入式系统',
        seller: '刘一达',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000009',
        imgPath: '../../static/3.jpg',
        title: '数字设计和计算机体系结构',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000010',
        imgPath: '../../static/4.jpg',
        title: 'UML和模式应用',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000011',
        imgPath: '../../static/5.jpg',
        title: '计算机组成与嵌入式系统',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000012',
        imgPath: '../../static/6.jpg',
        title: '概率论与数理统计',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000013',
        imgPath: '../../static/6.jpg',
        title: '概率论与数理统计',
        seller: '刘一达',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000014',
        imgPath: '../../static/5.jpg',
        title: '计算机组成与嵌入式系统',
        seller: '刘一达',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000015',
        imgPath: '../../static/3.jpg',
        title: '数字设计和计算机体系结构',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000016',
        imgPath: '../../static/4.jpg',
        title: 'UML和模式应用',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000017',
        imgPath: '../../static/5.jpg',
        title: '计算机组成与嵌入式系统',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000018',
        imgPath: '../../static/6.jpg',
        title: '概率论与数理统计',
        seller: '潘智轩',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000019',
        imgPath: '../../static/6.jpg',
        title: '概率论与数理统计',
        seller: '刘一达',
        tag: '软件学院',
        option: '大二'
      },
      {
        bookID: '00000000000000000020',
        imgPath: '../../static/5.jpg',
        title: '计算机组成与嵌入式系统',
        seller: '刘一达',
        tag: '软件学院',
        option: '大二'
      }
      ] */
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
        /*case '环境学院':
          id = 5
          break*/
      }
      return id
    }
  },
  watch: {
    tabTypeId: function (tabTypeId) {
      if (tabTypeId === 0) {
        this.currentBooks = this.books
      } else {
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
    jump: function (id, salerId) {
      this.$router.push({ path: '/book/' + id + '/' + salerId }, {params: { bookID: id, salerId: salerId }})
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
    }
  },
  mounted () {
    /*axios({
      method: 'post',
      url: '/api/buy/getBook'
    }).then(res => {
      this.books = res.data
      this.currentBooks = res.data
      this.$emit('getTotal', this.currentBooks.length)
    })*/
    this.getBooks();
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

<template>
<div class="tab">
  <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable
  size="medium"
  style="width:200px; margin-left: 1100px; margin-top: 70px; z-index: 999;"
  suffix-icon="el-icon-search"
  @keyup.enter.native="search">
  </el-input>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card" style="margin-left: 100px; margin-top: -40px; margin-right: 50px; z-index: 1000;">
    <el-tab-pane label="所有书籍" name="所有书籍"><show :tabs="activeName" @getTotal= "getTo" :currentPage="currentPage"></show></el-tab-pane>
    <el-tab-pane label="科学类" name="科学类"><show :tabs="activeName" @getTotal= "getTo" :currentPage="currentPage"></show></el-tab-pane>
    <el-tab-pane label="教育类" name="教育类"><show :tabs="activeName" @getTotal= "getTo" :currentPage="currentPage"></show></el-tab-pane>
    <el-tab-pane label="休闲类" name="休闲类"><show :tabs="activeName" @getTotal= "getTo" :currentPage="currentPage"></show></el-tab-pane>
    <el-tab-pane label="文学类" name="文学类"><show :tabs="activeName" @getTotal= "getTo" :currentPage="currentPage"></show></el-tab-pane>
  </el-tabs>
<el-pagination
  class="pagination"
  background
  @current-change="handleCurrentChange"
  :current-page="currentPage"
  :page-size="12"
  layout="prev, pager, next"
  :total="total"
  >
</el-pagination>
</div>
</template>

<script>
import show from './show'
export default {
  name: 'tabPages',
  components: {
    show
  },
  mounted(){
    //console.log('fuck')
    this.activeName=this.$route.query.tag
    if(this.$route.query.tag==undefined){
      this.activeName='所有书籍'
    }
  },
  data () {
    return {
      currentPage: 1,
      total: 0,
      activeName: null,
      value: '大一',
      input: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      this.currentPage = 1
    },
    getTo (length) {
      this.total = length
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
    search () {
      this.$router.push({ path: '/result/' + this.input }, {params: { keyword: this.input }})
    }
  }
}
</script>

<style scoped>
.pagination {
  position: absolute;
  top: 1400px;
  left: 50%;
  margin-left: -175px;
  white-space: nowrap;
  color: #303133;
  font-weight: 700;
  width:350px;
}
</style>
<template>
  <div id="mainpage">
    <div
      class="top"
      align="center"
    >
      
     
      
      <!-- <input
        class="input1"
        type="text"
      >
      <button
        type="info"
        class="button1"
      >搜索</button> -->
    </div>
    <p class="welcome">Welcome</p>
    <img
      class="line3"
      src="../assets/line3.png"
    >
    <img
      class="bigpicture"
      src="../assets/big.png"
    >
    <div class=nav>
      <img class=xueyuan src="../assets/xueyuan.png">
        <text3><el-button type="text" @click="jumpToTabPages(`科学类`)"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">科学类</span></el-button></text3>
        <text2><el-button type="text" @click="jumpToTabPages(`教育类`)"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">教育类</span></el-button></text2>
        <text1><el-button type="text"  @click="jumpToTabPages(`休闲类`)"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">休闲类</span></el-button></text1>
        <!-- <text6><el-button type="text" @click="jumpToSoftware"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">法学院</span></el-button></text6> -->
        <!-- <text5><el-button type="text" @click="jumpToSoftware"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">环境学院</span></el-button></text5> -->
        <text4><el-button type="text"  @click="jumpToTabPages(`文学类`)"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">文学类</span></el-button></text4>
      
      </div>
    
  </div>
</template>

<script>
import tabPages from '../components/tabPages'

export default {
  name: 'App',
  methods: {
    jumpToTabPages(val){
         this.$router.push({
          name: 'tabpages',
          query:{'tag':val}
        })
    }
  }
}
</script>

<style scoped>
.imagepage {
  background: aliceblue;
}
.nav{
  border-width:0px;
  position:absolute;
  left:460px;
  top:250px;
  width:0px;
  height:1645px;
  background:#f0f2f5;
  
}
.xueyuan{
  position: absolute;
  top: 15px;
}
.nav text1{
  border-width:0px;
  position:absolute;
  left:50px;
  top:80px;
  width:121px;
  height:64px;
}
.nav text2{
  border-width:0px;
  position:absolute;
  left:50px;
  top:130px;
  width:121px;
  height:64px;
}
.nav text3{
  border-width:0px;
  position:absolute;
  left:50px;
  top:180px;
  width:121px;
  height:64px;
}
.nav text4{
  border-width:0px;
  position:absolute;
  left:50px;
  top:230px;
  width:121px;
  height:64px;
}
.nav text5{
  border-width:0px;
  position:absolute;
  left:50px;
  top:280px;
  width:121px;
  height:64px;
}
.nav text6{
  border-width:0px;
  position:absolute;
  left:50px;
  top:330px;
  width:121px;
  height:64px;
}
/* .top {
  width: 80%;
  height: 100px;
  background: inherit;
  margin: 0 auto;
  background-color: rgba(0, 21, 41, 1);
} */
img.line3 {
  position: relative;
  left: 160px;
  top: -10px;

  width: 1200px;
}
img.mainlogo2 {
  width: 130px;
  height: 100px;
  position: relative;
  left: -400px;
}
p.page1 {
  color: aliceblue;
  position: relative;
  left: -200px;
  top: -80px;
}
p.page2 {
  color: aliceblue;
  position: relative;
  top: -116px;
  left: -80px;
}
p.page3 {
  color: aliceblue;
  position: relative;
  top: -154px;
  left: 40px;
}
p.page4 {
  color: aliceblue;
  position: relative;
  top: -190px;
  left: 160px;
}
img.search {
  position: relative;
  top: -225px;
  left: 400px;
  width: 20px;
  height: 20px;
}
input.input1 {
  position: relative;
  left: 410px;
  top: -230px;
}
button.button1 {
  position: relative;
  top: -230px;
  left: 420px;
}
p.welcome {
  font-size: 30px;
  position: relative;
  left: 270px;
}
img.bigpicture {
  position: relative;
  left: 650px;
  top: -100px;
  width: 450px;
  height: 675px;
  transform: rotate(90deg);
}
.navigation {
  position: relative;
  left: 300px;
  top: -650px;
}
</style>

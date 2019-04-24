<template>
  <div class="home">
    <div class="header">
      <!-- <h1>{{msg}}</h1> -->
      <!-- <button @click="jumpToSeller">售卖中心</button> -->
      <div class="logo">
        <img src="../../static/bookImg/myLogo.png" >
      </div>
      <div class="homepage"><router-link to="/mainpage">主页</router-link></div> 
      <div class="centers">
        <p class="sellcenter"><router-link to="/SellerMain">售卖中心</router-link></p>
        <p class="buycenter"><router-link to="/tabPages">购买中心</router-link></p>
        <p class="minecenter"><router-link to="/BuyerOrder">个人中心</router-link></p>
        
      </div>
      <div class="userName"><el-button type="danger" size="medium" @click="logout">退出登录</el-button></div>
    </div>
    
    <div>
      <router-view>
      </router-view></div>
    <div class="footer"><img src="../../static/bookImg/footer.jpg" ></div>
  </div>
</template>

<script>
import mainpage from '../components/mainpage'
import CartMain from '../components/CartMain'
import SellerMain from '../components/SellerMain'
import tabPages from '../components/tabPages'
import BuyerOrder from '../components/BuyerOrder'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      userName:'用户名',
      userId: 0
    }
  },
  components: {
    mainpage
  },
 mounted:function(){
    //this.userId=this.$route.query.userId
    this.$router.push({
          name: '/mainpage'
        })
  },
  methods: {
//     jumpToSeller(){
//         const { href } = this.$router.resolve({
//           name: 'seller'
//         })
//         window.open(href, '_blank')
//     },
    logout:function(){
              this.$router.push({
          path: '/Login'
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  margin:  0 auto;
  border-width: 0px;
  
 
  width: 1440px;
  height: 1800px;
  background: rgba(240, 242, 245, 1);
  border: none;
  border-radius: 0px;
  box-shadow: none;
  
}
.header{
  border-width: 0px;
  
  width: 1440px;
  height: 102px;
  background: inherit;
  background-color: rgba(0, 21, 41, 1);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.logo{
  position: relative;
  left: 110px;
  top: 0px;
}
.logo img{
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 140px;
    height: 102px;
}
.homepage{
  position:absolute;
  top: 14px;
  left:490px;
  height: 64px;
  width: 121px;
  text-align: center;
}
.homepage a{
  text-decoration: none;
  height: 64px;
  line-height: 64px;
  color: #F7F7F7;
  font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
}
.centers{
  position:absolute;
  top: 14px;
  left:600px;
  width: 339px;
  height: 64px;
}
.centers p{
    border-width: 0px;
    position: relative;
    width: 113px;
    height: 64px;
    font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #F7F7F7;
    text-align: center;
    float: left;
    left: 0;
}
.header p a{
  line-height: 30px;
  text-decoration: none;
  color: #F7F7F7;
  text-align: left;
}
.userLogo{
    border-width: 0px;
    position: absolute;
    left: 1154px;
    top: 31px;
    width: 30px;
    height: 30px;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #333333;
    text-align: center;
    line-height: normal;
}
.userLogo img{
  font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #333333;
    text-align: center;
    line-height: normal;
}
.userName{
    position: absolute;
    line-height: 67px;
    left: 1400px;
    top: 20px;
}
.footer{
    
    position: absolute;
    left: 380px;
    top: 1600px;
    width: 1153px;
    
  
}
</style>
<template>
  <div class="login">
    <div><router-view></router-view></div>
    <div class="back1">
      <img
        class="background"
        src="../assets/backlogo.png"
      >
      <img
        class="back"
        src="../assets/mainlogo.png"
      >
    </div>

    <div class="border">
      <p class="登录">登&nbsp; 录</p>
      <!-- <img
        class="people"
        src="../assets/person.png"
      > -->

      <el-input
        class="input1"
        placeholder="请输入学号"
        v-model="email"
        clearable
        style="width:300px;"
      >
      </el-input>
      <p></p>
      <!--   <p class="password"><span>密码</span></p> -->

      <el-input
        class="input2"
        placeholder="请输入密码"
        v-model="password"
        type="password"
        clearable
        style=width:300px;
      >
      </el-input>
      <!--   <p class="verification_code"><span>验证码</span></p> -->
      <p></p>

      <el-button
        class="button1"
        type="info"
        @click="goTOregiste"
      >注册</el-button>
      <el-button
        class="button2"
        type="info"
        @click="gotoMainpage"
      >用户登录</el-button>
      <el-button
        class="button3"
        type="info"
        @click="gotofindpasswoed"
      >忘记密码</el-button>

    </div>

  </div>
</template>
 

<script>
import mainpage from '../components/mainpage'
import registe from '../components/registe'
import Home from '../Pages/Home'
import Adminmain from '../pages/Adminmain'
import axios from 'axios'
import Vue from 'vue'

export default {

  data () {
    return {
      email:null,
      password:null,
      userid:0,
    }
  },
  methods: {
    goTOregiste () {
      this.$router.push({ path: '/registe' });

    },
    gotoMainpage () {
      if(this.email!=null && this.password!=null){
        console.log('获取用户列表中...')
          axios.get('/api/login/Login/'+this.email+'/'+this.password)
        .then(res =>{
          console.log(res.data)
          this.userid=res.data
          console.log(this.userid)
          if (this.userid>0) {
      // 传递登录用户的id
            Vue.prototype.$userId = this.userid
            this.$router.push({
              name: 'Home',
              //query: {'userId':this.userid}
            })
          }
        })
        .catch(e => {
          console.log(e)
          alert('登录失败')})
      console.log('获取用户列表完毕')
      }
      else if (this.email==null){
        alert('请输入账号（邮箱格式）')
      }
      else{
        alert('请输入密码')
      }
    },
    gotofindpasswoed () {
      
      this.$router.push({

        name: 'findpassword'

      })
    }
  }

}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.login {
  margin: 0 auto;
}
img.background {
  margin: 0 auto;
  width: 1440px;
  height: 850px;
  vertical-align: middle;
  display: table-cell;
}
img.back {
  width: 356px;
  height: 371px;
  position: absolute;
  left: 1000px;
  top: 240px;
}
.border {
  position: absolute;
  left: 400px;
  top: 221px;
  width: 352px;
  height: 433px;
  background-color: rgba(0, 21, 41, 1);
}
p.登录 {
  position: relative;
  left: 135px;
  top: -10px;
  color: #ffffff;
  font-size: 35px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
img.people {
  position: relative;
  left: 40px;
  top: -15px;
}
.el-input.input1 {
  position: absolute;
  left: 25px;
  top: 85px;
}
p.password {
  color: #999999;
  position: relative;
  left: 35px;
  top: -20px;
  font-size: 27px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
.el-input.input2 {
  position: relative;
  left: 25px;
  top: 40px;
}
p.verification_code {
  color: #999999;
  position: relative;
  left: 28px;
  top: -65px;
  font-size: 23px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
.el-input.input3 {
  position: relative;
  left: 25px;
  top: 60px;
}
button.button1 {
  position: absolute;
  left: 210px;
  top: 250px;
  width: 110px;
  height: 45px;
  font-size: 18px;
}
button.button2 {
  position: absolute;
  left: 30px;
  top: 250px;
  font-size: 18px;
}
button.button3 {
  position: absolute;
  left: 30px;
  top: 330px;

  font-size: 18px;
}
</style>

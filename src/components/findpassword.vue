<template>
  <div class="login">
    <img
        class="background"
        src="../assets/backlogo.png"
      >
    <img
      class="back"
      src="../assets/mainlogo.png"
    >

    <div class="border">
      <p class="登录">忘记密码</p>
<!--       <img
        class="people"
        src="../assets/person.png"
      >
      <input
        class="input1"
        type="text"
        value="请输入学号"
      > -->
     <!--  <el-input
        class="input1"
        placeholder="请输入学号"
        v-model="input10"
        clearable
      >
      </el-input> -->
      <p class="password"><span>新密码</span></p>
      <p class="input2">
      <el-input v-model="password" type="password" placeholder="输入新密码"></el-input>
      </p>
      <!-- <el-input
        class="input2"
        placeholder="请输入密码"
        v-model="input10"
        clearable
      >
      </el-input> -->
      <p class="verification_code"><span>手机号</span></p>
      <p class="input3">
      <el-input v-model="tel" type="text" placeholder="输入相应的手机号码"></el-input>
      </p>
      <!-- <el-input
        class="input3"
        placeholder="请输入密码s"
        v-model="input10"
        clearable
      >
      </el-input> -->
      <!-- <el-button type="info">注册</el-button>
      <el-button type="info">登录</el-button>
      <el-button type="info">忘记密码</el-button> -->
      <!-- <p class="verification_code2"><span>验证码</span></p>
      <input
        class="input4"
        type="text"
        value="验证码"
      > -->
      <el-button
      
        @click="checktel"
        type="info"
        class="button1"
      >更改密码</el-button>

    <!--   <el-button
      
        @click="getyanzheng"
        type="info"
        class="button2"
      >获取验证码</el-button>
      -->
    </div>

  </div>
</template>
 

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      password:null, 
      tel:null
    }
  },
  methods: {
    checktel(){
      if(this.password!=null && this.tel!=null){
        axios.get('/api/login/checktel/'+this.tel)
        .then(res =>{
          console.log(res.data)
          if (res.data != ""){
            console.log('手机号码存在')
            this.go();
          }
          else {
            alert('手机号码未注册用户')
          }
        })
        .catch(e => {
          console.log(e)})
      }
      else if (this.password==null){
        alert('新密码为空')
      }
      else {
        alert('手机号码为空')
      }
    },
    go () {
      if(this.password!=null && this.tel!=null){
        axios.get('/api/login/newpassword/'+this.password+'/'+this.tel)
        .then(
          console.log('更新成功'),
          alert('修改密码成功'),
          this.$router.go(-1)
        )
        .catch(e => console.log(e)
        )
      console.log('更新完毕')
      }
       else if (this.password==null){
        alert('新密码为空')
      }
      else {
        alert('手机号码为空')
      }
      /* this.$router.push('/Login') */
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
input.input1 {
  position: relative;
  left: 70px;
  top: -30px;
  height: 30px;
  width: 180px;
}
p.password {
  color: #999999;
  position: relative;
  left: 35px;
  top: 0px;
  font-size: 20px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
p.input2 {
  position: relative;
  left: 115px;
  top: -50px;
  height: 30px;
  width: 180px;
}
p.verification_code {
  color: #999999;
  position: relative;
  left: 35px;
  top: -30px;
  font-size: 20px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
p.input3 {
  position: relative;
  left: 115px;
  top: -80px;
  height: 30px;
  width: 180px;
}
p.verification_code2 {
  color: #999999;
  position: relative;
  left: 35px;
  top: -130px;
  font-size: 20px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
input.input4 {
  position: relative;
  left: 115px;
  top: -190px;
  height: 30px;
  width: 180px;
}
button.button1 {
  position: relative;
  left: 100px;
  top: 0px;
  height: 50px;
  width: 150px;
  font-size: 20px;
}
button.button2 {
  position: relative;
  left: 95px;
  top: -180px;
  height: 50px;
  width: 150px;
  font-size: 20px;
}

</style>

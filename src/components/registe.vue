<template>
  <div class="login">
    <img class="background" src="../assets/backlogo.png">
    <img class="back" src="../assets/mainlogo.png">

    <div class="border">
      <p class="登录">注&nbsp; 册</p>
      <img class="people" src="../assets/person.png">
      <p class="inputemail">
      <el-input v-model="email" type="text" placeholder="请输入邮箱登录账号"></el-input>
      </p>
      <p class="username">
        <span>用户名</span>
      </p>
      <p class="inputusername">
      <el-input v-model="username" type="text" placeholder="请输入用户名"></el-input>
      </p>
      <p class="realname">
        <span>真实姓名</span>
      </p>
      <p class="inputrealname">
      <el-input v-model="realname" type="text" placeholder="请输入真实姓名"></el-input>
      </p>
       <p class="tel">
        <span>手机号码</span>
      </p>
      <p class="inputtel">
      <el-input v-model="tel" type="text" placeholder="请输入手机号码"></el-input>
      </p>
      <p class="password">
        <span>密码</span>
      </p>
      <p class="inputpassword">
      <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
      </p>
      <el-button @click="checkemail" type="info" class="button1">注册</el-button>
    </div>
  </div>
</template>
 

<script>
import axios from "axios"

export default {
  name: "registe",
  data() {
    return {
      email:null,
      username:null,
      realname:null,
      tel:null,
      password:null
    }
  },
  methods: {
    checkemail(){
      if(this.email!=null && this.username!=null && this.realname!=null && this.tel!=null && this.password!=null){
      console.log('获取用户列表中...')
      axios.get('/api/login/checkemail/'+this.email)
        .then(res =>{
          console.log('通过邮箱验证')
          console.log(res.data)
          if (res.data ==""){
            console.log('通过邮箱验证')
            this.checkusername();
          }
          else {
            alert('邮箱已存在')
          }
        })
        .catch(e => {
          console.log(e)})
      console.log('获取用户列表完毕')
      }
       else if (this.email==null) {
         alert('登录邮箱不能为空')
      }
      else if (this.username==null) {
         alert('用户名不能为空')
      }
      else if (this.realname==null) {
         alert('真实姓名不能为空')
      }
      else if (this.tel==null) {
         alert('手机号码不能为空')
      }
      else if (this.password==null) {
         alert('密码不能为空')
      }
    },
     checkusername(){
      console.log('获取用户列表中...')
      axios.get('/api/login/checkusername/'+this.username)
        .then(res =>{
          console.log(res.data)
          if (res.data == ""){
            console.log('通过用户名验证')
            this.checktel();
          }
          else {
            alert('用户名已存在')
          }
        })
        .catch(e => {
          console.log(e)})
      console.log('获取用户列表完毕')
    },
    checktel(){
      console.log('获取用户列表中...')
      axios.get('/api/login/checktel/'+this.tel)
        .then(res =>{
          console.log(res.data)
          if (res.data == ""){
            console.log('手机号码通过验证')
            this.go();
          }
          else {
            alert('手机号码已存在')
          }
        })
        .catch(e => {
          console.log(e)})
      console.log('获取用户列表完毕')
    },
    go() {
      if(this.email!=null && this.username!=null && this.realname!=null && this.tel!=null && this.password!=null){
          console.log("上传书籍中...");
      axios({
        method: "post",
        url: "/api/login/addUser",
        data: {
          email: this.email,
          username: this.username,
          realname: this.realname,
          tel: this.tel,
          password: this.password
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(e => console.log(e));
        console.log("上传书籍完毕");
        alert('注册成功');
        this.$router.go(-1)
      /* this.$router.push("/Login"); */
      }
      else if (this.email==null) {
         alert('登录邮箱不能为空')
      }
      else if (this.username==null) {
         alert('用户名不能为空')
      }
      else if (this.realname==null) {
         alert('真实姓名不能为空')
      }
      else if (this.tel==null) {
         alert('手机号码不能为空')
      }
      else if (this.password==null) {
         alert('密码不能为空')
      }
    }
  }
};
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
  top: -28px;
  height: 25px;
  width: 25px;
}
p.inputemail {
  position: relative;
  left: 100px;
  top: -80px;
  height: 0px;
  width: 230px;
}
p.username {
  color: #999999;
  position: relative;
  left: 30px;
  top: -25px;
  font-size: 15px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
p.inputusername {
  position: relative;
  left: 100px;
  top: -70px;
  height: 20px;
  width: 230px;
}
p.realname {
  color: #999999;
  position: relative;
  left: 30px;
  top: -35px;
  font-size: 15px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
p.inputrealname {
  position: relative;
  left: 100px;
  top: -80px;
  height: 10px;
  width: 230px;
}
p.tel {
  color: #999999;
  position: relative;
  left: 30px;
  top: -35px;
  font-size: 15px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
p.inputtel {
  position: relative;
  left: 100px;
  top: -80px;
  height: 10px;
  width: 230px;
}
p.password {
  color: #999999;
  position: relative;
  left: 30px;
  top: -35px;
  font-size: 15px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}
p.inputpassword {
  position: relative;
  left: 100px;
  top: -80px;
  height: 0px;
  width: 230px;
}
button.button1 {
  position: relative;
  left: 100px;
  top: -45px;
  height: 45px;
  width: 150px;
  font-size: 25px;
}
</style>

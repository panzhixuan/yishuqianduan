<template>
  <div class="modify-personal-information">
    
    <hr class="pagetop">
      <div class="bodytop">
        <text1><span>用户名</span></text1>
        
      </div>
      <div class=nav>
        <text3><el-button type="text"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:#001249;text-align:left;">个人信息</span></el-button></text3>
        <text2><el-button type="text" @click="jumpToSalerOrder"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">出售订单</span></el-button></text2>
        <text1><el-button type="text" @click="jumpToBuyerOrder"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">购买订单</span></el-button></text1>
                    <text4><el-button type="text" @click="jumpTOcartmain"><span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-weight:400;font-style:normal;font-size:16px;color:rgba(55, 15, 255, 0.647058823529412);text-align:left;">购物车</span></el-button></text4>

      </div>
    <div class="modify-main">
      
      <hr class="infortop">
      <div style="left: 50px; position: absolute; top: 20px;">个人中心>我的信息</div>
      <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="邮箱: " style="width:400px;">
          <el-input v-model="form.userEmail"></el-input>
        </el-form-item>
        <el-form-item label="用户名:" style="width:400px;">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名:" style="width:400px;">
          <el-input v-model="form.userRealname"></el-input>
        </el-form-item>
        <el-form-item label="性别:" style="width:400px;">
            <!-- <el-input v-model="form.userSex"></el-input> -->
            <el-radio-group v-model="form.userSex" >
            <el-radio  
            v-for="(tag,index) of taglist"
            :key="index" 
            :label="tag.id"
            name="type"
            >{{tag.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系方式:" style="width:400px;">
            <el-input v-model="form.userTel"></el-input>
        </el-form-item>
        <el-form-item label="密码:" style="width:400px;">
            <el-input v-model="form.userPassword"></el-input>
        </el-form-item>
        
        <hr class="inforFoot">
        <el-form-item class="modify-buttons">
          <el-button type="primary" @click="checkemail">确认修改</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>

      </el-form>

    </div>
    <hr class="pagefoot"> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  inject:['reload'],
  name: 'PersonalInfor',
  data() {
      return {

        userId:this.$userId,
        editUserInfo:{},
        taglist:
        [{name:"男",id:0},
        {name:"女",id:1}],

        form: {
          //salerId:'200000000000',
          // email:'174905883768@qq.com',
          // name:'刘益达',
          // realname: 'pan',
          // sex:'男',
          // tel:'18989600101',
          // password:'kjab22298y',
        }
      }
    },
    mounted:function(){
    
    this.getUserInfo()


    // this.editUserInfo=this.$route.params.editUserInfo
    //   if(this.editUserInfo!=null){
    //     console.log("正在修改："+this.editUserInfo.userId)
    //     this.form=this.editUserInfo
    //   }else{
    //     console.log("未传递出要修改的个人信息")
    //   }
    },
    methods: {
      jumpToSalerOrder(){
        this.$router.push({
          path: '/SalerOrder'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
    jumpTOcartmain(){
        this.$router.push({
          path: '/cartmain'
//           query: {
//             oldBooklist: this.oldBooklist
//           }
        })
    },
    jumpToBuyerOrder(){
        this.$router.push({
          path: '/BuyerOrder'
//           query: {
//             bookList: this.bookList
//           }
        })
    },
     checkemail(){
      if(this.form.userName!=''&&this.form.userEmail!=''&&this.form.userPassword!=''&&this.form.userTel!=''&&this.form.userRealname!=''){
      console.log('获取用户列表中...')
      axios.get('/api/login/checkemail/'+this.form.userEmail)
        .then(res =>{
          console.log('通过邮箱验证')
          console.log(res.data)
          if (res.data ==""||res.data.userEmail==this.form.userEmail){
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
      else if(this.form.userName==''){
            alert('用户名为空')
          }
          else if(this.form.userRealname==''){
            alert('真实姓名为空')
          }
          else if(this.form.userEmail==''){
            alert('邮箱为空')
          }
          else if(this.form.userPassword==''){
            alert('密码为空')
          }
          else if(this.form.userTel==''){
            alert('联系方式为空')
          }
    },
     checkusername(){
      console.log('获取用户列表中...')
      axios.get('/api/login/checkusername/'+this.form.userName)
        .then(res =>{
          console.log(res.data)
          if (res.data == ""||res.data.userName==this.form.userName){
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
      axios.get('/api/login/checktel/'+this.form.userTel)
        .then(res =>{
          console.log(res.data)
          if (res.data == ""||res.data.userTel==this.form.userTel){
            console.log('手机号码通过验证')
            this.clickModifyButton();
          }
          else {
            alert('手机号码已存在')
          }
        })
        .catch(e => {
          console.log(e)})
      console.log('获取用户列表完毕')
    },
      clickModifyButton() {
        // if(this.form.userName!=''&&this.form.userEmail!=''&&this.form.userPassword!=''&&this.form.userTel!=''&&this.form.userRealname!=''){
          console.log('修改个人信息中...')
          axios({
            method: 'post',
            url: '/api/userinfor/modifyUserbyId',
            data: {
              
              userId:this.userId,//获取userId

              tel:this.form.userTel,
              email:this.form.userEmail,
              password:this.form.userPassword,
              name:this.form.userName,
              realname:this.form.userRealname,
              sex:this.form.userSex
              //uploadTime:this.form.uploadTime,//自动获取系统时间
              
            }
            }).then(res =>{
              console.log(res.data)
              if(res.data=='Success!'){
                alert('修改成功！')
              }
              else{
                alert('修改失败')
              }
            }).catch(e => console.log(e))
          // console.log(this.form)
          // this.$message({
          //   type: 'info',
          //   message: '成功修改个人信息',
          //   duration: 1000
          // }); 
          console.log('修改个人信息完毕')
          // }
          // else if(this.form.userName==''){
          //   alert('用户名为空')
          // }
          // else if(this.form.userRealname==''){
          //   alert('真实姓名为空')
          // }
          // else if(this.form.userEmail==''){
          //   alert('邮箱为空')
          // }
          // else if(this.form.userPassword==''){
          //   alert('密码为空')
          // }
          // else if(this.form.userTel==''){
          //   alert('联系方式为空')
          // }

      },
      cancel(){
        this.reload()
      },
      getUserInfo:function(){
      console.log('获取个人信息中...')
      axios.get('/api/userinfor/getUserbyId/'+this.userId)
        .then(res =>{
          console.log(res.data)
          this.form=res.data
        })
        .catch(e => console.log(e))
      console.log(this.form)
      console.log('获取个人信息完毕')
    }
     
     
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modify-personal-information{
  position: absolute;
  top: 102px;
  width:1440px;
  margin-top: 0px;
}

.pagetop{
  position: absolute;
  left: 50px;
  top: 83px;
  width: 1340px;
  height: 1px;
  margin: 0;  
}
.bodytop text1 {
  border-width:0px;
  position:absolute;
  left:143px;
  top:21px;
  width:145px;
  height:44px;
  font-family:'Arial Normal', 'Arial';
  font-weight:400;
  font-style:normal;
  font-size:36px;
}
.nav text1{
  border-width:0px;
  position:absolute;
  left:140px;
  top:148px;
  width:121px;
  height:64px;
}
.nav text2{
  border-width:0px;
  position:absolute;
  left:140px;
  top:212px;
  width:121px;
  height:64px;
}
.nav text3{
  border-width:0px;
  position:absolute;
  left:140px;
  top:276px;
  width:121px;
  height:64px;
}
.nav text4{
  border-width:0px;
  position:absolute;
  left:140px;
  top:340px;
  width:121px;
  height:64px;
}
.infortop{
  position: absolute;
  left: 200px;
  top: 50px;
  width: 760px;
  height: 1px;
  margin: 0;  
}
.inforFoot{
  position: absolute;
  left: 0px;
  top: 400px;
  width: 760px;
  height: 1px;
  margin: 0;

}
.modify-main{
  position: absolute;
  background-color:#ffffff; 
  left: 250px;
  top: 85px;
  width: 1130px;
  height: 1200px;
}
.modify-main .el-form{
  position: absolute;
  left: 200px;
  top: 60px;
  width: 900px;
}

.modify-main .el-form .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.modify-main .el-form .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.modify-main .el-form .el-form-item__label,.el-checkbox, .el-checkbox__label{
  font-size:15px;
  text-align: left;
}
.modify-main .el-form .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
hr{
  margin-top: 50px;
  margin-bottom: 30px;
}
.modify-buttons  {
  margin-top: 100px;
  margin-left: 400px;
}
.pagefoot{
  position: absolute;
  left: 50px;
  top: 1286px;
  width: 1340px;
  height: 1px;
  margin: 0;  
}
</style>
<style>
.el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px dashed #d9d9d9;
}
</style>

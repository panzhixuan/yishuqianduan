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

        <el-form-item label="学号: " style="width:400px;">
          <el-input v-model="form.studentId"></el-input>
        </el-form-item>
        <el-form-item label="姓名:" style="width:400px;">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别:" style="width:400px;">
            <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="联系方式:" style="width:400px;">
            <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" style="width:400px;">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="新密码:" style="width:400px;">
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        
        <hr class="inforFoot">
        <el-form-item class="modify-buttons">
          <el-button type="primary" @click="clickModifyButton">确认修改</el-button>
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


        form: {
          //salerId:'200000000000',
          studentId:'2016666666',
          name:'刘益达',
          sex:'男',
          tel:'18989600101',
          email:'174905883768@qq.com',
          password:'kjab22298y',
          flag:'未审核'
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
      clickModifyButton() {
        if(this.editUserInfo!=null){
          console.log('修改个人信息中...')
          axios({
            method: 'post',
            url: '/api/user/modifyUserInfo',
            data: {
              
              userId:this.userId,//获取userId
              
              tel:this.form.tel,
              email:this.form.email,
              password:this.form.password,
              //uploadTime:this.form.uploadTime,//自动获取系统时间
              
            }
            }).then(res =>{
              console.log(res.data)
            }).catch(e => console.log(e))
          // console.log(this.form)
          this.$message({
            type: 'info',
            message: '成功修改个人信息',
            duration: 1000
          }); 
          console.log('修改个人信息完毕')
          }



        this.$router.push({
          name: 'PersonalInfor',     //改成个人中心
         
        }),
        console.log('submit!');
      },
      cancel(){
        this.reload()
      },
      getUserInfo:function(){
      console.log('获取个人信息中...')
      axios.get('/api/user/getUserInfo/'+this.userId)
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

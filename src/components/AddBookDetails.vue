<template>
  <div class="add-book-details">
    <div class="add-book-title">上架书籍</div>
    <hr class="pagetop">
    <div class="add-book-main">
      <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="书籍名称 " style="width:400px;">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="分类类别">
          <el-radio-group v-model="form.booktypeId" >
            <el-radio  
            v-for="(tag,index) of taglist"
            :key="index" 
            :label="tag.id"
            name="type"
            >{{tag.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="作者名称" style="width:400px;">
            <el-input v-model="form.author" ></el-input>
        </el-form-item>
        <el-form-item label="书籍版本" style="width:400px;">
            <el-input v-model="form.version"></el-input>
        </el-form-item>
        <el-form-item label="官方定价" style="width:200px;">
            <el-input v-model="form.oPrice" ></el-input>
        </el-form-item>
        <el-form-item label="当前售价" style="width:200px;">
            <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="上传封面">
          <el-upload
            class="avatar-uploader"
            ref="upload"
            action="/api/upload"
            name="picture"
            list-type="picture-card"
            :limit="1"
            :file-list="fileList"
            :on-exceed="onExceed"
            :before-upload="beforeUpload"
            :on-preview="handlePreview"
            :on-success="handleSuccess"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            <!-- :show-file-list="false" -->
            <!-- :on-success="handleAvatarSuccess" -->
            <!-- :before-upload="beforeAvatarUpload" -->
            <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
            <!-- <img v-if="form.image" :src="form.image" class="avatar"> -->
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <hr>
        <el-form-item class="add-buttons">
          <el-button type="primary" @click="clickAddButton">确认上传</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>

      </el-form>

    </div>
    <hr class="pagefoot"> 
  </div>
</template>

<script>
// 导入axios
import axios from 'axios'
//设置全局表单提交格式
// Vue.http.options.emulateJSON = true;

export default {
  name: 'AddBookDetails',
  data() {
      return {
        userId:this.$userId,
        editBook:{},
        taglist:
        [{name:"科学类",id:1},
        {name:"教育类",id:2},
        {name:"休闲类",id:3},
        {name:"文学类",id:4}],
        form: {
          salerId:'', //获取userId
          name:'',
          image:'/static/bookImg/myLogo.png',
          author:'',
          version:'',
          price:'',
          oPrice:'',
          uploadTime:'2018-12-01 00:00:00', //自动获取系统时间
          flag:0, //初始为0-未审核
          booktypeId:0
        },

        //文件上传的参数
        dialogImageUrl: '',
        dialogVisible:false,
        fileList:[]
        //图片列表（用于在上传组件中回显图片）
        // fileList: [{name: '', url: ''}],
      }
    },
    mounted:function(){
      this.editBook=this.$route.params.editBook
      if(this.editBook!=null){
        console.log("正在修改："+this.editBook.bookId)
        // this.form.name=this.editBook
        this.form.bookId=this.editBook.bookId,
        this.form.name=this.editBook.bookName,
        this.form.image=this.editBook.bookImage,
        this.form.author=this.editBook.bookAuthor,
        this.form.version=this.editBook.bookVersion,
        this.form.price=this.editBook.bookPrice,
        this.form.oPrice=this.editBook.bookOriginalprice,
        this.form.booktypeId=this.editBook.bookType
        this.form.salerId=this.editBook.salerId,
        this.form.uploadTime=this.editBook.bookModifytime
      }else{
        console.log("未传递出要修改的book")
      }
    },
    methods: {
      cancel(){
        this.$router.push({
          name: 'sellermain'
        })
      },
      handleSuccess(res,file){
        this.$message({
          type: 'info',
          message: '图片上传成功',
          duration: 1000
        });
        if (file.response.success) {
          // this.editor.picture = file.response.message //将返回的文件储存路径赋值picture字段
          this.form.image=file.response.message
          console.log("成功"+file.response.message)
          console.log("书籍图片:"+this.form.image)
        }
      },
      //删除文件之前的钩子函数
      handleRemove(file, fileList) {
        this.$message({
          type: 'info',
          message: '已删除原有图片',
          duration: 1000
        }); 
      },
      //点击列表中已上传的文件事的钩子函数
      handlePreview(file) {
      },
      //上传的文件个数超出设定时触发的函数
      onExceed(files, fileList) {
        this.$message({
          type: 'info',
          message: '最多只能上传一个图片',
          duration: 1000
        });
      },
      //文件上传前的前的钩子函数
      //参数是上传的文件，若返回false，或返回Primary且被reject，则停止上传
      beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isGIF = file.type === 'image/gif';
        const isPNG = file.type === 'image/png';
        const isBMP = file.type === 'image/bmp';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG && !isGIF && !isPNG && !isBMP) {
            this.$message.error('上传图片必须是JPG/GIF/PNG/BMP 格式!');
        }
        if (!isLt2M) {
            this.$message.error('上传图片大小不能超过 2MB!');
        }
        return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
      },     

      // 上架书籍
      clickAddButton(){
        // console.log(this.form.type)
        if(this.form.name.length>20||this.form.name.length<=0){
          this.$message({
            type: 'info',
            message: '书籍名称不能为空且长度不能大于20个字符',
            duration: 1000
          }); 
        }else if(this.form.author.length>20||this.form.author.length<=0){
          this.$message({
            type: 'info',
            message: '作者名字不能为空且长度不能大于20个字符',
            duration: 1000
          }); 
        }else if(this.form.version.length>20||this.form.version.length<=0){
          this.$message({
            type: 'info',
            message: '版本描述不能为空且长度不能大于20个字符',
            duration: 1000
          }); 
        }else{
          if(this.editBook!=null){
          console.log('修改书籍中...')
          axios({
            method: 'post',
            url: '/api/sell/modifySalerBook',
            data: {
              bookId:this.form.bookId,
              salerId:this.userId,//获取userId
              name:this.form.name,
              image:this.form.image,
              author:this.form.author,
              version:this.form.version,
              price:this.form.price,
              oPrice:this.form.oPrice,
              uploadTime:this.form.uploadTime,//自动获取系统时间
              flag:this.form.flag,
              typeId:this.form.booktypeId
            }
            }).then(res =>{
               this.$router.go(-1)
              console.log(res.data)
            }).catch(e => console.log(e))
          // console.log(this.form)
          this.$message({
            type: 'info',
            message: '成功修改书籍信息',
            duration: 1000
          }); 
          console.log(this.form.bookId)
          console.log(this.form.name)
          console.log(this.form.image)
          console.log(this.form.author)
          console.log(this.form.version)
          console.log(this.form.price)
          console.log(this.form.oPrice)
          console.log(this.form.uploadTime)
          console.log(this.form.flag)
          console.log(this.form.booktypeId)
          console.log('修改书籍完毕')
          }else
          {
            console.log('上传书籍中...')
            axios({
              method: 'post',
              url: '/api/sell/addSalerBook',
              data: {
                salerId:this.userId,//获取userId
                name:this.form.name,
                image:this.form.image,
                author:this.form.author,
                version:this.form.version,
                price:this.form.price,
                oPrice:this.form.oPrice,
                uploadTime:this.form.uploadTime,//自动获取系统时间
                flag:this.form.flag,
                typeId:this.form.booktypeId
              }
              }).then(res =>{
                this.$router.go(-1)
                console.log(res.data)
              }).catch(e => console.log(e))
            // console.log(this.form)
            this.$message({
              type: 'info',
              message: '成功上传书籍',
              duration: 1000
            }); 
            console.log('上传书籍完毕')
          }
          
        }
        
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-book-details{
  width:1130px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
}
.add-book-title{
  width: 1130px;
  height:35px;
  color:#2c3e50;
  padding-left: 10px;
  line-height: 40px;
  font-size: 25px;
  font-weight: bold;
}
hr{
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 1120px;
}
.add-book-main{
  margin: 0 auto;
  width: 1120px;
}
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style scoped>
.el-form-item__label,.el-checkbox, .el-checkbox__label{
  font-size:15px;
  text-align: left;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
}
</style>

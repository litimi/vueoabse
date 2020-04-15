<!--登录页-->
<template>
  <div class="oabase_back">
    <!--登录-->
    <div class="login_box" v-if="login">
      <el-form label-position="right" label-width="80px" :model="formLabelAlign" ref="formLabelAlign">
        <el-form-item label="账号:">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="formLabelAlign.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formLabelAlign')">登 录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="changeForm('loginin')">注册账号</el-button>
        </el-form-item>
      </el-form>

    </div>
    <!--注册-->
    <div class="loginin_box" v-else>
      <el-form label-position="right" label-width="80px" :model="formLabelAlign" ref="formLoginin">
        <el-form-item label="账号:">
          <el-input v-model="formLabelAligns.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="formLabelAligns.passWord"></el-input>
        </el-form-item>
        <el-form-item label="电话号码:">
          <el-input v-model="formLabelAligns.phone"></el-input>
        </el-form-item>
        <el-form-item label="常用地址:">
          <el-input v-model="formLabelAligns.address"></el-input>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-input v-model="formLabelAligns.age"></el-input>
        </el-form-item>
        <el-form-item label="性别:">
          <el-input v-model="formLabelAligns.sex"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formLoginin')">注 册</el-button>
          <el-button @click="changeForm('loginup')">返回登录</el-button>
          <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return{
        login: true,
        formLabelAlign: {
          name: '',
          passWord: ''
        },
        formLabelAligns: {
          name: '',
          passWord: '',
          phone: '',
          address: '',
          age: '',
          sex: ''
        }
      }
    },
    components: {
    },
    methods: {
      // 切换为注册账号
      changeForm(str){
        str == 'loginin'?(this.login = false):(this.login = true)
      },
      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if (valid) {
            console.log(this.formLabelAligns)
            // alert('submit!');
            // this.$router.push({path: '/Home', query: {id: '1'}})
            if (formName == 'formLoginin'){
              //注册
              this.$http.post('/api/insertUser',
                this.formLabelAligns
              ).then( (res) => {
                console.log('res', res);
              })
            } else {
              //登录
              this.$http.post('/api/getLogin',
                this.formLabelAlign
              ).then( (res) => {
                console.log('res', res);
                if (res.data.status == 200){
                  sessionStorage.setItem('token', res.data.data.token)
                  sessionStorage.setItem('userId', res.data.data.id)
                  this.$router.push({path: '/', query: {id: res.data.data.id}})
                } else {
                  alert('该用户不存在！')
                }
              })
            }
          } else {
            // console.log('error submit!!');
            // return false;
          }
        });
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">

</style>>

<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">cc-admin</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="username"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="password"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">Remember</el-checkbox>
    <el-form-item style="width:100%; text-align: center;">
      <el-button type="primary" @click="handleSubmit" :loading="logining">Login</el-button>
      <el-button @click="handleReset">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { reqLogin } from '../api/api';
  import { getUrlParams } from '../assets/js/utils'

  export default {
    data() {
      return {
        logining: false,
        ruleForm: {
          account: 'clearives',
          checkPass: '123456'
        },
        rules: {
          account: [
            { required: true, message: 'Please enter username', trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: 'Please enter password', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset: function() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit: function(ev) {
        var _this = this;
        _this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            _this.logining = true;
            var loginParams = { username: _this.ruleForm.account, password: _this.ruleForm.checkPass };
            reqLogin(loginParams).then(data => {
              _this.logining = false;
              let { msg, code, user } = data;
              if (code !== 200) {
                _this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(user));
                let backUrl = sessionStorage.getItem('backUrl')
                if (backUrl) {
                  location.href = backUrl;
                  sessionStorage.removeItem('backUrl')
                } else {
                  _this.$router.push({ path: '/' });
                }


              }
            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>

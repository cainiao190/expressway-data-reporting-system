<template>
  <div class="login_container">
    <div class="login_box">
      <h1 class="header">LOGIN</h1>
      <!-- 登录表单区域 -->
      <el-form size="mini" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <!-- 用户名 -->
        <el-form-item prop="userName">
          <el-input
            placeholder="用户名"
            v-model="loginForm.userName"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            show-password
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item>
          <el-button type="primary" @click="login" class="loginBtn">登录</el-button>
          <el-button type="info" @click="resetLoginForm" class="resetBtn">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="footer">
        <el-link class="left" @click="toRegist">没有账号，点击注册</el-link>
        <el-link class="right" @click="getPassword">找回密码</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  created() {},
  data() {
    return {
      loginForm: {
        userName: "root",
        password: "root",
      },
      loginFormRules: {
        userName: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
      login() {
          console.log("登录")
      },
      resetLoginForm() {
          console.log("重置表单")
          this.$refs.loginFormRef.resetFields();
      },
      toRegist() {
        console.log("去往登录组件")
        this.$router.push("/regist")
      },
      getPassword() {
        console.log("找回密码")
        this.$router.push("/getPassword")
      }
  },
};
</script>

<style lang="less" scoped>
@import "../../public/gloable/init.css";
.login_container {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  /* background-image: url("../assets/img/Login_bg_img.jpg"); */
  background-image: url("../assets/img/Login_bg_img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 680px;
  width: 100%;
  .login_box {
    width: 290px;
    height: 290px;
    /* background-color: #fff; */
    background-color: #2e527bb3;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.6;
    .header {
      position: absolute;
      top: 25px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.5;
    }
    .el-form {
      padding: 32px;
      position: absolute;
      bottom: 0;
      width: 100%;
      top: 60px;
      box-sizing: border-box;
      .el-button {
        width: 30%;
      }
      .loginBtn {
          position: absolute;
          left: 0px;
      }
      .resetBtn {
          position: absolute;
          right: 0px;
      }
    }
    .footer {
      position: absolute;
      bottom: 60px;
      width: 100%;
      .left {
        position: absolute;
        display: inline;
        left: 10px;
        color: white;
      }
      .right {
        position: absolute;
        display: inline;
        right: 10px;
        color: white;
      }
    }
  }
}
</style>
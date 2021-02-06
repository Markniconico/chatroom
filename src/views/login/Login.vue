<template>
  <div class="login">
    <div class="logo"></div>

    <van-form @submit="onSubmit" validate-trigger="onSubmit">
      <van-field v-model="user.username" type="text" autofocus name="用户名" placeholder="请输入用户名" :rules="rules.uPattern" />
      <van-field v-model="user.password" type="password" name="密码" placeholder="请输入密码" :rules="rules.pPattern" />
      <van-button block type="primary" native-type="submit">提交</van-button>
    </van-form>

    <van-button block plain>一键登录</van-button>
    <div class="switch">
      <a href="#">忘了密码?</a>
      <a href="#">注册新账号</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { login } from './model/userModel.js'


export default defineComponent({
  name: 'Login',
  setup () {

    const { rules, user, onSubmit } = login()



    return {
      rules,
      user,
      onSubmit
    }

  }
})
</script>

<style lang='scss'>
.login {
  padding: 25px 40px 0;
  margin: 0 auto;
  .logo {
    background-image: url("../../assets/logo.png");
    height: 100px;
    width: 244px;
    margin: 0 auto 20px;
    background-size: 244px 100px;
  }
  .van-button {
    margin-top: 15px;
    border-radius: 2px;
  }
  .switch {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    a {
      color: #246183;
      line-height: 14px;
      font-size: 14px;
      padding: 15px 10px;
    }
  }
}
</style>

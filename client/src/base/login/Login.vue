<template>
  <div class="form">
    <div class="form-item">
      <my-input tip="输入您的邮箱" ref="email"></my-input>
    </div>
    <div class="form-item">
      <my-input tip="输入您的密码" type="password" ref="password"></my-input>
    </div>
    <div class="form-item btn">
      <my-button text="登录" type="submit" long="long" @btnClick="loginBtnClick"></my-button>
    </div>
    <div class="form-item">
      <div class="tip" @click="goRegister">没有账号?注册</div>
    </div>
  </div>
</template>

<script>
import MyInput from '@/base/input/Input'
import MyButton from '@/base/button/Button'
export default {
  name: 'Login',
  components: { MyInput, MyButton },
  data () {
    return {}
  },
  methods: {
    goRegister () {
      this.$emit('goRegister')
    },
    loginBtnClick () {
      this.$emit('loginBtnClick', {
        userEmail: this.$refs.email.inputValue,
        password: this.$refs.password.inputValue
      })
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .form {
    padding: 25px;
    margin-top: 50px;
    .form-item {
      height: 60px;
      line-height: 60px;
      margin-top: 10px;
    }
    .btn {
      margin-top: 25px;
    }
    .tip {
      margin-top: 40px;
      text-align: right;
      color: #353535;
      font-size: 14px;
      cursor: pointer;
    }
  }
</style>

<template>
  <div class="form register">
    <div class="form-item">
      <my-input tip="输入您的昵称" ref="nickname"></my-input>
    </div>
    <div class="form-item">
      <my-input tip="输入您的邮箱" ref="email"></my-input>
    </div>
    <div class="form-item">
      <my-input tip="输入您的密码" type="password" ref="password"></my-input>
    </div>
    <div class="form-item btn">
      <my-button text="注册" type="submit" long="long" @btnClick="registerBtnClick"></my-button>
    </div>
    <div class="form-item">
      <div class="tip register-tip" @click="goLogin">返回登录</div>
    </div>
  </div>
</template>

<script>
import MyInput from '@/base/input/Input'
import MyButton from '@/base/button/Button'
export default {
  name: 'Register',
  components: { MyInput, MyButton },
  data () {
    return {}
  },
  methods: {
    goLogin () {
      this.$emit('goLogin')
    },
    registerBtnClick () {
      let data = {
        nickname: this.$refs.nickname.inputValue,
        userEmail: this.$refs.email.inputValue,
        password: this.$refs.password.inputValue
      }
      this.$emit('registerBtnClick', data)
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
  .register {
    margin-top: -5px;
  }
  .register-tip {
    margin-top: -10px !important;
  }
</style>

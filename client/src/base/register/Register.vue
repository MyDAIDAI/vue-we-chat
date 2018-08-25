<template>
  <div class="form register">
    <div class="form-item">
      <my-input tip="输入您的昵称"></my-input>
    </div>
    <div class="form-item">
      <my-input tip="输入您的邮箱"></my-input>
    </div>
    <div class="form-item">
      <my-input tip="输入您的密码" type="password"></my-input>
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
      this.$emit('registerBtnClick')
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

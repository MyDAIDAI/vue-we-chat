<template>
  <div class="wrapper">
    <div class="card">
      <h2 class="title">VUE-WE-CHAT</h2>
      <div class="login">
        <div class="form-item">
          <my-input :tip="tipStr.userEmail"></my-input>
        </div>
        <div>
          <my-input :tip="tipStr.password" type="password"></my-input>
        </div>
      </div>
      <div class="register"></div>
    </div>
  </div>
</template>

<script>
import MyInput from '@/base/input/Input'
export default {
  name: 'Index',
  components: { MyInput },
  data () {
    return {
      tipStr: {
        nickname: '输入您的昵称',
        userEmail: '输入您的邮箱',
        password: '输入您的密码'
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .wrapper {
    height: 100%;
    min-width: 860px;
    min-height: 700px;
    overflow: auto;
    position: relative;
    background: url("../common/image/background.jpg") no-repeat 50%;
    background-size: cover;
    .card {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 380px;
      height: 540px;
      margin-left: -190px;
      margin-top: -270px;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      -webkit-box-shadow: 0 2px 10px #999;
      -moz-box-shadow: 0 2px 10px  #999;
      box-shadow: 0 2px 10px  #999;
      background-color: #fff;
      padding-top: 10px;
      .title {
        text-align: center;
        color: #353535;
      }
      .login {
        padding: 25px;
        margin-top: 30px;
        .form-item {
          height: 60px;
        }
      }
    }
  }
</style>

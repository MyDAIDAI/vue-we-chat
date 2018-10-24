<template>
  <div class="wrapper">
    <div class="card">
      <h2 class="title">VUE-WE-CHAT</h2>
      <login @goRegister="formType = 'register'" v-if="formType === 'login'" @loginBtnClick="loginHandler"></login>
      <register @goLogin="formType = 'login'" v-else @registerBtnClick="registerHandler"></register>
    </div>
  </div>
</template>

<script>

import Login from '@/base/login/Login'
import Register from '@/base/register/Register'
import UserApi from '@/api/user/index'
import { ERR_OK } from '@/common/js/config'
import { mapMutations } from 'vuex'

export default {
  name: 'Index',
  components: { Login, Register },
  data () {
    return {
      tipStr: {
        nickname: '输入您的昵称',
        userEmail: '输入您的邮箱',
        password: '输入您的密码'
      },
      formType: 'login'
    }
  },
  methods: {
    registerHandler (data) {
      UserApi.register(data)
        .then(res => {
          if (res.data.code === ERR_OK) {
            this.$message({
              message: res.data.msg,
              type: 'success'
            })
          }
        })
    },
    loginHandler (data) {
      UserApi.login(data)
        .then(res => {
          if (res.data.code === ERR_OK) {
            if (res.data.msg === '登录成功') {
              this.createToken(res.data.token)
              this.$router.push('/talk')
            } else {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          }
        })
    },
    ...mapMutations({
      createToken: 'CREATE_TOKEN'
    })
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
        margin-top: 20px;
      }

    }
  }
</style>

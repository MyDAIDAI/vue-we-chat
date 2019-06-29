<template>
  <div class="layout">
    <div class="content-wrapper">
      <div class="panel">
        <card @go="goPage" :user="userInfo" :searchResult="searchResult" @input="findUserList" @click="searchListClick"></card>
        <list :lists="listData" :type="listType"></list>
      </div>
      <div class="box">
        <div class="box-header">
          <div class="title-wrap">
            <div class="title">{{title}}</div>
          </div>
        </div>
        <div class="box-body">
          <router-view></router-view>
        </div>
        <div class="box-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.visible"
      @close="dialogCloseHandler"
      width="30%">
      <p>添加
        <span style="font-weight: bolder; font-size: 18px;">{{clickUserData.nickname}}</span>
        为好友
      </p>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="dialog.content">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog.visible = false">取 消</el-button>
        <el-button type="primary" @click="sendAddFriendHandler">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Card from '@/base/card/Card'
import List from '@/base/list/List'
import UserApi from '@/api/user/index'
import { avatar } from '@/common/js/config'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Layout',
  components: { Card, List },
  computed: {
    ...mapGetters(['userInfo'])
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      user: {
        nickname: '',
        userEmail: '',
        avatar: ''
      },
      dialog: {
        title: '',
        visible: false,
        type: '',
        content: ''
      },
      chatList: [
        {
          avatar: avatar,
          nickname: '呆呆'
        },
        {
          avatar: avatar,
          nickname: '呆呆'
        },
        {
          avatar: avatar,
          nickname: '呆呆'
        },
        {
          avatar: avatar,
          nickname: '呆呆'
        }
      ],
      listType: 'chat',
      contactList: [
        {
          letter: 'A',
          contact: [
            {
              avatar: avatar,
              nickname: '呆呆'
            },
            {
              avatar: avatar,
              nickname: '呆呆'
            },
            {
              avatar: avatar,
              nickname: '呆呆'
            }
          ]
        },
        {
          letter: 'B',
          contact: [
            {
              avatar: avatar,
              nickname: '呆呆'
            },
            {
              avatar: avatar,
              nickname: '呆呆'
            },
            {
              avatar: avatar,
              nickname: '呆呆'
            }
          ]
        },
        {
          letter: 'C',
          contact: [
            {
              avatar: avatar,
              nickname: '呆呆'
            },
            {
              avatar: avatar,
              nickname: '呆呆'
            },
            {
              avatar: avatar,
              nickname: '呆呆'
            }
          ]
        },
        {
          letter: 'D',
          contact: [
            {
              avatar: avatar,
              nickname: '呆呆'
            },
            {
              avatar: avatar,
              nickname: '呆呆'
            },
            {
              avatar: avatar,
              nickname: '呆呆'
            }
          ]
        }
      ],
      listData: [],
      preEditable: false,
      searchResult: [],
      selectUser: '',
      clickUserData: ''
    }
  },
  created () {
    this.listData = this.chatList
    this.getUserInfo()
  },
  sockets: {
    connect (data) { // 这里是监听connect事件
      this.socketId = this.$socket.id
      console.log('connect server: socketId', this.socketId)
    },
    login (val) {
      console.log('client receive messgae : login:  ', val)
    }
  },
  mounted () {
  },
  methods: {
    goPage (page) {
      this.$emit('go', page)
    },
    getUserInfo () {
      UserApi.getUserInfo()
        .then(res => {
          if (res.success) {
            this.setUserInfo(res.data.user)
            this.$socket.emit('login', res.data.user)
          }
        })
    },
    findUserList (value) {
      if (!value) {
        this.searchResult = []
        return
      }
      UserApi.find(value)
        .then(res => {
          if (res.success) {
            this.searchResult = res.data
          }
        })
    },
    searchListClick (data, type) {
      this.clickUserData = data
      this.dialog.type = type
      this.dialog.title = type === 'add' ? '请填写验证信息' : ''
      this.dialog.visible = true
      this.dialog.content = ''
    },
    dialogCloseHandler () {
      this.clickUserData = ''
      this.dialog.content = ''
    },
    sendAddFriendHandler () {
      this.dialog.visible = false
      UserApi.addUser(this.clickUserData._id, {
        message: this.dialog.content
      }).then(res => {
        if (res.success) {
          this.$message({
            type: 'success',
            message: res.msg
          })
        }
      })
    },
    ...mapMutations({
      setUserInfo: 'SET_USER'
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .el-button--primary {
    background: #3daf35;
    border-color: #3daf35;
  }
  .el-dialog__body {
    padding-top: 20px !important;
  }
  .layout {
    height: 80%;
    min-height: 600px;
    padding-top: 100px;
    .content-wrapper {
      max-width: 1000px;
      min-width: 800px;
      height: 100%;
      margin: 0 auto;
      border-radius: 3px;
      overflow: hidden;
      .panel {
        position: relative;
        width: 280px;
        height: 100%;
        float: left;
        background: #2e3238;
      }
      .box {
        position: relative;
        background-color: #eee;
        height: 100%;
        overflow: hidden;
        .box-header {
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          line-height: 30px;
          .title-wrap {
            position: relative;
            padding: 10px 0;
            margin: 0 19px;
            border-bottom: 1px solid #d6d6d6;
            background: #eee;
            z-index: 1024;
            .title {
              font-weight: 400;
              height: 25px;
              display: inline-block;
              font-size: 14px;
            }
          }
        }
        .box-body {
          position: absolute;
          top: 51px;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .box-footer {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
</style>

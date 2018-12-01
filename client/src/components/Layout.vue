<template>
  <div class="layout">
    <div class="content-wrapper">
      <div class="panel">
        <card @go="goPage" :user="userInfo" :searchResult="searchResult"></card>
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
  </div>
</template>

<script>
import Card from '@/base/card/Card'
import List from '@/base/list/List'
import UserApi from '@/api/user/index'
import { avatar, ERR_OK } from '@/common/js/config'
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
    },
    searchResult: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      user: {
        nickname: '',
        userEmail: '',
        avatar: ''
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

    }
  },
  created () {
    this.listData = this.chatList
    this.getUserInfo()
  },
  methods: {
    goPage (page) {
      this.$emit('go', page)
    },
    getUserInfo () {
      UserApi.getUserInfo()
        .then(res => {
          if (res.data.code === ERR_OK) {
            this.setUserInfo(res.data.data)
          }
        })
    },
    findUserList () {
      UserApi.find()
        .then(res => {
          if (res.data.code === ERR_OK) {
          }
        })
    },
    showCurrentList (page) {
      this.listType = page
      this.listData = this[page + 'List']
    },
    ...mapMutations({
      setUserInfo: 'SET_USER'
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
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

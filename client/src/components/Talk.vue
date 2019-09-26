<template>
  <div>
    <div ref="wrapper" class="chat-box">
      <div class="srcoll-wrapper">
        <div v-for="message in chatContent" :key="message.id">
          <div class="message" :class="{'you': !message.isSend, 'me': message.isSend}">
            <div class="message_system">
              <div class="content">{{message.time}}</div>
            </div>
            <img :src="message.avatar" class="avatar"/>
            <div class="content">
              <div class="bubble" :class="{'right': message.isSend, 'left': !message.isSend, 'bubble_primary': message.isSend, 'bubble_default': !message.isSend}">
                <div class="bubble_cont">
                  <div class="plain">
                    <pre class="message_plain">{{message.message}}</pre>
                    <img src="" class="ico_loading"/>
                    <!--<i class="ico_fail message_fail"></i>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="toolbar">
        <i class="emoji"></i>
        <i class="screencut"></i>
        <i class="file"></i>
      </div>
      <div class="content">
        <pre class="flex" :contenteditable="preEditable" @click="preEditable = true" id="sendMessage"></pre>
      </div>
      <div class="action">
        <span class="desc">按下Cmd+Enter换行</span>
        <a class="btn btn_send" href="javascript:;" @click="sendChatMessage">发送</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Talk',
  components: {},
  computed: {
    ...mapGetters(['friendInfo', 'userInfo', 'friendSockets'])
  },
  data () {
    return {
      preEditable: false,
      chatContent: []
    }
  },
  created () {
  },
  mounted () {
    this.sendMessageDiv = document.getElementById('sendMessage')
  },
  sockets: {
    chat (msg) {
      this.pushChatContentHandler(msg, false)
    },
    friendLogin (val) {
      this.setUserFriend(val)
    }
  },
  methods: {
    sendChatMessage () {
      let sendMessage = this.sendMessageDiv.innerHTML
      this.sendMessageDiv.innerHTML = ''
      this.pushChatContentHandler(sendMessage, true)
      this.$socket.emit('chat', {
        msg: sendMessage,
        socketId: this.friendSockets[this.friendInfo.userId]
      })
    },
    pushChatContentHandler (msg, isSend) {
      this.chatContent.push({
        time: new Date(),
        avatar: isSend ? this.userInfo.avatar : this.friendInfo.avatar,
        message: msg,
        isSend: isSend
      })
    },
    ...mapMutations({
      setUserFriend: 'SET_USER_FRIEND'
    })
  },
  watch: {
    friendInfo: {
      handler (data) {
        this.chatContent = []
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .chat-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 180px;
    padding: 0 19px;
    overflow-y: auto;
    overflow-x: hidden;
    .message {
      margin-bottom: 16px;
      float: left;
      width: 100%;
      &.me {
        float: right;
        text-align: right;
        clear: right;
        .avatar {
          float: right;
        }
      }
      .message_system {
        text-align: center;
        margin: 10px auto;
        width: 100%;
        .content {
          display: inline-block;
          font-size: 12px;
          padding: 1px 18px;
          color: #b2b2b2;
          border-radius: 2px;
        }
      }
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 2px;
        float: left;
        cursor: pointer;
      }
      .content {
        overflow: hidden;
        .bubble {
          max-width: 500px;
          min-height: 1em;
          display: inline-block;
          vertical-align: top;
          position: relative;
          text-align: left;
          font-size: 14px;
          border-radius: 3px;
          margin: 0 10px;
          .bubble_cont {
            word-wrap: break-word;
            word-break: break-all;
            min-height: 25px;
            .plain {
              padding: 9px 13px;
              pre {
                margin: 0;
                white-space: pre-wrap;
                word-break: normal;
              }
              .ico_loading {
                position: absolute;
                right: 100%;
                top: 50%;
                margin-top: -7px;
                margin-right: 13px;
              }
              .ico_fail {
                position: absolute;
                right: 100%;
                top: 50%;
                margin-top: -11px;
                margin-right: 9px;
                cursor: pointer;
              }
              .message_fail {
                display: inline-block;
                vertical-align: middle;
                width: 22px;
                height: 22px;
                background: url("../common/image/icon.png");
                background-position: -289px -432px;
                background-size: 487px 462px;
              }
            }
            img {
              vertical-align: middle;
            }
          }
          &.bubble_primary {
            background-color: #b2e281;
          }
          &.bubble_default {
            background: #ffffff;
          }
          &:after, &:before{
            position: absolute;
            top: 14px;
            border: 6px solid transparent;
            content: '';
          }
          &.right {
            &:before {
              left: 100%;
            }
            &:after {
              left: 100%;
              border-left-color: #b2e281;
              border-left-width: 4px;
            }
          }
          &.left {
            &:before {
              right: 100%;
            }
            &:after {
              right: 100%;
              border-right-color: white;
              border-right-width: 4px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 180px;
    margin-right: 19px;
    border-top: 1px solid #d6d6d6;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    .toolbar {
      height: 30px;
      padding: 5px 17px;
      .emoji {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url("../common/image/icon.png");
        background-position: -404px -398px;
        background-size: 487px 462px;
      }
      .screencut {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url("../common/image/icon.png");
        background-position: -30px -432px;
        background-size: 487px 462px;
      }
      .file {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url("../common/image/icon.png");
        background-position: -120px -432px;
        background-size: 487px 462px;
      }
    }
    .content {
      .flex {
        height: 6em;
        overflow-y: auto;
        overflow-x: hidden;
        padding-left: 20px;
        outline: none;
        border: 0;
        font-size: 14px;
      }
      pre {
        margin: 0;
        white-space: pre-wrap;
        word-break: normal;
      }
    }
    .action {
      text-align: right;
      margin-top: 5px;
      .desc {
        color: #888;
        font-size: 12px;
        margin-left: 10px;
        margin-right: 7px;
      }
       a {
         text-decoration: none;
       }
      .btn {
        display: inline-block;
        border: 1px solid #c1c1c1;
        border-radius: 4px;
        padding: 3px 20px;
        font-size: 14px;
      }
      .btn_send {
        background-color: #fff;
        color: #222;
        padding-left: 30px;
        padding-right: 30px;
      }
    }
  }

</style>

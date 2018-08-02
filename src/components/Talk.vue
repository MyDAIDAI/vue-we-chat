<template>
  <layout @go="showCurrenList">
    <list slot="list" :lists="listData" :type="listType"></list>
    <div ref="wrapper" class="chat-box">
      <div class="srcoll-wrapper"></div>
    </div>
    <div class="footer" slot="footer">
      <div class="toolbar">
        <i class="emoji"></i>
        <i class="screencut"></i>
        <i class="file"></i>
      </div>
      <div class="content">
        <pre class="flex" :contenteditable="preEditable" @click="preEditable = true"></pre>
      </div>
      <div class="action">
        <span class="desc">按下Cmd+Enter换行</span>
        <a class="btn btn_send" href="javascript:;">发送</a>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '@/base/layout/Layout'
import List from '@/base/list/List'
import { avatar } from '@/common/js/config'
export default {
  name: 'Talk',
  components: { Layout, List },
  data () {
    return {
      listType: 'chat',
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
      preEditable: false
    }
  },
  created () {
    this.listData = this.chatList
  },
  methods: {
    showCurrenList (page) {
      this.listType = page
      this.listData = this[page + 'List']
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
  }
  .footer {
    height: 180px;
    margin-right: 19px;
    border-top: 1px solid #d6d6d6;
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

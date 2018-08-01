<template>
  <layout @go="showCurrenList">
    <list slot="list" :lists="listData" :type="listType"></list>
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
      listData: []
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

</style>

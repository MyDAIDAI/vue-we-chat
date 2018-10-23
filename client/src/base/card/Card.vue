<template>
  <div class="card">
    <div class="header">
      <div class="avatar">
        <img :src="imgUrl" class="img"/>
      </div>
      <div class="info">
        <h3 class="nickname">{{userInfo.nickname}}</h3>
      </div>
    </div>
    <div class="search">
      <i class="search-icon"></i>
      <input/>
    </div>
    <div class="tab">
      <div class="tab-item" @click="goPage('chat')">
        <i class="chat"></i>
      </div>
      <div class="tab-item" @click="goPage('public')">
        <i class="public"></i>
      </div>
      <div class="tab-item" @click="goPage('contact')">
        <i class="contact"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {avatar} from '@/common/js/config'
import { mapGetters } from 'vuex'
export default {
  name: 'card',
  computed: {
    ...mapGetters(['userInfo'])
  },
  data () {
    return {
      imgUrl: ''
    }
  },
  created () {
    this.imgUrl = avatar
  },
  methods: {
    goPage (page) {
      this.$emit('go', page)
    //  todo 点击样式高亮
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .card {
    z-index: 101;
    .header {
      padding: 18px;
      padding-bottom: 10px;
      position: relative;
      .avatar {
        display: table-cell;
        vertical-align: middle;
        word-wrap: break-word;
        word-break: break-all;
        white-space: nowrap;
        padding-right: 12px;
        .img {
          width: 40px;
          height: 40px;
          border-radius: 2px;
          display: block;
          cursor: pointer;
        }
      }
      .info {
        display: table-cell;
        vertical-align: middle;
        word-break: break-all;
        word-wrap: break-word;
        width: 2000px;
        .nickname {
          color: #ffffff;
          font-weight: 300;
        }
      }
    }
    .search {
      position: relative;
      width: 244px;
      margin: 0 auto 6px;
      margin-top: -10px;
      .search-icon {
        position: absolute;
        z-index: 101;
        top: 1px;
        background: url("../../common/image/icon.png") no-repeat;
        background-position: -60px -432px;
        background-size: 487px 462px;
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      input {
        width: 214px;
        height: 32px;
        line-height: 32px;
        border: 0;
        border-radius: 2px;
        background: #26292e;
        color: #fff;
        padding-left: 30px;
        font-size: 12px;
        outline: none;
      }
    }
    .tab {
      overflow: hidden;
      position: relative;
      padding-bottom: 4px;
      .tab-item {
        float: left;
        width: 33.33333333%;
        position: relative;
        display: block;
        text-align: center;
        .chat {
          background: url("../../common/image/icon.png") no-repeat;
          background-position: -185px -96px;
          background-size: 487px 462px;
          display: inline-block;
          width: 35px;
          height: 35px;
          vertical-align: middle;
        }
        .public {
          background: url("../../common/image/icon.png") no-repeat;
          background-position: -376px -322px;
          background-size: 487px 462px;
          display: inline-block;
          width: 35px;
          height: 35px;
          vertical-align: middle;
        }
        .contact {
          background: url("../../common/image/icon.png") no-repeat;
          background-position: -220px -96px;
          background-size: 487px 462px;
          display: inline-block;
          width: 35px;
          height: 35px;
          vertical-align: middle;
        }
        &:after {
          content: '';
          position: absolute;
          top: 7px;
          right: 0;
          width: 0;
          height: 20px;
          border-right: 1px solid #24272c;
        }
      }
      &:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid #24272c;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
</style>

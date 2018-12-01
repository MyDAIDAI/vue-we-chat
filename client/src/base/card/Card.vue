<template>
  <div class="card">
    <div class="header">
      <div class="avatar">
        <img :src="user.avatar" class="img"/>
      </div>
      <div class="info">
        <h3 class="nickname">{{user.nickname}}</h3>
      </div>
    </div>
    <div class="search">
      <i class="search-icon"></i>
      <input @input="searchInput"/>
      <div class="search-list" v-if="searchResult.length > 0">
        <div class="list-wrapper">
          <div class="list-content" v-for="(list, index) in searchResult" :key="index">
            <p>{{list.type}}</p>
            <div class="item" v-for="(item, i) in list.value" :key="i">
              <div class="avatar">
                <img :src="item.avatar"/>
              </div>
              <div class="info">
                <h4 class="nickname">{{item.nickname}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
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
export default {
  name: 'card',
  props: {
    searchResult: {
      type: Array,
      default: () => {
        return []
      }
    },
    user: {
      type: Object,
      default: () => {
        return {
          nickname: '',
          userEmail: '',
          avatar: ''
        }
      }
    }
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
    },
    searchInput () {}
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
      .search-list {
        background: #33363b;
        width: 244px;
        position: absolute;
        top: 36px;
        left: 0;
        box-shadow: 0 0 10px #2a2a2a;
        -moz-box-shadow: 0 0 10px #2a2a2a;
        -webkit-box-shadow: 0 0 10px #2a2a2a;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        z-index: 99;
        outline: none;
        .list-wrapper {
          overflow: hidden;
          .list-content {
            .item {
              overflow: hidden;
              padding: 10px 9px;
              cursor: pointer;
              border-bottom: 1px solid #33363b;
              background-color: #393c43;
              .avatar {
                float: left;
                margin-right: 10px;
                img {
                  display: block;
                  width: 30px;
                  height: 30px;
                  border-radius: 2px;
                }
              }
              .info {
                overflow: hidden;
                line-height: 30px;
                .nickname {
                  font-weight: 400;
                  color: #fff;
                  font-size: 14px;
                  width: 100%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  word-wrap: normal;
                }
              }
            }
          }
        }
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

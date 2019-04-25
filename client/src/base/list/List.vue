<template>
  <div class="list" ref="wrapper">
    <div class="scroll-wrapper">
      <!--todo 加载中转转-->
      <p class="ico-loading"></p>
      <div class="chat" v-if="type === 'chat'">
        <div class="chat-item" v-for="(ele, index) in lists" :key="index">
          <div class="avatar">
            <img :src="ele.avatar" class="img"/>
          </div>
          <div class="info">
            <h3 class="nickname">
              <span class="nickname-txt">{{ele.nickname}}</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="contact" v-if="type === 'contact'">
        <div class="contact-list" v-for="(list, index) in lists" :key="index">
          <div class="letter-item">
            <h4 class="contact-title">
              {{list.letter}}
            </h4>
          </div>
          <div class="contact-item" v-for="(item, i) in list.contact" :key="index + '-' + i">
            <div class="avatar">
              <img :src="item.avatar" class="img"/>
            </div>
            <div class="info">
              <h4 class="nickname">{{item.nickname}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// const COMPONENT_NAME = 'scroll'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  name: 'list',
  props: {
    lists: {
      type: Array,
      default: () => {
        return []
      }
    },
    type: {
      type: String,
      default: 'chat'
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false
    },
    listenScrollEnd: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: DIRECTION_V
    },
    scrollbar: {
      type: null,
      default: false
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    startY: {
      type: Number,
      default: 0
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    freeScroll: {
      type: Boolean,
      default: false
    },
    mouseWheel: {
      type: Boolean,
      default: false
    },
    bounce: {
      default: true
    },
    zoom: {
      default: false
    }
  },
  data () {
    return {
      scroll: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  methods: {
    initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      // if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
      //   this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
      // }
      let options = {
        probeType: this.probeType,
        click: this.click,
        scrollY: this.freeScroll || this.direction === DIRECTION_V,
        scrollX: this.freeScroll || this.direction === DIRECTION_H,
        scrollbar: this.scrollbar,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        startY: this.startY,
        freeScroll: this.freeScroll,
        mouseWheel: this.mouseWheel,
        bounce: this.bounce,
        zoom: this.zoom
      }
      this.scroll = new BScroll(this.$refs.wrapper, options)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  h3 {
    -webkit-margin-before: 0em;
  }
  h4 {
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
  }
.list {
  position: absolute;
  top:160px;
  bottom: 10px;
  right: 0;
  left: 0;
  overflow: hidden;
  .chat {
    .chat-item {
      overflow: hidden;
      padding: 12px 18px 11px;
      border-bottom: 1px solid #292c33;
      cursor: pointer;
      position: relative;
      &:hover {
        background: #26292e;
      }
      .avatar {
        float: left;
        margin-right: 10px;
        position: relative;
        .img {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 2px;
        }
      }
      .info {
        overflow: hidden;
        .nickname {
          font-weight: 300;
          font-size: 13px;
          color: #fff;
          line-height: 20px;
          vertical-align: top;
          .nickname-txt {
            display: inline-block;
            vertical-align: top;
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
  .contact {
    .contact-list {
      .letter-item {
        .contact-title {
          padding: 1px 18px;
          font-weight: 400;
          color: #787b87;
          background: #292d32;
          font-size: 14px;
        }
      }
      .contact-item {
        overflow: hidden;
        padding: 10px 18px 9px;
        border-bottom: 1px solid #292c33;
        cursor: pointer;
        .avatar {
          float: left;
          margin-right: 10px;
          .img {
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 2px;
          }
        }
        .info {
          display: inline-block;
          .nickname {
            font-weight: 300;
            font-size: 13px;
            color: #fff;
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
</style>

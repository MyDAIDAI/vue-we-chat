<template>
  <div class="layout">
    <div class="content-wrapper">
      <div class="panel">
        <card @go="goPage"></card>
        <slot name="list"></slot>
      </div>
      <div class="box">
        <div class="box-header">
          <div class="title-wrap">
            <div class="title">{{title}}</div>
          </div>
        </div>
        <div class="box-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/base/card/Card'
export default {
  name: 'Layout',
  components: { Card },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goPage (page) {
      this.$emit('go', page)
    }
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
      }
    }
  }
</style>

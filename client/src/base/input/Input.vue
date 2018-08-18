<template>
  <div class="input-wrapper">
    <div class="content-wrapper">
      <input :type="type" :placeholder="placeholderStr" v-model="inputValue" class="input" @focus="focusHandler" @blur="blurHandler"/>
      <div class="tips" v-if="isFocus">{{tipString}}</div>
    </div>
    <div class="bottom-line-grey" v-if="!isFocus"></div>
    <div class="bottom-line-blue" v-else></div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    tip: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      inputValue: '',
      isFocus: false,
      tipString: '',
      placeholderStr: ''
    }
  },
  created () {
    this.placeholderStr = this.tip
    this.tipString = this.tip
  },
  methods: {
    focusHandler () {
      this.isFocus = true
      this.placeholderStr = ''
    },
    blurHandler () {
      this.isFocus = false
      this.placeholderStr = this.tipString
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .input-wrapper {
    display: flex;
    position: relative;
    top: 14px;
  }
  .content-wrapper {
    display: flex;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    -webkit-flex-shrink: 1;
    min-width: 0%;
    position: relative;
    .input {
      box-flex: 1;
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      flex-grow: 1;
      flex-shrink: 1;
      -webkit-flex-shrink: 1;
      background-color: transparent;
      border: none;
      display: block;
      font-size: 17px;
      height: 24px;
      line-height: 24px;
      margin: 0;
      min-width: 0%;
      outline: none;
      padding: 0;
      z-index: 0;
      direction: ltr;
      text-align: left;
    }
    .input:focus~.tips {
      color: #1a73e8;
      transform: scale(.75) translateY(-39px);
    }
    .tips {
      font-size: 17px;
      color: #757575;
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
      -webkit-transition: all .3s cubic-bezier(0.4,0,0.2,1);
      transition: all .3s cubic-bezier(0.4,0,0.2,1);
      -webkit-transition-property: color,bottom,transform;
      transition-property: color,bottom,transform;
      color: rgba(0, 0, 0, 0.38);
      font-size: 17px;
      pointer-events: none;
      position: absolute;
      bottom: 3px;
      left: 0;
      width: 100%;
    }
  }
  .bottom-line-grey {
    background-color: rgba(0,0,0,0.12);
    bottom: -2px;
    height: 1px;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
  }
  .bottom-line-blue {
    transform: scaleX(1);
    background-color: #1a73e8;
    bottom: -2px;
    height: 2px;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    animation: quantumWizPaperInputRemoveUnderline .3s cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes quantumWizPaperInputRemoveUnderline {
    0% {
      transform: scaleX(1);
      opacity: 1;
    }
    100% {
      transform: scaleX(1);
      opacity: 0;
    }
  }
</style>

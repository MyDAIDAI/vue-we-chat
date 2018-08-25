<template>
  <div class="button-wrapper">
    <button class="button"
            :class="{'long': long === 'long', 'button-primary': type === 'primary', 'button-submit': type === 'submit', 'button-delete': type === 'delete'}"
            @click="btnClickHandler"
    >
      <span class="button-text">{{text}}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    long: {
      type: String,
      default: 'short'
    }
  },
  data () {
    return {}
  },
  methods: {
    btnClickHandler () {
      this.$emit('btnClick')
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .button-wrapper {
    .button {
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      white-space: nowrap;
      user-select: none;
      padding: 5px 15px 6px;
      font-size: 12px;
      border-radius: 4px;
      transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
      color: #515a6e;
      background-color: #fff;
      border-color: #dcdee2;
    }
    .button-primary {}
    .button-submit {
      color: #fff;
      background-color: #1a73e8;
      border-color: #1a73e8;
    }
    .button-delete {
      color: #fff;
      background-color: #ed4014;
      border-color: #ed4014;
    }
    .long {
      width: 100%;
    }
    .button-text {
      letter-spacing: 4px;
    }
  }
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import Vuex from 'vuex'
import VueSocketio from 'vue-socket.io'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueSocketio, process.env.NODE_ENV === 'development' ? process.env.socketHost : window.config.socketHost)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const isLogin = store.state.token.token // 根据token判断是否登录
    if (isLogin) {
      next()
    } else {
      next({path: '/index'})
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

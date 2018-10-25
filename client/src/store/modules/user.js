import * as types from '../mutation_types'
const state = {
  userEmail: '',
  nickname: '',
  avatar: ''
}

const getters = {
  userInfo: (state) => {
    return {
      nickname: state.nickname,
      userEmail: state.userEmail,
      avatar: state.avatar
    }
  }
}

const actions = {
}

const mutations = {
  [types.SET_USER] (state, userinfo) {
    state.userEmail = userinfo.userEmail
    state.nickname = userinfo.nickname
    state.avatar = userinfo.avatar
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

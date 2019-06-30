import * as types from '../mutation_types'
const state = {
  userEmail: '',
  nickname: '',
  avatar: '',
  id: ''
}

const getters = {
  userInfo: (state) => {
    return {
      nickname: state.nickname,
      userEmail: state.userEmail,
      avatar: state.avatar,
      id: state.id
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
    state.id = userinfo._id
  },
  [types.SET_USER_EMAIL] (data) {
    state.userEmail = data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

import * as types from '../mutation_types'

// state
const state = {
  nickname: '',
  id: '',
  avatar: '',
  loginStatus: false
}

const getters = {
  friendInfo: (state) => {
    return {
      nickname: state.nickname,
      id: state.id,
      avatar: state.avatar,
      loginStatus: state.loginStatus
    }
  }
}

// mutations
const mutations = {
  [types.SAVE_FRIEND_INFO] (state, data) {
    state.nickname = data.nickname
    state.socketId = data.socketId
    state.id = data._id
    state.avatar = data.avatar
    state.loginStatus = state.loginStatus
  },
  [types.SET_FRIEND_LOGIN_STATUS] (state, data) {
    state.loginStatus = data
  }
}

export default {
  state,
  mutations,
  getters
}

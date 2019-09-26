import * as types from '../mutation_types'
const state = {
  userEmail: '',
  nickname: '',
  avatar: '',
  id: '',
  friends: {}
}

const getters = {
  userInfo: (state) => {
    return {
      nickname: state.nickname,
      userEmail: state.userEmail,
      avatar: state.avatar,
      id: state.id
    }
  },
  friendSockets: (state) => {
    return state.friends
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
    userinfo.friends.forEach(ele => {
      state.friends[ele._id] = ele.socketId
    })
  },
  [types.SET_USER_EMAIL] (state, data) {
    state.userEmail = data
  },
  [types.SET_USER_FRIEND] (state, data) {
    state.friends[data.userId] = data.socketId
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

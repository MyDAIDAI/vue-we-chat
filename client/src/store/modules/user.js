const state = {
  userEmail: '',
  nickname: ''
}

const getters = {
}

const actions = {}

const mutations = {
  setUser (state, userinfo) {
    state.userEmail = userinfo.userEmail
    state.nickname = userinfo.nickname
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

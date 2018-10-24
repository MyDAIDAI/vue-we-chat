import * as types from '../mutation_types'

// state
const state = {
  token: localStorage.getItem('token')
}

// mutations
const mutations = {
  [types.CREATE_TOKEN] (state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  [types.DELETE_TOKEN] (state) {
    localStorage.removeItem('token')
    state.token = null
  }
}

export default {
  state,
  mutations
}

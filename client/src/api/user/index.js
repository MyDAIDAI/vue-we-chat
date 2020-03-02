import api from '../index'

export default {
  register (data) {
    return api.post(`/api/register`, data)
  },
  login (data) {
    return api.post(`/api/login`, data)
  },
  getUserInfo () {
    return api.get('/api/getuserinfo')
  },
  find (name) {
    return api.get(`/api/user/find/${name}`)
  },
  requestFriends (userInfo) {
    return api.post('/api/user/request', userInfo)
  }
}

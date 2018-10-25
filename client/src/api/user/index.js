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
  }
}

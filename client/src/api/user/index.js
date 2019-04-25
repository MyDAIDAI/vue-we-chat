import api from '../index'

export default {
  register (data) {
    return api.post(`/api/register`, data)
  },
  login (data) {
    return api.post(`/api/login`, data)
  },
  getUserInfo () {
    return api.get('/api/user/info')
  },
  find (name) {
    return api.get(`/api/user/find/${name}`)
  },
  addUser (id, data) {
    return api.post(`/api/request/add/${id}`, data)
  }
}

import api from '../index'

export default {
  register (data) {
    return api.fetch(`/api/register`, data)
  },
  login (data) {
    return api.fetch(`/api/login`, data)
  }
}

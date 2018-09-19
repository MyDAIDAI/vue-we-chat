import api from '../index'

export default {
  register (data) {
    return api.fetch(`/api/register`, data)
  }
}

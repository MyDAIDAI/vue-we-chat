import store from '../store/index'

require('es6-promise').polyfill()
require('isomorphic-fetch')

function parseResponse (response) {
  return Promise.all([response.status, response.statusText, response.json()])
}
function checkStatus ([status, statusText, data]) {
  if (status >= 200 && status <= 300) {
    return data
  }
  if (status === 401) {
    store.commit('DELETE_TOKEN')
  }
  const error = new Error(statusText)
  error.status = status
  error.errorMessage = data
  return Promise.reject(error)
}

export default {
  get (url, param = {}, headers = {}) {
    const reqHeaders = new Headers(headers)
    reqHeaders.append('Accept', 'application/json')
    if (store.state.token.token) {
      reqHeaders.append('Authorization', `Bearer ${store.state.token.token}`)
    }
    const query = []
    Object.keys(param).forEach(item => {
      query.push(`${item}=${encodeURIComponent(param[item])}`)
    })
    const params = query.length ? `?${query.join('&')}` : ''
    url = url + params

    const init = {
      method: 'GET',
      headers: reqHeaders,
      credential: 'include',
      cache: 'default',
      mode: 'cors'
    }
    url = process.env.NODE_ENV === 'development' ? url : `${window.config.baseUrl}${url}`
    return fetch(url, init)
      .then(parseResponse)
      .then(checkStatus)
  },
  post (url, param = {}, headers = {}) {
    const reqHeaders = new Headers(headers)
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accept', 'application/json')
    if (store.state.token.token) {
      reqHeaders.append('Authorization', `Bearer ${store.state.token.token}`)
    }
    const init = {
      method: 'POST',
      headers: reqHeaders,
      credential: 'include',
      mode: 'cors',
      body: JSON.stringify(param)
    }
    url = process.env.NODE_ENV === 'development' ? url : `${window.config.baseUrl}${url}`
    return fetch(url, init)
      .then(parseResponse)
      .then(checkStatus)
  }
}

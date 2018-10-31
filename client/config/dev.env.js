'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  socketHost: '"http://127.0.0.1:7001"', //wxy本地测试
})

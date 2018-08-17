'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533450168502_326';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [
      'http://localhost:7001',
      'http://127.0.0.1:7001'
    ],
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/vue-we-chat',
    options: {},
  };

  return config;
};

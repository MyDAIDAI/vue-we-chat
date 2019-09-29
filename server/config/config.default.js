'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533450168502_326';

  config.cert = 'vue_we_chat_by_dengpan_1533450168502_326';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [
      'http://localhost:7001',
      'http://127.0.0.1:7001',
    ],
  };

  config.cors = {
    credentials: true,
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/vue-we-chat',
    options: {
      server: {
        auto_reconnect: true,
        poolSize: 10,
      },
    },
  };
  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: 81909,
    secret: '24975000ac8261ac900f83b1aff27a6099b1c4ae',
  };
  return config;
};

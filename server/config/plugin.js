'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
exports.io = {
  enable: true,
  package: 'egg-socket.io',
  // init: { }, // passed to engine.io
  namespace: {
    '/': {
      connectionMiddleware: ['auth'],
      packetMiddleware: [],
    },
  },
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.alinode = {
  enable: true,
  package: 'egg-alinode',
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  const verifyToken = app.middlewares.verifyToken();
  router.post('register', '/api/register', controller.user.create);
  router.post('login', '/api/login', controller.user.login);
  router.get('getUserInfo', '/api/user/info', verifyToken, controller.user.getUserInfo);
  router.get('findUsers', '/api/user/find/:name', verifyToken, controller.user.findUsers);
  router.post('addUserRequest', '/api/request/add/:id', verifyToken, controller.request.addUser);
  router.post('addFriend', '/api/friend/add/:friendId', verifyToken, controller.friend.addFriend)
  // router.post('requestUsers', '/api/user/request', controller.user.requestFriend);
  app.io.of('/').route('login', app.io.controller.login.index);
  app.io.of('/').route('chat', app.io.controller.chat.index);
  app.io.route('disconnecting', app.io.controller.chat.disconnecting);
  app.io.route('disconnect', app.io.controller.chat.disconnect);

  // io.route('server', io.controller.user.index);
  // io.route('request', io.controller.user.request);
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  const verifyToken = app.middlewares.verifyToken();
  router.post('register', '/api/register', controller.user.create);
  router.post('login', '/api/login', controller.user.login);
  router.get('getuserinfo', '/api/getuserinfo', verifyToken,  controller.user.getUserInfo)
  router.get('findUsers', '/api/user/find/:name', verifyToken, controller.user.find)

  io.route('server', io.controller.user.index);
};

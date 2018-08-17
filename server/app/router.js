'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('createPost', '/api/posts', controller.post.create);
  router.post('register', '/api/register', controller.user.create)
};

'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async create() {
    const { ctx, service } = this;
    const res = await service.user.create(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
      code: 200,
      success: true,
      data: res,
    };
  }
}
module.exports = UserController;

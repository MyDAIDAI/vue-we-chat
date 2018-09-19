'use strict';

const Controller = require('egg').Controller;
const ms = require('ms');

class UserController extends Controller {

  async create() {
    const { ctx, service } = this;
    const res = await service.user.create(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
      code: 0,
      success: true,
      data: res,
    };
  }
  async login() {
    const { ctx, service } = this;
    const res = await service.user.login(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
      code: 0,
      success: true,
      data: res
    }
  }
}
module.exports = UserController;

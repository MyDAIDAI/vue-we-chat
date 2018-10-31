'use strict';

const Controller = require('egg').Controller;
const ms = require('ms');

class UserController extends Controller {

  async create() {
    const { ctx, service } = this;
    const res = await service.user.create(ctx.request.body);
    resHandle(ctx, res)
  }
  async login() {
    const { ctx, service } = this;
    const res = await service.user.login(ctx.request.body);
    resHandle(ctx, res)
  }
  async getUserInfo() {
    const { ctx, service } = this
    const userId = ctx.token.uid
    const res = await service.user.getUserInfo(userId)
    resHandle(ctx, res)
  }
  async addFriend() {
    const { ctx, service } = this
    const res = await service.user.addFriend(ctx.request)
  }
}
function resHandle (ctx, res) {
  if (res.code === 200) {
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: res,
    };
  } else {
    ctx.throw(res.code, res.msg)
  }
}
module.exports = UserController;

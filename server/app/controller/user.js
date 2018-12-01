'use strict';

const Controller = require('egg').Controller;
const ms = require('ms');

class UserController extends Controller {

  async create() {
    let { ctx, service } = this;
    let res = await service.user.create(ctx.request.body);
    resHandle(ctx, res)
  }
  async login() {
    let { ctx, service } = this;
    let res = await service.user.login(ctx.request.body);
    resHandle(ctx, res)
  }
  async getUserInfo() {
    let { ctx, service } = this
    let userId = ctx.token.uid
    let res = await service.user.getUserInfo(userId);
    resHandle(ctx, res)
  }
  async find() {
    let { ctx, service } = this;
    let name = ctx.params.name
    const res = await service.user.find(name);
    resHandle(ctx, res)
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

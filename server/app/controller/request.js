'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
// const ms = require('ms');

class RequestController extends Controller {
  async addUser() {
    const { ctx, service, app } = this;
    const nsp = app.io.of('/');
    const id = ctx.params.id
    const userId = ctx.token.uid;
    const { message } = ctx.request.body;
    // 当前用户
    const findUser = await service.user.findOneByUserId(userId);
    // 添加用户
    console.log('findUser', findUser)
    const addUser = await service.user.findOneByUserId(id);
    let retData = {}
    if (addUser.loginStatus) {
      nsp.to(addUser.socketId).emit('addfriend', {
        message,
        nickname: findUser.nickname,
        userId: findUser._id
      })
      // TODO 用户处于登录状态，则直接将请求信息通过websocket发送
    } else {
      await service.request.createAddRequest({ addUser: addUser._id, requestUser: findUser._id, message });
    }
    // await ctx.socket.emit('request', ' add friends' + addUser);
    retData = {
      code: 200,
      msg: '添加好友请求已发送，等待用户同意',
    }
    resHandle(ctx, retData);
  }
}
function resHandle(ctx, res) {
  if (res.code === 200) {
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: res.data,
      msg: res.msg,
    };
  } else {
    ctx.throw(res.code, res.msg);
  }
}
module.exports = RequestController;

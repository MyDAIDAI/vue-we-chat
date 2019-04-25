'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
// const ms = require('ms');

class UserController extends Controller {

  async create() {
    const { ctx, service } = this;
    const { userEmail } = ctx.request.body;
    const findUser = await service.user.findOneByUserEmail(userEmail);
    let retData = {};
    if (findUser) {
      retData = {
        code: 200,
        msg: '用户已存在，请登陆',
      };
    } else {
      await service.user.createUser(ctx.request.body);
      retData = {
        code: 200,
        msg: '用户创建成功，请登陆',
      };
    }
    resHandle(ctx, retData);
  }
  async login() {
    const { ctx, service, app } = this;
    const { userEmail, password } = ctx.request.body;
    const userLogin = await service.user.findOneByUserEmail(userEmail);
    let retData = {};
    if (userLogin) {
      if (password === userLogin.password) {
        const token = jwt.sign({
          uid: userLogin._id,
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 * 7, // 过期时间为7天
        }, app.config.cert);
        await service.user.updateOneUserInfo(userLogin.userEmail, {loginStatus: true})
        retData = {
          msg: '登录成功',
          code: 200,
          data: {
            user: userLogin,
            token,
          },
        };
        userLogin.loginStatus = true
      } else {
        retData = {
          code: 401,
          msg: '密码输入错误，请重新输入!',
        };
      }
    } else {
      retData = {
        code: 401,
        msg: '该用户不存在, 请注册!',
      };
    }
    resHandle(ctx, retData);
  }
  async getUserInfo() {
    const { ctx, service } = this;
    const userId = ctx.token.uid;
    const findUser = await service.user.findOneByUserId(userId);
    let retData = {
      code: 401,
      msg: '该用户不存在!',
    };
    if (findUser) {
      retData = {
        code: 200,
        data: {
          user: findUser,
        },
      };
    }
    resHandle(ctx, retData);
  }
  async findUsers() {
    const { ctx, service } = this;
    const name = ctx.params.name;
    const findUsers = await service.user.findUsersByNickname(name);
    let retData = {
      code: 401,
      msg: '该用户不存在!',
    };
    if (findUsers) {
      retData = {
        code: 200,
        data: [
          {
            type: '用户',
            value: findUsers,
          },
        ],
      };
    }
    resHandle(ctx, retData);
  }
  // async requestFriend() {
  //   const { ctx, service, app } = this;
  //   const nsp = app.io.of('/');
  //   const res = await service.user.requestFriend(ctx.request.body);
  //   nsp.emit('request', res);
  //   resHandle(ctx, res);
  // }
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
module.exports = UserController;

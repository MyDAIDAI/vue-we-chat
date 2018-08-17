'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  async create(userInfo) {
    const { ctx } = this;
    const User = ctx.model.User;
    const { nickname, userEmail, password } = userInfo;
    if (!(userEmail && password)) {
      return {
        msg: '用户邮箱和密码不能为空',
      };
    }
    const userObj = new User({ nickname, userEmail, password });
    let userRegister = await User.findOne({ userEmail });
    let retData = {};
    if (!userRegister) {
      await userObj.save();
      userRegister = await User.findOne({ userEmail });
      retData = {
        user: {
          nickname: userRegister.nickname,
          userEmail: userRegister.userEmail,
          id: userRegister.id,
        },
        msg: '注册成功',
      };
    } else {
      retData = {
        msg: '该用户已注册，请登录',
      };
    }
    return retData;
  }
}
module.exports = UserService;

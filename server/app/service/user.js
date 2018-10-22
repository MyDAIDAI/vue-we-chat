'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  /**
   * 创建用户
   * @param userInfo
   * @returns {Promise<*>}
   */
  async create(userInfo) {
    const { ctx } = this;
    const User = ctx.model.User;
    const { nickname, userEmail, password } = userInfo;
    // if (!(userEmail && password)) {
    //   return {
    //     msg: '用户邮箱和密码不能为空',
    //   };
    // }
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
  async login(userInfo) {
    const { ctx } = this;
    const User = ctx.model.User;
    const { userEmail, password } = userInfo;
    const userLogin = await User.findOne({ userEmail });
    let retData = {};
    if (userLogin) {
      if (password === userLogin.password) {
        ctx.cookies.set('userEmail', Buffer.from(userLogin.userEmail).toString('base64') ,{
          httpOnly: false
        });
        retData = {
          msg: '登录成功',
          user: {
            nickname: userLogin.nickname,
            userEmail: userLogin.userEmail
          }
        }
      } else {
        retData = {
          msg: '密码输入错误，请重新输入!'
        }
      }
    } else {
      retData = {
        msg: '该用户不存在!'
      }
    }
    return retData
  }
}
module.exports = UserService;

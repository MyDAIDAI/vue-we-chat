'use strict';
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Service = require('egg').Service;
let currentUser = {};
class UserService extends Service {
  /**
   * 创建用户
   * @param {object} userInfo 创建用户细腻些
   * @return {Promise<*>} 创建用户结果
   */
  async create(userInfo) {
    const { ctx } = this;
    const User = ctx.model.User;
    const { nickname, userEmail, password } = userInfo;
    const userObj = new User({ nickname, userEmail, password });
    let userRegister = await User.findOne({ userEmail });
    let retData = {};
    if (!userRegister) {
      await userObj.save();
      userRegister = await User.findOne({ userEmail });
      retData = {
        user: userRegister,
        msg: '注册成功',
        code: 200,
      };
    } else {
      retData = {
        msg: '该用户已注册，请登录',
        code: 401,
      };
    }
    return retData;
  }

  /**
   * 用户登陆
   * @param {object} userInfo 登陆用户信息
   * @return {Promise<void>} 登陆结果
   */
  async login(userInfo) {
    const { ctx, app } = this;
    const User = ctx.model.User;
    const { userEmail, password } = userInfo;
    const userLogin = await User.findOne({ userEmail });
    let retData = {};
    if (userLogin) {
      // todo 密码加密
      if (password === userLogin.password) {
        const token = jwt.sign({
          uid: userLogin._id,
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 * 7, // 过期时间为7天
        }, app.config.cert);
        retData = {
          msg: '登录成功',
          code: 200,
          user: userLogin,
          token,
        };
        await User.updateOne(
          { userEmail: userLogin.userEmail },
          {
            $set: { loginStatus: true },
          });
        currentUser = userLogin;
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
    return retData;
  }

  /**
   * 获取用户信息
   * @param {number} userId  用户id
   * @return {Promise<{code: number, data: *}>} 用户信息
   */
  async getUserInfo(userId) {
    const { ctx } = this;
    const User = ctx.model.User;
    const sendDataFormat = { nickname: 1, userEmail: 1, _id: 1, avatar: 1, friends: 1, updateTime: 1 };
    const userInfo = await User.findOne({ _id: userId }, sendDataFormat);
    return {
      code: 200,
      data: userInfo,
    };
  }
  /**
   * 查找用户
   * @param {string} name 查找用户名
   * @return {Promise<{code: number, data: {type: string, value: *}[]}>} 查找用户结果
   */
  async find(name) {
    const { ctx } = this;
    const User = ctx.model.User;
    const sendDataFormat = { nickname: 1, userEmail: 1, avatar: 1 };
    const results = await User.find({ nickname: name }, sendDataFormat);
    return {
      code: 200,
      data: [{
        type: '用户',
        value: results,
      }],
    };
  }
  async requestFriend(userInfo) {
    const { ctx } = this;
    const User = ctx.model.User;
    const requestUser = await User.find({ nickname: userInfo.nickname });
    // 用户未登陆，将好友请求保存
    if (!requestUser.loginStatus) {
      await User.updateOne(
        { _id: currentUser.id },
        {
          $set: { requestFriends: requestUser.id },
        });
    }
  }
}
module.exports = UserService;

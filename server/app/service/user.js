'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  async create(userInfo) {
    const { ctx } = this;
    const User = ctx.model.User;
    const { nickname, userEmail, password } = userInfo;
    // let isRegister = await User.findOne({userEmail: userEmail});
    // console.log(isRegister)
    // if (!isRegister) {
    // }
    // return user
    const userObj = new User({ nickname, userEmail, password });
    await userObj.save();
    const userRegister = await User.findOne({ userEmail });
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: userRegister,
    };
  }
}
module.exports = UserService;

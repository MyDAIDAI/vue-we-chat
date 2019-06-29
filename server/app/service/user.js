'use strict';
const Service = require('egg').Service;
const NOT_FIND = 0;
class UserService extends Service {
  /**
   * 通过userEmail 查找用户
   * @param {string} userEmail 用户邮箱
   * @param {object} sendDataFormat 返回数据格式
   * @return {Promise<*>} 返回查找结果，没有结果则返回0
   */
  async findOneByUserEmail(userEmail, sendDataFormat = {}) {
    const { ctx } = this;
    const findUser = await ctx.model.User.findOne({ userEmail }, sendDataFormat);
    if (findUser) {
      return findUser;
    }
    return NOT_FIND;
  }
  /**
   * 通过userId 查找用户
   * @param {string} userId 用户id
   * @param {object} sendDataFormat 返回数据格式
   * @return {Promise<*>} 返回查找结果，没有结果则返回0
   */
  async findOneByUserId(userId, sendDataFormat = {}) {
    const { ctx } = this;
    const findUser = await ctx.model.User.findOne({ _id: userId }, sendDataFormat);
    if (findUser) {
      return findUser;
    }
    return NOT_FIND;
  }
  /**
   * 通过nickname 查找用户
   * @param {string} nickname 用户昵称
   * @param {object} sendDataFormat 返回数据格式
   * @return {Promise<*>} 返回查找结果，没有结果则返回0
   */
  async findUsersByNickname(nickname, sendDataFormat = {}) {
    const { ctx } = this;
    const findUser = await ctx.model.User.find({ nickname: { $regex: new RegExp(nickname) } }, sendDataFormat);
    if (findUser) {
      return findUser;
    }
    return NOT_FIND;
  }
  async updateOneUserInfo(userEmail, updatedData) {
    const { ctx } = this
    return await  ctx.model.User.updateOne({userEmail}, updatedData)
  }
  async findAllUsersById (ids, sendDataFormat = {}) {
    const { ctx } = this;
    const users = await ctx.model.User.find({_id: {$in: ids}}, sendDataFormat);
    if (users) {
      return users;
    }
    return NOT_FIND;
  }
  /**
   * 创建用户
   * @param {object} userInfo 创建用户细腻些
   * @return {Promise<*>} 创建用户结果
   */
  async createUser(userInfo) {
    const { ctx } = this;
    const User = ctx.model.User;
    const userObj = new User(userInfo);
    await userObj.save();
    return '注册成功';
  }
}
module.exports = UserService;

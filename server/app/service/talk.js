'use strict';
const Service = require('egg').Service;
const NOT_FIND = 0
class TalkService extends Service {
  /**
   * 创建离线信息
   * @param talkInfo
   * @returns {Promise<string>}
   */
  async createTalkHandler(talkInfo) {
    const { ctx } = this;
    const Talk = ctx.model.Talk;
    const talkObj = new Talk(talkInfo);
    await talkObj.save();
    return '信息保存成功';
  }
  async getAllNotReceiveTalkById(receiveId, sendDataFormat = {}) {
    const { ctx } = this;
    const talks = await ctx.model.Talk.find({ receiveId }, sendDataFormat);
    console.log('talks', talks)
    if (talks) {
      return talks;
    }
    return NOT_FIND;
  }
  async updateTalkHandler(receiveId, sendId, updatedData) {
    const { ctx } = this
    return await ctx.model.Talk.update({ receiveId, sendId }, updatedData);
  }
}
module.exports = TalkService;

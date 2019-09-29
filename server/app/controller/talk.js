'use strict';

const Controller = require('egg').Controller;

class TalkController extends Controller {
  async getAllNotReceiveTalk() {
    const { ctx, service } = this;
    const receiveId = ctx.params.receiveId;
    const talks = await service.talk.getAllNotReceiveTalkById(receiveId);
    // TODO: 更新信息状态
    // await service.talk.updateTalkHandler()
    let data = {}
    talks.forEach(ele => {
      if (data[ele.sendId]) {
        data[ele.sendId].push(ele);
      } else {
        data[ele.sendId] = [];
      }
    })
    let retData = {};
    if (talks) {
      retData = {
        code: 200,
        data,
      };
    } else {
      retData = {
        code: 401,
        msg: '没有未接收信息',
      };
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
module.exports = TalkController;

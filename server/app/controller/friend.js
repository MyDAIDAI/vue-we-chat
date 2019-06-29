'use strict';

const Controller = require('egg').Controller;

class FriendController extends Controller {
  async addFriend() {
    const { ctx, service, app } = this;
    const friendId = ctx.params.friendId
    const userId = ctx.token.uid;
    // 当前用户
    const currentUser = await service.user.findOneByUserId(userId);
    // 好友用户
    const addUser = await service.user.findOneByUserId(friendId)
    // 添加
    let retData = {};
    let currentUserFriends = currentUser.friends;
    let addUserFriends = addUser.friends;
    addUserFriends.push(userId)
    currentUserFriends.push(friendId);
    addUserFriends = Array.from(new Set(addUserFriends))
    currentUserFriends = Array.from(new Set(currentUserFriends))
    await service.user.updateOneUserInfo(addUser.userEmail, { friends: addUserFriends});
    await service.user.updateOneUserInfo(currentUser.userEmail, { friends: currentUserFriends });
    retData = {
      code: 200,
      msg: '好友已添加',
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
module.exports = FriendController;

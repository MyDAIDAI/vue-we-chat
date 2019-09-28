'use strict';

const Controller = require('egg').Controller;

class FriendController extends Controller {
  async addFriend() {
    const { ctx, service, app } = this;
    const nsp = app.io.of('/');
    const friendId = ctx.params.friendId
    const userId = ctx.token.uid;
    // 当前用户
    const currentUser = await service.user.findOneByUserId(userId);
    // 好友用户
    const addUser = await service.user.findOneByUserId(friendId)
    // 添加
    let retData = {};
    let currentUserFriendIds = currentUser.friends;
    let addUserFriendIds = addUser.friends;
    addUserFriendIds.push(userId)
    currentUserFriendIds.push(friendId);
    addUserFriendIds = Array.from(new Set(addUserFriendIds))
    currentUserFriendIds = Array.from(new Set(currentUserFriendIds))
    await service.user.updateOneUserInfo(addUser.userEmail, { friends: addUserFriendIds });
    await service.user.updateOneUserInfo(currentUser.userEmail, { friends: currentUserFriendIds });
    // 根据ids数组查找数据表中包含在其中数据
    const currentUserFriends = await service.user.findAllUsersById(currentUserFriendIds)
    const addUserFriends = await service.user.findAllUsersById(addUserFriendIds)
    nsp.to(currentUser.socketId).emit('friends', currentUserFriends)
    nsp.to(addUser.socketId).emit('friends', addUserFriends)
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

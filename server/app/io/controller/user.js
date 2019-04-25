const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const message = ctx.args[0];
    const res = await service.user.find(message.nickname);
    await ctx.socket.emit('res', res);
  }
  async request() {
    const { ctx, service } = this;
    // const requestUser = ctx.args[0];
    // const currentUser = ctx.args[1];
    // const res = await service.user.requestFriend(requestUser, currentUser);
    await ctx.socket.emit('res', 'ctx data');
  }
  async friends () {
    const { ctx, service } = this
    await ctx.socket.emit('addfriends', 'add friends socket')
  }
}
module.exports = UserController;

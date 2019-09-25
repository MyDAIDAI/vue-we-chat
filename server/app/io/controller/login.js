const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index(from, msg) {
    const { ctx, service } = this;
    const user = ctx.args[0];
    await service.user.updateOneUserInfo(user.userEmail, { socketId: ctx.socket.id });
    console.log('userEmail socket id', user.userEmail, ctx.socket.id)
    await ctx.socket.emit('login', 'save socketId success');
  }
}
module.exports = LoginController;

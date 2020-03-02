const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx, service } = this;
    const user = ctx.args[0];
    await service.user.updateOneUserInfo(user.userEmail, { socketId: ctx.socket.id, loginStatus: true });
    await ctx.socket.broadcast.emit('friendLogin', {
      userId: user._id,
      socketId: ctx.socket.id,
    });
  }
}
module.exports = LoginController;

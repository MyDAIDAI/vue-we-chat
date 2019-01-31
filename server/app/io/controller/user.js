const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const message = ctx.args[0];
    console.log('server connected');
    console.log('this.ctx.socket.id = ', this.ctx.socket.id);
    console.log('this.ctx.args = ', this.ctx.args);
    const res = await service.user.find(message.nickname);
    await ctx.socket.emit('res', res);
  }
}
module.exports = UserController;

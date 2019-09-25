const Controller = require('egg').Controller;

class ChatController extends Controller {
  async index() {
    const { ctx } = this;
    const data = ctx.args[0];
    await ctx.socket.to(data.socketId).emit('chat', data.msg);
  }
  async disconnecting() {
    const { ctx } = this
    console.log('disconnecting', ctx.args[0]);
  }
  async disconnect() {
    const { ctx, service } = this;
    await service.user.logout();
    console.log('disconnet', ctx.args[0]);
  }
}
module.exports = ChatController;

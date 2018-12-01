const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    console.log('this.ctx.socket.id = ', this.ctx.socket.id);
    console.log('this.ctx.args = ', this.ctx.args);
    await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
}
module.exports = UserController
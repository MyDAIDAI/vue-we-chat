'use strict';

const Controller = require('egg').Controller;
class PostController extends Controller {

  async create() {
    const { ctx, service } = this;
    // const createRule = {
    //   title: { type: 'string' },
    //   content: { type: 'string' }
    // }
    // ctx.validate(createRule);
    // const author = ctx.session.userId;
    // const req = Object.assign(ctx.request.body, { author });

    const res = await service.post.create(ctx.request.body);
    ctx.body = { id: res.id };
    ctx.status = 201;
  }
}
module.exports = PostController;

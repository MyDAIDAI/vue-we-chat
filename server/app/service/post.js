const Service = require('egg').Service;
class PostService extends Service {
  async create() {
    return {
      id: 1
    }
  }
}
module.exports = PostService;
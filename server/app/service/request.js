'use strict';
const Service = require('egg').Service;

class RequestService extends Service {
	async createAddRequest (requestData) {
		const { ctx } = this;
		const Request = ctx.model.Request;
		const requestObj = new Request(requestData);
		await requestObj.save();
	}
	async getAllFriendRequest ({ userid }) {
		const { ctx } = this
		const result = await ctx.model.request.findAll({
			addUser: userid,
			status: 0
		})
	}
}
module.exports = RequestService;

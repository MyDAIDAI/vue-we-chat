'use strict';
const Service = require('egg').Service;
const NOT_FIND = 0;

class RequestService extends Service {
	async createAddRequest (requestData) {
		const { ctx } = this;
		const Request = ctx.model.Request;
		const requestObj = new Request(requestData);
		await requestObj.save();
	}
}
module.exports = RequestService;
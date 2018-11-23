'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {

	async index() {
		this.ctx.body = 'hello world';
	}
}

module.exports = IndexController;

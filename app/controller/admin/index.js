'use strict';

const Controller = require('egg').Controller;
var jwt = require("jsonwebtoken");
class IndexController extends Controller {

	async index() {
		this.ctx.body = 'hello world';
	}

	async login() {
		let token = jwt.sign({
			data : {
				"role" : "admin",
				"userid" : "123"
			}
		},
		"eggjs",
		{
			expiresIn: 60 * 60
		})
		console.log(token)
	}

}

module.exports = IndexController;

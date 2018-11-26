'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	const token = app.middleware.token({
		"role" : 'admin'
	});
	router.get("/admin/index",token,controller.admin.index.index)
	router.get("/admin/login", controller.admin.index.login)
}
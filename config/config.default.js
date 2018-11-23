'use strict';

module.exports = appInfo => {
	const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1542944614969_3733';

	config.mysql = {
		client : {
			host : "127.0.0.1",
			port : "3306",
			user : "root",
			password : "root",
			database : "test"
		},
		app : true ,
		agent : true ,
	};
	// add your config here
	config.middleware = [];

	return config;
};

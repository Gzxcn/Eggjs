'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541725738622_8992';

  // add your config here
  config.middleware = [];

  // mysql login detail
  return config;
};


exports.mysql = {
	client : {
		host : "127.0.0.1",
		port : "3306",
		user : "root",
		password : "root",
		database : "scrapy"
	},
	app : true ,
	agent : true,
}


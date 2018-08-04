//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Common = require('../models/common');

// var customerViewModel = require('../viewModels/customer.js');

module.exports = {

	Routes: function (app) {
		//调用模板

		//调用功能
		app.get('/staff/getStaff', this.getStaff);
	},

	getStaff: function (req, res, next) {
		var itemType = 1;
		var filter1 = '';
		var filter2 = '';
		var inParams = [itemType,filter1,filter2];
		Common.getItemData(inParams, function (rows) {
			res.json(rows[0]);
		});
	},



	///页面模板
	
	
};
//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Goods = require('../models/goods');
// var customerViewModel = require('../viewModels/customer.js');

module.exports = {

	Routes: function (app) {
		app.get('/goods/brand',this.brand);
		app.get('/goods/getbrand',this.getBrand);
		app.post('/goods/addbrand', this.addBrand);
		app.post('/goods/modifybrand', this.modifyBrand);
	},

	addBrand: function (req, res, next) {
		var userName = req.session.userName;
		var inParams2 = [req.body.name, req.body.company, userName];
		Goods.addBrand(inParams2,function(rows){
			res.json(rows[0]);
		});
	},

	getBrand: function (req, res, next) {
		
		var inParams = [-1, req.query.name, req.query.company, req.query.status]
		Goods.getBrand(inParams,function(rows){
			res.json(rows[0]);
		});
	},

	modifyBrand: function (req, res, next) {
		var userName = req.session.userName;
		var inParams = [req.body.brandId, req.body.name, req.body.company, req.body.status,userName]
		Goods.modifyBrand(inParams,function(rows){
			res.json(rows[0]);
		});
	},

	brand: function (req, res, next) {
		res.render('goods/BrandSetting',{ layout: null});
	},
};
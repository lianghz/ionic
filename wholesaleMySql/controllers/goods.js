//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Goods = require('../models/goods');
// var customerViewModel = require('../viewModels/customer.js');

module.exports = {

	Routes: function (app) {
		app.get('/goods/brand',this.brand);
		app.get('/goods/getbrand',this.getBrand);
		app.post('/goods/addbrand', this.addBrand);
	},

	addBrand: function (req, res, next) {
		// TODO: back-end validation (safety)
		var c = new Customer({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			address1: req.body.address1,
			address2: req.body.address2,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
			phone: req.body.phone,
		});
		c.save(function (err) {
			if (err) return next(err);
			res.redirect(303, '/customer/' + c._id);
		});
	},

	getBrand: function (req, res, next) {
		var inParams = [-1, req.query.name, req.query.company, req.query.status]
		Goods.getBrand(inParams,function(rows){
			res.json(rows[0]);
		});
	},

	brand: function (req, res, next) {
		res.render('goods/BrandSetting',{ layout: null});
	},
};
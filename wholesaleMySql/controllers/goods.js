//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Goods = require('../models/goods');
var Images = require('../models/uploadImg')
var formidable = require('formidable');
var fs = require('fs');

// var customerViewModel = require('../viewModels/customer.js');

module.exports = {

	Routes: function (app) {
		app.get('/goods/brand', this.brand);
		app.get('/goods/goods', this.goods);

		app.get('/goods/getbrand', this.getBrand);
		app.post('/goods/addbrand', this.addBrand);
		app.post('/goods/modifybrand', this.modifyBrand);

		app.get('/goods/getcatebf', this.getCategoryByFather);
		app.get('/goods/getgoods', this.getGoods);
		app.post('/goods/addgoods', this.addGoods);
		app.post('/goods/editgoods', this.modifyGoods);

	},

	addBrand: function (req, res, next) {
		var userName = req.session.userName;
		var inParams2 = [req.body.name, req.body.company, userName];
		Goods.addBrand(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getBrand: function (req, res, next) {

		var name = req.query.name ? req.query.name : "";
		var company = req.query.company ? req.query.company : "";
		var status = req.query.status ? req.query.status : "";
		var inParams = [-1, name, company, status]
		Goods.getBrand(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifyBrand: function (req, res, next) {
		var userName = req.session.userName;
		var inParams = [req.body.brandId, req.body.name, req.body.company, req.body.status, userName]
		Goods.modifyBrand(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addGoods: function (req, res, next) {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			// if (err) return res.redirect(303, '/error');
			var filepath = files.filename.path;
			var now = new Date();
			var imageName = "s" + now.getFullYear() + now.getMonth() + now.getDate() + now.getTime() + now.getMilliseconds() + ".jpg";
			var userName = req.session.userName;

			var goodsId = fields.barCode
			var name = fields.name;
			var barCode = goodsId;
			var categoryId = fields.categoryId;
			var brandId = fields.brandId;
			var subunit = fields.subunit;
			var weight = fields.weight;
			var length = fields.length;
			var width = fields.width;
			var height = fields.height;
			var volume = fields.volume;
			var description = fields.description;
			var imageId = imageName;
			var usefullLife = fields.usefullLife;
			var miniLife = fields.miniLife;
			var createUser = userName;
			var updateUser = userName;
			var inParams = [goodsId, name, barCode, categoryId, brandId, subunit, weight, length, width, height, volume, description, imageId, usefullLife, miniLife, createUser, updateUser];
			Images.uploadImg(filepath, imageName);
			Goods.addGoods(inParams, function (rows) {
				res.json(rows[0]);
			});
		});

	},

	getGoods: function (req, res, next) {
		var goodsId = req.query.goodsId;
		var name = req.query.name;
		var barCode = req.query.barCode;
		var categoryId = req.query.categoryId;
		var brandId = req.query.brandId;
		if (goodsId == "") goodsId = 0;
		if (categoryId == "") categoryId = 0;
		if (brandId == "") brandId = 0;

		var inParams = [goodsId, name, barCode, categoryId, brandId]
		console.log("getgoods=" + req.query.goodsId);
		Goods.getGoods(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	/// categories 类别
	getCategoryByFather: function (req, res, next) {
		var fartherId = req.query.fartherId;
		// if (fartherId == "" || fartherId==null) fartherId = 0;
		fartherId = fartherId ? fartherId : 0
		var inParams = [fartherId];
		console.log("P_GetCategoryByFather=" + fartherId);
		Goods.getCategoryByFather(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifyGoods: function (req, res, next) {

		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			var filepath = files.filename.path;
			var filename = files.filename.name;
			var now = new Date();
			if (filename != "") {
				var imageName = "s" + now.getFullYear() + now.getMonth() + now.getDate() + now.getTime() + now.getMilliseconds() + ".jpg";
			} 
			var userName = req.session.userName;

			var goodsId = fields.barCode
			var name = fields.name;
			var barCode = goodsId;
			var categoryId = fields.categoryId;
			var brandId = fields.brandId;
			var subunit = fields.subunit;
			var weight = fields.weight;
			var length = fields.length;
			var width = fields.width;
			var height = fields.height;
			var volume = fields.volume;
			var description = fields.description;
			var imageId = imageName;
			var usefullLife = fields.usefullLife;
			var miniLife = fields.miniLife;
			var updateUser = userName;
			var inParams = [goodsId, name, barCode, categoryId, brandId, subunit, weight, length, width, height, volume, description, imageId, usefullLife, miniLife, updateUser];
			if (filename != "") Images.uploadImg(filepath, imageName);
			Goods.modifyGoods(inParams, function (rows) {
				res.json(rows[0]);
			});
		})
	},

	brand: function (req, res, next) {
		res.render('goods/BrandSetting', { layout: null });
	},
	goods: function (req, res, next) {
		res.render('goods/goodsSetting', { layout: null });
	},
};
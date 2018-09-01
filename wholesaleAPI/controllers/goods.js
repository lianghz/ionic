//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Goods = require('../models/goods');
var Images = require('../models/uploadImg')
var formidable = require('formidable');
var fs = require('fs');

// var customerViewModel = require('../viewModels/customer.js');

module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/goods/getNavigation', this.getNavigation);
		app.get('/goods/getGoodsInfoPage', this.getGoodsInfoPage);
		app.get('/goods/getwebgoods', this.getWebGoodsInfo);
	},

	getNavigation: function (req, res, next) {
		inParams=[];
		Goods.getNavigation(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getGoodsInfoPage: function (req, res, next) {

		var levelId = req.query.levelId ? req.query.levelId : 0;
		var warehouseId = req.query.warehouseId ? req.query.warehouseId : 1;
		var categroyId = req.query.categroyId ? req.query.categroyId : 0;
		var brandId = req.query.brandId ? req.query.brandId : 0;
		var goodsId = req.query.goodsId ? req.query.goodsId : 0;
		var name = req.query.name ? req.query.name : "";
		var description = req.query.description ? req.query.description : "";
		var pageNo = req.query.pageNo ? req.query.pageNo : 1;
		//var pageSize = req.query.pageSize ? req.query.pageSize : "";
		var pageSize = 20;


		var inParams = [levelId, warehouseId, categroyId, brandId,goodsId,name,description,pageNo,pageSize]
		Goods.getGoodsInfoPage(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getWebGoodsInfo: function (req, res, next) {
		var levelId = req.query.levelId;
		var warehouseId = req.query.warehouseId;
		var promotionType = req.query.promotionType;
		if (levelId == "") levelId = 0;
		if (warehouseId == "") warehouseId = 0;
		if (promotionType == "") promotionType = 0;

		var inParams = [levelId, warehouseId, promotionType];
		Goods.getWebGoodsInfo(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

};
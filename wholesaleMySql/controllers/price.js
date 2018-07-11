//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Price = require('../models/price');
// var customerViewModel = require('../viewModels/customer.js');

module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/price/price', this.price);
		app.get('/price/promotion', this.promotion);
		app.get('/price/create', this.promotionCreate);

		//调用功能
		app.post('/price/addPriceList', this.addPriceList);
		app.get('/price/getPriceList', this.getPriceList);
		app.get('/price/getPriceDetail', this.getPriceDetail);
		app.get('/price/getPriceDetailNotIn', this.getPriceDetailNotIn);
		app.post('/price/modifyPriceList', this.modifyPriceList);
		app.post('/price/modifyPriceListDetails', this.modifyPriceListDetails);
		

		app.get('/price/getpromotion',this.getPromotionAdjust);
		app.post('/price/addpromotion',this.addPromotionAdjust);
		app.post('/price/createPromotionResult', this.createPromotionResult);
		
	},

	addPriceList: function (req, res, next) {
		var priceListId = req.body.priceListId;
		var name = req.body.name;
		var userName = req.session.userName;
		var status = req.body.status;
		var inParams = [priceListId, name, userName, status];
		Price.addPriceList(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getPriceList: function (req, res, next) {

		var priceListId = req.query.priceListId;
		priceListId = priceListId ? priceListId : 0;
		var inParams = [priceListId]
		Price.getPriceList(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getPriceDetail: function (req, res, next) {
		var priceListId = req.query.priceListId;
		var goodsId = req.query.goodsId;
		var name = req.query.name;
		goodsId = goodsId ? goodsId : 0;
		name = name ? name : "";
		var inParams = [priceListId, goodsId, name]
		Price.getPriceDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getPriceDetailNotIn: function (req, res, next) {
		var priceListId = req.query.priceListId;
		var inParams = [priceListId]
		Price.getPriceDetailNotIn(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifyPriceList: function (req, res, next) {
		var priceListId = req.body.priceListId;
		var name = req.body.name;
		var userName = req.session.userName;
		var status = req.body.status;
		var inParams = [priceListId, name, userName, status]
		Price.modifyPriceList(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifyPriceListDetails: function (req, res, next) {
		var priceListId = req.body.priceListId;
		var goodsId = req.body.goodsId;
		var price = req.body.price;
		var userName = req.session.userName;
		var inParams = [priceListId, goodsId, price, userName]
		Price.modifyPriceListDetails(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	//促销因子管理
	addPromotionAdjust: function (req, res, next) {
		var adjustId = req.body.adjustId;
		var name = req.body.name;
		var warehouseId = req.body.warehouseId;
		var priceListId = req.body.priceListId;
		var adjustMethodId = req.body.adjustMethodId;
		var effectGoodsGroupId = req.body.effectGoodsGroupId;
		var effectQuantity = req.body.effectQuantity;
		var adjustRate = req.body.adjustRate;
		var giveGoodsGroupId = req.body.giveGoodsGroupId;
		var beginDate = req.body.beginDate;
		var endDate = req.body.endDate;
		var effectTotalAmount = req.body.effectTotalAmount;
		var minLevelId = req.body.minLevelId;
		var specialPriceStatus = req.body.specialPriceStatus;
		var userName = req.session.userName;
		var status = req.body.status;
		var type = req.body.type; //#1 添加，2修改
		var inParams = [adjustId, name,warehouseId,priceListId,adjustMethodId,effectGoodsGroupId,effectQuantity,adjustRate,giveGoodsGroupId,beginDate,endDate,effectTotalAmount,minLevelId,specialPriceStatus,userName,status,type ]
		Price.addPromotionAdjust(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	getPromotionAdjust: function (req, res, next) {
		var adjustId = req.query.adjustId;
		var name = req.query.name;
		var warehouseId = req.query.warehouseId;
		var startDate  = req.query.startDate;
		var endDate = req.query.endDate;
		var status = req.body.status;
		status = status?status:-1;
		var inParams = [adjustId, name, warehouseId, startDate,endDate,status];
		Price.getPromotionAdjust(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	createPromotionResult: function (req, res, next) {
		var adjustId = req.query.adjustId;
		var name = req.query.name;
		var warehouseId = req.query.warehouseId;
		var startDate  = req.query.startDate;
		var endDate = req.query.endDate;
		var status = req.body.status;
		status = status?status:-1;
		var inParams = [adjustId, name, warehouseId, startDate,endDate,status];
		Price.createPromotionResult(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	///页面模板
	price: function (req, res, next) {
		res.render('price/PriceSetting', { layout: null });
	},
	promotion: function (req, res, next) {
		res.render('price/PromotionSetting', { layout: null });
	},
	promotionCreate: function (req, res, next) {
		res.render('price/CreateSetting', { layout: null });
	},

};
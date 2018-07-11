//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Supplier = require('../models/supplier');
var Common = require('../models/common');

module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/supplier/supplier', this.supplier);
		app.get('/supplier/supplierprice', this.supplierPrice);
		app.get('/supplier/purchase', this.purchase);

		//调用功能
		app.get('/supplier/getSupplier', this.getSupplier);	
		app.post('/supplier/modifySupplier', this.modifySupplier);
		app.get('/supplier/getSupplierGoodsPrice', this.getSupplierGoodsPrice);	
		app.post('/supplier/modifySupplierGoodsPrice', this.modifySupplierGoodsPrice);
		app.post('/supplier/deleteSupplierGoodsPrice', this.deleteSupplierGoodsPrice);
		app.get('/supplier/getPurchaseHeader', this.getPurchaseHeader);
		app.get('/supplier/getPurchaseDetail', this.getPurchaseDetail);	
		app.post('/supplier/addPurchaseHeader', this.addPurchaseHeader);
		app.post('/supplier/addPurchaseDetail', this.addPurchaseDetail);
		app.post('/supplier/setPurchaseStatus', this.setPurchaseStatus);
	},

	getSupplier: function (req, res, next) {
		var supplierId = req.query.supplierId;
		var status = req.query.status;
		var name = req.query.name;
		//var userName = req.session.userName;

		var inParams = [supplierId, status, name];
		Supplier.getSupplier(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifySupplier: function (req, res, next) {
		var supplierId = req.body.supplierId;
		var name= req.body.name;
		var address= req.body.address;
		var telephone= req.body.telephone;
		var chargeMobile= req.body.chargeMobile;
		var linkMobile= req.body.linkMobile;
		var inCharge= req.body.inCharge;
		var linkMan= req.body.linkMan;
		var updateUser=req.session.userName;
		var status= req.body.status;

		//var userName = req.session.userName;

		var inParams = [supplierId, name, address,telephone,chargeMobile,linkMobile,inCharge,linkMan,updateUser,status];
		Supplier.modifySupplier(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getSupplierGoodsPrice: function (req, res, next) {
		var supplierId = req.query.supplierId;
		var goodsId = req.query.goodsId;
		var currentNo = req.query.currentNo;
		//var userName = req.session.userName;
		var inParams = [supplierId, goodsId, currentNo];
		Supplier.getSupplierGoodsPrice(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	modifySupplierGoodsPrice: function (req, res, next) {
		var supplierId = req.body.supplierId;
		var goodsId = req.body.goodsId;
		var price = req.body.price;
		var userName = req.session.userName;

		var inParams = [supplierId, goodsId, price,userName];
		Supplier.modifySupplierGoodsPrice(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	deleteSupplierGoodsPrice: function (req, res, next) {
		var supplierId = req.body.supplierId;
		var goodsId = req.body.goodsId;
		var userName = req.session.userName;
		var inParams = [supplierId, goodsId, userName];
		Supplier.deleteSupplierGoodsPrice(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getPurchaseHeader: function (req, res, next) {
		var supplierId = req.query.supplierId;
		var warehouseId = req.query.warehouseId;
		var purchaseId = req.query.purchaseId;
		var status = req.query.status;
		var startDate = req.query.startDate;
		var endDate = req.query.endDate;
		var inParams = [supplierId, warehouseId, purchaseId,status,startDate,endDate];
		Supplier.getPurchaseHeader(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	getPurchaseDetail: function (req, res, next) {
		var purchaseId = req.query.purchaseId;
		var inParams = [purchaseId];
		Supplier.getPurchaseDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	addPurchaseHeader: function (req, res, next) {
		var warehouseId = req.body.warehouseId;
		var supplierId = req.body.supplierId;
		var userName = req.session.userName;
		
		var inParams = [warehouseId, supplierId, userName];
		Supplier.addPurchaseHeader(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	addPurchaseDetail: function (req, res, next) {
		var purchaseId = req.body.purchaseId;
		var userName = req.session.userName;
		var goodsId = req.body.goodsId;
		var piece = req.body.piece;
		var cases = req.body.cases;
		
		var inParams = [purchaseId, userName, goodsId,piece,cases];
		Supplier.addPurchaseDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	setPurchaseStatus: function (req, res, next) {
		var userName = req.session.userName;
		var purchaseId = req.body.purchaseId;
		var status = req.body.status;
		var cancelReason = req.body.cancelReason;
		
		var inParams = [userName, purchaseId, status,cancelReason];
		Supplier.setPurchaseStatus(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	///页面模板
	supplier: function (req, res, next) {
		res.render('supplier/SupplierSetting', { layout: null });
	},
	supplierPrice: function (req, res, next) {
		res.render('supplier/SupplierPriceSetting', { layout: null });
	},
	purchase: function (req, res, next) {
		res.render('supplier/PurchaseSetting', { layout: null });
	},
	

};
//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Warehouse = require('../models/warehouse');
var Common = require('../models/common');

// var customerViewModel = require('../viewModels/customer.js');

module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/warehouse/warehouse', this.warehouse);
		app.get('/warehouse/check', this.checkStock);
		app.get('/warehouse/transfer', this.transfer);
		app.get('/warehouse/changepackage', this.changepackage);
		
		//调用功能
		app.get('/warehouse/getWarehouse', this.getWarehouse);
		app.post('/warehouse/addWarehouse', this.addWarehouse);
		app.post('/warehouse/modifywarhouse', this.modifyWarehouse);
		
		
		app.get('/warehouse/getCheckStockDetail', this.getCheckStockDetail);
		app.post('/warehouse/addCheckStockData', this.addCheckStockData);
		app.post('/warehouse/endStock', this.endStock);
		app.post('/warehouse/addTransfer', this.addTransferHeader);
		app.post('/warehouse/addTransferDetail', this.addTransferDetail);
		app.get('/warehouse/getTransfer', this.getTransferHeader);
		app.get('/warehouse/getTransferDetail', this.getTransferDetail);
		app.post('/warehouse/checkOutTransfer', this.checkOutTransfer);
		app.post('/warehouse/receiveTransfer', this.receiveTransfer);
		app.post('/warehouse/getTransferForPrint', this.getTransferForPrint);
		app.post('/warehouse/printTransfer', this.printTransfer);
		app.get('/warehouse/GetChangePackageTransation', this.getChangePackageTransation);
		app.post('/warehouse/ChangePackage', this.changePackage);		
	},

	addWarehouse: function (req, res, next) {
		var priceListId =req.body.priceListId;
		var warehouseId = req.body.warehouseId;
		var warehouseName = req.body.name;
		var address = req.body.address;
		var userName = req.session.userName;

		var inParams = [priceListId, warehouseId, warehouseName,address,userName];
		Warehouse.addWarehouse(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getWarehouse: function (req, res, next) {
		var priceListId =req.query.priceListId;
		var warehouseId = req.query.warehouseId;
		var warehouseName = req.query.name;
		var status = req.query.status;
		priceListId=priceListId?priceListId:"-1";
		warehouseId=warehouseId?warehouseId:"0";
		warehouseName=warehouseName?warehouseName:"";
		status=status?status:-1;

		var inParams = [priceListId, warehouseId, warehouseName,status];
		Warehouse.getWarehouse(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifyWarehouse: function (req, res, next) {
		
		var priceListId =req.body.priceListId;
		var warehouseId = req.body.warehouseId;
		var warehouseName = req.body.name;
		var address = req.body.address;
		var userName = req.session.userName;
		var status = req.body.status;

		var inParams = [priceListId, warehouseId, warehouseName,address,userName,status];
		Warehouse.modifyWarehouse(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getCheckStockDetail: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var inParams = [warehouseId];
		Warehouse.getCheckStockDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	
	addCheckStockData: function (req, res, next) {
		var warehouseId= req.body.warehouseId;
		var goodsId= req.body.goodsId;
		var produceDate;
		var quantity= req.body.quantity;
		var updateMethod= req.body.updateMethod;
		var userName = req.session.userName;
		var inParams = [warehouseId,goodsId,produceDate,quantity,updateMethod,userName];
		Warehouse.addCheckStockData(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	

	
	
	endStock: function (req, res, next) {
		var warehouseId = req.body.warehouseId;
		var userName = req.session.userName;
		var method = req.body.method;
		var inParams = [warehouseId,userName, method];
		Warehouse.endStock(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addTransferHeader: function (req, res, next) {
		var fromWarehouseId = req.body.fromWarehouseId;
		var toWarehouseId= req.body.toWarehouseId;
		var userName = req.session.userName;
		var inParams = [fromWarehouseId,toWarehouseId, userName];
		Warehouse.addTransferHeader(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	addTransferDetail: function (req, res, next) {
		var transferNo = req.body.transferNo;
		var userName = req.session.userName;
		var goodsId= req.body.goodsId;
		var cases= req.body.cases;
		var piece= req.body.piece;
		var inParams = [transferNo,userName, goodsId,cases,piece];
		Warehouse.addTransferDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	getTransferHeader: function (req, res, next) {
		var fromWarehouseId = req.query.fromWarehouseId;
		var toWarehouseId= req.query.toWarehouseId;
		var transferNo = req.query.transferNo;
		var status = req.query.status;
		var startDate = req.query.startDate;
		var endDate = req.query.endDate;
		var inParams = [fromWarehouseId,toWarehouseId, transferNo,status,startDate,endDate];
		Warehouse.getTransferHeader(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getTransferDetail: function (req, res, next) {
		var transferNo = req.query.transferNo;
		var inParams = [transferNo];
		Warehouse.getTransferDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	checkOutTransfer: function (req, res, next) {
		var transferNo = req.body.transferNo;
		var userName = req.session.userName;
		var inParams = [transferNo,userName];
		Warehouse.checkOutTransfer(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	receiveTransfer: function (req, res, next) {
		var transferNo = req.body.transferNo;
		var userName = req.session.userName;
		var inParams = [transferNo,userName];
		Warehouse.receiveTransfer(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	getTransferForPrint: function (req, res, next) {
		var transferNos = req.body.transferNos;
		var inParams = [transferNos];
		Warehouse.getTransferForPrint(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	printTransfer: function (req, res, next) {
		var transferNos = req.body.transferNos;
		var userName = req.session.userName;
		var inParams = [transferNos,userName];
		Warehouse.printTransfer(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getChangePackageTransation: function (req, res, next) {
		var ruleId = req.query.ruleId;
		var warehouseId = req.query.warehouseId;
		var inParams = [ruleId,warehouseId];
		Warehouse.getChangePackageTransation(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	changePackage: function (req, res, next) {
		var ruleId = req.body.ruleId;
		var quantity= req.body.quantity;
		var direction= req.body.direction;
		var userName = req.session.userName;
		var warehouseId = req.body.warehouseId;
		var inParams = [ruleId,quantity,direction,userName,warehouseId];
		Warehouse.changePackage(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	

	///页面模板
	warehouse: function (req, res, next) {
		res.render('warehouse/WarehouseSetting', { layout: null });
	},
	checkStock: function (req, res, next) {
		res.render('warehouse/CheckSetting', { layout: null });
	},
	transfer: function (req, res, next) {
		res.render('warehouse/TransferSetting', { layout: null });
	},
	changepackage: function (req, res, next) {
		res.render('warehouse/ChangeSetting', { layout: null });
	},

};